import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export async function fetchData(country){
    let modifiedURL = url;
    if(country){
        modifiedURL=`${url}/countries/${country}`;
    }
    try {
        let response = await axios.get(modifiedURL);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const fetchDailyData = async ()=>{
    
    try {
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) =>({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            reportDate:dailyData.reportDate,
        }))
        
        return modifiedData;
        
    } catch (error) {
        console.error(error);
    }
}

export const fetchCountries = async()=>{
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);
        return countries.map((country)=>country.name);
    } catch (error) {
        console.error(error);
    }
}