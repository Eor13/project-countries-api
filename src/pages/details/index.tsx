import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GetDataDetailed} from "../../service/handleApi"

export const Card =()=>{
    const {id} = useParams();

    const [informations, setInformations] = useState([{
        name:"",
        nativeName: "",
        population: 0,
        region: "",
        subregion:"",
        capital: "",
        flag: "",
        topLevelDomain:[],
        currencies:[{}],
        languages:[{}],
        borders:[],

    }])

    const FetchData = async () => {
        const datas = await GetDataDetailed()
        setInformations(datas)
    }

    useEffect(() => { FetchData() }, [])
    const details = () =>{
        informations.map((country) => {
            while (id ==country.name) {
                return country
            }
        })
    } 
    console.log(details)

    // 6 - redirect
    const navigate = useNavigate();

    const handleContact =()=>{
        console.log("Olá")
        return navigate("/")
    }

    return(
        <>  
            {informations.map((country,index) => {
                return(
                    <div key={index}>
                        <img src={country.flag} alt="Image Country" />
                        {/* <h3>{country.name}</h3> */}
                        <p>Population: {country.population}</p>
                        <p>Region: {country.region}</p>
                        <p>capital: {country.capital}</p>
                    </div>
            )})}
            <p>Olá Mundo! O país é {id}</p>
            <button onClick={handleContact}>Back</button>
        </>
    )
}