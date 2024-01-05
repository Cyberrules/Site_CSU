import React, { useState, useEffect } from "react";
import "./JucatoriAdmin.scss";
import CategoriiEchipe from "../echipaadmin/categoriiEchipe/CategoriiEchipe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import ModalJucatorAdmin from "./modalJucator/ModalJucatorAdmin";
import Modal from 'react-modal';


const JucatoriAdmin = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [categorie, setCategorie] = useState("");
  const [editie, setEditie] = useState("");
  const [jucatori, setJucatori] = useState([]);
  const [selectedJucatorId, setSelectedJucatorId] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDropdownChange = (selectedValue) => {
    setSelectedOption(selectedValue);
    const splittedValue = selectedValue.split("-");
    if (splittedValue.length >= 2) {
      setCategorie(splittedValue[0]);
      setEditie(splittedValue.slice(1).join("-"));
    } else {
      setCategorie("");
      setEditie("");
    }
    console.log("Elementul selectat:", selectedValue);
  };

  useEffect(() => {
    if (categorie !== "" && editie !== "") {
      fetch(
        `http://localhost:5050/api/jucator/echipa/CSU%20Suceava/editia/${editie}/categoria/${categorie}`
      )
        .then((response) => response.json())
        .then((data) => setJucatori(data))
        .catch((error) => console.error("Eroare:", error));
    }
  }, [categorie, editie]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;
    return `${formattedDay}-${formattedMonth}-${year}`;
  };

  const handleEdit = (id) => {
    setSelectedJucatorId(id);
    setModalIsOpen(true);
    console.log(`Editare jucator cu ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Stergere jucator cu ID: ${id}`);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    Modal.setAppElement('#root'); 
  }, []);

  return (
    <div className="container-echipa-admin">
      <div className="lista-echipe">
        Selectati echipa:
        <CategoriiEchipe onChange={handleDropdownChange} />
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th className="hidden">Id jucator</th>
              <th>Nume</th>
              <th>Prenume</th>
              <th>Pozitie</th>
              <th>Data nasterii</th>
              <th>Actiuni</th>
            </tr>
          </thead>
          <tbody>
            {jucatori.map((jucator, index) => (
              <tr key={index}>
                <td className="hidden">{jucator.jucatorID}</td>
                <td>{jucator.nume}</td>
                <td>{jucator.prenume}</td>
                <td>{jucator.pozitie}</td>
                <td>{formatDate(jucator.dataNasterii)}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(jucator.jucatorID)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(jucator.jucatorID)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalIsOpen && (
        <ModalJucatorAdmin
          isOpen={modalIsOpen}
          closeModal={closeModal}
          jucatorId={selectedJucatorId}
        />
      )}
    </div>
  );
};

export default JucatoriAdmin;
