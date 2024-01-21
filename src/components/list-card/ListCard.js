import React, {useState} from 'react';
import styles from './ListCard.module.scss';
import Card from "../card/Card";
import {useDispatch, useSelector} from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import {fetchCharacters} from "../../redux/charactersSlice";
import ButtonToTop from "../button/ButtonToTop";

const ListCard = () => {

    const dispatch = useDispatch();
    const {characters, countPage, currentPage} = useSelector((state) => state.characters);
    const [postData, setPostData] = useState([]);
    const [page, setPage] = useState(2);
    const [hasMore, setHasMore] = useState(true);

    const fetchData = () => {
        const newLimit = page + 1;

        if (countPage > postData.length) {
            setTimeout(() => {
                setPostData([...postData].concat(characters))
            }, 1000)
            setPage(newLimit)
        } else {
            setHasMore(false)
        }
    };

    const nextPage = () => {
        fetchData()
        dispatch(fetchCharacters(page))
    };

    console.log("characters- ", characters);
    console.log("postData- ", postData);
    console.log("currentPage- ", currentPage);

    return (
        <div className={styles.list}>
            <InfiniteScroll className={styles.list}
                            dataLength={postData} //This is important field to render the next data
                            next={nextPage}
                            hasMore={hasMore}
                            loader={<h4>Loading...</h4>}
            >
                {postData.length > 0
                    ? postData?.map((ch) => <Card key={ch.id} {...ch}/>)
                    : characters?.map((ch) => <Card key={ch.id} {...ch}/>)
                }
            </InfiniteScroll>
            <ButtonToTop />
        </div>
    );
};

export default ListCard;


// import React, {useState} from 'react';
// import styles from './ListCard.module.scss';
// import Card from "../card/Card";
// import {useDispatch, useSelector} from "react-redux";
// import InfiniteScroll from "react-infinite-scroll-component";
// import {fetchCharacters} from "../../redux/charactersSlice";
//
// const LIMIT = 1;
//
// const ListCard = () => {
//
//     const dispatch = useDispatch();
//
//     const {characters, countPage, currentPage} = useSelector((state) => state.characters);
//
//     //const [postData, setPostData] = useState(characters?.slice(0, LIMIT));
//     const [postData, setPostData] = useState([]);
//     //const [postData, setPostData] = useState(currentPage);
//     //const [visible, setVisible] = useState(LIMIT);
//     const [page, setPage] = useState(2);
//     const [hasMore, setHasMore] = useState(true);
//
//     const fetchData = () => {
//         //const newLimit = visible + LIMIT;
//         const newLimit = page + 1;
//         //const dataToAdd = characters?.slice(visible, newLimit);
//
//         if(countPage> postData.length){
//             //if (countPage > postData) {
//             setTimeout(() => {
//                 setPostData([...postData].concat(characters))
//                 //setPostData(pr=>pr+1)
//                 // setHasMore(false)
//             }, 1000)
//             setPage(newLimit)
//             //setVisible(newLimit)
//             //setHasMore(false)
//         } else {
//             setHasMore(false)
//         }
//     }
//
//     const nextPage = () => {
//         fetchData()
//         dispatch(fetchCharacters(page))
//     }
//
//     console.log("characters- ", characters);
//     console.log("postData- ", postData);
//     console.log("currentPage- ", currentPage);
//
//     return (
//         <div className={styles.list}>
//
//             <InfiniteScroll className={styles.list}
//                 //dataLength={postData.length} //This is important field to render the next data
//                             dataLength={postData} //This is important field to render the next data
//                 //next={fetchData}
//                             next={nextPage}
//                             hasMore={hasMore}
//                             loader={<h4>Loading...</h4>}
//             >
//                 {postData.length>0
//                     ? postData?.map((ch) => <Card key={ch.id} {...ch}/>)
//                     : characters?.map((ch) => <Card key={ch.id} {...ch}/>)
//                 }
//
//             </InfiniteScroll>
//
//             {/*{characters?.map((ch) => <Card key={ch.id} {...ch}/>)}*/}
//         </div>
//     );
// };
//
// export default ListCard;