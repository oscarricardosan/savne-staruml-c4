const fs = require('fs');
const path = require('path');
const ELEMENTS_FOLDER = path.join(__dirname, 'elements');
class Element {
    constructor() {}

    init() {
        const elementFiles = fs.readdirSync(ELEMENTS_FOLDER);
        elementFiles.forEach((file) => {
            const ElementClass = require(path.join(ELEMENTS_FOLDER, file));
            const name = path.basename(file, '.js');
            this[name.toLowerCase()] = ElementClass.new().init();
        });
    }
}

exports.new = function () {
    return new Element();
};