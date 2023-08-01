import { RotatingLines } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import './loader.scss';

const Loader = (props) => {

    return (
        <div className='Loader'>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="1"
                width="50"
                visible={props.visible}
            />
        </div>
    );
}

Loader.propTypes = {
    visible: PropTypes.bool.isRequired,
}
export default Loader;

