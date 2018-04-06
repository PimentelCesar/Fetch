fetch('https://jsonplaceholder.typicode.com/albums/2')
.then(function(response){
      return response.json();
})
.then(function(x){
  console.log(x.title);
});