class KocsisUrlap {
    #adat = {};

    constructor(adat, szuloElem) {
        this.szuloElem = szuloElem;
        this.szuloElem.html("<form>");
        this.formElem = this.szuloElem.children("form");
        this.#adat = adat;
        this.#urlapLetrehozasa();
    }

    setSubmitHandler(callback) {
        this.submitelem.on("click", (event) => {
            event.preventDefault();
            if (this.validateInputs()) {
                this.#adatGyujt();
                callback(this.#adat); 
            }
        });
    }

    validateInputs() {
        const tipusValue = $(`#tipus`).val();
        const evjaratValue = $(`#evjarat`).val();
        const letterRegex = /^[A-Z][a-z]*$/;
        const numberRegex = /^[0-9]+$/;

        if (!letterRegex.test(tipusValue)) {
            alert("A tipusnak nagybetűvel kell kezdődnie és csak betűt tartalmazhat.");
            return false;
        }

        if (!numberRegex.test(evjaratValue)) {
            alert("Az évjáratban csak szám szerepelhet");
            return false;
        }

        return true;
    }

    #urlapLetrehozasa() {
        let txt = "";
        for (const key in this.#adat) {
            txt += `<div class="form-group">`;
            
            if (key === "tipus") {
                txt += `<p>Tipusa</p>`;
            }else{
                txt += `<p>Évjárat</p>`;
            }
            
            txt += `<label for="${key}">${this.#adat[key]}</label>
                <input type="text" class="form-control" id="${key}" name="${key}" value="${this.#adat[key]}">
            </div>`;
        }
        txt += `<div>
            <input type="submit" class="btn btn-primary" id="submit" value="hozzáad">
        </div>`;
        this.formElem.html(txt);
        this.submitelem = this.formElem.children("div").children("#submit");
    }

    #adatGyujt() {
        for (const key in this.#adat) {
            this.#adat[key] = $(`#${key}`).val();
        }
    }
}

export default KocsisUrlap;
