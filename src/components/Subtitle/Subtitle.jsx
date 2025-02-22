import styles from './Subtitle.module.scss';

export const Subtitle = ({ text, showValue = false, value = '' }) => {
    return (
        <p className={styles.noMarginText}>
            {text}
            {showValue && (
                <>
                    {' '}
                    <code>value</code>: "
                    <output className={styles.currentValue}>{value}</output>"
                </>
            )}
        </p>
    );
};
