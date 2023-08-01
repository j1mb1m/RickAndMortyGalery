import React from "react";
import PropTypes from 'prop-types';
import './modal.scss';


const Modal = ({ active, setActive, item }) => {
    return <div className={active ? "Modal active" : "Modal"} onClick={() => setActive(false)}>
        <div className="Modal__content"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1) 65%) , url(${item.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'auto 100%',
            }}
            onClick={e => e.stopPropagation()}>
            <div className="Modal__description">
                <div><span>Name: </span>{item.name}</div>
                <div><span>Origin: </span>{item.origin}</div>
                <div><span>Status: </span>{item.status}</div>
                <div><span>Location: </span>{item.location}</div>
                <div><span>Species: </span>{item.species}</div>
                <div><span>Gender: </span>{item.gender}</div>
            </div>
        </div>
    </div >
}

Modal.propTypes = {
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        origin: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }),
}
export default Modal;