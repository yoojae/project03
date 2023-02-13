import { useState } from "react";
import GiftData from "./GiftData";
import './Style/page.css';
import { Outlet } from "react-router-dom";

export default function Gift() {

    const [gifts] = useState(GiftData);

    return (
        <div>
            <div className="common_width">
                <h3>마음을 전하는 특별한 기프트</h3>
                <p className="set">
                    소중한 순간을 더욱 특별하게 만들어줄<br/>
                    탬버린즈만의 기프트로 따듯한 마음을 전해보세요.
                </p>
                {
                    gifts.map((gift, i)=>{
                        return (
                            <div>
                                <div key={i}>
                                    <div>
                                        <img src={gift.image} alt="" style={{width: 325}}/>
                                        <p className='desc'><span>{gift.desc}</span> <span>{gift.vol}</span></p>
                                        <p><b>{gift.title}</b></p>
                                        <p>{gift.price}원</p>
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