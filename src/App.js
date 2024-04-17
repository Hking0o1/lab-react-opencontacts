import  "./App.css";
import React, { useState } from 'react';
import contacts from "./contacts.json";

function App() {
  const [contactList, setContacts] = useState(contacts.slice(0, 5));
  const wonOscar= <span
  role="img"
  aria-label="trophy"
  style={{
    fontSize: '48px',
    color: 'gold',  
    marginRight: '8px',
  }}
>
  🏆
</span>

const wonEmmy= <span
role="img"
aria-label="trophy"
style={ {
  fontSize: '48px',
  color: 'gold',  
  marginRight: '8px'
}}>
🌟
</span>

const contactsbox= contactList;
  const addRandomContact = () => {
    const remainingContacts = contacts.filter(contact => !contactList.includes(contact));
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    
    const randomContact = remainingContacts[randomIndex];
    setContacts(prevContacts => [...prevContacts, randomContact]);
  };
  const sortByName = () => {
    const sortedContacts = [...contactsbox].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
};

const sortByPopularity = () => {
    const sortedContacts = [...contactsbox].sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedContacts);
};
const handleDeleteContact = (id) => {
  const updatedContacts = contactsbox.filter(contact => contact.id !== id);
  setContacts(updatedContacts);
};
  return (
    <div className="App">
    <button onClick={addRandomContact}>Add Random Contact</button>
    <button onClick={sortByName}>Sort by Name</button>
    <button onClick={sortByPopularity}>Sort by Popularity</button>
            
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map(contact => (
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} alt={contact.name} style={{ width: '120px', height:'150px' }} /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? wonOscar: null}</td>
              <td>{contact.wonEmmy ? wonEmmy: null}</td>
              <td>
                 <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
              </td>
           </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;