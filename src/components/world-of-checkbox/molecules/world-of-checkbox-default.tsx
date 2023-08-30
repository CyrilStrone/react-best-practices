import { useEffect, useState } from "react";

type IWorldOfCheckboxDefault = {
    outsideClass?: string
    insideClass?: string
    generalClass?: string

    centerClass?: string
    centerClassTrue?: string
    centerClassFalse?: string

    childrenClass?: string
    childrenClassTrue?: string
    childrenClassFalse?: string

    imageTrue?: string
    imageFalse?: string
    imageDefault?: string

    symbolTrue?: string
    symbolFalse?: string
    symbolDefault?: string

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
        <div className={params.generalClass}>
            <div className={params.outsideClass} onClick={changeCheck}>
                <div className={params.insideClass}>
                    {
                        params.imageDefault || params.imageTrue || params.imageFalse ?
                            <>
                                {
                                    <div
                                        style={{ backgroundImage: `url(${check ? params.imageTrue || params.imageDefault : params.imageFalse || params.imageDefault})` }}
                                        className={check ? params.centerClass + " " + params.centerClassTrue : params.centerClass + " " + params.centerClassFalse}
                                    />
                                }
                            </>
                            :
                            params.symbolDefault || params.symbolTrue || params.symbolFalse ?
                                <>
                                    {
                                        check ?
                                            <div className={params.centerClass + " " + params.centerClassTrue} >{params.symbolTrue || params.symbolDefault || params.imageFalse}</div>
                                            :
                                            <div className={params.centerClass + " " + params.centerClassFalse} >{params.symbolFalse || params.symbolDefault || params.symbolTrue}</div>
                                    }
                                </>
                                :
                                <>
                                    <div className={check ? params.centerClass + " " + params.centerClassTrue : params.centerClass + " " + params.centerClassFalse} />
                                </>
                    }
                </div>
            </div>
            {
                params.children ?
                    <div className={check ? params.childrenClass + " " + params.childrenClassTrue : params.childrenClass + " " + params.childrenClassFalse} >
                        {params.children}
                    </div>
                    : null
            }
        </div>
    );
};
