import { addItem } from "./store";
import { useParams } from "react-router-dom";
import './Style/page.css';
import { useDispatch } from "react-redux";

export default function Details(props) {

    const {perfumes} = props
    const {id} = useParams()
    const dispatch = useDispatch()

    return (
        <div>
            <div className="detail_page">
                <img src={perfumes[id].image} alt="" style={{width: 500}}/>
                <div className="description">
                    <p><span className="title">{perfumes[id].title}</span><span>{perfumes[id].vol}</span></p>
                    <p>{perfumes[id].desc}</p>
                    <p>{perfumes[id].note}</p>
                    <p>{perfumes[id].price}원</p>
                    <div>
                        <button onClick={()=>{
                            dispatch(addItem({id: perfumes[id].id, image: perfumes[id].image, title: perfumes[id].title, vol: perfumes[id].vol, price: perfumes[id].price, count: 1}))
                        }}>장바구니</button>
                        <button>구매하기</button>
                    </div>
                </div>
            </div>
        </div>
    )

}