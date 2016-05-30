import React from 'react';
import update from 'react-addons-update';
import cx from 'classnames';

import './ModalDialog.css';

export class DialogContainer extends React.Component{
    render(){
        return (
            <div className="DialogContainer">
                {this.props.children}
            </div>
        );
    }
}

export class DialogForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            style:{
                position:'absolute',
                display:'flex'
            }
        }
    }

    onMoveStart(e){
        const rect =this.refs.wrapper.getBoundingClientRect();
        const left0 = rect.left;
        const top0 = rect.top;
        const clientX0 = e.clientX;
        const clientY0 = e.clientY;
        var updatePosition = e => {
            const dX = e.clientX - clientX0;
            const dY = e.clientY - clientY0;
            this.setState(update(this.state,{
                style:{
                    left:{$set: left0 + dX},
                    top:{$set: top0 + dY}
                }
            }));
        };

        var stopMoving =()=> {
            document.removeEventListener('mousemove',updatePosition);
            document.removeEventListener('mouseup',stopMoving);
        };

        document.addEventListener('mousemove',updatePosition);
        document.addEventListener('mouseup',stopMoving);
    }

    render(){
        var style = this.state.style;
        return(
            <div ref="wrapper" onMouseDown={e => this.onMoveStart(e)} style={style}>
                {this.props.children}
            </div>
        );
    }
}

export default class ModalDialog extends React.Component{
    render(){
        const {children} = this.props;
        return(
            <DialogContainer>
                <DialogForm>
                    {children}
                </DialogForm>
            </DialogContainer>
        );
    }
}