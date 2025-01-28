function updateTime() {
  let cities = ["Africa/Johannesburg", "America/New_York", "Asia/Tokyo"];

  cities.forEach((city) => {
    let cityName = city.replace("_", "").split("/");
    console.log({ cityName });
    let cityElement = document.querySelector(`#${cityName[1]}`);

    console.log({ cityElement });
    if (cityElement) {
      let dateElement = cityElement.querySelector(".date");
      let timeElement = cityElement.querySelector(".time");
      let cityTime = moment().tz(city);

      dateElement.innerHTML = cityTime.format("MMMM Do YYYY");
      timeElement.innerHTML = cityTime.format("h:mm:ss[<small>]A[</small>]");
    }
  });
}

setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", function (event) {
  let selectedCity = event.target.value;

  if (selectedCity === "current") {
    alert("This feature is not implemented yet!");
  } else if (selectedCity) {
    let cityTime = moment().tz(selectedCity);
    let cityName = selectedCity.split("/")[1].replace("_", " ");
    let cityElement = document.querySelector("#cities");

    cityElement.innerHTML = ` 
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
      "A"
    )}</small></div>
    </div>
    <a href="#" id="return-home">Return to Homepage</a>`;

    document
      .querySelector("#return-home")
      .addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior
        showHomepage();
      });
  }
});

function showHomepage() {
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `
    <div class="homepage">
      <h2>Welcome to the World Clock App</h2>
      <p>Select a city to view its current time and date.</p>
    </div>`;
}
updateTime();
