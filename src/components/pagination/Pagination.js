import React from 'react';
import iconBtn from "../../assets/left.png";
import bottomBtn from "../../assets/bottom-btn.png";
import style from "./Pagination.module.scss";

const Pagination = () => {

    return (
        <div className={style.pagination_main}>
            <div className={style.pagination_content}>
               <div><img src={iconBtn} alt="switchPagination"/></div>
               <div><img src={bottomBtn} alt="switchPagination"/></div>

            </div>
        </div>
    );
};

export default Pagination;