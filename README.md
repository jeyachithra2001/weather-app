# 🌦️ Weather Report Application

A responsive Weather Report Application built using React.js and the OpenWeatherMap API. This application allows users to search for any city and view its current weather conditions along with detailed weather information.

## ✨ Features

- 🔍 Search weather by city name.
- 🌡️ Display current temperature in Celsius.
- ☁️ Show weather conditions and descriptions.
- 🌤️ Display weather icons.
- 🤗 Show feels-like temperature.
- 💧 Display humidity percentage.
- 💨 Show wind speed.
- 🌐 Display latitude and longitude.
- 👁️ Show visibility in kilometers.
- 🧭 Display atmospheric pressure.
- ☁️ Display cloud coverage percentage.
- 📅 Show the current day and date.
- 📱 Responsive design for different screen sizes.
- ⚠️ Handle invalid city names and API errors.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- React.js
- Axios
- OpenWeatherMap API
- Font Awesome

## 🌤️ Weather Information

The application retrieves weather data from the OpenWeatherMap API.

| Weather Detail | API Property |
|---|---|
| City Name | `data.name` |
| Temperature | `data.main.temp` |
| Weather Condition | `data.weather[0].main` |
| Feels Like | `data.main.feels_like` |
| Humidity | `data.main.humidity` |
| Wind Speed | `data.wind.speed` |
| Longitude | `data.coord.lon` |
| Latitude | `data.coord.lat` |
| Visibility | `data.visibility` |
| Pressure | `data.main.pressure` |
| Cloud Coverage | `data.clouds.all` |

## 🚀 Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/jeyachithra2001/weather-app.git
```

### 2. Navigate to the project folder

```bash
cd weather-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure the API key

Create an account at [OpenWeatherMap](https://openweathermap.org/api) and obtain an API key.

Configure the API key in your application. If you use a Vite `.env` file, add:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

Access it in your code using:

```js
const api_key = import.meta.env.VITE_OPENWEATHER_API_KEY;
```

Do not upload your real API key or `.env` file to GitHub.

### 5. Run the application

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## 📁 Project Structure

```text
weather-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── bottom-details.jsx
│   │   ├── quote.jsx
│   │   └── weather.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## 🎯 Project Objective

The objective of this project is to develop a responsive weather application using React.js and API integration to retrieve and display real-time weather information based on the user's city search.

## 🔗 API Documentation

[OpenWeatherMap API](https://openweathermap.org/api)

## 👩‍💻 Author

**Jeya Chithra**

GitHub: [@jeyachithra2001](https://github.com/jeyachithra2001)

---

⭐ If you like this project, please give it a star!
