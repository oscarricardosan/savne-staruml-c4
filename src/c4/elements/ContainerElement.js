const Config = require("../Config");
class ContainerElement {
    constructor() {
        this.config = Config
    }

    addContainer(options){
        options = Object.assign(options, {
            'model-init': {
                'stereotype': options.stereotype
            },
            "view-init": {
                height: 100,
                width: 180,
                fillColor: '#23A2D9',
                lineColor: '#0E7DAD',
                fontColor: '#ffffff',
                font : new type.Font('Helvetica', 16, 0),
                minHeight: 100,
                minWidth: 180,
            }
        });

        let parent = app.factory.createModelAndView(options);
        this.addSubViews(parent);
    }
    addSubViews(parent){
        let name= new type.UMLTextView();
        name.text= "Container name";
        name.horzAlign= 2;
        name.wordWrap= false;
        app.engine.addModel(parent, 'subViews', name);

        let label_type= new type.UMLTextView();
        label_type.text= "[Container:ejem. Java]";
        label_type.horzAlign= 2;
        label_type.wordWrap= false;
        app.engine.addModel(parent, 'subViews', label_type);

        let description= new type.UMLTextView();
        description.text= "Description";
        description.horzAlign= 2;
        description.wordWrap= false;
        app.engine.addModel(parent, 'subViews', description);

        let label_sys=  new type.LabelView();
        label_sys.text= this.config.system_ids.container;
        app.engine.addModel(parent, 'subViews', label_sys);
    }

    init(){
        app.commands.register('savne-c4:add-container', this.addContainer.bind(this));
    }

}
exports.new= function () {
    return new ContainerElement();
}


