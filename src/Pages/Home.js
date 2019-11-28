import React,{Component} from 'react'
import Controller from "../Utilities/Controller";

export default class Home extends Component{
    constructor(){
        super();
        this.state={lat:'',long:'',city:'',country:''}
    }
    componentDidMount() {
        let controller=new Controller();
        controller.getLocation(this.handleLocation.bind(this));
    }
    handleLocation(data){
        this.setState({lat:data.latitude,long:data.longitude,city:data.city,country:data.country_name})
    }
    getLocationUrl(){
        return "https://www.google.com/maps/embed/v1/place?key="+new Controller().Map_key+"&q="+this.state.lat+","+this.state.long
    }
    render(){
        return(
            <div>
                <h2>{this.state.country}</h2>
                <h3>{this.state.city}</h3>
                <iframe id={'maps'}
                    src={this.getLocationUrl()} allowFullScreen>
                </iframe>
            </div>
        )
    }
}
