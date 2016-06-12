import React from 'react';
import './last.css';

/*结尾组件*/
export default class Last extends React.Component {
    constructor(props) {
        super(props);    
    }

    componentDidMount(){
        const url = 'http://localhost:3000/users';
        const req = new Request(url,{method:'GET'});
        fetch(req).then((response)=>{
            return response.json();
        }).then((data)=>{
            console.log(data);
        });
    }

    render() {
        return (
            <div>
                <h1 className="animated flipInX" id="ege">没有彩蛋</h1>
                <img src="./images/last.jpg" width="100" id="lastPic" className="animated fadeInUp" />
            </div>
        )
    }       
}