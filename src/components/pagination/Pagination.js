import React, {useState} from 'react';
import ReactPaginate from "react-paginate";
import styles from './Pagination.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {fetchPages, setCurrenPage, setIsLoadingPage} from "../../redux/paginationSlice";

const Pagination = () => {
    const dispatch = useDispatch();
    const [pageCount, setPageCount] = useState(42);

    const handlePageClick = (event) => {
        let pageNum = event.selected +1
        setPageCount(42);
        dispatch(fetchPages(pageNum))
        dispatch(setIsLoadingPage(true))
        dispatch(setCurrenPage(pageNum))
    };

    return (
        <>
            <ReactPaginate
                className={styles.root}
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="<"
            />
        </>
    );
}

export default Pagination;