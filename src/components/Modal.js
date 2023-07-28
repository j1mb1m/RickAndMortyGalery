import React from "react";
import './modal.scss';

const Modal = ({ active, setActive, item }) => {
    return <div className={active ? "Modal active" : "Modal"} onClick={() => setActive(false)}>
        <div className="Modal__content"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1) 55%) , url(${item.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'auto 100%',
            }}
            onClick={e => e.stopPropagation()}>
            <div className="Modal__description">
                <div><span>Name: </span>{item.name}</div>
                <div><span>Origin: </span>{item.origin.name}</div>
                <div><span>Status: </span>{item.status}</div>
                <div><span>Location: </span>{item.location.name}</div>
                <div><span>Species: </span>{item.species}</div>
                <div><span>Gender: </span>{item.gender}</div>
            </div>
        </div>
    </div >
}

export default Modal;