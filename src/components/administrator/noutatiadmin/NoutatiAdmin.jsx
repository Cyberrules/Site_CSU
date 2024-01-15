import React, { useState, useEffect } from 'react';
import './NoutatiAdmin.scss';
import ListaStiri from './listastiri/ListaStiri';

export const NoutatiAdmin = () => {
    const [selectedNews, setSelectedNews] = useState({
        titlu: '',
        continut: '',
        imagine1: '',
        imagine2: '',
        imagine3: '',
        stireid: '',
        datapublicarii:'',
    });
    
    const [isCardClicked, setIsCardClicked] = useState(false);
    const [dummyState, setDummyState] = useState(null);

    useEffect(() => {
        const loadImage = () => {
            if (isCardClicked && selectedNews.imagine1) {
                const img = new Image();
                img.onload = () => {
                    setDummyState(new Date());
                };
                img.src = `data:image/png;base64,${selectedNews.imagine1}`;
            }
        };

        loadImage();
    }, [isCardClicked, selectedNews.imagine1]);

    const handleNewsSelect = (news) => {
        setSelectedNews(news);
        setIsCardClicked(true);
    };

    const handleTitluChange = (e) => {
        setSelectedNews((prevNews) => ({
            ...prevNews,
            titlu: e.target.value
        }));
    };

    const handleContinutChange = (e) => {
        setSelectedNews((prevNews) => ({
            ...prevNews,
            continut: e.target.value
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const convertToBase64 = (file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result.split(',')[1]);
                reader.onerror = error => reject(error);
                reader.readAsDataURL(file);
            });
        };

        convertToBase64(file)
            .then(base64Image => {
                setSelectedNews((prevNews) => ({
                    ...prevNews,
                    imagine1: base64Image
                }));
            })
            .catch(error => console.error('Error converting to Base64:', error));
    };

    const handleAddNews = () => {
        const currentDate = new Date().toISOString();
    
        const newsWithDate = {
            ...selectedNews,
            datapublicarii: currentDate,
        };
    
        fetch('http://localhost:5050/api/stire', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newsWithDate),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('News added successfully', data);
            })
            .catch((error) => console.error('Error adding news:', error));
    };

    const handleDeleteNews = () => {
        fetch(`http://localhost:5050/api/stire/${selectedNews.stireid}`, {
            method: 'DELETE',
        })
            .then((response) => {
                console.log('News deleted successfully');
            })
            .catch((error) => console.error('Error deleting news:', error));
    };

    const handleUpdateNews = () => {
        const updatePayload = {
            titlu: selectedNews.titlu,
            continut: selectedNews.continut,
            imagine1: selectedNews.imagine1
        };
    
        fetch(`http://localhost:5050/api/stire/${selectedNews.stireid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatePayload),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data) {
                console.log('News updated successfully', data);
            } else {
                console.log('News updated successfully, but response is empty');
            }
        })
        .catch(error => console.error('Error updating news:', error));
    };

    return (
        <div className='noutati-container-admin'>
            <div className='modificare-stiri-admin'>
                <div className="date-stiri-admin">
                    <div className='container-titlu'>
                        <textarea
                            type="text"
                            name="input1"
                            id="input1"
                            placeholder="Titlu știre"
                            value={selectedNews.titlu}
                            onChange={handleTitluChange}
                        />
                    </div>
                    <div className='container-imagini'>
                        {isCardClicked && (selectedNews.imagine1 || selectedNews.imagine1 === '') && (
                            <img
                                className='imagine-stire'
                                src={
                                    selectedNews.imagine1
                                        ? `data:image/png;base64,${selectedNews.imagine1}`
                                        : selectedNews.imagine1
                                }
                                alt="Imagine1"
                            />
                        )}
                    </div>
                    <div className='container-imagine-admin'>
                        <textarea
                            name='input3'
                            id='input3'
                            placeholder='Conținut știre'
                            value={selectedNews.continut}
                            onChange={handleContinutChange}
                        />
                    </div>
                </div>
                <div className="butoane-stiri">
                    <button className='buton-stire' onClick={handleAddNews}>Adauga</button>
                    <button className='buton-stire' onClick={handleDeleteNews}>Șterge</button>
                    <button className='buton-stire' onClick={handleUpdateNews}>Actualizează</button>
                    <label className='buton-stire'>
                        <i className="fas fa-file-upload"></i>
                        <input type="file" style={{ display: 'none' }} onChange={handleImageUpload} />
                    </label>
                </div>
            </div>
            <div className='lista-stiri-admin'>
                <ListaStiri onNewsSelect={handleNewsSelect} />
            </div>
        </div>
    );
};

export default NoutatiAdmin;
