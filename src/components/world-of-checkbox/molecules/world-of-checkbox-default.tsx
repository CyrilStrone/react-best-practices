import { useEffect, useState } from "react";

type IWorldOfCheckboxDefault = {
    className?: string

    childrenChangeCheck?: boolean

    icon?: React.ReactNode

    check: boolean
    setCheck?: React.Dispatch<React.SetStateAction<boolean>>
    updateCheck?: (check: boolean) => void

    children?: React.ReactNode
}
export const WorldOfCheckboxDefault = (params: IWorldOfCheckboxDefault) => {
    const [check, setCheck] = useState<boolean | null>(null)
    const changeCheck = () => {
        const localCheck = !check;
        setCheck(localCheck)
        if (params.updateCheck) params.updateCheck(localCheck)
        if (params.setCheck) params.setCheck(localCheck)
    }
    useEffect(() => {
        setCheck(params.check)
    }, [params.check])
    return (
        <div className={
            params.className +
            `${check ? (" " + params.className + "-True") : (" " + params.className + "-False")}`
        }>
            <div className={
                params.className + "__Outside" +
                `${check ? (" " + params.className + "__Outside-True") : (" " + params.className + "__Outside-False")}`
            }
                onClick={changeCheck}>
                <div className={
                    params.className + "__Inside" +
                    `${check ? (" " + params.className + "__Inside-True") : (" " + params.className + "__Inside-False")}`
                }>
                    <div className={
                        params.className + "__Icon" +
                        `${check ? (" " + params.className + "__Icon-True") : (" " + params.className + "__Icon-False")}`
                    }
                    >{params.icon}</div>
                </div>
            </div>
            {
                params.children ?
                    <div className={
                        params.className + "__Children" +
                        `${check ? (" " + params.className + "__Children-True") : (" " + params.className + "__Children-False")}`

                    }
                        onClick={() => params.childrenChangeCheck && changeCheck()}>
                        {params.children}
                    </div>
                    : null
            }
        </div>
    );
};
