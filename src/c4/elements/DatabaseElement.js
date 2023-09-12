const Config = require("../Config");
class DatabaseElement {
    constructor() {
        this.config = Config
    }
    addDatabase(options){
        options = Object.assign(options, {
            "view-init": {
                height: 113,
                width: 193,
                fillColor: '#23A2D9',
                lineColor: '#0E7DAD',
                fontColor: '#ffffff',
                font : new type.Font('Arial', 16, 0),
                model: null,
                subViews: this.getSubviews()
            }
        });

        const parent = app.factory.createModelAndView(options);
        const models = app.selections.getSelectedModels();
        app.engine.deleteElements(models, []);
        app.diagrams.selectInDiagram(parent);

    }

    getSubviews(){
        let default_element= new type.UMLTextView();

        let name= new type.UMLTextView();
        name.text= "Container name";
        name.horzAlign= 2;
        name.wordWrap= false;

        let label_type=  new type.UMLTextView();
        label_type.text= "[container: e.g. Oracle Database 12]";
        label_type.horzAlign= 2;
        label_type.wordWrap= false;

        let description=  new type.UMLTextView();
        description.text= "Description of storage type ";
        description.horzAlign= 2;
        description.wordWrap= false;

        let label_sys=  new type.LabelView();
        label_sys.text = Config.system_ids.database

        return [default_element, name, label_type, description, label_sys];
    }

    init() {
        app.commands.register('savne-c4:add-database', this.addDatabase.bind(this));
    }
}

exports.new= function () {
    return new DatabaseElement();
}

