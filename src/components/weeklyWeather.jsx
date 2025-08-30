import '../app.css'
const WeeklyForecast = ({ data }) => {
  return (
    <div className="flex justify-between mt-6">
      {data.map((day, i) => (
        <div
          key={i}
          className="text-center sm:p-4 md:p-8 lg:p-12 xl:p-15 rounded-xl bg-gray-100 shadow"
        >
          <p className="text-sm">{day.day}</p>
          <p className="text-lg font-medium">{day.temp}°</p>
          <p className="text-xs text-gray-500">{day.condition}</p>
        </div>
      ))}
    </div>
  );
};

export default WeeklyForecast;
