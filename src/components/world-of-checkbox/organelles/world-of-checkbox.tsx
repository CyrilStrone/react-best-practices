import { useState } from "react";

import { WorldOfCheckboxDefault } from "../molecules/world-of-checkbox-default";

import '../styles/world-of-checkbox.css'
import '../styles/world-of-checkbox-default.css'

import IconWorldOfCheckboxDefaultTrue from '../../../assets/world-of-checkbox/world-of-checkbox-default-true.svg'
import IconWorldOfCheckboxDefaultFalse from '../../../assets/world-of-checkbox/world-of-checkbox-default-false.svg'
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
    return (
        <>
            <WorldOfNameExample title={""}>
                <WorldOfCheckboxDefault
                    outsideClass="WorldOfCheckboxDefault__One__outsideClass"
                    insideClass="WorldOfCheckboxDefault__One__insideClass"
                    centerClass="WorldOfCheckboxDefault__One__centerClass"
                    imageTrue={IconWorldOfCheckboxDefaultTrue}
                    imageFalse={IconWorldOfCheckboxDefaultFalse}
                    check={check}
                    setCheck={setCheck}
                />
            </WorldOfNameExample>
            <WorldOfNameExample title={"Children"}>
                <WorldOfCheckboxDefault
                    generalClass="WorldOfCheckboxDefault__One__generalClass"
                    outsideClass="WorldOfCheckboxDefault__One__outsideClass"
                    insideClass="WorldOfCheckboxDefault__One__insideClass"
                    centerClass="WorldOfCheckboxDefault__One__centerClass"
                    imageTrue={IconWorldOfCheckboxDefaultTrue}
                    imageFalse={IconWorldOfCheckboxDefaultFalse}
                    check={check}
                    setCheck={setCheck}
                >
                    {children}
                </WorldOfCheckboxDefault>
            </WorldOfNameExample>
            <WorldOfNameExample title={"Children, children className, childrenChangeCheck"}>
                <WorldOfCheckboxDefault
                    generalClass="WorldOfCheckboxDefault__One__generalClass"
                    outsideClass="WorldOfCheckboxDefault__One__outsideClass"
                    insideClass="WorldOfCheckboxDefault__One__insideClass"
                    centerClass="WorldOfCheckboxDefault__One__centerClass"
                    childrenClass="WorldOfCheckboxDefault__One__childrenClass"
                    childrenClassTrue="WorldOfCheckboxDefault__One__childrenClassTrue"
                    childrenClassFalse="WorldOfCheckboxDefault__One__childrenClassFalse"
                    childrenChangeCheck
                    imageTrue={IconWorldOfCheckboxDefaultTrue}
                    imageFalse={IconWorldOfCheckboxDefaultFalse}
                    check={check}
                    setCheck={setCheck}
                >
                    {children}
                </WorldOfCheckboxDefault>
            </WorldOfNameExample>
            <WorldOfNameExample title={"Children, children className, childrenChangeCheck, updateCheck"}>
                <WorldOfCheckboxDefault
                    generalClass="WorldOfCheckboxDefault__One__generalClass"
                    outsideClass="WorldOfCheckboxDefault__One__outsideClass"
                    insideClass="WorldOfCheckboxDefault__One__insideClass"
                    centerClass="WorldOfCheckboxDefault__One__centerClass"
                    childrenClass="WorldOfCheckboxDefault__One__childrenClass"
                    childrenClassTrue="WorldOfCheckboxDefault__One__childrenClassTrue"
                    childrenClassFalse="WorldOfCheckboxDefault__One__childrenClassFalse"
                    childrenChangeCheck
                    imageTrue={IconWorldOfCheckboxDefaultTrue}
                    imageFalse={IconWorldOfCheckboxDefaultFalse}
                    check={check}
                    setCheck={setCheck}
                    updateCheck={updateCheck}
                >
                    {children}
                </WorldOfCheckboxDefault>
            </WorldOfNameExample>
        </>
    );
};
