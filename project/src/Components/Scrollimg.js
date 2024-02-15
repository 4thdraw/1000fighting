import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Scrollimg() {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            easing: 'ease-in',
            once: true,
        });


        const handleScroll = () => {
            const element = document.getElementById('Main_story'); // 
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
        <section id='Main_story' className='fadeInDown'>
            {/* 프로모션1단배너 */}
            <div className='main_banner' data-Aos='fade-down'>
                <a href="#none">

                </a>
            </div>
        </section>
    )
}

export default Scrollimg










