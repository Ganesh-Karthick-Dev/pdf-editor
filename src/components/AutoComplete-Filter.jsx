// src/components/AutocompleteFilter.js
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import _ from 'lodash'


const AutocompleteFilter = () => {


    const data = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Cherry' },
        { id: 4, name: 'Date' },
        { id: 5, name: 'Elderberry' },
        { id: 6, name: 'Elderberry' },
      ];

  const [inputValue, setInputValue] = useState('select the item');
  const [filteredOptions, setFilteredOptions] = useState(data);

  const [selectedData,setSelectedData] = useState([])
  console.log(`array of selected data`,selectedData);

  const [finalData,setFinalData] = useState([])

  console.log(`final data`,finalData);

useEffect(()=>{
    // const data = _.map(selectedData , (obj)=> _.omit(obj , 'name'))
    // setFinalData(data.map((val)=>{
    //     return [val.id]
    // }))
    const data = selectedData.map((val)=> {
        return val.id
    })
    setFinalData(data)
},[selectedData])
  

  const handleInputChange = (event, newInputValue) => {
    console.log(`new input`,event)
    console.log(`new input value`,newInputValue);
    // setInputValue(newInputValue);
    // const newFilteredOptions = data.filter(option =>
    //   option.name.toLowerCase().includes(newInputValue.toLowerCase())
    // );
    // setFilteredOptions(newFilteredOptions);
    setInputValue(newInputValue)
    setSelectedData((params)=>[...params , newInputValue])
  };

  return (
    <>
    <Autocomplete
      autoComplete={true}
      autoHighlight={true}
      autoSelect={true}
      blurOnSelect={false}
      value={inputValue}
      onChange={handleInputChange}
      options={data}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <TextField {...params} placeholder='select' variant="outlined" />}
    />


    </>
  );
};

export default AutocompleteFilter;
