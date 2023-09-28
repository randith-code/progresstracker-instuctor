import axios from "axios"
import { gapi } from "gapi-script"

const createDocument = async(fileName) => {
    const URL = `https://docs.googleapis.com/v1/documents?key=${process.env.REACT_APP_API_KEY}`
    let acessToken = gapi.auth.getToken().access_token
    
    const res = await axios.post(URL,{
        title: fileName
    },{
        headers:{
            'Authorization': `Bearer ${acessToken}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    let documentId = res.data.documentId
    window.open(`https://docs.google.com/document/d/${documentId}/edit`, "_blank")
}

export default createDocument
