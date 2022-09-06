const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const db = mysql.createPool({

})
router.get('/select', (req, res) => {
    let result = ''
    db.query('select*from new_table', (err, res) => {
        if (err){
            result='MYSQL ERR'
        }
        else {
            result=res
        }
    })

    console.log('res:'+result);
    res.send('result')
})

router.get('/insert', (req, res) => {
    const name='赵六'
    const insertStr='insert into new_table(name) values (?)'
    db.query(insertStr, [name],(err, results) => {
        if(err)console.log(err)
        else console.log(results);
    })
    res.send('ok')

    // const insert='insert into user set ?'
    // db.query(insert, user,(err, results) => {

    // })

})
router.get('/select', (req, res) => {
    let result = ''
    db.query('select*from new_table', (err, res) => {
        if (err){
            result='MYSQL ERR'
        }
        else {
            result=res
        }
    })

    console.log('res:'+result);
    res.send('result')
})
router.get('/update', (req, res) => {
    let result = ''
    // const sqlstr='update new_table set ? where name=?'
    db.query('update new_table set name="王七" where name="王五"', (err, res) => {
        if (err){
           
        }
        else {
            
        }
    })

    res.send('ok')

})
router.get('/delete', (req, res) => {
    let result = ''
    
    db.query('delete from new_table where name="王七"', (err, res) => {
        if (err){
           
        }
        else {
            
        }
    })

    res.send('ok')

})

module.exports = router