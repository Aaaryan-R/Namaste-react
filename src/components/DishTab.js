import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faPlus } from "@fortawesome/free-solid-svg-icons";
import { IMG_URL } from "../utils/constants";
import { useDispatch } from 'react-redux';
import { addItems } from '../utils/redux_slices/cartSlice';

export const DishTab = (props) => {

    const dispatch = useDispatch();

    const { card, setShowList, showList, index } = props;

    return (
        <li className="mb-8 font-mono" key={((Math.random() + 1) * 100000)}>
            <span onClick={(e) => {
            (showList) ? setShowList(false) : setShowList(true);
        }} className="cursor-pointer bg-gray-200 border font-bold mb-4 items-center justify-between flex text-lg rounded-md p-4">{card.card.card.title} <FontAwesomeIcon className={`transition-all ${showList && "rotate-[-180deg]"}`} icon={faArrowUp} /></span>
            <ol>
            {(showList) ? card?.card?.card?.itemCards?.map(items => 
                <li data-testid="menu-items" className="flex justify-between items-center rounded-md bg-gray-100 p-4 pb-6 my-2" key={items.card.info.id}>
                    <span className="flex flex-col font-bold flex-1">{items.card.info.name} <span className="text-sm font-light">price : ₹{items.card.info?.price/100 | items.card.info.defaultPrice/100}</span><span className="text-sm font-semibold">{items.card.info.description}</span></span>
                    <span className="flex items-center justify-center relative w-[100px]">
                        <img className="object-cover w-[100px] h-[100px] rounded-md" src={`${IMG_URL}${items.card.info.imageId}`} />
                        <button data-testid="add-btn" className="flex px-1.5 items-center justify-center py-1 duration-300 transition-all hover:text-white hover:bg-yellow-300 float-right absolute left-[50%] top-[100%] translate-y-[-50%] translate-x-[-50%] bg-white rounded-md border border-yellow-300 text-yellow-300" onClick={() => {
                            /* Dispatching an action */
                            dispatch(addItems(items));
                        }}><FontAwesomeIcon icon={faPlus} size='xs' /></button>
                    </span>
                </li>) : ""}
            </ol>
        </li>
    );
};