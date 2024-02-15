import React from 'react'

function Footer() {
    return (
        <>
            <section className='footer d-lg-flex justify-content-between container'>
                <div className="company">
                    <h2>COMPANY INFO</h2>
                    <p>
                        Company : 십일번가 주식회사
                        <br />
                        Owner : 안정은
                        <br />
                        Tel : 1599-6688
                        <br />
                        Busines License : 815-81-01244 <a href="#none"> [사업자정보확인]</a>
                        <br />
                        Address : 04637 서울시 중구 한강대로 416
                        <br />
                        E-mail : ngeonhui@sk.com&emsp;&emsp;Privacy Manager : 이하림
                        <br />
                        <br />
                        <span>Hosting by Cafe24 Corp</span>

                    </p>

                </div>
                <div className="center">
                    <h2>CS CENTER</h2>
                    <h2>T.1599-6688</h2>
                    <p>
                        Open AM 09:00 - PM 06:00
                        <br />
                        Lunch PM 12:00 - PM 13:00
                        <br />
                        주말 , 공휴일 휴무
                    </p>
                </div>
                <div className="account">
                    <h2>BANK ACCOUNT</h2>

                    <p>
                        우리은행
                        <br />
                        1005-801-564355
                        <br />
                        예금주 : 십일번가 주식화사
                    </p>

                    <h2>RETURN</h2>
                    <br />
                    <p>반품주소 : 경기도 파주시 월롱면 <br />
                        덕은리 226-102</p>
                </div>
                <div className="marketing">
                    <h2>MARKETING</h2>
                    <br />
                    <p>
                        입점/마케팅 문의 : cp.hrlee@sk.com <br />
                        해외수출문의 : herny.shin@sk.com
                    </p>
                </div>
            </section>
            <div className='d-flex justify-content-between border-bottom my-3 py-5 me-5 w-100'>
                <ul className='footer_icon d-lg-flex'>
                    <li className='me-3 my-3'>
                        <a href="https://www.instagram.com/scinic_official/"><img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="인스타그램" /></a>
                    </li>
                    <li className='me-3 my-3'><a href="https://www.facebook.com/scinic?locale=ko_KR"><img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="페이스북" /></a></li>
                    <li className='me-3 my-3'>
                        <a href="https://brand.naver.com/scinic"><img src="https://scinic.com/web/upload/sns_icon/naver.png" alt="네이버" /></a>
                    </li>
                    <li className='me-3 my-3'>
                        <a href="https://www.youtube.com/@scinic4191"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="유튜브" /></a>
                    </li>
                </ul>
                <ul className='footer_menu d-lg-flex'>
                    <li className='me-2 mb-3'>
                        <a href="#none" >이용약관</a>
                    </li>
                    <li className='me-2 mb-3'>
                        <a href="#none" >개인정보처리방침</a>
                    </li>
                    <li className='me-2 mb-3'>
                        <a href="#none" >이용안내</a>
                    </li>
                    <li className='me-2 mb-3'>
                        <a href="#none" >에스크로 가입 확인</a>
                    </li>
                </ul>
            </div>
            <div className="footer_box">
                <p>COPYRIGHT ⓒ scinic. ALL RIGHTS RESERVED. </p>
            </div>
        </>
    )
}

export default Footer
