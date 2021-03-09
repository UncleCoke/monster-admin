import Vue from 'vue'
const notify = (type, message) => {
    new Vue().$message({
        type,
        message
    })
}

export const errorNotify = (message) => notify('error', message);
export const successNotify = (message) => notify('success', message);
export const infoNotify = (message) => notify('info', message);
export const warningNotify = (message) => notify('warning', message);