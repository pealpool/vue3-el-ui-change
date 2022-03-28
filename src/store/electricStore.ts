import {defineStore} from 'pinia';
import {reqGetElectricalDate} from '@/api';

export interface State {
    data: Array<any>
}

export const useElectricStoreStore = defineStore('electricStore', {
    state: () => {
        return {
            data: []
        }
    },
    actions: {
        async rgElectricData_A() {
            const result = await reqGetElectricalDate();
            if (result.code == 200) {
                this.data = result
            }
        }
    }
});