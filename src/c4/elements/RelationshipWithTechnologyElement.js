const Config = require("../Config");
class RelationshipWithTechnologyElement {
    constructor() {
        this.config = Config
    }
    addRelationshipWithTechnology(options){
        try {
            let label_sys=  new type.LabelView();
            label_sys.text= this.config.system_ids.relationship_with_technology;

            options = Object.assign(options, {
                "view-init": {
                    headEndStyle: 2,
                    lineColor: '#828282',
                    subViews: [label_sys]
                }
            });

            app.factory.createModelAndView(options)

        }catch (exception){
            if (exception.message === 'Cannot read properties of null (reading \'getBoundingBox\')')
                app.toast.error("Seleccione un elemento C4 antes de intentar relacionar.")
            else
                app.toast.error("An error has occurred")
        }
    }

    init(){
        app.commands.register('savne-c4:add-relationship_with_technology', this.addRelationshipWithTechnology.bind(this));
    }

}

exports.new = function () {
    return new RelationshipWithTechnologyElement();
}