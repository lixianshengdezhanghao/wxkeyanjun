import {
    HTTP
} from "../utils/http-pormise";

class OrderModel extends HTTP {
    /* getMyOrder() {
        return this.request({
            url: "/my-order"
        })
    } */
    getMyExpress(id){
        return this.request({
            url:`/getpoststatus?postid=${id}`,
        })
    }

}
export {
    OrderModel
};