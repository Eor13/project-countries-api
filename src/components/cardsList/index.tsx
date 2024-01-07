import { useEffect, useState } from "react"
import { GetDatas } from "../../service/handleApi"
import { Link } from "react-router-dom"

export const CardList = () => {
    const [informations, setInformations] = useState([{
        name: "",
        population: 0,
        region: "",
        capital: "",
        flag: ""
    }])

    const FetchData = async (): Promise<void> => {
        const datas = await GetDatas()
        setInformations(datas)
    }
    useEffect(() => { FetchData() }, [])

    return (
        <>
            {informations.map((country,index) => {
                return(
                    <Link to={`/details/${country.name }`}  key={index}>
                        <img src={country.flag} alt="Image Country" />
                        <h3>{country.name}</h3>
                        <p>Population: {country.population}</p>
                        <p>Region: {country.region}</p>
                        <p>capital: {country.capital}</p>
                    </Link>
            )})}
        </>
    )
}
