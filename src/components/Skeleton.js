import Preloader from "../../Assets/skeleton-preloader.gif"

export const Skeleton = () => {
    return (
        <div className="flex rounded-lg bg-slate-200 justify-around items-center flex-col w-[200px] h-[300px] font-mono res-card">
            <img className="skeleton-img w-[50%]" src={Preloader}/>
        </div>
    );
};