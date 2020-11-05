var express = require('express');
var router = express.Router();
var connection = require('../modules/mysqldb'); // database 연결과정을 모듈로 사용

var list = [101,102,103];

// /rooms에 대한 라우팅 응답
router.get('/',function(req,res,next){

  connection.connect(function(err){ 
    if(err){ // 커넥트 하는 과정에서 콜백함수에서의 에러 처리 
      console.error('error connecting:' + err.stack);
      return;
    }
    
    console.log('Yaho'); 
  });


  for(var i=0; i<list.length; i++){
    connection.query(`SELECT * FROM air WHERE time = (SELECT MAX(time) FROM air WHERE room = ${list[i]})`,function(err,results){ //연결이 됐으면 쿼리문 실행 , 콜백함수의 인자로 results : 데이터베이스 '행'의 배열
      if(err)
          throw err;
      else{
          console.log(`방 ${results[0].room}의 상태`);
          console.log('온도 : ', results[0].temperature);
          console.log('습도 : ', results[0].huminity);
          console.log('미세먼지 : ', results[0].finedust);
          console.log('초미세먼지 : ', results[0].ufinedust);
          console.log('CO2 : ', results[0].co2);
  
          if(results[0].device1 == 1){
            console.log('기기1 : ON');
          }
          else
            console.log('기기1 : OFF');
            
          if(results[0].device2 == 1){
            console.log('기기2 : ON');
          }
          else
            console.log('기기2 : OFF');
  
          if(results[0].device3 == 1){
            console.log('기기3 : ON');
            console.log('');
          }
          else
            console.log('기기3 : OFF');
            console.log('');
          if(results[0].fire == 1){ //불났을 때
              //미구현
          }
      }
    });
  }
  res.send('hello');
})


module.exports=router;




