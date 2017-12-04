import axios from "axios"
axios.interceptors.request.use(
    config => {
        config.url = "http://localhost:8001/api" + config.url
        return config
    }, function (error) {
        return Promise.reject(error)
    }
) 