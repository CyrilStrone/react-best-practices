import { useState } from "react"
import styled from "styled-components"

type IWorldOfInputTextDefaultIconSearch = {
    $iconSearch?: string
    $iconSearchHover?: string
    $iconSearchActive?: string
}
const IconSearch = styled.div<IWorldOfInputTextDefaultIconSearch>`
    background-image: url(${props => props.$iconSearch});
    ${props => props.$iconSearchHover && `
        &:hover {
            background-image: url(${props.$iconSearchHover});
        }
    `
    }
    ${props => props.$iconSearchActive && `
    &:active {
        background-image: url(${props.$iconSearchActive});
        transition: background 0s ease;
    }
`
    }
`;

type IWorldOfInputTextDefaultIconClear = {
    $iconClear?: string
    $iconClearHover?: string
    $iconClearActive?: string
}
const IconClear = styled.div<IWorldOfInputTextDefaultIconClear>`
    background-image: url(${props => props.$iconClear});
    ${props => props.$iconClearHover && `
        &:hover {
            background-image: url(${props.$iconClearHover});
        }
    `
    }
    ${props => props.$iconClearActive && `
        &:active {
            background-image: url(${props.$iconClearActive});
            transition: background 0s ease;
        }
    `
    }
`;

type IWorldOfInputTextDefaultIconValid = {
    $iconValid?: string
    $iconValidHover?: string
    $iconValidActive?: string
}
const IconValid = styled.div<IWorldOfInputTextDefaultIconValid>`
    background-image: url(${props => props.$iconValid});
    ${props => props.$iconValidHover && `
        &:hover {
            background-image: url(${props.$iconValidHover});
        }
    `
    }
    ${props => props.$iconValidActive && `
        &:active {
            background-image: url(${props.$iconValidActive});
            transition: background 0s ease;
        }
    `
    }
`;

type IWorldOfInputTextDefaultIconInValid = {
    $iconInValid?: string
    $iconInValidHover?: string
    $iconInValidActive?: string
}
const IconInValid = styled.div<IWorldOfInputTextDefaultIconInValid>`
    background-image: url(${props => props.$iconInValid});
    ${props => props.$iconInValidHover && `
        &:hover {
            background-image: url(${props.$iconInValidHover});
        }
    `
    }
    ${props => props.$iconInValidActive && `
        &:active {
            background-image: url(${props.$iconInValidActive});
            transition: background 0s ease;
        }
    `
    }
`;

type IWorldOfInputTextDefault = {
    disabled?: boolean
    readonly?: boolean
    isNumber?: boolean
    isRequired?: boolean
    isValid?: boolean
    children?: React.ReactNode

    className?: string

    iconSearch?: string
    iconSearchHover?: string
    iconSearchActive?: string

    iconClear?: string
    iconClearHover?: string
    iconClearActive?: string
    isActiveClearAlways?: boolean

    iconValid?: string
    iconValidHover?: string
    iconValidActive?: string

    iconInValid?: string
    iconInValidHover?: string
    iconInValidActive?: string

    validMessage?: string
    inValidMessage?: string

    value: string | null
    setValue?: React.Dispatch<React.SetStateAction<string | null>>
    updateValue?: (value: string | null) => void
    goSearch?: (value: string | null) => void
}
export const WorldOfInputTextDefault = (params: IWorldOfInputTextDefault) => {
    const [isActiveClear, setIsActiveClear] = useState(false);
    const [mouseIsDown, setMouseIsDown] = useState(false);
    const [isValid, setIsValid] = useState<boolean | null>(null);

    const changeValue = (value: string | null) => {
        if (params.updateValue) params.updateValue(value)
        if (params.setValue) params.setValue(value)
    }
    const goSearch = () => {
        if (params.goSearch) params.goSearch(params.value)
    }
    const handleFocus = () => {
        setIsActiveClear(true);
    };
    const handleBlur = () => {
        if (!mouseIsDown) {
            setIsActiveClear(false)
        }
    };
    const handleInValid = () => {
        if (isValid == null) {
            setIsValid(true);
        } else {
            setIsValid(!isValid);
        }
    };
    document.addEventListener('mouseup', ()=>{setMouseIsDown(false);});
    return (
        <div className={params.className}>
            <input
                value={params.value || ""}
                onChange={(event) => changeValue(event.target.value)}
                className={
                    params.className + "__Input" +
                    `${params.value ? (" " + params.className + "__Input-Value") : ""}`
                }
                disabled={params.disabled}
                readOnly={params.readonly}
                required={params.isRequired}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onInvalid={handleInValid}
                onMouseDown={() => setMouseIsDown(true)}
                onMouseUp={() => setMouseIsDown(false)}
                type={params.isNumber ? "number" : "text"}
            />
            {params.iconSearch ?
                <IconSearch
                    $iconSearch={params.iconSearch}
                    $iconSearchHover={params.iconSearchHover}
                    $iconSearchActive={params.iconSearchActive}
                    onMouseDown={() => setMouseIsDown(true)}
                    onMouseUp={() => setMouseIsDown(false)}
                    onClick={goSearch}
                    className={params.className +
                        "__IconHover" +
                        `${params.value ? (" " + params.className + "__IconHover__Input-Value") : ""}`
                    }
                />
                : null
            }
            {
                isActiveClear && params.value && params.iconClear || params.isActiveClearAlways && params.value ?
                    <IconClear
                        $iconClear={params.iconClear}
                        $iconClearHover={params.iconClearHover}
                        $iconClearActive={params.iconClearActive}
                        onMouseDown={() => setMouseIsDown(true)}
                        onMouseUp={() => setMouseIsDown(false)}
                        onClick={() => changeValue(null)}
                        className={
                            params.className + "__IconClear" +
                            `${params.value ? (" " + params.className + "__IconClear__Input-Value") : ""}`
                        }
                    />
                    : null
            }
            {
                params.isValid ?
                    <IconValid />
                    :
                    null
            }
            {
                params.isValid ?
                    <IconInValid />
                    :
                    null
            }
            {
                <div className={
                    params.className + "__Children" +
                    `${params.value ? (" " + params.className + "__Children__Input-Value") : ""}`
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
