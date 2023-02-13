import PerfumeData from "./PerfumeData"
import BalmData from "./BalmData";
import HandData from "./HandData";
import {useState} from 'react';
import './Style/page.css';
import { Outlet } from "react-router-dom";

export default function All() {

    const [perfumes] = useState(PerfumeData);
    const [balms] = useState(BalmData);
    const [hands] = useState(HandData);

    return (
        <div>
            <div className="common_width">
                <p><b>전체 제품</b></p>
                <p><i>
                    탬버린즈는 감각적 아트와 아름다움을 지향하는 코스메틱 브랜드입니다.<br/>
                    제품의 본질은 물론 추구하는 아름다움을 공간, 오브제, 페인팅, 퍼포먼스 등의 영역에서 재해석한<br/>
                    컨텐츠를 통해 감성적인 커뮤니케이션을 시도합니다.
                </i></p>
                <h4>BALM</h4>
                {
                    balms.map((balm, i)=>{
                        return (
                            <div className="common_div">
                                <div key={i}>
                                    <div>
                                        <img src={balm.image} alt="" style={{width: 325}}/>
                                        <p className='desc'><span>{balm.desc}</span> <span>{balm.vol}</span></p>
                                        <p><b>{balm.title}</b></p>
                                        <p>{balm.price}원</p>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
                <h4>PERFUME HAND</h4>
                {
                    hands.map((hand, i)=>{
                        return (
                            <div className="common_div">
                                <div key={i}>
                                    <div>
                                        <img src={hand.image} alt="" style={{width: 325}}/>
                                        <p className='desc'><span>{hand.desc}</span> <span>{hand.vol}</span></p>
                                        <p><b>{hand.title}</b></p>
                                        <p>{hand.price}원</p>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
                <h4>PERFUME</h4>
                {
                    perfumes.map((perfume, i)=>{
                        return (
                            <div>
                                <div key={i}>
                                    <div>
                                        <img src={perfume.image} alt="" style={{width: 325}}/>
                                        <p className='desc'><span>{perfume.desc}</span> <span>{perfume.vol}</span></p>
                                        <p><b>{perfume.title}</b></p>
                                        <p>{perfume.price}원</p>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <Outlet></Outlet>  
        </div>

    )
}