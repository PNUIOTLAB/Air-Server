const axios = require('axios');

axios.post('http://192.168.0.49:8080',{
    '0' : 18,
    '1' : 60})
.then(function(response){
console.log(response);
})
.catch(function(error){
    console.error(error);
});