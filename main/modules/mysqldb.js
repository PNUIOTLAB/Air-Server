var mysql = require('mysql'); //express에서 mysql과 연동을 하기 위한 npm패키지

var connection = mysql.createConnection({ // 불러온 mysql 객체의 createConnection 메소드를 통해서 connection 객체를 반환
    host : '127.0.0.1', //localhost
    user : 'root',
    password : '2010qe',
    database : 'air_status',
    port : 3306
  }); //연결하려는 데이터베이스의 정보

  module.exports = connection;