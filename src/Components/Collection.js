import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './components.css';
import {useState} from 'react';
import CollectionData from './CollectionData';


export default function Collection() {

    const [collections] = useState(CollectionData);

    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={5}
            slidesPerView={2}
            navigation
            style={{
                "--swiper-navigation-color": "white",
                "--swiper-navigation-size": "15px",
            }}
        >
            {
                collections.map((collection, i)=>{
                    return (
                        <SwiperSlide key={i}>
                            <div>
                                <img src={collection.image} alt="" style={{width: '100%'}} />
                                <p className='collection_title'>{collection.title}</p>
                            </div>
                        </SwiperSlide>    
                    )
                })
            }
        </Swiper>
    )
}
