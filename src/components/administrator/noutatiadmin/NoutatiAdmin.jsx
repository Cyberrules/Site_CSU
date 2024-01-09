import React, { useState } from 'react';
import './NoutatiAdmin.scss';
import ListaStiri from './listastiri/ListaStiri';

export const NoutatiAdmin = () => {
    const [selectedNews, setSelectedNews] = useState({
        titlu: '',
        continut: '',
        imagine1: '',
        imagine2: '',
        imagine3: ''
    });

    const [isCardClicked, setIsCardClicked] = useState(false);

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

        const reader = new FileReader();
        reader.onloadend = () => {
            setSelectedNews((prevNews) => ({
                ...prevNews,
                imagine1: reader.result
            }));
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className='noutati-container-admin'>
            <div className='modificare-stiri-admin'>
                <h3>NOUTĂȚI</h3>
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
                        {isCardClicked && (
                            <img className='imagine-stire' src={selectedNews.imagine1} alt="Imagine1" />
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
                    <button className='buton-stire'>Adauga</button>
                    <button className='buton-stire'>Șterge</button>
                    <button className='buton-stire'>Actualizează</button>

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