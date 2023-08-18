const Config = require("../Config");
const config = require("../Config");
class RelationshipElement {
    constructor() {
        this.config = Config
    }
    addRelationship(options){
        try {
            let parent= app.factory.createModelAndView(options)
            parent.headEndStyle = 2;
            parent.lineColor = '#828282';
            let label_sys=  new type.LabelView();
            label_sys.text= this.config.system_ids.relationship;
            app.engine.addModel(parent, 'subViews', label_sys);

        }catch (exception){
            if (exception.message === 'Cannot read properties of null (reading \'getBoundingBox\')')
                app.toast.error("Seleccione un elemento C4 antes de intentar relacionar.")
            else
                app.toast.error("An error has occurred")
        }
    }

    init(){
        app.commands.register('savne-c4:add-relationship', this.addRelationship.bind(this));
    }

}

exports.new = function () {
    return new RelationshipElement();
}