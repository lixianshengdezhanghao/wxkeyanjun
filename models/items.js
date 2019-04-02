import {
    HTTP
} from "../utils/http-pormise";

class ItemModel extends HTTP {
    getItemList(){
        return this.request({
            url:`/getitems`,
        })
    }

}
export {
    ItemModel
};