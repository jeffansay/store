class Auth {
    constructor() {
        this.authenticaded = false
    }

    login(cb) {
        this.authenticaded = true;
        cb();
    }

    logout(cb) {
        this.authenticaded = false;
        cb();
    }


    isAuthenticated() {
        return this.authenticaded;
    }
}

export default new Auth;