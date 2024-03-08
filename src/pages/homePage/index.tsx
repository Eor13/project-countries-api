import { useEffect, useState } from "react"
import { CardList } from "../../components/cardList"
import { SearchBar } from "../../components/searchBar"
import { GetDatas } from "../../service/handleApi"
import { iCards } from "../../interface/iCards"
import { OptionSelect } from "../../components/optionSelect"
import { Container, Row } from "react-bootstrap"


const HomePage = () => {
    const [search, setSearch] = useState<string>("")
    const [selection, setSelection] = useState<string>("all")
    const [countries, setCountries] = useState<iCards[]>([])

    useEffect(() => {
        const FetchData = async (): Promise<void> => {
            const datas:iCards[] = await GetDatas()
            setCountries([...datas])
        }
        FetchData()

     }, [])

    return (
        <Container className="d-flex flex-column">
            <Row lg={4} sm={4} className="d-flex justify-content-between px-2 mb-4">
                <SearchBar search={search} setSearch={setSearch} />
                <OptionSelect selection={selection} setSelection={setSelection}/>
            </Row>
            
            <CardList search={search} countries={countries} selection={selection}/>
        </Container>
    )
}

export { HomePage }