var express = require('express');
var router = express.Router();
var connection = require('../modules/mysqldb');

/*
  connection.connect(function(err){ 
    if(err){ // 커넥트 하는 과정에서 콜백함수에서의 에러 처리 
      console.error('error connecting:' + err.stack);
      return;
    }
  });//connect callback*/
  //connect를 중복하게 되어서 handshaking 문제가 발생

router.get('/:roomNum',function(req,res,next){  
    connection.query(`SELECT * FROM air WHERE time = (SELECT MAX(time) FROM air WHERE room = ${req.params.roomNum}) and room = ${req.params.roomNum}`
    ,function(err,results){
        if(err)
            throw err;
        else{
            var data = results[0];
            var roomdata = `방${results[0].room}의 상태\n
            온도 : ${results[0].temperature}\n
            습도 : ${results[0].huminity}\n
            미세먼지 : ${results[0].finedust}\n
            초미세먼지 : ${results[0].ufinedust}\n
            CO2 : ${results[0].co2}\n\n
            기기1 : ${results[0].device1}\n
            기기2 : ${results[0].device2}\n
            기기3 : ${results[0].device3}\n
            기기4 : ${results[0].device4}\n
            기기5 : ${results[0].device5}\n
            기기6 : ${results[0].device6}\n
            화재 : ${results[0].fire}\n
            희망 온도 : ${results[0].temp_hope}\n
            희망 습도 : ${results[0].hum_hope}\n`
            console.log(req.params.roomNum);
            console.log(data);
            
            res.send(data);
        }
    });
});

module.exports = router;