
import {Url} from '../config/config'

export function apiRequest () {
    return fetch(Url)
    .then( response => {
        return response.json();
    })
    
}
