import { useDispatch, useSelector } from "react-redux";
import { IMG_URL} from "../utils/constants"
import { clearCart, removeItems } from '../utils/redux_slices/cartSlice';


const Cart = () => {

    /* Subscribing to the store, note to self: specifically get the only data needed or the whole component will rerender if anything changes in the store */
    const cart = useSelector(store => store.cart.items);
    /* Getting the dispatch function */
    const dispatch = useDispatch();

    return (
        <div data-testid="cart-item" className="w-6/12 m-auto my-8 relative">
            {cart.length === 0 && <p className="flex justify-center font-mono">Cart is empty 😢. Add some items!</p>}
            {cart.map((item) => {
                return (<div key={item.card.info.id} className="font-mono mb-4 rounded-lg p-4 flex justify-between w-[100%] bg-slate-300">
                    {console.log(item)}
                    <span className="flex justify-center flex-col"><span>{item.card.info.name}</span><span>₹{item.card.info.price/100 | item.card.info.defaultPrice/100}</span></span>
                    <img className="rounded-lg w-[100px] h-[100px] object-cover" src={IMG_URL+item.card.info.imageId} />
                </div>);
            })}
            <button className="transition-all hover:text-white hover:bg-yellow-300 font-mono absolute top-0 right-[100%] whitespace-nowrap mx-8 border text-yellow-300 border-yellow-300 p-2 rounded-lg" onClick={() => {
                /* Dispatching an action */
                dispatch(clearCart());
            }}>Clear cart</button>
            <button className="transition-all hover:text-white hover:bg-yellow-300 font-mono absolute top-[50px] right-[100%] whitespace-nowrap mx-8 border text-yellow-300 border-yellow-300 p-2 rounded-lg" onClick={() => {
                /* Dispatching an action */
                dispatch(removeItems());
            }}>Remove item</button>
        </div>
    );
};

export default Cart;