import styles from './Subtitle.module.scss';

export const Subtitle = ({ text, showValue = false, value = '' }) => {
    return (
        <p className={styles['no-margin-text']}>
            {text}
            {showValue && (
                <>
                    {' '}
                    <code>value</code>: "
                    <output className={styles['current-value']}>{value}</output>
                    "
                </>
            )}
        </p>
    );
};
