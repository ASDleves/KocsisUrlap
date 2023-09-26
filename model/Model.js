import { KOCSIK } from "../adatok.js";
class Model {
    #list = []
    constructor(list){
        this.#list = KOCSIK;

    }
    ujAdat(obj){
        this.#list.push(obj)
    }
    getList(){
        return this.#list
    }
}
export default Model