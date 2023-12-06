import div from '../../dom';
import s from  './styles.module.css';

function Hex() {
    return (
        div({
            className: 'hex',
            style: {
                backgroundColor: '#b1b1b1',
                border: '1px solid #000',
                height: '100px',
                width: '50px'
            }
        })
    );
}

export default Hex;