import {HTTPApiHost} from "./ServiceConfig";
import axios from "axios";
import {User} from "../types/User";

export function fetchUserDetail(uid: number, callback: (user: User) => void) {
    axios.get(HTTPApiHost + "/user/detail/" + uid)
        .then(function (response) {
            if (response.data.code == 200 && response.data.message == 'success') {
                let username = response.data.data.username;
                let email = response.data.data.email;
                let user = new User(uid, username, '', email);
                callback(user);
            } else {
                return undefined;
            }
        })
}