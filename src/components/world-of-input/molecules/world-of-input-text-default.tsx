import { useEffect, useState } from "react"


type IWorldOfInputTextDefault = {
    disabled?: boolean
    readonly?: boolean
    isNumber?: boolean
    children?: React.ReactNode
    pattern?: string

    isValid?: boolean | null
    isAlwaysValid?: boolean

    className?: string

    iconSearch?: React.ReactNode
    iconClear?: React.ReactNode
    iconValid?: React.ReactNode
    iconInValid?: React.ReactNode

    isActiveClearAlways?: boolean

    validMessage?: string
    inValidMessage?: string

    value: string | null
    setValue?: React.Dispatch<React.SetStateAction<string | null>>
    updateValue?: (value: string | null) => void
    goSearch?: (value: string | null) => void
    checkValid?: (value: string | null) => boolean

    placeholder?: string

    minLength?: number
}
export const WorldOfInputTextDefault = (params: IWorldOfInputTextDefault) => {
    const [isActiveClear, setIsActiveClear] = useState(false);
    const [mouseIsDown, setMouseIsDown] = useState(false);
    const [isValid, setIsValid] = useState<boolean | null>(null);

    function changeValue(value: string | null) {
        if (params.updateValue) params.updateValue(value)
        if (params.setValue) params.setValue(value)
    }
    function goSearch() {
        if (params.goSearch) params.goSearch(params.value)
    }
    function handleOnFocus() {
        setIsActiveClear(true);
    }
    function handleOnBlur() {
        if (!mouseIsDown) setIsActiveClear(false)
    }
    function checkValid() {
        if (params.isAlwaysValid || (params.isValid !== null && params.isValid !== undefined)) {
            const pattern = params.pattern;
            if (!params.checkValid && pattern) {
                const regex = new RegExp(pattern);
                if (params.value) {
                    if (regex.test(params.value)) {
                        setIsValid(true);
                    } else {
                        setIsValid(false);

                    }
                }
            } else if (params.checkValid) {
                if (params.value) {
                    if (params.checkValid(params.value)) {
                        setIsValid(true);
                    } else {
                        setIsValid(false);
                    }
                }
            } else if (params.minLength) {
                if (params.value !== null && params.value !== "") {
                    if (params.value.length >= params.minLength) {
                        setIsValid(true);
                    } else {
                        setIsValid(false);
                    }
                }
            }
        }
    }
    useEffect(() => {
        if (params.isValid !== null || params.isAlwaysValid) {
            checkValid()
        } else {
            setIsValid(null);
        }
    }, [params.isValid, params.value])
    return (
        <div className={params.className}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onMouseDown={() => setMouseIsDown(true)}
            onMouseUp={() => setMouseIsDown(false)}
        >
            <input
                value={params.value || ""}
                placeholder={params.placeholder}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => { changeValue(event.target.value); }}
                className={
                    params.className + "__Input" +
                    `${params.value ? (" " + params.className + "__Input-Value") : ""}` +
                    `${isValid !== null && isValid ? (" " + params.className + "__Input-Valid") : ""}` +
                    `${isValid !== null && !isValid ? (" " + params.className + "__Input-InValid") : ""}`
                }
                disabled={params.disabled}
                readOnly={params.readonly}
                type={params.isNumber ? "number" : "text"}
            />
            {
                (params.isValid !== null || params.isAlwaysValid) && isValid !== null ?
                    <div
                        className={
                            params.className + "__Valid" +
                            `${params.value ? (" " + params.className + "__Valid-Value") : ""}` +
                            `${isValid !== null && isValid ? (" " + params.className + "__Valid-Valid") : ""}` +
                            `${isValid !== null && !isValid ? (" " + params.className + "__Valid-InValid") : ""}`
                        }
                    >
                        {isValid !== null && isValid ?
                            params.validMessage :
                            params.inValidMessage
                        }
                    </div>
                    : null
            }
            {params.iconSearch ?
                <div
                    onClick={goSearch}
                    className={params.className +
                        "__IconSearch" +
                        `${params.value ? (" " + params.className + "__IconSearch-Value") : ""}` +
                        `${isValid !== null && isValid ? (" " + params.className + "__IconSearch-Valid") : ""}` +
                        `${isValid !== null && !isValid ? (" " + params.className + "__IconSearch-InValid") : ""}`
                    }
                >
                    {params.iconSearch}
                </div>
                : null
            }
            {isActiveClear && params.value && params.iconClear || params.isActiveClearAlways && params.value ?
                <div
                    onClick={() => { changeValue(null); handleOnBlur(); }}
                    className={
                        params.className + "__IconClear" +
                        `${params.value ? (" " + params.className + "__IconClear-Value") : ""}` +
                        `${isValid !== null && isValid ? (" " + params.className + "__IconClear-Valid") : ""}` +
                        `${isValid !== null && !isValid ? (" " + params.className + "__IconClear-InValid") : ""}`
                    }
                >
                    {params.iconClear}
                </div>
                : null
            }
            {(params.isValid !== null && params.isValid !== undefined) && isValid ?
                <div
                    onClick={() => { changeValue(null); handleOnBlur(); }}
                    className={
                        params.className + "__IconValid" +
                        `${params.value ? (" " + params.className + "__IconValid-Value") : ""}` +
                        `${isValid !== null && isValid ? (" " + params.className + "__IconValid-Valid") : ""}` +
                        `${isValid !== null && !isValid ? (" " + params.className + "__IconValid-InValid") : ""}`
                    }
                >
                    {params.iconValid}
                </div> :
                <div
                    onClick={() => { changeValue(null); handleOnBlur(); }}
                    className={
                        params.className + "__IconInValid" +
                        `${params.value ? (" " + params.className + "__IconInValid-Value") : ""}` +
                        `${isValid !== null && isValid ? (" " + params.className + "__IconInValid-Valid") : ""}` +
                        `${isValid !== null && !isValid ? (" " + params.className + "__IconInValid-InValid") : ""}`
                    }
                >
                    {params.iconInValid}
                </div>
            }
            {
                <div className={
                    params.className + "__Children" +
                    `${params.value ? (" " + params.className + "__Children-Value") : ""}` +
                    `${isValid !== null && isValid ? (" " + params.className + "__Children-Valid") : ""}` +
                    `${isValid !== null && !isValid ? (" " + params.className + "__Children-InValid") : ""}`
                }>
                    {
                        params.children ?
                            params.children :
                            null
                    }
                </div>
            }
        </div>
    );
};
