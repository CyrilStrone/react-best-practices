import '../styles/style-of-world-of-form.css'

type IWorldOfForm = {
    onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined
    children?: React.ReactNode
}
export const WorldOfForm = (params: IWorldOfForm) => {
    return (
        <form className='WorldOfForm' onSubmit={e => { e.preventDefault(); params.onSubmit && params.onSubmit(e) }}>
            {params.children}
            <button className='WorldOfForm__Button' type="submit">Отправить</button>
        </form>
    );
};
