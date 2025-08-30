import '../app.css'
const Header = ({ city, date }) => {
  return (
    <div className="flex justify-between items-center text-gray-700 mb-6">
      <h1 className="text-lg font-medium">{city}</h1>
      <span className="text-sm">{date}</span>
    </div>
  );
};

export default Header;
