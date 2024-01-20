import React from 'react';
import styles from './ListCard.module.scss';
import Card from "../card/Card";
import {useSelector} from "react-redux";

const ListCard = (dataEx) => {
    const {characters} = useSelector((state)=>state.characters);

    console.log("characters- ", characters);
    console.log("DATA - ",dataEx);

    return (
        <div className={styles.list}>
            {dataEx.data.map((ch)=><Card key={ch.id} {...ch}/>)}
        </div>
    );
};

export default ListCard;