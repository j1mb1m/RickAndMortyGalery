import React from 'react';
import PropTypes from 'prop-types';
import './Gallery.scss';
import Modal from './Modal';
import Card from './Card';

class Gallery extends React.PureComponent {

    static propTypes = {
        clients: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                status: PropTypes.string.isRequired,
                species: PropTypes.string.isRequired,
                gender: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                origin: PropTypes.shape({ name: PropTypes.string.isRequired, }),
                location: PropTypes.shape({ name: PropTypes.string.isRequired, }),
            })
        )
    };

    state = {
        modalActive: false,
        selectedItem: null,
    }

    setModalActive = (modalActive, selectedItem = null) => {
        if (modalActive) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }

        this.setState({ modalActive, selectedItem });
    }

    selectCard = (currentItem) => {
        this.setModalActive(true, currentItem);
    }

    render() {
        return (
            <>
                <div className='ItemGallery'>
                    {
                        this.props.characters.map(item =>
                            <Card key={item.id} item={item} cbSelectCard={this.selectCard} />
                        )
                    }
                </div>
                {this.state.selectedItem && <Modal active={this.state.modalActive} setActive={this.setModalActive} item={this.state.selectedItem} />}
                <div></div>
            </>
        );
    }
}

export default Gallery;
