const axios = require("axios");
axios.get("https://jsonplaceholder.typicode.com/users").then((v1) => {
  console.log(v1.data);
});
