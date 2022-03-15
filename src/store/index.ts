import {createStore, ModuleTree} from 'vuex'
import userInfo from "@/store/userInfo";

export default createStore({
    modules: {
        userInfo
    }
})
