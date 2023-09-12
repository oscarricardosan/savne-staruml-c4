const Config = require("../Config");
class PersonElement {
    constructor() {
        this.config = Config;
    }
    addPerson(options){
        options = Object.assign(options, {
            'model-init': {
                stereotype: options.stereotype,
            },
            "view-init": {
                height: 100,
                width: 180,
                fillColor: '#083F75',
                lineColor: '#06315C',
                fontColor: '#ffffff',
                font : new type.Font('Helvetica', 16, 0),
                subViews: this.getSubviews(),
            }
        });

        return app.factory.createModelAndView(options);
    }

    addPersonExternal(options){
        options = Object.assign(options, {
            'model-init': {
                stereotype: options.stereotype,
            },
            "view-init": {
                height: 100,
                width: 180,
                fillColor: '#6C6477',
                lineColor: '#4D4D4D',
                fontColor: '#ffffff',
                font : new type.Font('Helvetica', 16, 0),
                minHeight: 100,
                minWidth: 180,
                autoResize: false,
                subViews: this.getSubviews()
            }
        });

        return app.factory.createModelAndView(options);
    }

    getSubviews(){
        let head= new type.EllipseView();

        let name= new type.UMLTextView();
        name.text= "Person name";
        name.horzAlign= 2;
        name.height= 28;
        name.wordWrap= false;

        let label_type=  new type.UMLTextView();
        label_type.text= "[Person]";
        label_type.horzAlign= 2;
        label_type.wordWrap= false;

        let description=  new type.UMLTextView();
        description.text= "Description";
        description.horzAlign= 2;
        description.wordWrap= false;

        let label_sys=  new type.LabelView();
        label_sys.text= this.config.system_ids.person;

        return [head, name, label_type, description, label_sys];
    }

    init(){
        app.commands.register('savne-c4:add-person', this.addPerson.bind(this));
        app.commands.register('savne-c4:add-person-external', this.addPersonExternal.bind(this));
    }
}
exports.new= function () {
    return new PersonElement();
}

