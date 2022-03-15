export interface Store {
    userCookie: string
}

export default {
    modules: {
        signData: {
            namespace: true,
            state: {
                userCookie: ''
            },
            getters: {},
            actions: {},
            mutations: {}
        }
    }

}