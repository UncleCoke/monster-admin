import axios from 'axios';
import store from "./../store";
import {errorNotify} from '../utils/notify';
import router from './../router';

let baseURL = 'https://fxb2api.uelink.com.cn/teacherapi';
const service = axios.create({
    baseURL: baseURL,
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        let token = store.state.user.token;
        if (token !== '') {
            if (config.method === 'post') {
                config.data['token'] = token;
            } else {
                config.params['token'] = token;
            }
        }
        return config;
    },
    error => {
        return Promise.reject(error)
    }
);

service.interceptors.response.use(
    response => {
        const res = response.data;
        if(res.code === 0){
            return res;
        }else if(res.code == -202){
            errorNotify(res.msg);
            window.sessionStorage.clear();
            store.commit('user/setToken', '');
            store.commit('user/setUser', {});
            router.replace({
                path: '/login',
            });
        }else{
            errorNotify(res.msg);
            return Promise.reject(new Error(res.msg || 'Error'))
        }
    },
    error => {
        errorNotify('网络错误，请重试');
        console.log('err',error)
        return Promise.reject(error)
    }
)

export const request = ({
    method = 'post',
    url,
    data
} = {}) => {
    let option = {
        method,
        url,
        data
    }
    if (method === 'get') {
        option = {
            method,
            url,
            params: data
        }
    }
    return service(option)
};

export const downloadFile = (url, args) => {
    let body = document.body,
        form = document.createElement('form'),
        input;

    form.setAttribute('action', url);
    if (args) {
        for (let key in args) {
            input = document.createElement('input');
            input.setAttribute('type', 'hidden');
            input.setAttribute('name', key);
            input.setAttribute('value', args[key]);
            form.appendChild(input);
        }
    }
    let submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'submit');
    form.appendChild(submitBtn);
    body.appendChild(form);
    submitBtn.click();
    body.removeChild(form);
    return form;
};