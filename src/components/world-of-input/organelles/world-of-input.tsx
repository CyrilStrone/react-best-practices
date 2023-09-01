import { WorldOfNameExample } from '../../../ui/world-of-name/molecules/world-of-name-example';
import { WorldOfInputTextDefault } from '../molecules/world-of-input-text-default';

import '../styles/world-of-input.css'
import '../styles/world-of-input-text-default.css'

import IconSearch from '../../../assets/world-of-input/search.svg'
import IconSearchHover from '../../../assets/world-of-input/search-hover.svg'
import IconSearchActive from '../../../assets/world-of-input/search-active.svg'

import IconClear from '../../../assets/world-of-input/clear.svg'
import iconClearHover from '../../../assets/world-of-input/clear-hover.svg'
import iconClearActive from '../../../assets/world-of-input/clear-active.svg'

export const WorldOfInput = () => {
    return (
        <>
            <WorldOfNameExample title={""}>
                <WorldOfInputTextDefault
                    className="WorldOfInputTextDefault__One"
                />
            </WorldOfNameExample>
            <WorldOfNameExample title={"Icon"}>
                <WorldOfInputTextDefault
                    className="WorldOfInputTextDefault__One"
                    iconSearch={IconSearch}
                />
            </WorldOfNameExample>
            <WorldOfNameExample title={"Icon, Hover Icon"}>
                <WorldOfInputTextDefault
                    className="WorldOfInputTextDefault__One"
                    iconSearch={IconSearch}
                    iconSearchHover={IconSearchHover}
                />
            </WorldOfNameExample>
            <WorldOfNameExample title={"SVG Icon"}>
                <WorldOfInputTextDefault
                    className="WorldOfInputTextDefault__One"
                >
                    <svg className="WorldOfInputTextDefault__One__SVGIcon"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5.42 10.62C5.42 9.9 5.55 9.23 5.82 8.6C6.09 7.97 6.46 7.42 6.94 6.94C7.42 6.46 7.97 6.09 8.6 5.82C9.23 5.55 9.9 5.42 10.62 5.42C11.34 5.42 12.01 5.55 12.64 5.82C13.27 6.09 13.82 6.46 14.3 6.94C14.78 7.42 15.15 7.97 15.42 8.6C15.69 9.23 15.83 9.9 15.83 10.62C15.83 11.34 15.69 12.01 15.42 12.64C15.15 13.27 14.78 13.82 14.3 14.3C13.82 14.78 13.27 15.15 12.64 15.42C12.01 15.69 11.34 15.83 10.62 15.83C9.9 15.83 9.23 15.69 8.6 15.42C7.97 15.15 7.42 14.78 6.94 14.3C6.46 13.82 6.09 13.27 5.82 12.64C5.55 12.01 5.42 11.34 5.42 10.62ZM4 10.62C4 11.53 4.17 12.39 4.51 13.19C4.85 13.99 5.33 14.69 5.94 15.3C6.55 15.91 7.25 16.38 8.05 16.73C8.85 17.07 9.71 17.24 10.62 17.24C11.34 17.24 12.03 17.13 12.68 16.91C13.33 16.69 13.93 16.38 14.47 16L18.55 20.09C18.65 20.18 18.76 20.25 18.88 20.3C19 20.35 19.12 20.37 19.26 20.37C19.45 20.37 19.61 20.33 19.76 20.24C19.9 20.15 20.02 20.04 20.1 19.89C20.18 19.74 20.22 19.57 20.22 19.39C20.22 19.26 20.2 19.13 20.15 19.02C20.1 18.9 20.04 18.8 19.95 18.71L15.89 14.63C16.32 14.08 16.65 13.46 16.89 12.78C17.13 12.1 17.25 11.38 17.25 10.62C17.25 9.71 17.08 8.85 16.74 8.05C16.4 7.25 15.92 6.55 15.31 5.94C14.7 5.33 14 4.86 13.2 4.51C12.4 4.17 11.54 4 10.63 4C9.72 4 8.86 4.17 8.06 4.51C7.26 4.85 6.56 5.33 5.95 5.94C5.34 6.55 4.87 7.25 4.52 8.05C4.18 8.85 4.01 9.71 4.01 10.62H4Z" />
                    </svg>
                </WorldOfInputTextDefault>
            </WorldOfNameExample>
            <WorldOfNameExample title={"Icon, Hover Icon, Clear Icon, Hover Clear Icon"}>
                <WorldOfInputTextDefault
                    className="WorldOfInputTextDefault__One"
                    iconSearch={IconSearch}
                    iconSearchHover={IconSearchHover}
                    iconClear={IconClear}
                    iconClearHover={iconClearHover}
                />
            </WorldOfNameExample>
            <WorldOfNameExample title={"Icon, Active Icon, Clear Icon, Hover Clear Icon, Active Clear Icon"}>
                <WorldOfInputTextDefault
                    className="WorldOfInputTextDefault__One"
                    iconSearch={IconSearch}
                    iconSearchHover={IconSearchHover}
                    iconClear={IconClear}
                    iconClearHover={iconClearHover}
                    iconClearActive={iconClearActive}
                    iconSearchActive={IconSearchActive}
                />
            </WorldOfNameExample>
        </>
    );
};
