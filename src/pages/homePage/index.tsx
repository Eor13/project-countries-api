import { CardList } from "../../components/cardsList"

const HomePage = () => {
    return (
        <main>
            <div>
                <input type="text" placeholder="Searche for  a country.." />
                <select name="filterCountry" id="">
                    <option value="Brazil">Brazil</option>
                    <option value="EUA">EUA</option>
                </select>
            </div>
            <section>
                <CardList/>
            </section>

        </main>
    )
}

export { HomePage }