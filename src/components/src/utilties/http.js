import axios from "axios";


axios.interceptors.response.use(null, error => {
    let expecError = error.response &&
        error.response.status >= 400
        && error.response.status < 500;
    console.log('called interceptors');
    if (!expecError) {
        console.log('error logging ', error)
        console.log('unexpected error occuerd');
    }
    return Promise.reject(error);
});



export default {
    get: axios.get,
    post: axios.post,
    delete: axios.delete,
    update: axios.update,
}