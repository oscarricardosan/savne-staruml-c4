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
                subViews: this.getSubViews()
            }
        });

        app.factory.createModelAndView(options);
    }
    getSubViews(parent){
        let name= new type.UMLTextView();
        name.text= "Container name";
        name.horzAlign= 2;
        name.height= 28;
        name.wordWrap= false;

        let label_type= new type.UMLTextView();
        label_type.text= "[Container:ejem. Java]";
        label_type.horzAlign= 2;
        label_type.wordWrap= false;

        let description= new type.UMLTextView();
        description.text= "Description";
        description.horzAlign= 2;
        description.wordWrap= false;

        let label_sys=  new type.LabelView();
        label_sys.text= this.config.system_ids.container;

        return [name, label_type, description, label_sys];
    }

    init(){
        app.commands.register('savne-c4:add-container', this.addContainer.bind(this));
    }

}
exports.new= function () {
    return new ContainerElement();
}


