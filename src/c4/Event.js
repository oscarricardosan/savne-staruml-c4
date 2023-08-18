const Dialog = require('./Dialog');
const dialog= Dialog.new()
const Refactor = require('./Refactor')
const refactor= Refactor.new()
const Config = require("./Config");
class Event {
    constructor() {}
    doubleClicked(){
        app.diagrams.on('viewDoubleClicked', (view, x, y) => {
            if (view.subViews.length === 0) return false;
            const element_system = view.subViews.find(
                view => Object.values(Config.system_ids).includes(view.text)
            );
            if (!element_system) return false;
            dialog.show(element_system, x, y)
        });
    }

    updated(){
        const self = this;
        app.repository.on('updated', function () {
            let views_to_refactor = app.diagrams.getCurrentDiagram().ownedViews
            self.refactorElement(views_to_refactor);
        })
    }

    selected(){
        const self= this;
        app.selections.on('selectionChanged', function () {
            let views_to_refactor = app.diagrams.getCurrentDiagram().ownedViews
            self.refactorElement(views_to_refactor);
        })
    }

    refactorElement(views){
        if (views === undefined) return false;
        views.forEach(function (view) {
            if (!view.subViews) return false;
            const element_system = view.subViews.find(
                view => Object.values(Config.system_ids).includes(view.text)
            );
            if (element_system) refactor.refactorElement(element_system)
        })
    }

    init(){
        this.doubleClicked();
        this.updated();
        this.selected();
    }

}

exports.new = function () {
    return new Event();
}





