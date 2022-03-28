export interface State {
    userCookie: boolean
}

export default {
    modules: {
        signData: {
            namespace: true,
            state: {
                userCookie: false
            },
            getters: {},
            actions: {
                setUserCookie_A({commit}:any) {
                    commit('setUserCookie_M')
                    sessionStorage.setItem('userCookie','true')
                }
            },
            mutations: {
                setUserCookie_M(state:State ) {
                    state.userCookie = true
                }
            }
        }
    }
}