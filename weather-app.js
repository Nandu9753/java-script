const apiKey = "9c5620c1dced4b9e8d374528231008";
    const dateTime = document.getElementById("dateTime");
    const cityInput = document.getElementById("citySearch");
    const city = document.getElementById("city");
    const humidity = document.getElementById("humidity");
    const rain = document.getElementById("rain");
    const cloudy = document.getElementById("cloudy");
    const wind = document.getElementById("wind");
    const temp = document.getElementById("temp")
    cityInput.addEventListener("focusout", () => {
      const cityName = cityInput.value;
      if (cityName.trim() === "") {
        alert("Please enter a valid city name.");
        return;
      }
      async function getWeather(){
         const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=1&aqi=no&alerts=no`);
         const responseData = await response.json();
         return responseData;
      }
      let weather = getWeather();
      const displayWeather = (data) =>{
        const {current,forecast,location} = data;
        console.log(data);
        city.innerHTML = location.name;
        dateTime.innerHTML = location.localtime;
        rain.innerHTML = current.precip_mm + "mm";
        humidity.innerHTML = current.humidity  + "%" ;
        wind.innerHTML = current.wind_kph + "1km/h";
        cloudy.innerHTML = current.cloud + "%";
        temp.innerHTML = current.temp_c + "";
        
      }
      const displayError = (error) => alert("something wrong");
      weather.then(data => { displayWeather(data)  }).catch(error => { displayError(errror) })
    });