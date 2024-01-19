import { useEffect, useState } from "react"
import { CardList } from "../../components/cardList"
import { SearchBar } from "../../components/searchBar"
import { GetDatas } from "../../service/handleApi"
import { iCards } from "../../interface/iCards"

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
        <main>
            <div>
                <SearchBar search={search} setSearch={setSearch}/>
                <OptionSelect selection={selection} setSelection={setSelection}/>
            </div>
            <section>
                <CardList search={search} countries={countries} selection={selection}/>
            </section>
        </main>
    )
}

export { HomePage }