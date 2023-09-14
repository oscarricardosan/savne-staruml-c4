const Config = require("../Config");
class ContainerLimitElement {
    constructor() {
        this.config = Config
    }
    addContainerLimit(options){
        options = Object.assign(options, {
            "view-init": {
                height: 217,
                width: 273,
                zIndex: 0,
                lineColor: '#666666',
                font : new type.Font('Source code pro', 13, 0),
                subViews: this.getSubViews()
            }
        });

       app.factory.createModelAndView(options);
    }

    getSubViews(parent){
        let name= new type.UMLTextView();
        name.text= "Container name";
        name.horzAlign= 2;
        name.height = 25;

        let label_type=  new type.UMLTextView();
        label_type.text= "[container]";
        label_type.horzAlign= 2;

        let dotted_line= new type.FreelineEdgeView()

        let label_sys= new type.NodeLabelView();
        label_sys.text= this.config.system_ids.container_limit

        return [name, label_type, dotted_line, label_sys]
    }

    init(){
        app.commands.register('savne-c4:add-container-limit', this.addContainerLimit.bind(this));
    }
}

exports.new = function () {
    return new ContainerLimitElement()
}
