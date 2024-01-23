import React from 'react';
import iconBtn from "../../assets/left.png";
import logo from "../../assets/logo.svg";
import bottomBtn from "../../assets/bottom-btn.png";
import style from "./Header.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {setVisiblyPagination} from "../../redux/paginationSlice";

const Header = () => {

    const {visiblyPagination} = useSelector((state) => state.pagination);
    const dispatch = useDispatch();

    function isSwitchPagination() {
        dispatch(setVisiblyPagination(!visiblyPagination))
    }

    return (
        <div className={style.header_main}>
            <div className={style.header_content}>
                <img src={logo} alt="logo"/>
                {visiblyPagination
                    ? <div className={style.switch_pagination} onClick={isSwitchPagination}><img src={bottomBtn} alt="switchToList"/></div>
                    : <div className={style.switch_pagination} onClick={isSwitchPagination}><img src={iconBtn} alt="switchToPagination"/></div>
                }
            </div>
        </div>
    );
};

export default Header;