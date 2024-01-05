import React, { useEffect, useState } from 'react';
import './CategoriiEchipe.scss'

const CategoriiEchipe = ({ onChange }) => {
  const [echipe, setEchipe] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5050/api/echipa');

        if (response.ok) {
          const data = await response.json();
          setEchipe(data);

          const uniqueCategories = [...new Set(data.map(echipa => `${echipa.categorie}-${echipa.editia}`))];
          setSubcategories(uniqueCategories);
        } else {
          console.error('Cererea GET a eșuat');
        }
      } catch (error) {
        console.error('Eroare de rețea:', error);
      }
    };

    fetchData();
  }, []);

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    onChange(selectedValue); 
  };

  const categoriiOptions = subcategories.map((subcategory, index) => (
    <option key={index} value={subcategory}>
      {subcategory}
    </option>
  ));

  return (
    <div>
      <select value={selectedCategory} onChange={handleDropdownChange}>
        {categoriiOptions}
      </select>
    </div>
  );
};

export default CategoriiEchipe;
