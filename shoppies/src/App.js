import { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {

  const [state, setState] = useState({
    term: "",
    results: [],
    nominations: ["", "", "", "", ""],
    totalNominated: 0
  })

  const OMDB = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (state.term) {
      axios.get(`https://www.omdbapi.com/?apikey=${OMDB}&s=${state.term}&type=movie`)
      .then(({ data }) => {
        console.log(data);
        !data.Error && setState(prev => ({ ...prev, results: data.Search }))
      })
    } else {
      setState(prev => ({ ...prev, results: [] }))
    }

  }, [state.term]);

  return (
    <div className="App">
      <Header/>
      <SearchBar onSearch={term => setState({...state, term})}/>
      
      </div>
  );
}

export default App;
