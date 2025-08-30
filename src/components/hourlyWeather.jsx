import '../app.css'
const HourlyForecast = ({ data }) => {
  return (
    <div className="mt-6">
      <h3 className="text-md font-semibold mb-2">Hourly Forecast</h3>
      <div className="grid grid-cols-6 gap-2">
        {data.map((hour, i) => (
          <div
            key={i}
            className="p-3 bg-gray-100 rounded-xl text-center shadow"
          >
            <p className="text-sm">{hour.time}</p>
            <p className="text-lg font-medium">{hour.temp}°</p>
            <p className="text-xs text-gray-500">{hour.condition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
