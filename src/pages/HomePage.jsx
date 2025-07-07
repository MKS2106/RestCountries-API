import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
function HomePage() {
  const {
    data = [],
    error,
    loading,
  } = useFetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,borders"
  );
//   console.log(data);
  const countries = data;
  // console.log(countries);
  return (
    <>
      <h1 className="text-2xl font-bold mb-2">All Countries</h1>
      <div className="grid grid-cols-3 gap-4">

     
      {countries &&
        countries.map((country) => (
          <Link
            key={country.name.common}
            to={`/country/${country.name.common}`}
            className="mt-4 bg-gray-200 rounded shadow p-2"
          >
            <h2 className="text-xl font-semibold">{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <img src={country.flags.png} />
          </Link>
        ))}
         </div>
    </>
  );
}
export default HomePage;
