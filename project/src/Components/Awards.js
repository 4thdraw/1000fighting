import React from 'react'


function Awards(props) {
    return (
        <section className='mb-5 py-5 award'>
            <div className="sec_title">
                <h2>AWARD</h2>
            </div>
            <ul className='d-lg-flex text-center justify-content-between award mx-lg-5 px-lg-3'>
                {
                    props.datasrc.map((e, i) => {
                        return (
                            <li>
                                <img src={`/assets/awardimg/${e.aimg}`} alt={`award${i}`} className='img-fluid mb-5' />
                                <p>{e.ptag}</p>
                                {
                                    e.h3tag.split("|").map((ee, ii) => {
                                        return <h3 key={ii} >{ee}
                                            <br />
                                        </h3>
                                    })
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Awards
