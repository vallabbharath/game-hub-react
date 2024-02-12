import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params : {
        key: 'b77aee80c17c4cc4a03a929c029c7c07'
    }
})