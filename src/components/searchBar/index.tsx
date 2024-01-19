interface SearchProps{
    search: string;
    setSearch: (Event:string) => void;
}

export const SearchBar = ({search, setSearch}:SearchProps) => {
    return <input 
                type="text" 
                name="filter" 
                placeholder="Searche for  a country.." 
                onChange={(e)=>{setSearch(e.currentTarget.value)}}
                value={search}
            />
}