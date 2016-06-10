import React from 'react';
import { QueueAnim, Button ,Carousel ,Card } from 'antd';

import getData from '../data/netData.jsx';

import './welcome.css';

export default class Welcome extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            city:"",
            weathers:{
                history:{},
                forecast:{},
                today:{}
            },
            cards:{
                0:{},
                1:{},
                2:{},
                3:{}
            }
        }
    }

    componentDidMount(){
        getData.getWeathers('101010100').then((data)=>{
            const weathers ={
                yesterday:{},
                today:{},
                tomorrow:{}
            };
            weathers.yesterday = data.retData.history[6];
            weathers.today = data.retData.today;
            weathers.tomorrow = data.retData.forecast[0];
            this.setState({ weathers: weathers });
        });
        getData.getMvImage(4).then((data)=>{
            this.setState({ cards : data.newslist });
        });
    }

    renderWeathersItem(){
        const weathers = this.state.weathers;
        const weathersItems = [];
        for(var obj in weathers){
            let item = weathers[obj];
            let weathersOption  = (
                <div style={{ display: "flex",flexDirection :"column"}}>
                    <span>天气：{item.type}</span>
                    <span>最高温度：{item.hightemp}</span>
                    <span>最低温度：{item.lowtemp}</span>
                    <spam>风力：{item.fengli}</spam>
                    <span>时间：{item.date}</span>
                </div>
            );
            weathersItems.push(weathersOption);
        }
        return weathersItems;
    }

    renderWeathers(){
        const WeathersItems = this.renderWeathersItem();
        const Weathers = WeathersItems.map((item,i) => {
            return(
                <div className="Item">
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

    renderCardsItem(){
        const MvImages = this.state.cards;
        const MvImagesItems = [];
        for(var obj in MvImages){
            let item = MvImages[obj];
            let MvImageItem = (
                <Card style={{ width:240  }} bodyStyle={{ padding:0 }}>
                    <div style={{ display:"block" }}>
                        <img width="100%" src={item.picUrl} alt="example"/>
                    </div>
                    <div style={{ color: "#999"}}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </Card>
            );
            MvImagesItems.push(MvImageItem);
        }
        return MvImagesItems;
    }

    renderCards(){
        const CardsItems = this.renderCardsItem();
        const Cards = CardsItems.map((item,i)=>{
            return(
                <div>
                    {item}
                </div>
            );
        });
        return (
            <div>
                {Cards}
            </div>
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
                        {this.renderCards()}
                    </div>
                </QueueAnim>
            </div>
        );
    }
}