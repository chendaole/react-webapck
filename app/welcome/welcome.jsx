import React from 'react';
import { QueueAnim, Button ,Carousel ,Card } from 'antd';

import './welcome.css';

export default class Welcome extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            weathers:{
                yesterday :{},
                today:{},
                tomorrow:{}
            },
            Card:{
                card_1:{},
                card_2:{},
                card_3:{},
                card_4:{}
            }
        }
    }

    componentDidMount(){
       fetch('data/weather.json')
           .then((response) => {
               return response.json();
           })
           .then((data)=>{
                this.setState({weathers:data});
           }) ;
        const weatherUrl = 'http://apis.baidu.com/apistore/weatherservice/recentweathers?cityid=101010100';
        const headers = new Headers();
        headers.append('apikey','471cd12cec1fcb77cfdea3974d6f7a87');
        const req = new Request(weatherUrl,{method:'GET',headers:headers });
        fetch(req).then((response) => {
            return response.json();
        })
        .then((data)=>{
            console.log(data)
        });
    }

    renderWeathersOption(){
        const weathers = this.state.weathers;
        const weathersOptions = [];
        for(var obj in weathers){
            let option = weathers[obj];
            let weathersOption  = (
                <div style={{ display: "flex",flexDirection :"column"}}>
                    <span>天气：{option.weather}</span>
                    <span>温度：{option.T}</span>
                    <spam>风力：{option.F}</spam>
                    <span>时间：{option.time}</span>
                </div>
            );
            weathersOptions.push(weathersOption);
        }
        return weathersOptions;
    }

    renderWeathers(){
        const WeathersOption = this.renderWeathersOption();
        const Weathers = WeathersOption.map((item,i) => {
            return(
                <div className="Option">
                    {item}
                </div>
            );
        });
        return(
            <div>
                {Weathers}
            </div>
        );
    }

    renderCard(){
        return(
            <Card style={{ width:240  }} bodyStyle={{ padding:0 }}>
                <div style={{ display:"block" }}>
                    <img width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="example"/>
                </div>
                <div style={{ color: "#999"}}>
                    <h3>Europe Street beat</h3>
                    <p>www.instagram.com</p>
                </div>
            </Card>
        );
    }

    render() {
        return (
            <div  className="Welcome">
                <div style={{height: 200}}>
                    <Carousel autoplay dots={false}>
                        <div style={{backgroundColor:"#999",color:"red"}}>1</div>
                        <div style={{backgroundColor:"#999",color:"red"}}>2</div>
                        <div style={{backgroundColor:"#999",color:"red"}}>3</div>
                    </Carousel>
                </div>
                <QueueAnim delay={800} style={{height : "100%", width: '100%',display:"flex", flexDirection:"column"}}>
                    <div className="WelcomeItem0" key="a">
                        {this.renderWeathers()}
                    </div>
                    <div className="WelcomeItem1" key="b">
                        {this.renderCard()}
                    </div>
                </QueueAnim>
            </div>
        );
    }
}