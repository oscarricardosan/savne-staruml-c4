const Config = require("./Config");
const Refactor = require('./Refactor');
const refactor= Refactor.new();
class Load {
    constructor() {}
    loadGeneral(){
        const self = this;
        app.repository.select("@Diagram").forEach(function (diagram) {
            self.refactorElement(diagram.ownedViews);
        })
    }

    refactorElement(views){
        if (views === undefined) return false;
        views.forEach(function (view) {
            if (!view.subViews) return false;
            const element_system = view.subViews.find(
                view => Object.values(Config.system_ids).includes(view.text)
            );

            if (element_system) refactor.refactorElement(element_system);
        })
    }

    init(){
        const self = this;
        setTimeout(function ()  {
            self.loadGeneral();
        })
    }
}

exports.new = function () {
    return new Load();
}
