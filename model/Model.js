import { TODOLIST3 } from "../adatok.js";
class Model {
    #list = []
    constructor(list){
        this.#list = TODOLIST3;

    }
    ujAdat(obj){
        this.#list.push(obj)
    }
    getList(){
        return this.#list
    }
}
export default Model