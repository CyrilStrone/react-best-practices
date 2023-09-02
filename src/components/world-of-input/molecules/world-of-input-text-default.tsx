import { useState } from "react"
import styled from "styled-components"

type IWorldOfInputTextDefaultIcon = {
    $iconSearch?: string
    $iconSearchHover?: string
    $iconSearchActive?: string
}
const Icon = styled.div<IWorldOfInputTextDefaultIcon>`
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

type IWorldOfInputTextDefault = {
    disabled?: boolean
    readonly?: boolean

    children?: React.ReactNode

    className?: string

    iconSearch?: string
    iconSearchHover?: string
    iconSearchActive?: string

    iconClear?: string
    iconClearHover?: string
    iconClearActive?: string
    isActiveClearAlways?: boolean
    
    value: string | null
    setValue?: React.Dispatch<React.SetStateAction<string | null>>
    updateValue?: (value: string | null) => void
    goSearch?: (value: string | null) => void
}
export const WorldOfInputTextDefault = (params: IWorldOfInputTextDefault) => {
    const [isActiveClear, setIsActiveClear] = useState(false);
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
        setTimeout(()=>setIsActiveClear(false),100)
    };
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
                onFocus={handleFocus}
                onBlur={handleBlur}
                type="text"
            />
            {params.iconSearch ?
                <Icon
                    $iconSearch={params.iconSearch}
                    $iconSearchHover={params.iconSearchHover}
                    $iconSearchActive={params.iconSearchActive}
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
                        tabIndex={0}
                        className={
                            params.className + "__IconClear" +
                            `${params.value ? (" " + params.className + "__IconClear__Input-Value") : ""}`
                        }
                        $iconClear={params.iconClear}
                        $iconClearHover={params.iconClearHover}
                        $iconClearActive={params.iconClearActive}
                        onClick={() => changeValue(null)}
                    />
                    : null
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
