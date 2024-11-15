class DoadoresModel {
    constructor ({iddoador, nome, telefone}) {
        this.iddoador = iddoador;
        this.nome = nome;
        this.telefone = telefone;
    }
    
    paraJSON() {
        const { iddoador, nome, telefone } = this;
        return { iddoador, nome, telefone};
    }

    
}


module.exports = DoadoresModel;