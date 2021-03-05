import { isCollapse } from "./getters"

export default {
    setIsCollapse({
        commit
    }, token) {
        commit('setIsCollapse', isCollapse)
    }
}