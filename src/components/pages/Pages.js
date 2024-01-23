import React from 'react';
import styles from "./Pages.module.scss";
import Card from "../card/Card";
import {useSelector} from "react-redux";
import Pagination from "../pagination/Pagination";
import Loader from "../loader/Loader";

const Pages = () => {

    const {page, isLoadingPage} = useSelector((state) => state.pagination);
    let dataCharacter = page.results;

    return (
        <>
            {isLoadingPage && <Loader/>}
            <div className={styles.page_wrapper}>
                <div className={styles.page_list}>{dataCharacter?.map((ch) => <Card key={ch.id} {...ch}/>)}</div>
                <Pagination/>
            </div>
        </>
    );
};

export default Pages;