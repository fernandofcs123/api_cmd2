class SaidaModel {
    constructor ({idsaida, descricao, valor}) {
        this.idsaida = idsaida;
        this.descricao = descricao;
        this.valor = valor;
    }

    paraJSON() {
        const { idsaida, descricao, valor } = this;
        return { idsaida, descricao, valor};
    }
}

module.exports = SaidaModel;