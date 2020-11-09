var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'allwloo',
  password : '2010qe'
});

connection.connect(); //MySQL에 연결

connection.query('SELECT * FROM air.air_db', function(err, data, fields) { // 여기서 select한 field를 data에 저장
  if (err) throw err;
  console.log('데이터는?: ', data[1].humidity); // => humidity field의 배열 첫번째 값


router.get('/', function(req, res){
  
  console.log('http://localhost:5000/api'); 
  res.send(data); // 위 주소에 json 형태로 파일 전송
});                 // 12줄에서 선택한 데이터가 전부 전송된다. {"user":[{"temperature":25,"humidity":1,"co2":1,"finedust":1,"finedust2":1,"room":1,"flag":"1","time":"2020-11-03T13:25:30.000Z"},{"temperature":25,"humidity":2,"co2":3,"finedust":4,"finedust2":5,"room":6,"flag":"7","time":"2020-11-03T13:34:40.000Z"},{"temperature":25,"humidity":1,"co2":1,"finedust":1,"finedust2":1,"room":1,"flag":"1","time":"2020-11-03T13:34:42.000Z"}]}
                    // 
})

connection.end(); // 종료

module.exports = router;