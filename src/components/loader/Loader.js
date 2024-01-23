import React from 'react';
import l from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={l.loader_wrapper}>
            <div className={l.loader}>

            </div>
        </div>
    );
};

export default Loader;