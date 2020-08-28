import axios from 'axios'

const requester =  async (method: any, url: string, data: Object, headers: Object) => {
    try{
        const configRequest = {
            method: method,
            url: url,
            data: {...data},
            headers: {}
        }
        console.log(configRequest)
        const response = await axios.request(configRequest)
    
        return response
    }catch(err){
        console.log(err)
        return err
    }

}


export {requester}