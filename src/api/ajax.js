import axios from 'axios';
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import store from '@/store';


const requests = axios.create({
    baseURL: "/api",
    timeout: 5000,
});

requests.interceptors.request.use((config) => {
    //可以让进度条开始动
    nprogress.start();
    return config;
});

requests.interceptors.response.use(
    (res) => {
        //进度条结束
        nprogress.done();
        //相应成功做的事情
        return res.data;
    },
    (err) => {
        console.log("服务器响应数据失败");
    }
);

export default requests;