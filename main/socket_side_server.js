var udp = require('dgram'); //dgram 모듈을 불러옴
var connection = require('./modules/mysqldb');

// creating a udp server
var server = udp.createSocket('udp4');  // dgram socket -> udp 방식의 socket을 사용하는 객체 생성



//socket binding 
server.bind(2222,() => {
  console.log("bind sucess")
});


// emits when any error occurs
server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});


//'message' 이벤트가 발생했을 때 -> UDP/socket 통신을 통해서 데이터를 받았을 때
server.on('message',function(msg,info){
  console.log('Received %d bytes from %s:%d\n',msg.length, info.address, info.port);
  console.log('Data received from client : ' + msg.toString()); // pi 와 UDP/socket 통신으로 수신받은 버퍼 데이터
  var data = msg.toString(); //문자열로 변환
  
  // 수신받은 문자열을 ,으로 파싱
  var list = data.split(',');
  var sql = `INSERT INTO air (temperature,huminity,finedust,ufinedust,co2,room,device1,device2,device3,device4,device5,device6,fire,time,temp_hope,hum_hope) 
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  params = [list[0],list[1],list[2],list[3],list[4],list[5],list[6],list[7],list[8],list[9],list[10],list[11],list[12],list[13],list[14],list[15]];


  connection.query(sql,params,function(err,rows,fields){
      if(err)
          console.log(err);
      else
          console.log(rows.insertld);
  });
});


//emits when socket is ready and listening for datagram msgs
server.on('listening',function(){
  var address = server.address();
  var port = address.port;
  var family = address.family;
  var ipaddr = address.address;
  console.log('Server is listening at port' + port);
  console.log('Server ip :' + ipaddr);
  console.log('Server is IP4/IP6 : ' + family);
});






