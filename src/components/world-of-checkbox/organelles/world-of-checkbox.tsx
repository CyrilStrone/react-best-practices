import { useState } from "react";

import { WorldOfCheckboxDefault } from "../molecules/world-of-checkbox-default";

import '../styles/world-of-checkbox.css'
import '../styles/world-of-checkbox-default.css'

import IconWorldOfCheckboxDefaultTrue from '../../../assets/world-of-checkbox/world-of-checkbox-default-true.svg'
import IconWorldOfCheckboxDefaultFalse from '../../../assets/world-of-checkbox/world-of-checkbox-default-false.svg'

export const WorldOfCheckbox = () => {
    const [checkOne, setCheckOne] = useState<boolean>(false)
    return (
        <div className="WorldOfCheckbox General__Block-Outside">
            <div className="WorldOfCheckbox__Title General__Block-Title">
                World Of Checkbox
            </div>
            <div className="WorldOfCheckbox__Content General__Block-Inside">
                <WorldOfCheckboxDefault
                    outsideClass="WorldOfCheckboxDefault__One__outsideClass"
                    insideClass="WorldOfCheckboxDefault__One__insideClass"
                    centerClass="WorldOfCheckboxDefault__One__centerClass"
                    imageTrue={IconWorldOfCheckboxDefaultTrue}
                    imageFalse={IconWorldOfCheckboxDefaultFalse}
                    check={checkOne}
                    setCheck={setCheckOne}
                />
                <WorldOfCheckboxDefault
                    generalClass="WorldOfCheckboxDefault__One__generalClass"
                    outsideClass="WorldOfCheckboxDefault__One__outsideClass"
                    insideClass="WorldOfCheckboxDefault__One__insideClass"
                    centerClass="WorldOfCheckboxDefault__One__centerClass"
                    imageTrue={IconWorldOfCheckboxDefaultTrue}
                    imageFalse={IconWorldOfCheckboxDefaultFalse}
                    check={checkOne}
                    setCheck={setCheckOne}
                >
                    Hello
                </WorldOfCheckboxDefault>
            </div>
        </div>
    );
};
