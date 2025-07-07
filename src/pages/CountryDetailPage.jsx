import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function CountryDetailPage(){
    const { countryname } = useParams();
     console.log({countryname})
    const {data, error, loading} = useFetch(`https://restcountries.com/v3.1/name/${countryname}`)
     
    console.log(data)
    const country = data && data[0];
    return(
        <>
            <h1 className="text-2xl text-center font-bold mb-2">
                Country Details
            </h1>
            <div className="font-bold">
                    <p>Country Name:{country && country.name.common} </p>
                    <p>Capital City:{country && country.capital}</p>
                    <img src={country && country.flags.png}/>
            </div>
        

        </>

    )
}
export default CountryDetailPage;