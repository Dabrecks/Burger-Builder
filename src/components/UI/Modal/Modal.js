import React, {Component} from 'react';
import classes from './Modal.css';
import Auxiliaire from '../../../hoc/Auxiliaire/Auxiliaire';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate () {
        console.log('[modal] WillUpdate');
    }
    render () {
        return (
            <Auxiliaire>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0',
                    }}>
                    {this.props.children}
                </div>
            </Auxiliaire>
        )
    }    
}

export default Modal;