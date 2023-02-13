import './Style/page.css';
import { Outlet } from "react-router-dom";

export default function Shop() {
    return (
        <div>
            <div className="shop_wrap">
                <h2>STORE</h2>
                <div className="house">
                    <img src={process.env.PUBLIC_URL+'/images/tam_map1.jpg'} alt="map1" />
                    <div>
                        <p>하우스 도산</p>
                        <p>서울 강남구 압구정로46길 50</p>
                        <p>+82 70 4128 2124</p>
                        <p>월-일 11:00am-9:00pm</p>
                    </div>
                </div>

                <div className="shin">
                    <div>
                        <p>플래그십스토어 신사</p>
                        <p>서울 강남구 압구정로10길 44</p>
                        <p>+82 02 511 1246</p>
                        <p>월-일 12:00pm-9:00pm</p>
                    </div>
                    <img src={process.env.PUBLIC_URL+'/images/tam_map2.jpg'} alt="map2" />
                </div>

                

                <h4>백화점</h4>
                <div className="depart">
                    <section>
                        <div>
                            <p>스타필드 하남점</p>
                            <p>경기도 하남시 미사대로 750 스타필드 하남 1F</p>
                            <p>+82 031 8072 8499</p>
                            <p>월-일 10:00am-10:00pm</p>
                        </div>
                        <div>
                            <p>신세계 면세점 명동점</p>
                            <p>서울 중구 퇴계로 77 신세계백화점 본점 04583 10F</p>
                            <p>+82 02 6370 4182</p>
                            <p>월-일 10:30am-6:30pm</p>
                        </div>
                        <div>
                            <p>신세계백화점 강남점</p>
                            <p>서울특별시 서초구 신반포로 176 (반포동) 1F</p>
                            <p>+82 02-3479-1275</p>
                            <p>월-목 10:30am-8:00pm<br/>금-일,공휴일 10:30am-8:30pm</p>
                        </div>
                    </section>

                    <section>
                        <div>
                            <p>신세계백화점 센텀시티점</p>
                            <p>부산 해운대구 센텀남대로 35 신세계백화점 센텀시티점 1F</p>
                            <p>+82 051-745-1398</p>
                            <p>월-목 10:30am-8:00pm<br/>금-일,공휴일 10:30am-8:30pm</p>
                        </div>
                        <div>
                            <p>롯데백화점 본점</p>
                            <p>서울 중구 남대문로 81 롯데백화점 본점 B1F</p>
                            <p>+82 02-772-3905</p>
                            <p>월-목 10:30am-8:00pm<br/>금-일,공휴일 10:30am-8:30pm</p>
                        </div>
                        <div>
                            <p>현대백화점 판교점</p>
                            <p>경기도 성남시 분당구 판교역로146번길 20 (1F)</p>
                            <p>+031-5170-1153</p>
                            <p>월-목 10:30am-8:00pm<br/>금-일,공휴일 10:30am-8:30pm</p>
                        </div>
                    </section>
                </div>



                <h4>스톡키스트</h4>
                <div className="stock">
                    <div>
                        <p>시코르 홍대점</p>
                        <p>서울특별시 마포구 양화로 147 아일렉스 1F</p>
                        <p>+82 02-3143-6721</p>
                        <p>월-일 10:30am-10:00pm</p>
                    </div>

                    <div>
                        <p>시코르 강남점</p>
                        <p>서울 서초구 강남대로 441 서산빌딩</p>
                        <p>+82 02-3495-7600</p>
                        <p>월-일 10:30am-10:00pm</p>
                    </div>

                    <div>
                        <p>10 꼬르소꼬모 에비뉴엘점</p>
                        <p>서울 중구 남대문로 73 5층 10 꼬르소꼬모</p>
                        <p>+82 02 2118 6095</p>
                        <p>월-일 10:30am-8:00pm</p>
                    </div>

                    <div>
                        <p>10 꼬르소꼬모 청담점</p>
                        <p>서울 강남구 압구정로 416</p>
                        <p>+82 02 3018 1010</p>
                        <p>월-일 11:00am-8:00pm</p>
                    </div>
                </div>
            </div>


            <Outlet></Outlet>    

        </div>
    )
}