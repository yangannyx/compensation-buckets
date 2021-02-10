import React from 'react';
import './autocomplete-input.css';

export const DropdownItem = ({ option, matchString = '', onSelect }) => {
  const prefix = option.slice(0, matchString.length);
  const postfix = option.slice(matchString.length);

  const handleSelect = () => {
    onSelect(option);
  };

  return (
    <div className="dropdown-item" onClick={handleSelect} role="option">
      <b>{prefix}</b>
      {postfix}
    </div>
  );
};

export const AutocompleteInput = ({ options = [] }) => {
  const [value, setValue] = React.useState('');
  const [autocompeted, setAutocompeleted] = React.useState(options);

  React.useEffect(() => {
    const newMatches = options.filter(
      (option) =>
        option.slice(0, value.length).toLowerCase() === value.toLowerCase()
    );
    console.log('New Matches computed: ', value, newMatches);
    setAutocompeleted(newMatches);
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAutocomplete = (item) => {
    setValue(item);
  };

  const renderAutocompletedOptions = () => (
    <>
      {autocompeted.map((match) => (
        <DropdownItem
          id={match}
          option={match}
          matchString={value}
          onSelect={handleAutocomplete}
        />
      ))}
    </>
  );

  return (
    <div className="container">
      <input type="text" value={value} onChange={handleChange} />
      <div className="dropdown">{renderAutocompletedOptions()}</div>
    </div>
  );
};
