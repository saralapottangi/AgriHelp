function showSuggestions() {
  const season = document.getElementById("season").value;
  const cropResult = document.getElementById("cropResult");

  const suggestions = {
    summer: "Maize, Millets, Cotton",
    rainy: "Paddy, Sugarcane, Soybean",
    winter: "Wheat, Mustard, Barley",
  };

  cropResult.textContent = "Suggested Crops: " + suggestions[season];
}

function getAdvice() {
  const crop = document.getElementById("crop").value;
  const soil = document.getElementById("soil").value;
  const advice = `For crop ${crop}, sandy loam soil is best. You entered ${soil}. Ensure proper irrigation.`;
  document.getElementById("adviceResult").textContent = advice;
}

function getWeather() {
  const city = document.getElementById("city").value;
  const key = "9cb5d6a1fe1154c099c200f2acc778e6"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.cod === 200) {
        const temp = data.main.temp;
        const desc = data.weather[0].description;
        document.getElementById("weatherResult").textContent =
          `🌡 Temperature: ${temp}°C, Condition: ${desc}`;
      } else {
        document.getElementById("weatherResult").textContent = "City not found.";
      }
    })
    .catch(err => {
      document.getElementById("weatherResult").textContent = "Error fetching weather.";
    });
}

function switchLanguage() {
  const lang = document.getElementById("lang").value;
  const h1 = document.querySelector("h1");
  if (lang === "hi") {
    h1.textContent = "🌾 एग्रीहेल्प: किसान सूचना पोर्टल";
  } else {
    h1.textContent = "🌾 AgriHelp: Farmer Info Portal";
  }
}

const prices = [
  { name: "Wheat", price: "₹22/kg" },
  { name: "Rice", price: "₹18/kg" },
  { name: "Cotton", price: "₹55/kg" },
];

window.onload = () => {
  const ul = document.getElementById("marketPrices");
  prices.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name}: ${item.price}`;
    ul.appendChild(li);
  });
};
