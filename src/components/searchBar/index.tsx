import { Form } from "react-bootstrap";

interface SearchProps{
    search: string;
    setSearch: (Event:string) => void;
}

export const SearchBar = ({search, setSearch}:SearchProps) => {
    return <Form.Control
                type="text" 
                name="filter"
                placeholder="Searche for  a country.." 
                onChange={(e)=>{setSearch(e.currentTarget.value)}}
                value={search}
                className="w-50"
            />
}