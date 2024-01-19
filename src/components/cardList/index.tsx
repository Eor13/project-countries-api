import { Link } from "react-router-dom";
import { iCards } from "../../interface/iCards";
import "./style.css";


interface CountriesCardProps {
    countries: iCards[];
    search: string;
    selection: string;
}

export const CardList = ({ countries, search, selection }: CountriesCardProps) => {
    
    const CountryAll = ((countries: iCards[]) => {

        if (selection == "all") return countries
        
        return countries.filter( (countries) => { return countries.region === selection })
    })

    const filteredCountries = CountryAll

    return (
        <>
            {
                filteredCountries.length > 0 && (
                    filteredCountries(countries)?.filter((country) => {
                        const CountryName = country.name.common.toLowerCase()
                        const searchRegionCountryName = search.toLowerCase()
                        return CountryName.includes(searchRegionCountryName)
                    }
                    ).map((country, index) => {
                        return (
                            < Link className="card" to={`/details/${country.cca3}`} key={index}>
                                <img src={country.flags.png} alt={country.flags.alt} />
                                <h3>{country.name.common}</h3>
                                <p>Population: {country.population}</p>
                                <p>Region: {country.region}</p>
                                <p>capital: {country.capital}</p>
                            </Link>
                        )
                    }))
            }

        </>
    )
}
