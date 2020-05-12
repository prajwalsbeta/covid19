import React, {useState, useEffect}  from 'react'
import {fetchDailyData} from '../../api'
import {Line, Bar} from 'react-chartjs-2';
import './Charts.css'

function Charts({data, country}) {
    const [dailyData, setDailyData] = useState(null);
    useEffect(() => {
        const fetchApi = async ()=>{
            setDailyData(await fetchDailyData());
        }
        
        fetchApi();
        
    }, []);

    const LineChart =(
        dailyData ? <Line
            data={{
                labels:dailyData.map(({reportDate})=>reportDate),
                datasets:[{
                    data:dailyData.map(({confirmed})=> confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill:true,
                },{
                    data:dailyData.map(({deaths})=> deaths),
                    label: 'Deaaths',
                    borderColor: 'gray',
                    backgroundColor: 'rgba(150,150,150,0.5)',
                    fill:true,
                }]
            }}
        /> : null
    );

    const BarChart =(
        data?
        <Bar
            data={{
                labels:['Infected','Active','Recovered','Deaths'],
                datasets:[{
                    label:"People",
                    backgroundColor:['rgba(255,0,0,0.5)','rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(150,150,150,0.5)'],
                    data:[data.confirmed.value, data.active,data.recovered.value,data.deaths.value]
                }]
            }}
            options={{
                legend:{display: false},
                title: {display:true, text:`Current state in ${country}`},
            }}
        />:
        null
    )

    return (
        <div className='chartcontainer'>
            {country ? BarChart: LineChart}
        </div>
    )
}

export default Charts
