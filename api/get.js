const express = require("express");
const mysql = require("mysql");
const mydbinfo = require("../data/dbconfig.json")

const mysqlapi = express.Router();

mysqlapi.use(express.json())
mysqlapi.use(express.urlencoded({ extended: true }))

const myconnection = mysql.createPool(mydbinfo)

//글목록
//리액트요청주소형태 서버/store/데이블명
mysqlapi.get('/:tablenm', (req, res) => {
    const tablenm = req.params.tablenm;

    // const wheretable = p_id !== "" ? ` where p_id =${p_id}` : null
    myconnection.getConnection((err, connect) => {
        if (err) throw console.log("DB접속정보확인 " + err)
        connect.query(`select * from ${tablenm}`, (error, result) => {
            if (error) throw console.log("첫번째 쿼리문 오류" + error)
            res.send(result)
            console.log(result)
            connect.release(); // 연결 해제

        })
    })
})

//글보기  pk id
//리액트요청주소형태 서버/store/번호(pk)
mysqlapi.get('/:tablenm/:Category_no', (req, res) => {
    const tablenm = req.params.tablenm
    const Category_no = req.params.Category_no


    const wheretable = `where id=${Category_no}` // table의 pk는  모두 id로 패턴화함 모든 테이블에 응대처리완료


    myconnection.getConnection((err, connect) => {
        if (err) throw console.log("DB접속정보확인 " + err)
        connect.query(`select * from ${tablenm} ${wheretable}`, (error, result) => {
            if (error) throw console.log("쿼리문 오류")
            res.send(result)
            connect.release(); // 연결 해제

        })
    })
})




module.exports = mysqlapi;