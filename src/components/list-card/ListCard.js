import React, {useState} from 'react';
import styles from './ListCard.module.scss';
import Card from "../card/Card";
import {useDispatch, useSelector} from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import {fetchCharacters} from "../../redux/charactersSlice";
import ButtonToTop from "../button/ButtonToTop";
import Modal from "../modal/Modal";
import Pages from "../pages/Pages";
import Loader from "../loader/Loader";

const ListCard = () => {

    const dispatch = useDispatch();
    const {characters, countPage} = useSelector((state) => state.characters);

    const {visiblyPagination} = useSelector((state) => state.pagination);
    const [postData, setPostData] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchData = () => {
        const newLimit = page + 1;
        if (countPage > postData.length) {
            setPostData([...postData].concat(characters))
            setPage(newLimit)
        } else {
            setHasMore(false)
        }
    };

    const nextPage = () => {
        fetchData()
        dispatch(fetchCharacters(page+1))
    };

    return (
        <div className={styles.list}>
            {!visiblyPagination
                ? <InfiniteScroll className={styles.list}
                                  dataLength={postData} //This is important field to render the next data
                                  next={nextPage}
                                  hasMore={hasMore}
                                  loader={<h4><Loader/></h4>}
                >
                    {postData.length > 0
                        ? postData?.map((ch) => <Card key={ch.id} {...ch}/>)
                        : characters?.map((ch) => <Card key={ch.id} {...ch}/>)
                    }
                </InfiniteScroll>
                : <Pages/>
            }
            <ButtonToTop/>
            <Modal data={characters}/>
        </div>
    );
};

export default ListCard;