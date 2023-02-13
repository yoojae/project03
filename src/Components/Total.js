import {useSelector} from 'react-redux'
import './components.css';

export default function Total() {
    
  const state = useSelector((state)=> {return state})

  const Amount = () => {
    let totalPrice = 0
    state.cart.map((item, i) => {
      totalPrice += state.cart[i].price * state.cart[i].count
    })
    return {totalPrice}
  }
 
  return (
    <div className='total'>
      <div className='total_box'>
        <div>
          <span>상품금액</span><span>{Amount().totalPrice}원</span>
        </div>
        <div>
          <span>상품할인</span><span>-0원</span>
        </div>
        <div>
          <span>배송비</span><span>-0원</span>
        </div>
        <div>
          <span>결제예정금액</span><span>{Amount().totalPrice}원</span>
        </div>
      </div>
      <button>주문하기</button>
    </div>

  )
}