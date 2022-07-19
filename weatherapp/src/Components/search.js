import { AsyncPaginate } from "react-select-async-paginate";
import React from 'react';
import { GEO_API_URL } from "../api";
import { geoAPIOptions } from "../api";

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = React.useState(null);
    
    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoAPIOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        };
                    })
                }
            })
            .catch(err => console.error(err));
    }
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder="Search For City"
            debounceTimeout={600} //Time in ms when to search in api not on keypress.after every 600ms.
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}></AsyncPaginate>
    )
}
export default Search;