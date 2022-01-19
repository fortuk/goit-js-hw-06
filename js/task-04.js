const сounterPlugin = function({ rootSelector, initialValue = 0, step = 1 } = {}) {
    this.value = initialValue;
    this.step = step;
    this.refs = this._getRefs(rootSelector);
    this.bindEvents();
    this.updateResaltValue();
}
сounterPlugin.prototype._getRefs = function(rootSelector) {
    const refs = {};
    refs.container = document.querySelector(rootSelector);
    refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
    refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
    console.log(refs.decrementBtn);
    refs.value = refs.container.querySelector('#value');
    return refs;

};

сounterPlugin.prototype.bindEvents = function() {
    this.refs.incrementBtn.addEventListener('click', () => {
        this.increment();
        this.updateResaltValue();
    });
    this.refs.decrementBtn.addEventListener('click', () => {
        this.decrement();
        this.updateResaltValue();
    });
};
сounterPlugin.prototype.updateResaltValue = function() {
    this.refs.value.textContent = this.value;
};
сounterPlugin.prototype.increment = function() {
    this.value += this.step;
};
сounterPlugin.prototype.decrement = function() {
    this.value -= this.step;
};
const counter = new сounterPlugin({ rootSelector: "#counter", step: 1 });
console.log('counter', counter);