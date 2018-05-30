function Universe() {
    let instance;
    Universe = function Universe() {
        return instance;
    };

    Universe.prototype = this;
    instance = new Universe();

    instance.start_time = 0;
    instance.bang = 'Big';
    return instance;
    console.log(instance)
}

Universe();
