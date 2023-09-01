import { IWorldOfNameExample } from "../organelles/world-of-name";

export const WorldOfNameExample = (params: IWorldOfNameExample) => {
    return (
        <div className="WorldOfNameExample">
            {params.children}
            <div className="WorldOfNameExample__Title">
                {params.title}
            </div>
        </div>
    );
};
