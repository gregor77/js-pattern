var sayHi = function (name) {
    this.message = "Hi! " + name;
    this.language = "ko";

    return this;
}