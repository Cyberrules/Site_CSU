import React, { useState, useEffect } from "react";
import "./EchipaAdmin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const EchipaAdmin = () => {
  const [echipe, setEchipe] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [editEchipa, setEditEchipa] = useState(null);
  const [showEditSection, setShowEditSection] = useState(false);

  const textEchipaAdmin = {
    textTitluEchipaAdmin: "Echipe",
    textEchipId: "Echipa ID",
    textNumeEchipa: "Nume",
    textCategorie: "Categorie",
    textEditie: "Editie",
    textActiuni: "Actiuni",
    textIncarcaImagine: "Încarcă imagine",
    textLipsaImagine: "Nicio imagine încărcată pentru echipă",
    textSiglaEchipa: "Siglă echipă",
    textBtnSalveaza: "Salvează",
    textEditareCategorie: "CATEGORIE:",
    textEditareEditie: "EDITIE:",
    textPlaceholderCategorie: "Introduceți categoria aici",
    textPlaceholderEditie: "Introduceți ediția aici",
    textAdaugaEchipa: 'Adaugă echipă',
  };

  useEffect(() => {
    fetch("http://localhost:5050/api/echipa")
      .then((response) => response.json())
      .then((data) => {
        const echipeCSU = data.filter(
          (echipa) => echipa.nume === "CSU Suceava"
        );
        setEchipe(echipeCSU);
      })
      .catch((error) => console.error("Eroare:", error));
  }, []);

 const handleEdit = (echipaId) => {
  const selectedEchipa = echipe.find(
    (echipa) => echipa.echipaId === echipaId
  );

  if (selectedEchipa) {
    if (showEditSection && editEchipa && editEchipa.echipaId === echipaId) {
      setShowEditSection(false);
    } else {
      setEditEchipa(selectedEchipa);
      setUploadedImage(`data:image/png;base64,${selectedEchipa.imagine}`);

      const inputCategorie = document.getElementById("input-categorie");
      const inputEditie = document.getElementById("input-editie");

      if (inputCategorie && inputEditie) {
        inputCategorie.value = selectedEchipa.categorie || "";
        inputEditie.value = selectedEchipa.editia || "";
      }

      setShowEditSection(true);
    }
  }
};


  const handleDelete = (echipaId) => {
    console.log(`Ștergere echipă cu ID: ${echipaId}`);
  };

  const handleImageUpload = (event) => {
    const image = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64Image = reader.result;
      setUploadedImage(base64Image);
    };

    reader.readAsDataURL(image);
  };

  const handleCategorieChange = (event) => {
    setEditEchipa({
      ...editEchipa,
      categorie: event.target.value,
    });
  };

  const handleEditieChange = (event) => {
    setEditEchipa({
      ...editEchipa,
      editia: event.target.value,
    });
  };

  const handleSalveaza = () => {
    console.log(uploadedImage);
    if (editEchipa && uploadedImage) {
      fetch(`http://localhost:5050/api/echipa/${editEchipa.echipaId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          categorie: editEchipa.categorie,
          editia: editEchipa.editia,
          imagine: uploadedImage,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Modificări salvate cu succes!", data);
        })
        .catch((error) => console.error("Eroare:", error));
    }
  };


  const [resetState, setResetState] = useState(false);

  const handleAdaugaEchipa = () => {
    if (showEditSection) {
      setResetState(true);
      setEditEchipa(null);
      setUploadedImage(null);
    } else {
      setResetState(false);
      setShowEditSection(true);
    }
  };
  
  


  return (
    <div className="container-echipe-admin">
      <div>
        <h4>{textEchipaAdmin.textTitluEchipaAdmin}</h4>
        <button onClick={handleAdaugaEchipa} className="button-adauga-echipa">{textEchipaAdmin.textAdaugaEchipa}</button>
      </div>
      <div id="tabel-echipe-admin">
        <table>
          <thead>
            <tr>
              <th className="hidden">{textEchipaAdmin.textEchipId}</th>
              <th className="hidden">{textEchipaAdmin.textNumeEchipa}</th>
              <th>{textEchipaAdmin.textCategorie}</th>
              <th>{textEchipaAdmin.textEditie}</th>
              <th>{textEchipaAdmin.textActiuni}</th>
            </tr>
          </thead>
          <tbody>
            {echipe.map((echipa, index) => (
              <tr key={index}>
                <td className="hidden">{echipa.echipaId}</td>
                <td className="hidden">{echipa.nume}</td>
                <td>{echipa.categorie}</td>
                <td>{echipa.editia}</td>
                <td>
                  <button
                    className="edit-button"
                    title="Editează"
                    onClick={() => handleEdit(echipa.echipaId)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    className="delete-button"
                    title="Șterge"
                    onClick={() => handleDelete(echipa.echipaId)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showEditSection && (
        <div className="container-adaugare-echipa">
          <div className="coloana-stanga-ad-echipa">
            <div className="image-container">
              <h3>{textEchipaAdmin.textSiglaEchipa}</h3>
              {uploadedImage ? (
                <img
                  src={uploadedImage}
                  alt="Echipă"
                  className="display-image"
                />
              ) : (
                <p>{textEchipaAdmin.textLipsaImagine}</p>
              )}
              <label htmlFor="file-input" className="button-incarca-imagine">
                {textEchipaAdmin.textIncarcaImagine}
              </label>
              <input id="file-input" type="file" onChange={handleImageUpload} />
            </div>
          </div>

          <div className="coloana-dreapta-ad-echipa">
            <div className="info-section">
              <div className="input-wrapper">
                <label htmlFor="input-categorie">
                  {textEchipaAdmin.textEditareCategorie}
                </label>
                <input
                  type="text"
                  id="input-categorie"
                  placeholder={textEchipaAdmin.textPlaceholderCategorie}
                  value={editEchipa ? editEchipa.categorie : ""}
                  onChange={handleCategorieChange}
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="input-editie">
                  {textEchipaAdmin.textEditareEditie}
                </label>
                <input
                  type="text"
                  id="input-editie"
                  placeholder={textEchipaAdmin.textPlaceholderEditie}
                  value={editEchipa ? editEchipa.editia : ""}
                  onChange={handleEditieChange}
                />
              </div>
              <button className="btn-salveaza" onClick={handleSalveaza}>
                {textEchipaAdmin.textBtnSalveaza}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EchipaAdmin;
