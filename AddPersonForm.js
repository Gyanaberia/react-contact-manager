import React, { useState } from 'react';
import PeopleList from './PeopleList';
function AddPersonForm() {
  const [person, setPerson] = useState('');
  const [data, setData] = useState([]);
  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newData = [...data, person];
    setData(newData);
    setPerson('');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new contact"
          onChange={handleChange}
          value={person}
        />
        <button type="submit">Add</button>
      </form>
      <div>
        <PeopleList data={data} />
      </div>
    </div>
  );
}

export default AddPersonForm;
