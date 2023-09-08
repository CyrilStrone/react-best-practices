import { WorldOfNameExample } from '../../../ui/world-of-name/molecules/world-of-name-example';
import { WorldOfInputTextDefault } from '../molecules/world-of-input-text-default';

import '../styles/world-of-input.css'
import '../styles/world-of-input-text-default.scss'


import { useState } from 'react';
import { WorldOfForm } from '../../../ui/world-of-form/organelles/world-of-form';

export const WorldOfInput = () => {
    const $NAME_OF_CLASS_NAME = "WorldOfInputTextDefault__One";
    const [value, setValue] = useState<string | null>(null)
    const [check, setCheck] = useState<boolean | null>(null)
    const changeCheck = () => {
        if (check == null) {
            setCheck(true)
        } else {
            setCheck(!check)
        }
    }
    const updateValue = (localValue: string | null) => {
        setValue(localValue)
    }
    const goSearch = (localValue: string | null) => {
        setValue(localValue)
        setValue("Search")
    }
    const ICON_SEARCH = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5.42 10.62C5.42 9.9 5.55 9.23 5.82 8.6C6.09 7.97 6.46 7.42 6.94 6.94C7.42 6.46 7.97 6.09 8.6 5.82C9.23 5.55 9.9 5.42 10.62 5.42C11.34 5.42 12.01 5.55 12.64 5.82C13.27 6.09 13.82 6.46 14.3 6.94C14.78 7.42 15.15 7.97 15.42 8.6C15.69 9.23 15.83 9.9 15.83 10.62C15.83 11.34 15.69 12.01 15.42 12.64C15.15 13.27 14.78 13.82 14.3 14.3C13.82 14.78 13.27 15.15 12.64 15.42C12.01 15.69 11.34 15.83 10.62 15.83C9.9 15.83 9.23 15.69 8.6 15.42C7.97 15.15 7.42 14.78 6.94 14.3C6.46 13.82 6.09 13.27 5.82 12.64C5.55 12.01 5.42 11.34 5.42 10.62ZM4 10.62C4 11.53 4.17 12.39 4.51 13.19C4.85 13.99 5.33 14.69 5.94 15.3C6.55 15.91 7.25 16.38 8.05 16.73C8.85 17.07 9.71 17.24 10.62 17.24C11.34 17.24 12.03 17.13 12.68 16.91C13.33 16.69 13.93 16.38 14.47 16L18.55 20.09C18.65 20.18 18.76 20.25 18.88 20.3C19 20.35 19.12 20.37 19.26 20.37C19.45 20.37 19.61 20.33 19.76 20.24C19.9 20.15 20.02 20.04 20.1 19.89C20.18 19.74 20.22 19.57 20.22 19.39C20.22 19.26 20.2 19.13 20.15 19.02C20.1 18.9 20.04 18.8 19.95 18.71L15.89 14.63C16.32 14.08 16.65 13.46 16.89 12.78C17.13 12.1 17.25 11.38 17.25 10.62C17.25 9.71 17.08 8.85 16.74 8.05C16.4 7.25 15.92 6.55 15.31 5.94C14.7 5.33 14 4.86 13.2 4.51C12.4 4.17 11.54 4 10.63 4C9.72 4 8.86 4.17 8.06 4.51C7.26 4.85 6.56 5.33 5.95 5.94C5.34 6.55 4.87 7.25 4.52 8.05C4.18 8.85 4.01 9.71 4.01 10.62H4Z" />
    </svg>;
    const ICON_CLEAR = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.95264 17.4736C7.79606 17.4736 6.70589 17.2523 5.68213 16.8096C4.6639 16.3669 3.76465 15.7554 2.98438 14.9751C2.2041 14.1948 1.59261 13.2956 1.1499 12.2773C0.707194 11.2536 0.48584 10.1634 0.48584 9.00684C0.48584 7.85026 0.707194 6.76286 1.1499 5.74463C1.59261 4.72087 2.20133 3.81885 2.97607 3.03857C3.75635 2.2583 4.6556 1.64681 5.67383 1.2041C6.69759 0.761393 7.78776 0.540039 8.94434 0.540039C10.1009 0.540039 11.1911 0.761393 12.2148 1.2041C13.2386 1.64681 14.1406 2.2583 14.9209 3.03857C15.7012 3.81885 16.3127 4.72087 16.7554 5.74463C17.1981 6.76286 17.4194 7.85026 17.4194 9.00684C17.4194 10.1634 17.1981 11.2536 16.7554 12.2773C16.3127 13.2956 15.7012 14.1948 14.9209 14.9751C14.1406 15.7554 13.2386 16.3669 12.2148 16.8096C11.1966 17.2523 10.1092 17.4736 8.95264 17.4736ZM6.16357 12.4932C6.36279 12.4932 6.53158 12.4268 6.66992 12.2939L8.96094 9.98633L11.2603 12.2939C11.3875 12.4268 11.5508 12.4932 11.75 12.4932C11.9437 12.4932 12.1069 12.4268 12.2397 12.2939C12.3726 12.1556 12.439 11.9924 12.439 11.8042C12.439 11.5994 12.3726 11.4362 12.2397 11.3145L9.93213 9.01514L12.248 6.70752C12.3809 6.56917 12.4473 6.40592 12.4473 6.21777C12.4473 6.02962 12.3809 5.86914 12.248 5.73633C12.1152 5.60352 11.9548 5.53711 11.7666 5.53711C11.584 5.53711 11.4263 5.60352 11.2935 5.73633L8.96094 8.05225L6.64502 5.74463C6.50667 5.61735 6.34619 5.55371 6.16357 5.55371C5.97542 5.55371 5.81494 5.62012 5.68213 5.75293C5.54932 5.88021 5.48291 6.04069 5.48291 6.23438C5.48291 6.41699 5.54932 6.57747 5.68213 6.71582L7.98975 9.01514L5.68213 11.3228C5.54932 11.4556 5.48291 11.616 5.48291 11.8042C5.48291 11.9924 5.54932 12.1556 5.68213 12.2939C5.81494 12.4268 5.97542 12.4932 6.16357 12.4932Z" fill-opacity="0.6" />
    </svg>;
    return (
        <>
            <WorldOfNameExample title={""}>
                <WorldOfInputTextDefault
                    value={value}
                    setValue={setValue}
                    className={$NAME_OF_CLASS_NAME}
                />
            </WorldOfNameExample>
            <WorldOfNameExample title={"Icon"}>
                <WorldOfInputTextDefault
                    value={value}
                    setValue={setValue}
                    className={$NAME_OF_CLASS_NAME}
                    iconSearch={ICON_SEARCH}
                />
            </WorldOfNameExample>
            <WorldOfNameExample title={"Icon, Hover Icon"}>
                <WorldOfInputTextDefault
                    value={value}
                    setValue={setValue}
                    className={$NAME_OF_CLASS_NAME}
                    iconSearch={ICON_SEARCH}
                />
            </WorldOfNameExample>
            <WorldOfNameExample title={"Icon, Hover Icon, Clear Icon, Hover Clear Icon"}>
                <WorldOfInputTextDefault
                    value={value}
                    setValue={setValue}
                    className={$NAME_OF_CLASS_NAME}
                    iconSearch={ICON_SEARCH}
                    iconClear={ICON_CLEAR}
                />
            </WorldOfNameExample>
            <WorldOfNameExample title={"Icon, Active Icon, Clear Icon, Hover Clear Icon, Active Clear Icon, updateValue"}>
                <WorldOfInputTextDefault
                    value={value}
                    updateValue={updateValue}
                    className={$NAME_OF_CLASS_NAME}
                    iconSearch={ICON_SEARCH}
                    iconClear={ICON_CLEAR}
                />
            </WorldOfNameExample>
            <WorldOfNameExample title={"Icon, Active Icon, Clear Icon, Hover Clear Icon, Active Clear Icon, Go Search"}>
                <WorldOfInputTextDefault
                    value={value}
                    setValue={setValue}
                    className={$NAME_OF_CLASS_NAME}
                    goSearch={goSearch}
                    iconSearch={ICON_SEARCH}
                    iconClear={ICON_CLEAR}
                    isActiveClearAlways
                />
            </WorldOfNameExample>
            <WorldOfForm onSubmit={changeCheck}>
                <WorldOfNameExample title={"Icon, Hover Icon, Clear Icon, Hover Clear Icon, isRequired, pattern, isValid, validMessage, inValidMessage"}>
                    <WorldOfInputTextDefault
                        value={value}
                        setValue={setValue}
                        className={$NAME_OF_CLASS_NAME}
                        iconSearch={ICON_SEARCH}
                        iconClear={ICON_CLEAR}
                        isValid={check}
                        pattern={"[0-9]{10}"}
                        validMessage='Everyone just fuck off!'
                        inValidMessage="It's bad, brother!"
                    />
                </WorldOfNameExample>
            </WorldOfForm>
            <WorldOfForm onSubmit={changeCheck}>
                <WorldOfNameExample title={"Icon, Hover Icon, Clear Icon, Hover Clear Icon, isRequired, pattern, isAlwaysValid"}>
                    <WorldOfInputTextDefault
                        value={value}
                        setValue={setValue}
                        className={$NAME_OF_CLASS_NAME}
                        iconSearch={ICON_SEARCH}
                        iconClear={ICON_CLEAR}
                        isAlwaysValid
                        isValid={check}
                        pattern={"[0-9]{10}"}
                    />
                </WorldOfNameExample>
            </WorldOfForm>
            <WorldOfForm onSubmit={changeCheck}>
                <WorldOfNameExample title={"Icon, Hover Icon, Clear Icon, Hover Clear Icon, isRequired, pattern, isAlwaysValid, validMessage, inValidMessage"}>
                    <WorldOfInputTextDefault
                        value={value}
                        setValue={setValue}
                        className={$NAME_OF_CLASS_NAME}
                        iconSearch={ICON_SEARCH}
                        iconClear={ICON_CLEAR}
                        isAlwaysValid
                        isValid={check}
                        pattern={"[0-9]{10}"}
                        validMessage='Everyone just fuck off!'
                        inValidMessage="It's bad, brother!"
                    />
                </WorldOfNameExample>
            </WorldOfForm>
            <WorldOfForm onSubmit={changeCheck}>
                <WorldOfNameExample title={"Icon, Hover Icon, Clear Icon, Hover Clear Icon, isRequired, minLength, isAlwaysValid, validMessage, inValidMessage"}>
                    <WorldOfInputTextDefault
                        placeholder='Write your name!'
                        value={value}
                        setValue={setValue}
                        className={$NAME_OF_CLASS_NAME}
                        iconSearch={ICON_SEARCH}
                        iconClear={ICON_CLEAR}
                        isAlwaysValid
                        isValid={check}
                        minLength={5}
                        validMessage='Everyone just fuck off!'
                        inValidMessage="It's bad, brother!"
                    />
                </WorldOfNameExample>
            </WorldOfForm>
        </>
    );
};
