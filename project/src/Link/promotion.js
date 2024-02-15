import React, { useState } from 'react';
import axios from 'axios';

function Form() {

    const productApi = async (myName, data = null) => {
        try {
            if (data) {

                const response = await axios.post(`/promotion/${myName}`, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: data
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const responseData = await response.json(); // Assuming the response is JSON, adjust as necessary
                return responseData;
            } else {
                return axios.get(`/promotion/${myName}`);
            }

        } catch (error) {
            console.log(error);
            return error;
        }
    };

    const [formData, setFormData] = useState({  //input의 name이 곧 변수
        u_name: '',
        u_phone: '',
        u_email: '',
        marketing: null
    });

    const handleChange = (e) => {
        // 데이터삽입
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const buttonClick = async (e) => { //전송버튼 비동기 이벤트
        console.log("전송요청함")

        try {
            e.preventDefault();
            // productApi 호출
            console.log("리엑트 formData>>>>>", formData);
            ////////////////////////////////////

            const response = await productApi('myform', formData);
            // 서버 응답 확인
            console.log('서버 응답:', response);

            // 성공적으로 처리된 경우 추가 로직 작성

        } catch (error) {
            console.error('서버 요청 오류:', error);
        }

    }

    return (

        <form className='myForm' onSubmit={(e) => { buttonClick(e) }} style={{ marginTop: "300px", width: "800px" }}>
            <div className='myFormDiv w-md-3'>
                <h5 className='text-center mb-5'>싸이닉 제품 체험단을 모집합니다!</h5>
                <div>
                    <div className='mb-4'>
                        <label className='d-block mb-2' htmlFor="username">이름</label>
                        <input
                            type="text"
                            name='u_name'
                            id='username'
                            className='w-100'
                            placeholder='홍길동'
                            value={formData.u_name}
                            onChange={handleChange}
                        />

                    </div>
                    <div className='mb-4'>
                        <label className='d-block mb-2' htmlFor="userphone">휴대전화번호</label>
                        <input
                            type="number"
                            name='u_phone'
                            id='userphone'
                            className='w-100'
                            placeholder='01012346789'
                            value={formData.u_phone}
                            onChange={handleChange}


                        />

                    </div>
                    <div className='mb-4'>
                        <label className='d-block mb-2' htmlFor="useremail">이메일</label>
                        <input
                            type="text"
                            name='u_email'
                            id='useremail'
                            className='w-100'
                            placeholder='aaa@naver.com'

                            value={formData.u_email}
                            onChange={handleChange}
                        />

                    </div>
                </div>

                <div className='d-flex justify-content-left align-items-center'>
                    <div className='d-flex justify-content-left align-items-center' style={{ marginRight: "20px" }}>
                        <input
                            type="checkbox"
                            name="information"
                            id="information"
                        // checked={Essential}
                        // onClick={() => {
                        //     setEssential(!Essential)
                        // }}
                        />
                        <label htmlFor="information">개인정보수집동의</label>
                    </div>
                    <div className='d-flex justify-content-left align-items-center'>
                        <input
                            type="checkbox"
                            name="marketing"
                            id="marketing"
                            value={formData.marketing}
                            onChange={handleChange}
                        />
                        <label htmlFor="marketing">마케팅수신정보동의 </label>
                        <span className='choice'>(선택)</span>
                    </div>
                </div>

                <button
                    className='w-100 mt-4'
                    type="submit"
                >신청하기</button>
            </div>
        </form>

    )
}

export default Form