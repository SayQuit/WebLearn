const dt=require('./8-npm')
const moment=require('moment')


const date=new Date()
console.log(date);

var mynewdate=dt.dateformat(date)
console.log(mynewdate);

var newdate=moment().format('YYYY-MM-DD kk:mm:ss')
console.log(newdate);