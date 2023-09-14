const Config = require("../Config");
class SystemLimitElement {
    constructor() {
        this.config = Config
    }
    addSystemLimit(options){
        options = Object.assign(options, {
            "view-init": {
                height: 217,
                width: 273,
                zIndex: 0,
                lineColor: '#736782',
                font : new type.Font('Source code pro', 13, 0),
                subViews: this.getSubViews()
            }
        });

        app.factory.createModelAndView(options);
    }
    getSubViews(){
        let name= new type.UMLTextView();
        name.text= "System name";
        name.height = 25;
        name.horzAlign= 2;

        let label_type=  new type.UMLTextView();
        label_type.text= "[Software System]";
        label_type.horzAlign= 2;

        let dotted_line= new type.FreelineEdgeView()
        dotted_line.points.points.push(new type.Point(0, 0))

        let label_sys=  new type.NodeLabelView();
        label_sys.text= this.config.system_ids.system_limit;

        return [name, label_type, dotted_line, label_sys];
    }

    init() {
        app.commands.register('savne-c4:add-system-limit', this.addSystemLimit.bind(this));
    }
}

exports.new= function () {
    return new SystemLimitElement();
}

