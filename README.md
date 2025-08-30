# ☀️ Weather Now App

![Project Status](https://img.shields.io/badge/Status-Complete-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Overview

Weather Now is a clean, modern web application designed to provide instant, hyper-local weather information by automatically detecting the user's current location. Built for those who need quick weather updates on the go, it presents current conditions, a detailed hourly forecast, and a 7-day outlook in a clear, easy-to-read format.

The application leverages the browser's Geolocation API to get the user's coordinates and then fetches comprehensive data from the Open-Meteo API to deliver accurate and relevant weather information.

## 🚀 Features

*   **Automatic Location Detection:** Provides weather for your exact location upon granting permission.
*   **At-a-Glance Current Weather:** An immediate overview of the temperature, conditions (e.g., sunny, cloudy, rain), and wind speed.
*   **Detailed Hourly Forecast:** Plan your day with a precise hour-by-hour weather breakdown.
*   **7-Day Weekly Outlook:** See the weather trends for the week ahead, including daily high and low temperatures.
*   **Responsive Design:** A seamless and optimized experience on desktops, tablets, and mobile phones.
*   **Graceful Permissions Handling:** Provides clear feedback if location access is denied.

## 🛠️ Technologies Used

*   **Frontend Framework:** React
*   **Styling:** Tailwind CSS
*   **API Integration:**
    *   **Browser Geolocation API:** To determine the user's current coordinates.
    *   **Open-Meteo API:** For fetching all weather data.
*   **Build Tool:** Vite
*   **Deployment:** CodeSandbox

## 🌟 Live Demo

Experience the app live:
[**Click Here to See the Live Demo**]([YOUR_LIVE_DEMO_URL_FROM_CODESANDBOX_OR_STACKBLITZ])


## 🗺️ API Integration Details

The application follows a two-step process to display weather:

1.  **Geolocation:** It first requests the user's permission to access their location via the browser's built-in Geolocation API.
2.  **Weather Fetching:** Once latitude and longitude are obtained, it makes an API call to Open-Meteo to fetch the relevant current, hourly, and daily weather data for those coordinates.

## 🔮 Future Enhancements

*   **Manual City Search:** Implement a search bar as an alternative for users who deny location access or want to check other cities.
*   **Unit Conversion:** Add a toggle to switch between Celsius and Fahrenheit.
*   **Saved Locations:** Allow users to save a list of favorite cities.
*   **Theming:** Add a dark mode/light mode option.

## 📄 License

This project is licensed under the MIT License.

## 📧 Contact

Abhishek Maurya
