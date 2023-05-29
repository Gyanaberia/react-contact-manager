import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import AddPersonForm from './AddPersonForm';

// function ContactManager(props) {
//   const [contacts, setContacts] = useState(props.data);

//   function addPerson(name) {
//     setContacts([...contacts, name]);
//   }

//   return (
//     <div>
//       <AddPersonForm handleSubmit={addPerson} />

//     </div>
//   );
// }
// const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

ReactDOM.render(<AddPersonForm />, document.getElementById('root'));
