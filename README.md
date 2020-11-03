# Air-Server
===========


2020년 11월 03 파이널컷

./main/app.js가 메인이 되는 js파일.

./main/routes에 있는 파일들이 나누어진 라우터들!  
localhost:3000/dataReceiver -> dataReceiver.js => UDP로 2222번 포트를 열고 더미 데이터 수신하는 기능 구현 완료👌  
localhost:3000/dataSender -> dataSender.js => UDP로 2222번 포트를 열고 더미 데이터 송신하는 기능 구현 완료👌  
localhost:3000/users -> users.js => mysql에서 database를 받아 유저에게 제공하는 기능 구현 中 주석처리로 mysql 모듈의 예제 올려놓음. 
현재는 'respond with a resource'라는 텍스트만 출력된다.  
localhost:3000/ -> index.js => 현재는 'respond with a resource'라는 텍스트만 출력된다. 

./main/views 폴더와 render 명령어는 사용 안했습니다... react로 사용하면 어차피 필요없을 것 같음.  
./main/bin/www << 쓰면 좋을 것 같은데 제 능력의 부족으로 이해못함 누가 알아와주셈...ㅎ  

