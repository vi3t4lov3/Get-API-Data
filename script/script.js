var getDataEL = document.querySelector('#data');
var apiUrlInput = prompt("Please enter an api url to check");
// https://api.themoviedb.org/3/movie/now_playing?api_key=048b1b9e7d22100a1f7a619469d30c91&language=en-US&page=1
function getApiData() {
    var requestURL = `${apiUrlInput}`;
    fetch(requestURL)
      .then(function (response) {
          return response.json();
        })
      .then(function (data) {
        console.log(data);
        // getDataEL.innerHTML = data;
        getDataEL.append(`${data}`)
      })
    }
    getApiData();