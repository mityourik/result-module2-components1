import styles from './ErrorMessage.module.scss';

export const ErrorMessage = () => {
    return (
        <div className={styles.error}>
            Введенное значение должно содержать минимум 3 символа
        </div>
    );
};
