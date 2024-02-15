import React, { useEffect, useState } from 'react'
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
// data
import Mainswipe from './data/Mainswiper.json';
// import Products from './data/product.json'
import review from './data/review.json'
import award from "./data/award.json"



function App() {
  const [totalpro, settotal] = useState([]);
  const [catepro, setcate] = useState([]);


  useEffect(() => {
    const dbstore = async (r, t, cate = "all") => {
      try {
        if (cate !== "all") {
          const result = await axios.get(`/${r}/${t}/${cate}`, {
            headers: {
              'Content-Type': 'application/json'
            },
            params: {
              param: "아무거나"
            }
          });
          settotal([...result.data])
        } else {
          const result = await axios.get(`/${r}/${t}`, {
            headers: {
              'Content-Type': 'application/json'
            },
            params: {
              param: "아무거나"
            }
          });
          settotal([...result.data])
        }


        ;
      } catch (error) {
        console.log(error);
      }
    };

    const category_no = async () => {
      try {

        const catename = await axios.get('/store/Category', {
          headers: {
            'Content-Type': 'application/json'
          },
          params: {
            param: "아무거나"
          }
        });
        setcate([...catename.data])



          ;
      } catch (error) {
        console.log(error);
      }
    };
    dbstore("store", "Scinic_Product");
    category_no();
    console.log();
  }, []);


  return (
    <>
      <Header datasrc={catepro && catepro}></Header>
      <Routes>
        <Route path="/" element={<section className='mainsec'>
          <Mainswiper datasrc={Mainswipe.mainbanner}></Mainswiper>
          <Sproduct datasrc={totalpro && totalpro}></Sproduct>

          <div className="mb-5">
            <Scrollimg></Scrollimg>
            <Scrollimg2></Scrollimg2>
          </div>
          <Youtubev></Youtubev>
          <Product datasrc={totalpro && totalpro} catesrc={catepro && catepro}></Product>
          <Mbenefit></Mbenefit>
          <Reviews datasrc={review.review}></Reviews>
          <Awards datasrc={award.award}></Awards>
        </section>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/brand" element={<Brandstory />}></Route>
        <Route path='/promotion' element={<Promotion />}></Route>
        <Route path='/store/:Category_no' element={<Store datasrc={totalpro && totalpro} catesrc={catepro && catepro} />}></Route>

      </Routes>
      <Footer></Footer>


    </>
  );
}

export default App;
