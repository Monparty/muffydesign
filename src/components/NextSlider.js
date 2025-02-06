"use client"
import Slider from "@madzadev/image-slider";
import AOS from "aos";
import { useEffect } from "react";

export default function NextSlider({sliderImages}) {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-up" className="rounded-xl border truncate">
            <Slider
                imageList={sliderImages} 
                width={'100%'} 
                height={350} 
                loop={true}
                autoPlay={true}
                showArrowControls={true} 
                showDotControls={true}
                autoPlayInterval={4000}
            />
        </div>
    )
}