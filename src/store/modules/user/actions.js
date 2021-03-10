export default {
    setToken: ({
        commit
    }, token) => {
        commit('setToken', token)
    },
    setUser: ({
        commit
    }, user) => {
        commit('setUser', user)
    },
    setRole: ({
        commit
    }, role) => {
        commit('setRole', role)
    }
}