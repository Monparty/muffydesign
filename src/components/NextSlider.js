import Slider from "@madzadev/image-slider";

export default function NextSlider({sliderImages}) {
    
    return (
        <div className="rounded-xl border truncate">
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