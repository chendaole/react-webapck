import React from 'react';
import ReactDOM from 'react-dom';

import ModalDialog from './ModalDialog.jsx';

import './ModalDialogTest.css';

export default class ModalDialogTest extends React.Component{

    componentDidMount(){
        this.promise = new Promise((resolve,reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }

    cancel(){
        this.reject("取消");
    }

    ok(){
        if(this.value){//暂时先这样处理吧
            this.resolve(this.value);
            return;
        }
        this.resolve("确定");
    }

    render(){
        return(
            <ModalDialog>
                <div className="ModalDialogTest">
                    <div className="ModalDialogTestBody">
                        <div className="Title">title</div>
                        <div className="Content">
                            dfdfdsfdsafdsfsffdfdasfds<br/>
                            cdscdscdscdscscsdcdscdscsc<br/>
                            cdscdscdscdscdscdscdscdscs<br/>
                        </div>
                    </div>
                    <div className="Selection">
                        <div className="Cancel" onClick = { e => { this.cancel() }}>X</div>
                        <div className="Ok" onClick = { e => { this.ok() } }>OK</div>
                    </div>
                </div>
            </ModalDialog>
        );
    }
}

ModalDialogTest.show = ()=>{
    const wrapper = document.body.appendChild(document.createElement('div'));
    const component = ReactDOM.render(<ModalDialogTest/> , wrapper);
    const cleanup =() => {
        ReactDOM.unmountComponentAtNode(wrapper);
        setTimeout(()=> wrapper.remove(),0);
    };
    return component.promise.then(
        value => {
            cleanup();
            return Promise.resolve(value);
        },
        reason => {
            cleanup();
            return Promise.reject(reason);
        }
    )
};