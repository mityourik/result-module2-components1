import { Subtitle } from '../Subtitle/Subtitle';
import styles from './List.module.scss';

export const List = ({ items = [] }) => {
    return (
        <div className={styles.listContainer}>
            <h2 className={styles.listHeading}>Список:</h2>
            {items.length === 0 ? (
                <Subtitle text="Нет добавленных элементов" />
            ) : (
                <ul className={styles.list}>
                    {items.map((item, index) => (
                        <li key={index} className={styles.listItem}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
