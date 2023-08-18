const config = require("./Config");
class Refactor {
    element;
    constructor() {}
    refactorElement(system_element){
        const system_id = system_element.text;
        this.element= system_element._parent;
        this.refactorC4System(system_element);

        switch (system_id) {
            case config.system_ids.person:
                this.refactorPerson();
                break;
            case config.system_ids.system:
                this.refactorSystem();
                break;
            case config.system_ids.system_limit:
                this.refactorLimit();
                break;
            case config.system_ids.container:
                this.refactorContainer();
                break;
            case config.system_ids.message_bus_container:
                this.refactorMessageBusContainer();
                break;
            case config.system_ids.component:
                this.refactorComponent();
                break;
            case config.system_ids.container_limit:
                this.refactorLimit();
                break;
            case config.system_ids.relationship:
                this.refactorRelationship();
                break;
            case config.system_ids.relationship_with_technology:
                this.refactorRelationshipWithTechnology();
                break;
            case config.system_ids.database:
                this.refactorDatabase();
                break;
        }

    }

    refactorC4System(systemC4){
        systemC4.visible = false
    }

    refactorPerson() {
        this.element.minHeight = 100;
        this.element.minWidth = 180;
        this.element.autoResize = false;

        let left= this.element.left + this.element.width/3;
        let top = this.element.top - this.element.width/3.3;

        let head = this.element.subViews[0];
        head.top= top;
        head.left= left;
        head.enabled= false;
        head.height= this.element.width/3;
        head.width= this.element.width/3;
        head.fillColor = this.element.fillColor;
        head.lineColor = this.element.lineColor;
        head.fontColor = this.element.fontColor;

        let name= this.element.subViews[1];
        let type= this.element.subViews[2];
        let description= this.element.subViews[3];
        this.refactorTextTop(name, type, description)

    }
    refactorSystem(){
        this.element.minHeight = 100;
        this.element.minWidth = 180;
        this.element.autoResize = false;

        let name = this.element.subViews[0];
        let type = this.element.subViews[1];
        let description = this.element.subViews[2]
        this.refactorTextTop(name, type, description)
    }
    refactorLimit() {
        this.element.autoResize = false;
        this.element.text = ''

        let dotted_line = this.element.subViews[2]

        dotted_line.points.points=[];
        dotted_line.points.points.push(
            new type.Point(this.element.left, this.element.top),
            new type.Point(this.element.left, this.element.bottom),
            new type.Point(this.element.left + this.element.width, this.element.bottom),
            new type.Point(this.element.left + this.element.width, this.element.bottom - this.element.height),
            new type.Point(this.element.left, this.element.top),
        )
        dotted_line.enabled = false;
        dotted_line.lineMode = 2;
        dotted_line.lineColor = this.element.lineColor;

        let name= this.element.subViews[0];
        let element_type= this.element.subViews[1];
        this.refactorTextBottom(name, element_type);

    }
    refactorContainer(){
        this.element.minHeight = 100;
        this.element.minWidth = 180;
        this.element.autoResize = false;

        let name = this.element.subViews[0];
        let type = this.element.subViews[1];
        let description = this.element.subViews[2]
        this.refactorTextTop(name, type, description)
    }

    refactorMessageBusContainer(){
        this.element.minHeight = 81;
        this.element.minWidth = 160;
        this.element.autoResize = false;
        let name = this.element.subViews[1];
        let type = this.element.subViews[2];
        let description = this.element.subViews[3]
        this.refactorTextTop(name, type, description)
        name.left = name.left- 20;
        type.top= name.bottom
        type.left = type.left- 20;
        description.top= type.bottom
        description.left = description.left- 20;
    }

    refactorComponent(){
        this.element.minHeight = 100;
        this.element.minWidth = 180;
        this.element.autoResize = false;

        let name = this.element.subViews[0];
        let type = this.element.subViews[1];
        let description = this.element.subViews[2]
        this.refactorTextTop(name, type, description)
    }

    refactorRelationship() {
        if (this.element.tail === undefined) return false
        this.element.headEndStyle = 2;
    }

    refactorRelationshipWithTechnology() {
        if (this.element.subViews.length > 1){
            let description= this.element.subViews[1];
            let technology = description.subViews[1];
            if (technology){
                technology.distance= description.distance / description.distance - (description.height  - 3 ) - description.font.size/3;
                technology.font.face= description.font.face;
                technology.font.size= description.font.size -2;
            }
        }else{
            this.element.headEndStyle = 2;
        }


    }

    refactorDatabase() {

        this.element.minHeight = 81;
        this.element.minWidth = 160;

        let name= this.element.subViews[1];
        let description= this.element.subViews[3];name
        let type= this.element.subViews[2];
        this.refactorTextTop(name, type, description)

        name.top= this.element.top + this.element.height/3 - 10;
        name.height= this.element.height/4;
        type.top= name.bottom;
        type.height= this.element.height/5;
        description.top= type.bottom;
    }

   refactorTextTop(name, type, description){

        name.selectable= false;
        name.top= this.element.top + 7
        name.horzAlign= 2;
        name.left= this.element.left
        name.width= this.element.width;
        name.fontColor = this.element.fontColor;
        name.font.size = this.element.font.size;
        name.font.face = this.element.font.face;
        name.wordWrap = false;

        type.selectable= false;
        type.horzAlign= 2;
        type.top= name.bottom;
        type.left= this.element.left
        type.width= this.element.width;
        type.height = this.element.height/4;
        type.fontColor = this.element.fontColor
        type.font.size = this.element.font.size -5;
        type.font.face = this.element.font.face;
        type.wordWrap = false;


        description.selectable= false;
        description.horzAlign= 2;
        description.top= type.bottom;
        description.left= this.element.left
        description.width= this.element.width;
        description.fontColor = this.element.fontColor
        description.font.size = this.element.font.size - 5;
        description.font.face = this.element.font.face;
        description.wordWrap = false;

       if (description.bottom > this.element.bottom){
           name.height = name.height/2;
           name.type = type.height/2;
       }

    }
    refactorTextBottom(name, type){
        type.selectable= false;
        type.horzAlign= 0;
        type.top= this.element.bottom - 18 - this.element.font.size
        type.width= this.element.width;
        type.left= this.element.left +2
        type.fontColor = this.element.fontColor;
        type.font.size= this.element.font.size;
        type.font.face = this.element.font.face;
        type.wordWrap = true

        name.selectable= false;
        name.horzAlign= 0;
        name.top= type.top - this.element.font.size
        name.left= this.element.left + 2
        name.width= this.element.width;
        name.fontColor = this.element.fontColor;
        name.font.size= this.element.font.size
        name.font.face = this.element.font.face;
        name.wordWrap = true
    }
}
exports.new= function () {
    return new Refactor();
}

