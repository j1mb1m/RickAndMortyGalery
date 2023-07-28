import { RotatingLines } from 'react-loader-spinner'
import './loader.scss';

const Loader = (props) => {

    return (
        <div className='Loader'>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="1"
                width="50"
                visible={props.showComponent}
            />
        </div>
    );
}
export default Loader;