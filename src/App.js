import './App.css';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import All from './Pages/All';
import Best from './Pages/Best';
import Gift from './Pages/Gift';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import {Container, Nav, Row, Col, Navbar} from 'react-bootstrap';
import {useState} from 'react';
import PerfumeData from './Pages/PerfumeData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import Details from './Pages/Details';
import Footer from './Components/Footer';
import { addItem } from './Pages/store';
import { useDispatch } from 'react-redux';
import Collection from './Components/Collection';

function App() {

  const navigate = useNavigate();
  const [perfumes] = useState(PerfumeData);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Navbar bg="none" variant="light">
        <Container className='Nav_container'>
          <Navbar.Brand onClick={()=>{navigate('/project03')}}>
            <img src={process.env.PUBLIC_URL+'/images/tamburins_logo.png'} alt="logo" style={{width: 180}} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/all/footer')}}>전체 제품</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/best/footer')}}>베스트 셀러</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/gift/footer')}}>선물 추천</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/shop/footer')}}>매장 보기</Nav.Link>
          </Nav>
          <Nav className="me-auto" id='Nav_gnb'>
            <Nav.Link onClick={()=>{navigate('/')}}>마이페이지</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/')}}>로그인</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}><FontAwesomeIcon icon={faBasketShopping} /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path='/project03' element={
          <div>
            <div>
              <video src={process.env.PUBLIC_URL+'/videos/main_banner.mp4'} className="background_banner" autoPlay muted loop />
            </div>
            <div className='wrap'>
              <div className='collection'>
                <h2>COLLECTION</h2>
                <p className='description'>
                  탬버린즈 X 배세진 작가의 협업으로 탄생하게 된 OBJECT COLLECTION CANDLE은 약 160-170개 정도의 작은 조각들이 모여 하나의<br/>
                  고유한 작품이 되었습니다. 조각을 하나하나 붙이는 반복 행위는 시간과 자아에 대해 끊임없는 성찰을 하게 됩니다. 우리는 캔들을 태우는 <br/>
                  과정 속에서도 일치하는 경험을 하게 됩니다. 불을 켜는 순간, 일상 속 또 다른 시간을 기록하며 우리의 순간에 집중합니다.<br/>
                  어두워지는 순간 우리는 그 시간을 기억의 조각으로 현상합니다.
                </p>
              </div>
              <div className='object'>
                <img src={process.env.PUBLIC_URL+'/images/tam_collection1.jpg'} alt="collection" style={{width: 657}}/>
                <section>
                  
                  <Collection />
                  
                </section>
              </div>
              
              <div className='perfume_description'>
                <div>
                  <b>
                    collection<br/>
                    of
                  </b>
                  </div>
                <h2>PERFUME</h2>
                <p>
                  [SOLACE: 한줌의 위안] 위안에서 오는 다양한 감정을 표현한 이번 향수 컬렉션은 시간이 흐르면서 일어나는 다채로운 향의 변화를<br/>
                  온전히 느낄 수 있는 향수입니다. 세상에 흩어진 모든 이야기에서 영감을 받은 감각적인 향이 단조로운 일상에 자유롭고 새로운 리듬을 부여합니다.<br/>
                  탬버린즈가 찾아낸 규정되지 않은 아름다움을 향수를 통해 경험해보세요.
                </p>
              </div>
              <Row>
                {
                  perfumes.map((perfume, i)=>{
                    return (
                      <Col key={i}>
                        <Link to={`/details/${i}`}>
                          <img src={perfume.image} alt="" style={{width: 300}}/>
                          <p className='desc'><span>{perfume.desc}</span> <span>{perfume.vol}</span></p>
                          <p><b>{perfume.title}</b></p>
                          <p>{perfume.price}원</p>
                        </Link>
                        <button onClick={()=>{
                          dispatch(addItem({id: perfume.id, image: perfume.image, title: perfume.title, vol: perfume.vol, price: perfume.price, count:1}))
                        }}>장바구니</button>
                      </Col>
                    )
                  })
                }
              </Row>

            </div>


            <div>
              <Footer/>
            </div>


          </div>       
        }></Route>
        <Route path='all' element={<All />}>
          <Route path='footer' element={<Footer />}/>
        </Route>
        <Route path='best' element={<Best />}>
          <Route path='footer' element={<Footer />}/>
        </Route>
        <Route path='gift' element={<Gift />}>
          <Route path='footer' element={<Footer />}/>
        </Route>
        <Route path='shop' element={<Shop />}>
          <Route path='footer' element={<Footer />}/>
        </Route>
        <Route path='cart' element={<Cart />}/>
        <Route path="/details/:id" element={<Details perfumes={perfumes}/>}/>
      </Routes>

    </div>
  );
}

export default App;
