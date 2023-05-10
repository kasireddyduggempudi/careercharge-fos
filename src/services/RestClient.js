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
    }
    
}
export default RestClient;