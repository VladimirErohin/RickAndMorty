import React from 'react';
import styles from './Modal.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {setPerson, setVisibly} from "../../redux/charactersSlice";

const Modal = () => {

    const {person, visibly} = useSelector((state) => state.characters);
    const dispatch = useDispatch();
    const personInfo = person;
    const rootClasses=[styles.modal];

    if(visibly){
        rootClasses.push(styles.active)
    }

    function isHideModal() {
        dispatch(setPerson({}))
        dispatch(setVisibly(false))
    }

    return (
        <div className={rootClasses.join(' ')}  onClick={isHideModal}>
            <div className={styles.myModalContent}>
              <div className={styles.wrapper_image}>
                  <img src={personInfo.image} alt="avatar"/>
              </div>
                <div className={styles.modal_info}>
                    <div>
                        <div><h4>Name:</h4>{personInfo.name}</div>
                        <div><h4>Status:</h4>{personInfo.status}</div>
                        <div><h4>Species:</h4>{personInfo.species}</div>
                    </div>
                    <div>
                        <div><h4>Origin:</h4>{personInfo.origin?.name}</div>
                        <div><h4>Location:</h4>{personInfo.location?.name}</div>
                        <div><h4>Gender:</h4>{personInfo.gender}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;