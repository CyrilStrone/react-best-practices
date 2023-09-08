import { useState } from "react";

import { WorldOfCheckboxDefault } from "../molecules/world-of-checkbox-default";

import '../styles/world-of-checkbox.css'
import '../styles/world-of-checkbox-default.scss'

import { WorldOfNameExample } from "../../../ui/world-of-name/molecules/world-of-name-example";

export const WorldOfCheckbox = () => {
    const [check, setCheck] = useState<boolean>(false)
    const [children, setChildren] = useState<string>("Hello")
    const updateCheck = (check: boolean) => {
        if (check) {
            setChildren("Hello")
        } else {
            setChildren("Goodby")
        }
    }
    const ICON_CHECKBOX = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.90039 19.2676C3.69531 19.1152 3.56934 18.9102 3.52246 18.6523C3.48145 18.4004 3.51953 18.1016 3.63672 17.7559L5.44727 12.3857L0.833008 9.07227C0.53418 8.86133 0.326172 8.6416 0.208984 8.41309C0.0917969 8.17871 0.0742188 7.93848 0.15625 7.69238C0.238281 7.45215 0.393555 7.27344 0.62207 7.15625C0.850586 7.0332 1.14941 6.97461 1.51855 6.98047L7.16992 7.01562L8.89258 1.61914C9.00391 1.26758 9.15039 1.00098 9.33203 0.819336C9.51953 0.631836 9.73926 0.538086 9.99121 0.538086C10.249 0.538086 10.4688 0.631836 10.6504 0.819336C10.8379 1.00098 10.9873 1.26758 11.0986 1.61914L12.8213 7.01562L18.4727 6.98047C18.8418 6.97461 19.1406 7.0332 19.3691 7.15625C19.5977 7.27344 19.7529 7.45215 19.835 7.69238C19.917 7.93848 19.8994 8.17871 19.7822 8.41309C19.665 8.6416 19.457 8.86133 19.1582 9.07227L14.5439 12.3857L16.3545 17.7559C16.4717 18.1016 16.5068 18.4004 16.46 18.6523C16.4189 18.9102 16.2959 19.1152 16.0908 19.2676C15.8857 19.4316 15.6543 19.4902 15.3965 19.4434C15.1387 19.3965 14.8633 19.2676 14.5703 19.0566L9.99121 15.6904L5.4209 19.0566C5.12793 19.2676 4.85254 19.3965 4.59473 19.4434C4.33691 19.4902 4.10547 19.4316 3.90039 19.2676Z" />
    </svg>
        ;
    return (
        <>
            <WorldOfNameExample title={""}>
                <WorldOfCheckboxDefault
                    className="WorldOfCheckboxDefault__One"
                    icon={ICON_CHECKBOX}
                    check={check}
                    setCheck={setCheck}
                />
            </WorldOfNameExample>
            <WorldOfNameExample title={"Children"}>
                <WorldOfCheckboxDefault
                    className="WorldOfCheckboxDefault__One"
                    icon={ICON_CHECKBOX}
                    check={check}
                    setCheck={setCheck}
                >
                    {children}
                </WorldOfCheckboxDefault>
            </WorldOfNameExample>
            <WorldOfNameExample title={"Children, children className, childrenChangeCheck"}>
                <WorldOfCheckboxDefault
                    className="WorldOfCheckboxDefault__One"
                    icon={ICON_CHECKBOX}
                    check={check}
                    setCheck={setCheck}
                    childrenChangeCheck
                >
                    {children}
                </WorldOfCheckboxDefault>
            </WorldOfNameExample>
            <WorldOfNameExample title={"Children, children className, childrenChangeCheck, updateCheck"}>
                <WorldOfCheckboxDefault
                    className="WorldOfCheckboxDefault__One"
                    icon={ICON_CHECKBOX}
                    check={check}
                    setCheck={setCheck}
                    childrenChangeCheck
                    updateCheck={updateCheck}
                >
                    {children}
                </WorldOfCheckboxDefault>
            </WorldOfNameExample>
        </>
    );
};
