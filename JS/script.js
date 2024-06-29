var btn = document.querySelector(".mybtn");
var input = document.querySelector(".myinput");
btn.addEventListener("click", function () {
  var searchKey = input.value;

  getWeather(searchKey);
});

async function getWeather(searchKey) {
  var response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=9f4adf72273542fab28182602242906&q=${searchKey}&days=3`
  );
  var data = await response.json();

  document.querySelector("#current-condition").innerHTML =
    data.current.condition.text;
  document.querySelector("#next-condition").innerHTML =
    data.forecast.forecastday[1].day.condition.text;
  document.querySelector("#later-condition").innerHTML =
    data.forecast.forecastday[2].day.condition.text;
  document.querySelector(".current").innerHTML =
    data.forecast.forecastday[0].date;
  document.querySelector(".next").innerHTML = data.forecast.forecastday[1].date;
  document.querySelector(".later").innerHTML =
    data.forecast.forecastday[2].date;
  document.querySelector(".location").innerHTML = data.location.name;
  document.querySelector(".last-location").innerHTML = data.location.name;
  document.querySelector(".card-content-2 .location").innerHTML =
    data.location.name;
  document.querySelector("#num-1").innerHTML = data.current.temp_c;
  document.querySelector("#num-2").innerHTML =
    data.forecast.forecastday[1].day.maxtemp_c;
  document.querySelector("#num-3").innerHTML =
    data.forecast.forecastday[2].day.maxtemp_c;
  document.querySelector(".night-temp-0").innerHTML =
    data.forecast.forecastday[0].day.mintemp_c + "°";
  document.querySelector(".night-temp-1").innerHTML =
    data.forecast.forecastday[1].day.mintemp_c + "°";
  document.querySelector(".night-temp-2").innerHTML =
    data.forecast.forecastday[2].day.mintemp_c + "°";

  document
    .querySelector("#current-icon")
    .setAttribute("src", `${data.current.condition.icon}`);
  document
    .querySelector("#new-icon")
    .setAttribute("src", `${data.forecast.forecastday[1].day.condition.icon}`);
  document
    .querySelector("#later-icon")
    .setAttribute("src", `${data.forecast.forecastday[2].day.condition.icon}`);
}
