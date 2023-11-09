import { Skeleton } from "./Skeleton";

export const SkeletonContainer = () => {
    return (
        <div className="res-card-container justify-center gap-[5%] gap-y-[50px] my-[50px] flex flex-wrap">
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
        </div>
    )
};