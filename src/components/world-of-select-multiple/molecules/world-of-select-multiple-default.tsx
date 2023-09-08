import { useState } from "react"
import styled from "styled-components"

type IWorldOfSelectMultipleDefaultIconSearch = {
    $iconSearch?: string
    $iconSearchHover?: string
    $iconSearchActive?: string
}
const IconSearch = styled.div<IWorldOfSelectMultipleDefaultIconSearch>`
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

type IWorldOfSelectMultipleDefaultIconClear = {
    $iconClear?: string
    $iconClearHover?: string
    $iconClearActive?: string
}
const IconClear = styled.div<IWorldOfSelectMultipleDefaultIconClear>`
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

type IWorldOfSelectMultipleDefault = {
    className?: string
    placeholder: string //Filter Name.

    iconSearch?: string
    iconSearchHover?: string
    iconSearchActive?: string

    iconClear?: string
    iconClearHover?: string
    iconClearActive?: string
    isActiveClearAlways?: boolean

    value: string | null //List of selected variants.

    updateValue?: (value: string | null) => void //Calling the update function. Called when the list of selected filters changes.
    goSearch?: (value: string | null) => void //Calling the search function. Called by clicking on the search icon.

    valueDropDownItems?: unknown //List of variants.

    labelKey: string //The name of the name key in the variants.
    valueKey: string //The name of the value key in the variants.

    choiceDropDownItems?: unknown
    setChoiceDropDownItems?: unknown
}
export const WorldOfSelectMultipleDefault = (params: IWorldOfSelectMultipleDefault) => {
    const [dropDownItems, setDropDownItems] = useState<any | null>(null); //Список вариантов.
    const [searchLine, setSearchLine] = useState<string | null>(null); //Строка поиска
    const [open, setOpen] = useState(false);

    const changeChoiceDropDownItems = (number: any) => {
        if (params.choiceDropDownItems) {
            if (params.choiceDropDownItems.includes(number)) {
                params.setChoiceDropDownItems(params.choiceDropDownItems.filter((n: any) => n !== number));
            } else {
                params.setChoiceDropDownItems([...params.choiceDropDownItems, number]);
            }
        } else {
            params.setChoiceDropDownItems([number]);
        }
    };
    const exitComponent = () => {
        setDropDownItems(null)
        setSearchLine(null)
        setOpen(false)
    }
    const cancelSearch = () => {
        setSearchLine(null)
    }
    useEffect(() => {
        if (searchLine && searchLine.length !== 0) {
            setDropDownItems(
                params.dropDownItems.filter(
                    (e: any) =>
                        e[params.labelKey].includes(searchLine) ||
                        e[params.labelKey].toLowerCase().includes(searchLine)
                )
            )
        } else {
            setDropDownItems(params.dropDownItems)
        }
    }, [searchLine])
    useEffect(() => {
        if (Array.isArray(params.dropDownItems)) setDropDownItems(params.dropDownItems)
    }, [params.dropDownItems])
    useEffect(() => {
        return () => {
            exitComponent()
        }
    }, []);


    const [isActiveClear, setIsActiveClear] = useState(false);

    const changeValue = (value: string | null) => {
        setIsActiveClear(true);
        if (params.updateValue) params.updateValue(value)
        if (params.setValue) params.setValue(value)
    }
    const goSearch = () => {
        if (params.goSearch) params.goSearch(params.value)
    }
    const handleMouseEnter = () => {
        setIsActiveClear(true);
    };
    const handleMouseLeave = () => {
        setIsActiveClear(false)
    };

    return (
        <div className={params.className}
            onFocus={handleMouseEnter}
            onBlur={handleMouseLeave}
        >
            <div className="dropdown-container">
                <div
                    className="dropdown-button"
                    onClick={() => setOpen(!open)}
                >
                    <div className="dropdown-label">
                        {params.label}
                        <span className="quantity">
                            {Array.isArray(params.choiceDropDownItems) ? params.choiceDropDownItems.length == 0 ? "" : params.choiceDropDownItems.length : ""}
                        </span>
                        <i className="icon icon-down-open"></i>
                    </div>
                </div>
                <div
                    className={
                        open
                            ? "dropdown-list dropdown-list_active"
                            : "dropdown-list"
                    }
                >
                    <div className="dropdown-search-cont">
                        <input
                            className="form-control dropdown-search"
                            type="search"
                            placeholder="Поиск..."
                            value={searchLine || ""}
                            onChange={(event: any) => setSearchLine(event.target.value)}
                        />
                        <i className="icon icon-cancel" onClick={cancelSearch}></i>
                    </div>
                    <ul>
                        {Array.isArray(dropDownItems) && dropDownItems.map((c: any, id: number) => (
                            params.list.find((listItem: any) => listItem[params.listValueKey] == c[params.valueKey]) &&
                            <li
                                key={id}
                                onChange={() => changeChoiceDropDownItems(c[params.valueKey])}
                            >
                                <label className="checkbox-wrap">
                                    <input type="checkbox" checked={Array.isArray(params.choiceDropDownItems) && params.choiceDropDownItems.includes(c[params.valueKey])} onChange={() => { }} />
                                    <span>{c[params.labelKey]}</span>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <input
                value={params.value || ""}
                onChange={(event) => changeValue(event.target.value)}
                className={
                    params.className + "__Input" +
                    `${params.value ? (" " + params.className + "__Input-Value") : ""}`
                }
                onInvalid={handleInvalid}

            />
            {
                params.iconSearch ?
                    <IconSearch
                        $iconSearch={params.iconSearch}
                        $iconSearchHover={params.iconSearchHover}
                        $iconSearchActive={params.iconSearchActive}
                        onClick={goSearch}
                        className={params.className +
                            "__IconHover" +
                            `${params.value ? (" " + params.className + "__IconHover-Value") : ""}`
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
                        onClick={() => changeValue(null)}
                        className={
                            params.className + "__IconClear" +
                            `${params.value ? (" " + params.className + "__IconClear-Value") : ""}`
                        }
                    />
                    : null
            }
        </div >
    );
};
