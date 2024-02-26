import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';

function Store(props) {
 
    const { Category_no } = useParams(); // Category_no가 주소창에서 나왔으니 string문자열인줄 알았으나 typeof로 출력해보니 Number로 인식함
    const { datasrc, catesrc} = props;

    

    useEffect(() => {
        console.log(typeof Category_no, Category_no)
        console.log(props.catesrc, typeof props.catesrc)
    }, [Category_no, datasrc, catesrc]);

    return (
        <section className='mt-10'>
            <div className='row container mx-auto text-center mt-5'>

                <div className='mb-5 border-bottom'>
                    <h2>{Category_no !== "all" ? catesrc.filter((el) => el.id == Category_no)[0].Cate_title : "전체상품"}</h2>
                </div>
                {datasrc && Category_no !== "all" ? datasrc.filter((element) => element.Category_no == Category_no).map((e, i) => (
                    <div className='col-lg-3 col-md-6 mb-5 pb-4 text-center' key={i}>
                        <img src={e.img} className='img-fluid' alt={`product${i}`} />
                        <strong>{e.title}</strong>
                        <br />
                        <p>{e.descpro}</p>
                        <span>{e.price}원</span>


                    </div>
                ))
                    :
                    datasrc &&  datasrc.map((e, i) => (
                        <div className='col-lg-3 col-md-6 mb-5 pb-4 text-center' key={i}>
                            <img src={e.img} className='img-fluid' alt={`product${i}`} />
                            <strong>{e.title}</strong>
                            <br />
                            <p>{e.descpro}</p>
                            <span>{e.price}원</span>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Store;
