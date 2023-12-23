import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLocationDot } from "@fortawesome/free-solid-svg-icons";

// utility function
function returnRating(rating) {
    let ans = [];
    for (let i = 0; i < rating; i++)
        ans.push(<FontAwesomeIcon key={((Math.random() + 1)* 1000000)} className="text-yellow-300" icon={faStar} />);
    return ans;
}

export const ResCard = (props) => {
    const {resName, resRating, imgSrc, totalRatingsString, costForTwo, cuisines, resLoc} = props;
    return  (
        <div data-testid="res-card" className="flex py-3 justify-around gap-2 items-center flex-col w-[200px] font-mono res-card border rounded-lg bg-slate-200 border-slate-200">
            <img className=" rounded-lg res-card-img w-[90%] h-[150px] object-cover" src={imgSrc} />
            <span className="res-card-head">{resName}</span>
            <span className="res-card-head text-xs"><FontAwesomeIcon icon={faLocationDot} size="xs"/> {resLoc}</span>
            <span className="text-xs rounded-md bg-slate-300 px-3 py-1 w-[90%]">{cuisines}</span>
            <span className="text-sm font-bold text-gray-700">{costForTwo}</span>
            <span className="res-rating rounded-md bg-slate-300 px-3 py-1 w-[90%]">
                <span className="font-bold text-sm">{totalRatingsString}</span> {returnRating(resRating)}
            </span>
        </div>
    );
};

export const withIsOpenLabel = (ResCard) => {
    return (props) =>
        <div className="relative">
            <label className="absolute border border-green-500 px-2 py-1 text-xs bg-green-500 text-white rounded-md left-[-10px] top-[-5px]" data-testid="open-label">Open</label>
            <ResCard type="data" costForTwo={props.info.costForTwo} resName={props.info.name} resLoc={props.info.areaName} imgSrc={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.info.cloudinaryImageId}`} resRating={props.info.avgRating} totalRatingsString={props.info.totalRatingsString} cuisines={props.info.cuisines.join(", ")}/>
        </div>
};