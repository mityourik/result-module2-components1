import React, { useState } from 'react';
import './App.module.scss';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import { Header } from './components/Heading/Heading';
import { Subtitle } from './components/Subtitle/Subtitle';
import { ButtonsBlock } from './components/ButtonsBlock/ButtonsBlock';
import { List } from './components/List/List';

const App = () => {
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const addItem = () => {
        if (items.includes(inputValue)) {
            setIsError(true);
            setErrorMessage('Значение уже существует в списке');
        } else {
            setItems([...items, inputValue]);
            setInputValue('');
            setIsError(false);
            setErrorMessage('');
        }
    };

    return (
        <>
            <Header />
            <Subtitle
                text="Текущее значение"
                showValue={true}
                value={inputValue}
            />
            {isError && <ErrorMessage message={errorMessage} />}
            <ButtonsBlock
                inputValue={inputValue}
                setInputValue={setInputValue}
                addItem={addItem}
                setIsError={setIsError}
                setErrorMessage={setErrorMessage}
            />
            <List items={items} />
        </>
    );
};

export default App;
