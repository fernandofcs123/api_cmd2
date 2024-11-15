class HistoricoModel {
    constructor ({idhistorico, valor, data, idsaida, identrada}) {
        this.idhistorico = idhistorico;
        this.valor = valor;
        this.data = data;
        this.idsaida = idsaida;
        this.identrada = identrada;
    }

    paraJSON() {
        const { idhistorico, valor, data, idsaida, identrada } = this;
        return { idhistorico, valor, data, idsaida, identrada};
    }
}

module.exports = HistoricoModel;