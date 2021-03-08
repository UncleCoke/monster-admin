export default {
    setToken: ({
        commit
    }, token) => {
        commit('setToken', token)
    },
    setUserName: ({
        commit
    }, userName) => {
        commit('setUserName', userName)
    },
    setAvatarUrl: ({
        commit
    }, avatarUrl) => {
        commit('setAvatarUrl', avatarUrl)
    }
}