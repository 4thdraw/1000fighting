import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Mbenefit() {
    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease-in',
            once: true,
        });


        const handleScroll = () => {
            const element = document.getElementById('Member_benefit'); // 
            const rect = element.getBoundingClientRect();
            const scrollPosition = window.scrollY + window.innerHeight;


            if (scrollPosition > rect.top + window.scrollY) {
                Aos.refresh(); // AOS를 새로 고침하여 애니메이션을 시작합니다.
            }
        };

        // 스크롤 이벤트 리스너 등록
        window.addEventListener('scroll', handleScroll);

        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <section id='Member_benefit'>

            <div className='mb-5' data-Aos='fade-up'>
                <a href="#none" className='d-block'>
                    <img src="https://i.ibb.co/MNjtZ35/aosm.jpg" alt="benefit" className='img-fluid d-none d-lg-block' />
                    <img src="https://i.ibb.co/Bj4qqLD/m-benefit.jpg" alt="m_benefit" className='img-fluid d-lg-none w-100' />
                </a>
            </div>
        </section>
    )
}

export default Mbenefit
