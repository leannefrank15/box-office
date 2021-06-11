import React, {useState} from 'react'
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout'
import ShowGrid from '../components/show/ShowGrid';
import {api_funct} from '../misc/config'
import { useLastQuery } from '../misc/custom-hooks';
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styled';

const Home = () => {

  const [input_state, setInput] = useLastQuery(); //creating state object
  const [results, setResult] = useState(null); //creating state object for storing array of search results
  const [searchOption, setSearchOption] = useState('shows'); //creating state to store radio button result

   const isShowsChecked=searchOption;
   let checkedopt;

  if(isShowsChecked==='shows'){
    checkedopt=true;
  }
  else{
    checkedopt=false;
  }

  const onEventChange = (event_obj) => {
    setInput(event_obj.target.value); //updating the state
  }

  const onSearch = () => {

    api_funct(`/search/${searchOption}?q=${input_state}`).then(result => {
      setResult(result);
    })
  }

  const onKeyDown = (event_obj) => {   //to make sure we can search by pressing enter key
    if (event_obj.keyCode === 13){
       onSearch();
    }
  }
  const onRadioChange =(event_obj) => {
    setSearchOption(event_obj.target.value);

  }

  const displayResult = () => {
    if (results && results.length === 0) {
      return <div style={{textAlign: 'center'}}> No results found</div>
    }
    if (results && results.length >0){

      return results[0].show ? (<ShowGrid data={results}/>) : (<ActorGrid data={results}/>)

    }

    return null;  // if neither of the conditions suffice , it'll return nothing
  }
  return (
  
    <MainPageLayout>
     <SearchInput type='text' onChange={onEventChange} value={input_state} onKeyDown={onKeyDown} placeholder="search for something" /> 
  
     

       <RadioInputsWrapper>

         <label htmlFor="shows-search" >
           Shows
           </label>
           <input type="radio" 
           id="shows-search" 
           value="shows" 
           onChange={onRadioChange} 
           checked={checkedopt}
           style={{
             marginRight: '15px',
           }}
           />
         

       <label htmlFor="actors-search">
           Actors
       </label>
           <input type="radio" 
           id="actors-search" 
           value="people" 
           onChange={onRadioChange} 
           checked={!checkedopt}
           />
       </RadioInputsWrapper>
       <SearchButtonWrapper>
     <button type='button' onClick={onSearch}>Search</button>
     </SearchButtonWrapper>

     <div><h4>{displayResult()}</h4></div>
    </MainPageLayout>
    
  )
}

export default Home

