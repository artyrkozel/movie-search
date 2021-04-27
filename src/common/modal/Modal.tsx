import React, { SyntheticEvent } from "react";
import './modall.scss'
import CloseIcon from '@material-ui/icons/Close';


const Modal = ({modalActive, onClickModalHandler, trailer}: any) => {
    const btnHandler = (e: SyntheticEvent) => {
        e.stopPropagation()
        onClickModalHandler()
    }
    const openNodal = () => onClickModalHandler()
    return (
        <div className={modalActive ? 'modal active' : 'modal'} onClick={openNodal}>
            <div className="modal_content">
                <button onClick={btnHandler} className="button"><CloseIcon fontSize={"large"}/></button>
                <iframe src={`https://www.youtube.com/embed/${trailer.key}`} width={905} height={508} frameBorder="0" title={trailer.key}>''</iframe>
            </div>
        </div>
    )
}

export default Modal
