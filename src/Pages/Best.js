import { useState } from "react"
import BestData from "./BestData"
import './Style/page.css';
import { Outlet } from "react-router-dom";

export default function Best() {

    const [bests] = useState(BestData);

    return (
        <div>
            <div className="common_width">
                <p className="seller"><b>베스트 셀러</b></p>
                {
                    bests.map((best, i)=>{
                        return (
                            <div>
                                <div key={i}>
                                    <div>
                                        <img src={best.image} alt="" style={{width: 325}}/>
                                        <p className='desc'><span>{best.desc}</span> <span>{best.vol}</span></p>
                                        <p><b>{best.title}</b></p>
                                        <p>{best.price}원</p>
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