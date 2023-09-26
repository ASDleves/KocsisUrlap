import KocsisUrlap from "../view/Autokurlap.js";
import Model from "../model/Model.js";
import { TODOLIST3 } from "../adatok.js";
class Controller {
  constructor() {
    const szuloElem = $(".tarolo");
    const urlap = new KocsisUrlap({ tipus: "", rendszam: "" }, $(".ujadat"));
    const MODEL=new Model()

    urlap.setSubmitHandler((ujAdat) => {
      MODEL.getList().push(ujAdat);
      console.log(ujAdat)
      console.log(TODOLIST3)
    });

  }
}
export default Controller;
