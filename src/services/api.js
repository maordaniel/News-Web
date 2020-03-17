import axios from 'axios';

const ax = axios.create({
    baseURL:'http://192.168.1.21:5000/api/',
    headers:{
        "Content-type": 'text/plain',
        withCredentials: true
    }
});

export async function GetData(url) {
    try{
        const response = await ax.get(url);
        return response;
    }catch (e) {
        console.log(e);
    }
}

export async function PostData(url, body){
    try {
        const response = await ax.post(url,body);
        return response
    }catch (e) {
        console.log(e);
    }
}
