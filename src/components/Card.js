import React from 'react';
import propTypes from 'prop-types';


class Card extends React.PureComponent {

    static propTypes ={
        item: propTypes.shape({
            id: propTypes.number.isRequired,
            name: propTypes.string.isRequired,
            image: propTypes.string.isRequired,
        }),
        cbSelectCard: propTypes.func.isRequired,
    }

    state = {
        item: this.props.item,
    }

    openCardOnClick = (e)=>{
        e.stopPropagation();

        this.props.cbSelectCard(this.state.item);
    }

    render() {

        return <div className='Card' key={this.state.item.id} onClick={this.openCardOnClick}>
            <img src={this.state.item.image} alt={this.state.item.name}></img>
            <div className='CardName'>{this.state.item.name}</div>
        </div>
    }


}

export default Card;