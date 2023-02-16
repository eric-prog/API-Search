import React, { useState } from 'react';
import logo from './logo.svg';
import Search from './components/Search';
import Results from './components/Results';
import './App.css';

function App() {
  const [source, setSource] = useState('StackOverflow')
  const [query, setQuery] = useState('')

  return (
    <div className="App">
      <Search source={source} setSource={setSource} query={query} setQuery={setQuery} />
      <Results source={source} query={query} />
    </div>
  );
}

export default App;
