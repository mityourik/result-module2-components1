import { Subtitle } from '../Subtitle/Subtitle';
import styles from './List.module.scss';

export const List = ({ items = [] }) => {
    return (
        <div className={styles['list-container']}>
            <h2 className={styles['list-heading']}>Список:</h2>
            {items.length === 0 ? (
                <Subtitle text="Нет добавленных элементов" />
            ) : (
                <ul className={styles.list}>
                    {items.map((item, index) => (
                        <li key={index} className={styles['list-item']}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
