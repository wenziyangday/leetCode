function Factory(role) {
    if (this instanceof Factory) {
        const s = new this[role]();
        return s;
    } else {
        return new Factory(role);
    }
}