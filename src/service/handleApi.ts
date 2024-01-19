import { iCards } from "../interface/iCards"

async function GetDatas(): Promise<iCards[]>{
    const urlApi = "https://restcountries.com/v3.1/all"
    const response = await fetch(urlApi)
    return await response.json()
}

async function GetDataDetailed(code:string | undefined){
    const urlApi = `https://restcountries.com/v3.1/alpha/${code}`
    const response = await fetch(urlApi)
        return await response.json()
}
async function GetDataRegion(region: string | undefined){
    const urlApi = `https://restcountries.com/v3.1/region/${region}`
    const response = await fetch(urlApi)
        return await response.json()
}

export { GetDatas, GetDataDetailed, GetDataRegion}