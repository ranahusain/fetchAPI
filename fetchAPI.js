let promise = fetch("https://jsonplaceholder.typicode.com/users");
promise
  .then((v1) => {
    return v1.json();
  })
  .then((v2) => console.log(v2));
