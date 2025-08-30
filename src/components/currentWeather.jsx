import '../app.css'
const CurrentWeather = ({ temperature, condition, wind, humidity }) => {
  return (
    <div className="text-center">
      <h2 className="text-6xl font-bold">{temperature}°</h2>
      <p className="text-lg text-gray-600">{condition}</p>
      <div className="flex justify-center gap-6 mt-2 text-gray-500">
        <span>💨 {wind} mph</span>
        <span>💧 {humidity}%</span>
      </div>
    </div>
  );
};

export default CurrentWeather;
