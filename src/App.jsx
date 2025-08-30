import { useEffect, useState } from "react";
import Header from "./components/Header";
import CurrentWeather from "./components/currentWeather";
import HourlyForecast from "./components/hourlyWeather";
import WeeklyForecast from "./components/weeklyWeather";
import './app.css'
const App = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&hourly=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode&current_weather=true&timezone=auto"
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      });
  }, []);

  if (!weather) return <p className="text-center mt-20">Loading...</p>;

  const current = weather.current_weather;
  const hourly = weather.hourly.time.slice(0, 6).map((t, i) => ({
    time: new Date(t).getHours() + ":00",
    temp: weather.hourly.temperature_2m[i],
    condition: "Cloudy", // map weathercode here
  }));

  const daily = weather.daily.time.map((t, i) => ({
    day: new Date(t).toLocaleDateString("en-US", { weekday: "short" }),
    temp: weather.daily.temperature_2m_max[i],
    condition: "Sunny", // map weathercode here
  }));

  return (
    <div className="lg:max-w-11/12 mx-auto bg-white p-6 rounded-2xl shadow-lg mt-10 ">
      <Header
        city="New Delhi"
        date={new Date().toLocaleDateString("en-GB")}
      />
      <CurrentWeather
        temperature={current.temperature}
        condition="Cloudy"
        wind={current.windspeed}
        humidity={90}
      />
      <HourlyForecast data={hourly} />
      <WeeklyForecast data={daily} />
    </div>
  );
};

export default App;
