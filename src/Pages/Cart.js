import { useDispatch, useSelector } from "react-redux"
import { addCount, subCount, deleteItem } from "./store"
import './Style/page.css';
import Total from "../Components/Total";


export default function Cart() {

    const state = useSelector((state)=> {return state})
    const dispatch = useDispatch()
    
    return (
        <div className="shopping_bag">
                        
            <div className="list_box">
                <p>쇼핑백</p>
                {
                    state.cart.map((item, i)=>{
                        
                        return (
                            <div className="list" key={i}>
                                <span><img src={state.cart[i].image} alt="" style={{width: 80}}/></span>
                                <span>{state.cart[i].title} - {state.cart[i].vol}</span>
                                <span>{state.cart[i].price}원</span>
                                <span className="button_box">
                                    <button onClick={()=>{
                                        dispatch(subCount(state.cart[i].id))
                                    }}>-</button>
                                    <span>{state.cart[i].count}</span>
                                    <button onClick={()=>{
                                        dispatch(addCount(state.cart[i].id))
                                    }}>+</button>
                                </span>
                                <button onClick={()=>{
                                    dispatch(deleteItem(state.cart[i].id))
                                }}>삭제</button>
                            </div>
                        )
                    })
                }
            </div>
            <Total/>
            
        </div>
    )



}