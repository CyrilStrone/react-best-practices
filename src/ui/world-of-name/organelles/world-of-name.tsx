import '../styles/style-of-world-of-name.css'
export type IWorldOfNameExample = {
    title: string
    children?: React.ReactNode
}
type IWorldOfName = {
    title: string
    children?: React.ReactNode
}
export const WorldOfName = (params: IWorldOfName) => {
    return (
        <div className="WorldOfName__Block">
            <div className="WorldOfName__Block__Title">
                {params.title}
            </div>
            <div className="WorldOfName__Block__Inside">
                {params.children}
            </div>
        </div>
    );
};
