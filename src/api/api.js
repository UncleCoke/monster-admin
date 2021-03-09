import {request} from './axios.js'

export const getClassList = (data) => {
    return request({
        url: '/class/list',
        method: 'get',
        data
    })
}