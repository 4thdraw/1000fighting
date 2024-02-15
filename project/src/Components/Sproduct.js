import React from 'react'
import { Link } from 'react-router-dom'

function Sproduct(props) {

    // const bestpro = Object.keys(props.datasrc['Category'][0])


    // console.log(bestpro.length)


    return (
        <section id='best' className='mt-5'>
            <div className='text-center'>
                <h2>BEST</h2>
                <div className="sec_line"></div>
            </div>
            <div className='container row mx-auto mt-5'>
                {

                    props.datasrc.filter(bestpro => bestpro.quantity > 88).slice(0, 4).map((e, i) => {
                        return (
                            <div key={i} className='col-lg-3 col-md-6 mb-5 pb-4 text-center'>
                                <Link className='d-block'>
                                    <img src={e.img} alt="" className='img-fluid mb-3' />
                                </Link>

                                <strong>{e.title}</strong>
                                <br />
                                <p>{e.descpro}</p>
                                <span>{e.price}원</span>
                                <br />
                                <span>판매량 : {e.quantity}</span>

                            </div>
                        )
                    })

                }


            </div>



        </section>

    )

}


export default Sproduct
