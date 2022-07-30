const fetch = require ('node-fetch');
const fs = require ('fs');
const readlineSync = require ('readline-sync');

const dataAPI = () => new Promise ((resolve, reject) => {
    fetch('https://api.binderbyte.com/v1/track?api_key=a493abe1021d175a3b001d83ad504bc82cd477d728f837e2db242c1736a84e7b&courier&awb', {
        method : 'GET',
        headers: {
            'content-type': 'application/json'
        },
    })
})

(async () => {
  
    const dataAPInya = await dataAPI();
    console.log(dataAPInya);

})();