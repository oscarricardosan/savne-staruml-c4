const Config = require("../Config");

class ComponentElement {
    constructor() {
        this.config = Config
    }
    addComponent(options){
        options = Object.assign(options, {
            'model-init': {
                'stereotype': options.stereotype
            },
            "view-init": {
                height: 100,
                width: 180,
                fillColor: '#63BEF2',
                lineColor: '#63BEF2',
                fontColor: '#ffffff',
                font : new type.Font('Helvetica', 16, 0),
                subViews: this.getSubViews()
            }
        });
        return app.factory.createModelAndView(options);
    }
    getSubViews(){
        let name= new type.UMLTextView();
        name.text= "Component name";
        name.horzAlign= 2;
        name.height= 28;
        name.wordWrap= false;

        let label_type= new type.UMLTextView();
        label_type.text= "[Component: ejem. E-mail service]";
        label_type.horzAlign= 2;
        label_type.wordWrap= false;

        let description= new type.UMLTextView();
        description.text= "Description";
        description.horzAlign= 2;
        description.wordWrap= false

        let label_sys=  new type.LabelView();
        label_sys.text= this.config.system_ids.component;

        return [name, label_type, description, label_sys];
    }

    init(){
        app.commands.register('savne-c4:add-component', this.addComponent.bind(this));
    }
}

exports.new = function() {
    return new ComponentElement();
};




