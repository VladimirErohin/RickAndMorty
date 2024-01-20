import React from 'react';
import styles from './Card.module.scss';

const Card = ({name, image}) => {
    return (
        <div className={styles.card}>
            <div className={styles.image}><img src={image} alt="picture"/></div>
            <h3>{name}</h3>
        </div>
    );
};

export default Card;