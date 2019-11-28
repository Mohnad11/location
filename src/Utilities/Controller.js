import axios from 'axios'
export default class Controller {
    IPData_key="b0b8cd08bd4c1824cd4df64ab44f6975fc71e6ba25914603fe048c61";
    Map_key="AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk"
    getLocation(callBack){
        axios.get('https://api.ipdata.co/?api-key='+this.IPData_key)
            .then(res => {
                const data = res.data;
                callBack(data)
            })
    }
}
