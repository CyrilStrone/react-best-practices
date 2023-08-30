import { useEffect, useState } from "react";

export interface IWorldOfCheckboxDefault {
    outsideClass?: string
    insideClass?: string
    imageClass?: string
    noImageClass?: string

    image: string
    defaultImage?: boolean

    check: boolean
    setCheck?: React.Dispatch<React.SetStateAction<boolean>>
    updateCheck?: (check: boolean) => void
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
        <div className={params.outsideClass} onClick={changeCheck}>
            <div className={params.insideClass}>
                {params.image ?
                    <img src={params.image} className={params.imageClass} alt="Icon" />
                    :
                    <div className={params.noImageClass} />
                }
            </div>
        </div>
    );
};
