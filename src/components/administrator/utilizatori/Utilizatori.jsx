import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Utilizatori.scss';

const usersData = [
  { utilizator: 'user1', nume: 'Nume1', prenume: 'Prenume1', rol: 'Rol1' },
  { utilizator: 'user2', nume: 'Nume2', prenume: 'Prenume2', rol: 'Rol2' },
  { utilizator: 'user3', nume: 'Nume2', prenume: 'Prenume2', rol: 'Rol2' },
  { utilizator: 'user4', nume: 'Nume2', prenume: 'Prenume2', rol: 'Rol2' },
  { utilizator: 'user5', nume: 'Nume2', prenume: 'Prenume2', rol: 'Rol2' },
  { utilizator: 'user6', nume: 'Nume2', prenume: 'Prenume2', rol: 'Rol2' },
  { utilizator: 'user7', nume: 'Nume2', prenume: 'Prenume2', rol: 'Rol2' },
  { utilizator: 'user8', nume: 'Nume2', prenume: 'Prenume2', rol: 'Rol2' },
];

const rolesOptions = ['Rol1', 'Rol2', 'Rol3'];

const Utilizatori = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleRowClick = (user) => {
    setSelectedUser(user);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setSelectedUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };

  const handleSave = () => {
    console.log('Saving changes:', selectedUser);
  };

  const handleDelete = () => {
    console.log('Deleting user:', selectedUser);
  };

  return (
    <div className='utilizatoradmin'>
      <div className="left-column">
        <h3>Utilizatori</h3>
        <table>
          <thead>
            <tr>
              <th>Utilizator</th>
              <th>Nume</th>
              <th>Prenume</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'alb' : 'albastru'}
                onClick={() => handleRowClick(user)}
              >
                <td>{user.utilizator}</td>
                <td>{user.nume}</td>
                <td>{user.prenume}</td>
                <td>{user.rol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedUser && (
        <div className="right-column">
          <h3>Edit</h3>
          <div className="input-row">
            <label htmlFor="utilizator">Username</label>
            <input
              type="text"
              id="utilizator"
              value={selectedUser.utilizator}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-row">
            <label htmlFor="nume">Nume</label>
            <input type="text" id="nume" value={selectedUser.nume} onChange={handleInputChange} />
          </div>

          <div className="input-row">
            <label htmlFor="prenume">Prenume</label>
            <input
              type="text"
              id="prenume"
              value={selectedUser.prenume}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-row">
            <label htmlFor="rol">Rol</label>
            <select id="rol" value={selectedUser.rol} onChange={handleInputChange}>
              {rolesOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="icons-container">
            <FontAwesomeIcon icon={faSave} className="save-icon" onClick={handleSave} />
            <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={handleDelete} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Utilizatori;