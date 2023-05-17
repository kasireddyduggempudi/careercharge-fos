import axios from "axios";

const config = {
    "local": {
        "beUrl": "http://localhost:3300"
    },
    "production": {
        "beUrl": "http://ocalhost:3080"
    }
}

const RestClient = {
    doPost: async function doPost(path, body, headers) {
        let url = `${config['local']['beUrl']}/${path}`; // TODO: get env from config
        console.log("post api: ", url);
        const response = await axios.post(url, body);
        return response;
    },
    doGet: async function doGet(path, params, headers) {
        let url = `${config['local']['beUrl']}/${path}?`;
        if(!!params) {
            for(let key of Object.keys(params)) {
                url = url + `${key}=${params[key]}&`
            }
        }
        url = url.slice(0, -1);
        console.log("get api: ", url);
        const response = await axios.get(url);
        return response;
    },
    doPut: async function doPut(path, body, headers) {
        let url = `${config['local']['beUrl']}/${path}`; // TODO: get env from config
        console.log("post api: ", url);
        const response = await axios.put(url, body);
        return response;
    }
    
}
export default RestClient;