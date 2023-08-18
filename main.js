const SavneDiagramC4Generator = require("./src/SavneModelC4Generator");
let savneDiagramC4Generator= SavneDiagramC4Generator.new();

function init () {
    savneDiagramC4Generator.init();
}

exports.init = init