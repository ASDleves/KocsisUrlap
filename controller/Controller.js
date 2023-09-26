import KocsisUrlap from "../view/Autokurlap.js";
import Model from "../model/Model.js";
import { KOCSIK } from "../adatok.js";
class Controller {
  constructor() {
    const szuloElem = $(".tarolo");
    const urlap = new KocsisUrlap({ tipus: "", evjarat: "" }, $(".ujadat"));
    const MODEL=new Model()

    urlap.setSubmitHandler((ujAdat) => {
      MODEL.getList().push(ujAdat);
      console.log(ujAdat)
      console.log(KOCSIK)
    });

  }
}
export default Controller;
