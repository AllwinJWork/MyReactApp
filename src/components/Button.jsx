import React, { useState } from 'react';

function Button() {
  const [inputText, setInputText] = useState('');
  const [buttonTexts, setButtonTexts] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddButton = () => {
    setButtonTexts([...buttonTexts, inputText]);
    setInputText('');
  };

  return (
    <div>
      <input value={inputText} onChange={handleInputChange} />
      <button onClick={handleAddButton}>Add Button</button>
      <div>
        {buttonTexts.map((buttonText) => (
          <button>{buttonText}</button>
        ))}
      </div>
    </div>
  );
}

export default Button;
