import React from 'react';
import styles from './Card.module.scss';
import {useDispatch} from "react-redux";
import {setPerson, setVisibly} from "../../redux/charactersSlice";

const Card = (props) => {
    const {name, image} = props;
    const dispatch = useDispatch();

    function isShowModal() {
        dispatch(setPerson(props))
        dispatch(setVisibly(true))
    }

    return (
        <div className={styles.card} onClick={isShowModal}>
            <div className={styles.image}><img src={image} alt="picture"/></div>
            <h3>{name}</h3>
        </div>
    );
};

export default Card;