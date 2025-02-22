import { Button } from '../Button/Button';
import styles from './ButtonsBlock.module.scss';

export const ButtonsBlock = () => {
    return (
        <div className={styles.buttonsContainer}>
            <Button text="Ввести новое" />
            <Button text="Добавить в список" />
        </div>
    );
};
