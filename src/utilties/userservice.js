import axios from "axios";
import http from "./http";



export function register(user) {
    const endPoint = 'https://api.orhanaydogdu.com.tr/deprem/data/search'
    return http.post(endPoint, {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
    })

}