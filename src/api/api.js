import {request} from './axios.js'

export const login = (data) => {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}

export const tables = (data) => {
    return request({
        url: '/tables',
        method: 'post',
        data
    })
}

