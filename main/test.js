const axios = require('axios');

axios.post('http://192.168.0.73:8080',{
    '0' : 37,
    '1' : 75
})
.then(function(response){
console.log(response);
})
.catch(function(error){
    console.error(error);
});