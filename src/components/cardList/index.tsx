import { iCards } from "../../interface/iCards";
import { Card, Row } from "react-bootstrap";
import "./style.css"


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
        <Row lg={4} sm={4} className="d-flex justify-content-center gap-4" >
            {
                filteredCountries.length > 0 && (
                    filteredCountries(countries)?.filter((country) => {
                        const CountryName = country.name.common.toLowerCase()
                        const searchRegionCountryName = search.toLowerCase()
                        return CountryName.includes(searchRegionCountryName)
                    }
                    ).map((country, index) => {
                        return (
                            < Card key={index} className="mt-2" id="card-list">
                                        <Card.Link href={`/details/${country.cca3}`}>
                                            <Card.Img 
                                                src={country.flags.png} 
                                                alt={country.flags.alt}
                                                className="img-fluid shadow-lg image-card-list"
                                            />
                                        </Card.Link>
                                        <Card.Body className="d-flex flex-column justify-content-end fs-6 text-nowrap p-0 ps-1">
                                            <Card.Title className="fs-4 text-wrap">
                                                {country.name.common} 
                                            </Card.Title>
                                            <Card.Text className="mb-1"> Population: {country.population} </Card.Text>
                                            <Card.Text className="mb-1"> Region: {country.region} </Card.Text>
                                            <Card.Text className="mb-1"> Capital: {country.capital} </Card.Text>
                                        </Card.Body>
                                    </Card>
                        )
                    }))
            }

        </Row>
    )
}
