import { useState } from "react";

import { WorldOfCheckboxDefault } from "../molecules/world-of-checkbox-default";

import '../styles/world-of-checkbox.css'
import '../styles/world-of-checkbox-default.css'

import IconWorldOfCheckboxDefaultTrue from '../../../assets/world-of-checkbox/world-of-checkbox-default-true.svg'
import IconWorldOfCheckboxDefaultFalse from '../../../assets/world-of-checkbox/world-of-checkbox-default-false.svg'

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
        <div className="WorldOfCheckbox General__Block-Outside">
            <div className="WorldOfCheckbox__Title General__Block-Title">
                World Of Checkbox
            </div>
            <div className="WorldOfCheckbox__Content General__Block-Inside">
                <div className="WorldOfCheckbox__Content__Example">
                    <WorldOfCheckboxDefault
                        outsideClass="WorldOfCheckboxDefault__One__outsideClass"
                        insideClass="WorldOfCheckboxDefault__One__insideClass"
                        centerClass="WorldOfCheckboxDefault__One__centerClass"
                        imageTrue={IconWorldOfCheckboxDefaultTrue}
                        imageFalse={IconWorldOfCheckboxDefaultFalse}
                        check={check}
                        setCheck={setCheck}
                    />
                    <div className="WorldOfCheckbox__Content__Example__Title">
                        Default
                    </div>
                </div>
                <div className="WorldOfCheckbox__Content__Example">
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
                    <div className="WorldOfCheckbox__Content__Example__Title">
                        With children
                    </div>
                </div>
                <div className="WorldOfCheckbox__Content__Example">
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
                    <div className="WorldOfCheckbox__Content__Example__Title">
                        With children and children className and childrenChangeCheck
                    </div>
                </div>
                <div className="WorldOfCheckbox__Content__Example">
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
                    <div className="WorldOfCheckbox__Content__Example__Title">
                        With children and children className and childrenChangeCheck and updateCheck
                    </div>
                </div>
            </div>
        </div>
    );
};
