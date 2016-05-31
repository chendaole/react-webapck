import React from 'react';
import { QueueAnim, Button } from 'antd';

import './welcome.css';

/*彩色动感标题组件*/
export default class Welcome extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div  className="Welcome">
                <QueueAnim delay={500} style={{height : "100%", width: '100%'}}>
                    <div className="WelcomeItem0" key="a">
                        <span>a</span>
                        <span>b</span>
                        <span>c</span>
                    </div>
                    <div className="WelcomeItem1" key="b">2</div>
                    <div className="WelcomeItem2" key="c">3</div>
                </QueueAnim>
            </div>
        );
    }
}