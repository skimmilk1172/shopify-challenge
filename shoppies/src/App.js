import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

const handleSearchBar = (input) => {
  setSearchList([]);
  setInput(input);
};

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
    </div>
  );
}

export default App;
