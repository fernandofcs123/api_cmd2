class DiversosModel {
    constructor ({iddiversos, iddoador, descricao, data}) {
        this.iddiversos = iddiversos;
        this.iddoador = iddoador;
        this.descricao = descricao;
        this.data = data;
    }

    paraJSON() {
        const { iddiversos, iddoador, descricao, data } = this;
        return { iddiversos, iddoador, descricao, data };
    }
}

module.exports = DiversosModel;