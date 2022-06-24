import axios from "axios";

let axiosInstance = axios.create({
    baseURL:"https://api.themoviedb.org",
    params:{
        api_key:"1b33144be667ac939c59f9d57069f577",
    }
})

export default axiosInstance