import React, {useState, useEffect}  from 'react'
import {Select, FormControl,InputLabel} from '@material-ui/core'
import {fetchCountries} from '../../api'
import './CountryPicker.css'

function CountryPicker({handelCountryChange,country}) {

    const [gotCountries, setGotCountries] = useState(null);

    useEffect(() => {
        const fetchAPI = async ()=>{
            setGotCountries(await fetchCountries())
        }
        fetchAPI();
    }, []);
    return (
        gotCountries ?
        <div>
            {/* <FormControl variant="outlined" className="formcontrol">
            <InputLabel id="Countryi/p">Country</InputLabel>
                <NativeSelect defaultValue="" onChange={(e)=>handelCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {gotCountries.map((country,index) => <option key={index} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl> */}
            <FormControl variant="outlined" className="formcontrol">
                <InputLabel htmlFor="i/p">Country</InputLabel>
                <Select
                    native
                    value={country}
                    onChange={(e)=>handelCountryChange(e.target.value)}
                    label="country"
                    inputProps={{
                        name: 'country',
                        id: 'i/p',
                    }}
                >
                    <option value="" />
                    <option value="">Global</option>
                    {gotCountries.map((country,index) => <option key={index} value={country}>{country}</option>)}
                </Select>
      </FormControl>
        </div>
        : null
    )
}

export default CountryPicker
