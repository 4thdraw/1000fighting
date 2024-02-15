import React, { useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import carticon from '../img/icon/icon_cart.svg'
import searchicon from '../img/icon/icon_search.svg'
import { Link } from 'react-router-dom'
// import { Navbar, Nav, Container } from 'react-bootstrap'
// import menuicon from './../img/icon/icon_menu.svg'
import topicon from '../img/icon/icon_top.svg'
import talkicon from '../img/icon/icon_talk.svg'
import recenticon from '../img/icon/icon_recent.svg'
import menuicon from '../img/icon/icon_menu.svg'




function Header(props) {
    const Gnbmenu = useRef("");
    const menucon = () => {
        Gnbmenu.current.classList.toggle("d-none")
    }

    const scrolldown = () => {
        document.querySelector("#hd").classList = window.scrollY > 0 ? "fixed-top bg-white border-bottom down" : "fixed-top bg-white border-bottom";
        document.body.classList = window.scrollY > 0 ? "down" : "";
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    useEffect(() => {
        console.log(props)


        window.addEventListener("scroll", scrolldown)
        return () => {
            window.removeEventListener("scroll", scrolldown)
        }

    }, [])






    return (
        <header id='hd' className='fixed-top bg-white border-bottom'>
            <div className='container row mx-auto justify-content-between justify-content-lg-center align-items-center mobile'>
                <h1 id='Logo' className='text-center align-item-center mb-0 mt-lg-5 p-0'><Link to="/"></Link></h1>


                <i id='menuicon' className='d-lg-none d-flex p-0' onClick={menucon}><img src={menuicon} alt="메뉴" /></i>


                <div id="Gnb" ref={Gnbmenu} className='text-center container-lg mt-lg-5 d-lg-block d-none'>
                    <ul className='d-lg-flex justify-content-center'>

                        <li className='px-4 storelist '><Link to="/store/all">스토어</Link>
                            <div className='d1li start-0 end-0 position-absolute bg-white'>
                                <div id='storelist' className='d-flex mx-auto justify-content-between col-xxl-4 col-sm-8 colpx'>
                                    <ul className='d2li'>
                                        <li><Link to="/store/all">전체상품</Link></li>
                                        {
                                       props.datasrc  &&     props.datasrc.map((e, i) => {
                                                return <li key={i}><Link to={`/store/${e.Category_no}`}>{e.Cate_title}</Link></li>
                                            })
                                        }
                                    </ul>
                                    <div className='bimg'>
                                        <img src="https://i.ibb.co/dcdwnk1/2.webp" alt="2depthimg" />
                                    </div>
                                </div>
                            </div>

                        </li>
                        <li className='px-4'><Link to="/brand">브랜드</Link></li>
                        <li className='px-4'><Link to="/promotion">프로모션</Link></li>
                        <li className='px-4'><a href="#none">미디어</a></li>
                        <li className='px-4'><a href="#none">리뷰</a></li>
                        <li className='px-4'><a href="#none">커뮤니티</a></li>
                    </ul>
                    <div className=''>
                        <ul id='Login' className='d-flex position-absolute align-items-center justify-content-center justify-content-lg-end'>
                            <li><Link to="/login">Login</Link></li>
                            <li className='ms-lg-2'><a href="#none">My</a></li>
                            <li className='ms-lg-2'><a href="#none"><img src={carticon} alt="장바구니" /></a></li>
                            <li className='ms-lg-2'><a href="#none"><img src={searchicon} alt="검색" /></a></li>
                        </ul>
                    </div>

                </div>

            </div>
            <div className='fixed-right bg-white d-none d-md-block' >
                <div className='resentbt pb-2'>
                    <Link to="#none"><img src={recenticon} alt="최근본상품" /></Link>

                </div>
                <div className='py-2 border-top border-bottom'>
                    <Link to="#none"><img src={talkicon} alt="챗봇" /></Link>
                </div>
                <div className='pt-1'>
                    <Link to="#none"><img src={topicon} alt="상단으로" onClick={scrollToTop} /></Link>
                </div>
            </div>
            <div className='mobile_tbtn d-md-none'>
                <Link to="#none"><img src={topicon} alt="상단으로" onClick={scrollToTop} /></Link>
            </div>



        </header >
    )
}

export default Header







// < header id = 'hd' className = 'fixed-top bg-white border-bottom' >
//     <Container>
//         <div id='gnb' className='d-flex justify-content-between align-items-center'>
//             <h1 id='Logo' className='col-lg-12 text-center align-item-center'>
//                 <Link to="/" className='d-inline-block'>
//                     <img src="https://scinic.com/web/upload/p49_maypop/logo.png" alt="로고" />
//                 </Link>
//             </h1>

//             <div id="Gnb" className='text-center container-lg d-none d-lg-block'>
//                 <Navbar expand='lg'>
//                     <Navbar.Toggle aria-controls='basic-navbar-nav' />
//                     <Navbar.Collapse id='basic-navbar-nav'>
//                         <Nav className='ml-auto'>
//                             <Nav.Link as={Link} to="/brand">브랜드</Nav.Link>
//                             <Nav.Link href="#none">스토어</Nav.Link>
//                             <Nav.Link as={Link} to="/promotion">프로모션</Nav.Link>
//                             <Nav.Link href="#none">미디어</Nav.Link>
//                             <Nav.Link href="#none">리뷰</Nav.Link>
//                             <Nav.Link href="#none">커뮤니티</Nav.Link>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Navbar>
//             </div>

//             <div className='d-none d-lg-block'>
//                 <ul id='Login' className='d-flex position-absolute'>
//                     <li><Link to="/login">Login</Link></li>
//                     <li><a href="#none">My</a></li>
//                     <li><a href="#none"><img src={carticon} alt="장바구니" /></a></li>
//                     <li><a href="#none"><img src={searchicon} alt="검색" /></a></li>
//                 </ul>
//             </div>
//         </div>
//     </Container>
//     </ >