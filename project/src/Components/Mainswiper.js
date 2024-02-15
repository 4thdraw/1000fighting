import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';
import Cookies from 'js-cookie'; // js-cookie 라이브러리 import

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Mains = () => {
    const [conswipe, setswipe] = useState([]);

    const swipeapi = async () => {
        try {

            const savedData = Cookies.get('swipeData');
            if (savedData) {
                setswipe(JSON.parse(savedData));
            } else {

                const result = await axios.get('/store/Mbanner');
                setswipe([...result.data]);

                Cookies.set('swipeData', JSON.stringify(result.data), { expires: 7, path: '/' });
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        swipeapi();
    }, []);

    return (
        <Swiper
            id='Mainswiper'
            modules={[Autoplay, Pagination, Navigation]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
                delay: 3000
            }}
            className='mt-lg-5'>
            {
                conswipe && conswipe.map((e, i) => {
                    return (
                        <SwiperSlide className='swipermobile' key={`mainbanner${i}`}>
                            <img src={e.pcbanner} alt={e.alt} className='d-none d-lg-block img-fluid' />
                            <img src={e.mobanner} alt={e.alt} className='d-lg-none w-100' />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};

export default Mains;
