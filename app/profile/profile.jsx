import React from 'react';
import { Button } from 'antd';
// 引入各部分组件
import Hello from './components/hello/hello.jsx';
import Timer from './components/timer/timer.jsx';

import ModalDialogTest from '../components/ModalDialogTest.jsx';

import './profile.css';

/*简介父组件*/
export default class Profile extends React.Component {

    handleDialog(e){
        ModalDialogTest.show();
    }

    render() {
        return (
            <div>
                <Hello text="Web Developer"/>
                <Timer />
                <Button size="large"  onClick ={ e =>  this.handleDialog(e)}> 确定</Button>
            </div>
        )
    }    
}
