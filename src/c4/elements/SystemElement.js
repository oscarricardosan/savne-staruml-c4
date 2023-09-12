const Config = require("../Config");

class SystemElement {
    constructor() {
        this.config = Config
    }
    addSystem(options){
        options = Object.assign(options, {
            'model-init': {
                'stereotype': options.stereotype
            },
            "view-init": {
                height: 100,
                width: 180,
                fillColor: '#1061B0',
                lineColor: '#0D5091',
                fontColor: '#ffffff',
                font : new type.Font('Helvetica', 16, 0),
                subViews: this.getSubViews()
            }
        });

        app.factory.createModelAndView(options);
    }

    addSystemExternal(options){
        options = Object.assign(options, {
            'model-init': {
                'stereotype': options.stereotype
            },
            "view-init": {
                height: 100,
                width: 180,
                fillColor: '#8C8496',
                lineColor: '#736782',
                fontColor: '#ffffff',
                font : new type.Font('Helvetica', 16, 0),
                minHeight: 100,
                minWidth: 180,
                autoResize: false,
                subViews: this.getSubViews()
            }
        });

       app.factory.createModelAndView(options);
    }

    getSubViews(){
        let name= new type.UMLTextView();
        name.text= "System name";
        name.horzAlign= 2;
        name.height= 28;
        name.wordWrap= false;

        let label_type= new type.UMLTextView();
        label_type.text= "[Software System]";
        label_type.horzAlign= 2;
        label_type.wordWrap= false;

        let description= new type.UMLTextView();
        description.text= "Description";
        description.horzAlign= 2;
        description.wordWrap= false;

        let label_sys=  new type.LabelView();
        label_sys.text= this.config.system_ids.system;

        return [name, label_type, description, label_sys]
    }

    init(){
        app.commands.register('savne-c4:add-system', this.addSystem.bind(this));
        app.commands.register('savne-c4:add-system-external', this.addSystemExternal.bind(this));
    }
}

exports.new = function() {
    return new SystemElement();
};




