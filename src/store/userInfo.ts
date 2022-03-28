import {defineStore} from 'pinia';

export interface State {
    userCookie: boolean
}

export const useSignDateStore = defineStore('signData', {
    state: () => {
        return {
            userCookie: false
        }
    },
    actions: {
        setUserCookie_A() {
            this.userCookie = true
            sessionStorage.setItem('userCookie', 'true')
        }
    }
})