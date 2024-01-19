import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { GetDataDetailed } from "../../service/handleApi"
import { iDetailsCard } from "../../interface/iDetailsCard";

export const Card = () => {
    const { id } = useParams();

    const [information, setInformation] = useState<iDetailsCard>({
        name: {
            common:"",
            nativeName: {
                [0]: {
                   official:""
                }
            }
        },
        cca3: "",
        population: 0,
        region: "",
        subregion:"",
        continents: [""],
        capital: [""],
        flags: {
            alt: "",
            svg: "",
            png: "",
        },
        tld:[""],
        currencies: {
            [0]:{
                name:""
            }
        },
        languages:{
            [0]:""
        },
        borders:[""]
    })

    const fetchData = async () => {
        const datas = await GetDataDetailed(id)
        const data =()=>{
            for (let i = 0; i < datas.length; i++) {
                return datas[i];
            }
        }
        setInformation(data)
    }
    useEffect(() => { fetchData() }, [id])
    // 6 - redirect
    const navigate = useNavigate();

    const handleContact = () => {
        return navigate("/")
    }
    return (
        <>
            
            <img src={information.flags.svg} alt={information.flags.alt} />
            <h3>{information.name.common}</h3>
            <p>Native Name: {Object.values(information.name.nativeName)[0].official}</p>
            <p>Population: {information.population}</p>
            <p>Region: {information.region}</p>
            <p>Sub Region: {information.subregion}</p>
            <p>Capital: {information.capital}</p>
            <p>Top Level Domain: {information.tld}</p>
            <p>Currencies: {Object.values(information.currencies)[0].name}</p>
            
            <p>Languages: {Object.values(information.languages)[0]} </p>
            <p>Border Countries:
                {information.borders.map((neighborCountry,index) =>{
                    if(neighborCountry.length > 0){
                        return(
                            <Link to={`/details/${neighborCountry}`}  key={index}>
                                <span> {neighborCountry} </span>
                            </Link>
                        )

                    }else{
                        return(
                            <span key={index}>Não existe país com divisa territórial. É uma <strong> ilha! </strong></span>
                        )
                    }
                })}
            </p>

            <button onClick={handleContact}>Back</button>
        </>
    )
}

// http://127.0.0.1:5173/details/SVN
// http://127.0.0.1:5173/details/HUN
