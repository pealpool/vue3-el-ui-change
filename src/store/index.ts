import {createStore, ModuleTree} from 'vuex'
import userInfo from "@/store/userInfo";
import electricStore from "@/store/electricStore";

export default createStore({
    modules: {
        userInfo,
        electricStore
    }
})
