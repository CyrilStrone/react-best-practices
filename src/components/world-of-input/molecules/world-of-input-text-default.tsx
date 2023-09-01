import styled from "styled-components"

type IWorldOfInputTextDefault = {
    disabled?: boolean
    readonly?: boolean

    iconSearch?: string
    iconSearchHover?: string
    iconSearchActive?: string

    children?: React.ReactNode

    className?: string

    iconClear?: string
    iconClearHover?: string
    iconClearActive?: string
}

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
export const WorldOfInputTextDefault = (params: IWorldOfInputTextDefault) => {
    return (
        <div className={params.className}>
            <input
                className={params.className + "__Input"}
                disabled={params.disabled}
                readOnly={params.readonly}
                type="text"
            />
            {params.iconSearch ?
                <Icon
                    $iconSearch={params.iconSearch}
                    $iconSearchHover={params.iconSearchHover}
                    $iconSearchActive={params.iconSearchActive}
                    className={params.className + "__Icon"}
                />
                : params.children ?
                    params.children :
                    null
            }
            {
                params.iconClear ?
                    <IconClear
                        tabIndex={0}
                        className={params.className + "__IconClear"}
                        $iconClear={params.iconClear}
                        $iconClearHover={params.iconClearHover}
                        $iconClearActive={params.iconClearActive}
                    />
                    : null
            }
        </div>
    );
};
