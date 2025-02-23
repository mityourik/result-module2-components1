import React from 'react';
import { Button } from '../Button/Button';
import styles from './ButtonsBlock.module.scss';

export const ButtonsBlock = ({
    inputValue,
    setInputValue,
    addItem,
    setIsError,
    setErrorMessage,
}) => {
    const handleInputClick = () => {
        const value = prompt('Введите значение').trim();
        if (value !== null) {
            if (value.length < 3) {
                setIsError(true);
                setErrorMessage(
                    'Введенное значение должно содержать минимум 3 символа'
                );
            } else {
                setInputValue(value);
                setIsError(false);
                setErrorMessage('');
            }
        }
    };

    return (
        <div className={styles.buttonsContainer}>
            <Button text="Ввести новое" onClick={handleInputClick} />
            <Button
                text="Добавить в список"
                onClick={addItem}
                disabled={!inputValue}
            />
        </div>
    );
};
