import React from 'react';
import './App.css';
import { AutocompleteInput } from './components/autocomplete-input';
import { COUNTRIES } from './lib/fixtures/countries';

function App() {
  return (
    <div className="App">
      <AutocompleteInput options={COUNTRIES} />
    </div>
  );
}

export default App;
