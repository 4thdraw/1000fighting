import * as React from "react";
import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import Header from "./Components/Header";
import './css/index.scss'
import Mainswiper from './Components/Mainswiper';
import './data/Mainswiper.json'
import Sproduct from "./Components/Sproduct";
import Product from "./Components/Product";
import Scrollimg from "./Components/Scrollimg";
import Scrollimg2 from "./Components/Scrollimg2";
import Youtubev from './Components/Youtubev'
import Promotion from './Link/promotion';
import Mbenefit from "./Components/Mbenefit";
import Awards from "./Components/Awards";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";
import Login from "./Link/Login";
import Brandstory from "./Link/brandstory";
import Store from './Link/Store';



import review from './data/review.json'
import award from "./data/award.json"






function App() {

  const [totalpro, settotal] = useState({});



  useEffect(() => {

    const dbstore = async (r, data = null ) => {
      // data : 폼양식
      // r : /route/gallery/cate/1/m param형식으로 gallery게시판 스킨 1번 게시글을 수정하겠다.   
      
      const rarry = r.split('/');
      const tn = rarry[1]; // 게시판이름
      // const cata = rarry[1] ? rarry[1] : null; // 카테고리
      // const pk = rarry[2] ? rarry[2] : null; // pk유무에 따라 선택
      // const edit = rarry[3] ? rarry[3] : null; //글쓰기, 글 수정 모두 선택
      
      try {
        if(data){
            //post 글쓰기 글수정
            const result = await axios.post(`/${r}`, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
              params: data
            }); 
            settotal(prevState => ({
              ...prevState,
              [tn]: [...result.data]
            }))          

         }else{
          //get 글목록 글보기 글삭제 
            const result = await axios.get(`/${r}`); 
            settotal(prevState => ({
              ...prevState,
              [tn]: [...result.data]
            }))        

          }
          
      } catch (error) {
        console.log(error);
      }
    };

    
    dbstore("store/Scinic_Product");
    dbstore("store/Category");

  }, []);

  useEffect(()=>{
    console.log(totalpro)

  }, [totalpro])


  return (
    <>
      <Header datasrc={totalpro && totalpro['Category'] && totalpro['Category']}></Header>
      <Routes>
        <Route path="/" element={<section className='mainsec'>
          <Mainswiper></Mainswiper>
          <Sproduct datasrc={totalpro && totalpro['Scinic_Product'] && totalpro['Scinic_Product']}></Sproduct>

          <div className="mb-5">
            <Scrollimg></Scrollimg>
            <Scrollimg2></Scrollimg2>
          </div>
          <Youtubev></Youtubev>
          <Product datasrc={totalpro && totalpro['Scinic_Product'] && totalpro['Scinic_Product']} catesrc={totalpro && totalpro['Category'] && totalpro['Category']}></Product>
          <Mbenefit></Mbenefit>
          <Reviews datasrc={review.review}></Reviews>
          <Awards datasrc={award.award}></Awards>
        </section>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/brand" element={<Brandstory />}></Route>
        <Route path='/promotion' element={<Promotion />}></Route>
        <Route path='/store/:Category_no' element={<Store datasrc={totalpro && totalpro['Scinic_Product'] && totalpro['Scinic_Product']} catesrc={totalpro && totalpro['Category'] && totalpro['Category']} />}></Route>

      </Routes>
      <Footer></Footer>


    </>
  );
}

export default App;
