const axios = require('axios'); //axios 모듈(라이브러리) 사용
var express = require('express');
var router = express.Router();
//    /devices 에 대한 라우팅

router.post('/',function(req,res,next){ //리액트로부터 기기수동제어신호를 post방식으로 받음
    console.log(req.body);
    console.log(typeof(req.body));
    res.send(req.body);

    
    axios.post('http://192.168.0.4:8080', req.body) //받은 수동제어신호를 Pi에 POST 방식으로 전송
    .then(function(response){
    console.log(response);
    })
    .catch(function(error){
    console.error(error);
    });
});


module.exports = router;







