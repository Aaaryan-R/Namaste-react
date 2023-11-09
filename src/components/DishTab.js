import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { IMG_URL } from "../utils/constants";

export const DishTab = (props) => {

    const { card, setShowList, showList, index } = props;

    console.log(showList, index);

    return (
        <li className="cursor-pointer mb-8 font-mono" key={((Math.random() + 1) * 100000)} onClick={(e) => {
            (showList) ? setShowList(false) : setShowList(true);
        }}>
            <span className=" bg-gray-200 border font-bold mb-4 items-center justify-between flex text-lg rounded-md p-4">{card.card.card.title} <FontAwesomeIcon className={`transition-all ${showList && "rotate-[-180deg]"}`} icon={faArrowUp} /></span>
            <ol>
            {(showList) ? card?.card?.card?.itemCards?.map(items => 
                <li className="flex justify-between items-center rounded-md bg-gray-100 p-4 my-2" key={items.card.info.id}>
                    <span className="flex flex-col font-bold">{items.card.info.name} <span className="text-sm font-light">price : ₹{items.card.info?.price/100 | items.card.info.defaultPrice/100}</span><span className="text-sm font-semibold">{items.card.info.description}</span></span>
                    <img className=" object-cover w-[100px] ml-8 h-[100px] rounded-md" src={`${IMG_URL}${items.card.info.imageId}`} />
                </li>) : ""}
            </ol>
        </li>
    );
};