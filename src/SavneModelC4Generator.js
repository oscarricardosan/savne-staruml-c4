const Element = require("./c4/Element");
const element= Element.new();
const Event = require("./c4/Event");
const event = Event.new();
const Load = require("./c4/Load")
const load = Load.new()
class SavneModelC4Generator {
    constructor() {}
    init() {
        load.init();
        event.init();
        element.init();
    }
}

exports.new = function() {
    return new SavneModelC4Generator();
};
