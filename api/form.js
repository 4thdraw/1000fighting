const express = require("express");
const mysql = require("mysql");
const mydbinfo = require("../data/dbconfig.json")

const formtag = express.Router();

formtag.use(express.json())
formtag.use(express.urlencoded({ extended: true }))

const myconnection = mysql.createPool(mydbinfo)

formtag.post('/:tablenm', (req, res) => {
    const tablenm = req.params.tablenm;
    const {
        u_name,
        u_phone,
        u_email,
        marketing
    } = req.body.body;




    // const wheretable = p_id !== "" ? ` where p_id =${p_id}` : null
    myconnection.getConnection((err, connect) => {
        if (err) throw console.log("DB접속정보확인 " + err)
        connect.query(`INSERT INTO ${tablenm}(u_name , u_phone , u_email , marketing) VALUES("${u_name}","${u_phone}","${u_email}","${marketing}")`, (error, result) => {
            if (error) throw console.log("첫번째 쿼리문 오류" + error)
            res.send(result)
            console.log(result)


        })
    })
})







module.exports = formtag;