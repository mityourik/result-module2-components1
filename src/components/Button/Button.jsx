import styles from './Button.module.scss';

export const Button = ({ text, onClick, disabled }) => {
    return (
        <button className={styles.button} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};
