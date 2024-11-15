class EntradaModel {
    constructor ({identrada, iddoador, valor}) {
        this.identrada = identrada;
        this.iddoador = iddoador;
        this.valor = valor;
    }

    paraJSON() {
        const { identrada, iddoador, valor } = this;
        return { iddoador, nome, telefone};
    }
}

module.exports = EntradaModel;