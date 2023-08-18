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
                font : new type.Font('Source code pro', 13, 0)
            }
        });

        let parent = app.factory.createModelAndView(options);
        this.addSubViews(parent);
    }
    addSubViews(parent){
        let name= new type.UMLTextView();
        name.text= "System name";
        name.horzAlign= 2;
        app.engine.addModel(parent, 'subViews', name);

        let label_type=  new type.UMLTextView();
        label_type.text= "[Software System]";
        label_type.horzAlign= 2;
        app.engine.addModel(parent, 'subViews', label_type);

        let dotted_line= new type.FreelineEdgeView()
        dotted_line.points.points.push(
            new type.Point(parent.left, parent.top),
            new type.Point(parent.left, parent.bottom),
            new type.Point(parent.left + parent.width, parent.bottom),
            new type.Point(parent.left + parent.width, parent.bottom - parent.height),
            new type.Point(parent.left, parent.top),
        )
        app.engine.addModel(parent, 'subViews', dotted_line);

        let label_sys=  new type.NodeLabelView();
        label_sys.text= this.config.system_ids.system_limit;
        app.engine.addModel(parent, 'subViews', label_sys);

    }

    init() {
        app.commands.register('savne-c4:add-system-limit', this.addSystemLimit.bind(this));
    }
}

exports.new= function () {
    return new SystemLimitElement();
}

