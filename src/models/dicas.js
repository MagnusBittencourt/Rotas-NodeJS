import bdDicas from "../infra/dicasBd.js";

class Dicas {

    constructor(dicas){
        this.id = bdDicas.length + 1;
        this.dicas = dicas;
    }

}

export default Dicas