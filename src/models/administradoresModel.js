class AdministradoresModel {
    constructor ({idadministrador, email, senha}) {
        this.idadministrador = idadministrador;
        this.email = email;
        this.senha = senha;
        this.role = 1;
    }
    
    paraJSON() {
        const { idadministrador, email, senha, role } = this;
        return { idadministrador, email, senha, role};
    }

    
}


module.exports = AdministradoresModel;