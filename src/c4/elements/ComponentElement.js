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
                font : new type.Font('Arial', 16, 0)
            }
        });

        let parent = app.factory.createModelAndView(options);
        this.addSubViews(parent);
    }
    addSubViews(parent){
        let name= new type.UMLTextView();
        name.text= "Component name";
        name.horzAlign= 2;
        name.wordWrap= false;
        app.engine.addModel(parent, 'subViews', name);

        let label_type= new type.UMLTextView();
        label_type.text= "[Container: ejem. E-mail service]";
        label_type.horzAlign= 2;
        label_type.wordWrap= false;
        app.engine.addModel(parent, 'subViews', label_type);

        let description= new type.UMLTextView();
        description.text= "Description";
        description.horzAlign= 2;
        description.wordWrap= false

        app.engine.addModel(parent, 'subViews', description);

        let label_sys=  new type.LabelView();
        label_sys.text= this.config.system_ids.component;
        app.engine.addModel(parent, 'subViews', label_sys);

    }

    init(){
        app.commands.register('savne-c4:add-component', this.addComponent.bind(this));
    }
}

exports.new = function() {
    return new ComponentElement();
};




