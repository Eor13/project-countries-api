interface SelectProps{
    selection:string;
    setSelection: (event:string) => void

}

export const OptionSelect = ({selection, setSelection}:SelectProps) => {
    return (
        <select 
            onChange={(e) =>{setSelection(e.target.value)}} 
            value={selection}
        >
            <option className="region" value="all">Filter By region</option>
            <option className="region" value="Africa">Africa</option>
            <option className="region" value="Americas">Americas</option>
            <option className="region" value="Asia">Asia</option>
            <option className="region" value="Europe">Europe</option>
            <option className="region" value="Oceania">Oceania</option>
        </select>
    )
}