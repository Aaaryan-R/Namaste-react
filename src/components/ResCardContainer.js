import { Link } from "react-router-dom";
import { ResCard, withIsOpenLabel } from "./ResCard";

export const ResCardContainer = ({ restList }) => {

    const OpenResCard = withIsOpenLabel(ResCard);

    return (
        <div className="res-card-container justify-center gap-[5%] gap-y-[50px] my-[50px] flex flex-wrap">
            {console.log(restList)}
            {restList.map( restaurant =>
                <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}>
                    {
                        (restaurant.info.isOpen) ? <OpenResCard {...restaurant} /> : <ResCard type="data" resName={restaurant.info.name} imgSrc={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`} resRating={restaurant.info.avgRating} />
                    }
                </Link>)}
        </div>
    );
};
