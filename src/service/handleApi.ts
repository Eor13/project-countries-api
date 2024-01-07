import { iCards } from "../interface/iCards"

async function GetDatas(): Promise<iCards[]>{
    const response = await fetch("data.json")
        return await response.json()
}

async function GetDataDetailed(){
    const response = await fetch("./../data.json")
        return await response.json()
}

export { GetDatas, GetDataDetailed }