const express = require("express");
const mysql = require("mysql");
const mydbinfo = require("../data/dbconfig.json")

const mysqlapi = express.Router();

// mysqlapi.use(express.json())
// mysqlapi.use(express.urlencoded({ extended: true }))

const myconnection = mysql.createPool(mydbinfo)

mysqlapi.get('/:tablenm', (req, res) => {
    const tablenm = req.params.tablenm;


    // const wheretable = p_id !== "" ? ` where p_id =${p_id}` : null
    myconnection.getConnection((err, connect) => {
        if (err) throw console.log("DB접속정보확인 " + err)
        connect.query(`select * from ${tablenm}`, (error, result) => {
            if (error) throw console.log("첫번째 쿼리문 오류" + error)
            res.send(result)
            // console.log(result)

        })
    })
})


mysqlapi.get('/:tablenm/:Category_no', (req, res) => {
    const tablenm = req.params.tablenm
    const Category_no = req.params.Category_no
    const wheretable = `where Category_no=${Category_no}`

    myconnection.getConnection((err, connect) => {
        if (err) throw console.log("DB접속정보확인 " + err)
        connect.query(`select * from ${tablenm} ${wheretable}`, (error, result) => {
            if (error) throw console.log("쿼리문 오류")
            res.send(result)

        })
    })
})




module.exports = mysqlapi;