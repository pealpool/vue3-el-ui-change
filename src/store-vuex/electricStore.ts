export interface State {
    data: Array<any>
}

import {reqGetElectricalDate} from '@/api';

export default {
    modules: {
        electricData: {
            namespace: true,
            state: {
                data: []
            },
            getters: {},
            actions: {
                async rgElectricData_A({commit}: any) {
                    const result = await reqGetElectricalDate();
                    if(result.code == 200){
                        commit('rgElectricData_M', result.data)
                    }
                }
            },
            mutations: {
                rgElectricData_M(state: State,result:any) {
                    state.data = result
                }
            }
        }
    }
}
