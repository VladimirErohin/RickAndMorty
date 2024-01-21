import React from 'react';
import styles from './Modal.module.scss';

const Modal = ({data}) => {

    let person = {...data[0]}

    return (
        <div className={[styles.modal, styles.active].join(' ')}>
            <div className={styles.myModalContent}>
              <div className={styles.wrapper_image}>
                  <img src={person.image} alt="avatar"/>
              </div>
                <div className={styles.modal_info}>
                    <div>
                        <div><h4>Name:</h4>{person.name}</div>
                        <div><h4>Status:</h4>{person.status}</div>
                        <div><h4>Species:</h4>{person.species}</div>
                    </div>
                    <div>
                        <div><h4>Origin:</h4>{person.origin?.name}</div>
                        <div><h4>Location:</h4>{person.location?.name}</div>
                        <div><h4>Gender:</h4>{person.gender}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;