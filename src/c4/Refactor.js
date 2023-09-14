const config = require("./Config");
class Refactor {
    element;
    constructor() {}
    refactorElement(element, system){
        this.element= element;
        this.refactorC4System(system);

        switch (system.text) {
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
        Object.assign(systemC4, {
            visible: false
        });
    }

    refactorPerson() {
        Object.assign(this.element, {
            minHeight: 100,
            minWidth: 180,
            autoResize: false
        });

        let left= this.element.left + this.element.width/3;
        let top = this.element.top - this.element.width/3.3;

        Object.assign(this.element.subViews[0], {
            top: top,
            left: left,
            enabled: false,
            height: this.element.width/3,
            width: this.element.width/3,
            fillColor : this.element.fillColor,
            lineColor : this.element.lineColor,
            fontColor : this.element.fontColor,
        })

        let name= this.element.subViews[1];
        let type= this.element.subViews[2];
        let description= this.element.subViews[3];
        this.refactorTextTop(name, type, description)

    }

    refactorSystem(){
        Object.assign(this.element, {
            minHeight: 100,
            minWidth: 180,
            autoResize: false
        });

        let name = this.element.subViews[0];
        let type = this.element.subViews[1];
        let description = this.element.subViews[2]
        this.refactorTextTop(name, type, description)
    }

    refactorLimit() {
        Object.assign(this.element, {
            text: '',
            autoResize: false
        });

        let dotted_line = this.element.subViews[2]
        dotted_line.points.points=[];

        dotted_line.points.points.push(
            new type.Point(this.element.left, this.element.top),
            new type.Point(this.element.left, this.element.bottom),
            new type.Point(this.element.left + this.element.width, this.element.bottom),
            new type.Point(this.element.left + this.element.width, this.element.bottom - this.element.height),
            new type.Point(this.element.left, this.element.top),
        )

        Object.assign(dotted_line, {
            enabled: false,
            lineMode: 2,
            lineColor: this.element.lineColor
        });

        let name= this.element.subViews[0];
        let element_type= this.element.subViews[1];
        this.refactorTextBottom(name, element_type);

    }
    refactorContainer(){
        Object.assign(this.element, {
            minHeight: 100,
            minWidth: 180,
            autoResize: false
        });

        let name = this.element.subViews[0];
        let type = this.element.subViews[1];
        let description = this.element.subViews[2]
        this.refactorTextTop(name, type, description)
    }

    refactorMessageBusContainer(){
        Object.assign(this.element, {
            minHeight: 81,
            minWidth: 160,
            autoResize: false
        });

        this.element.subViews[0].text = '';

        let name = this.element.subViews[1];
        let type = this.element.subViews[2];
        let description = this.element.subViews[3]
        this.refactorTextTop(name, type, description)

        name.left = this.element.left - 20
        type.left = this.element.left - 20
        description.left = this.element.left - 20
    }

    refactorComponent(){
        Object.assign(this.element, {
            minHeight: 100,
            minWidth: 180,
            autoResize: false
        });

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
        this.element.headEndStyle = 2;
        if (this.element.subViews.length > 1){
            let description= this.element.subViews[1];
            let technology = description.subViews[1];
            if (technology){
                Object.assign(technology, {
                    distance: description.distance / description.distance - (description.height  - 3 ) - description.font.size/3,
                    font: new type.Font(description.font.face, description.font.size, 0)
                });
            }
        }
    }

    refactorDatabase() {

        Object.assign(this.element, {
            minHeight: 81,
            minWidth: 160,
            autoResize: false
        });

        this.element.subViews[0].text = '';

        let name= this.element.subViews[1];
        let type= this.element.subViews[2];
        let description= this.element.subViews[3];
        this.refactorTextTop(name, type, description)

        name.top= this.element.top + this.element.height/3 - 8;
        type.top= name.bottom;
        description.top= type.bottom - 2;

        if (description.bottom > this.element.bottom){
            name.height = name.height/2;
            type.height = type.height/2;
        }
    }

    refactorTextTop(name, view_type, description){
        Object.assign(name, {
            selectable: false,
            top: this.element.top + 7,
            horzAlign: 2,
            left: this.element.left,
            width: this.element.width,
            fontColor : this.element.fontColor,
            font: new type.Font(this.element.font.face, this.element.font.size, 0),
            wordWrap : false
        });

        Object.assign(view_type, {
            selectable: false,
            horzAlign: 2,
            top: name.bottom,
            left: this.element.left,
            width: this.element.width,
            height : this.element.height/4,
            fontColor : this.element.fontColor,
            font: new type.Font(this.element.font.face, this.element.font.size- 5, 0),
            wordWrap : false
        });

        Object.assign(description, {
            selectable: false,
            horzAlign: 2,
            top: view_type.bottom,
            left: this.element.left,
            width: this.element.width,
            fontColor : this.element.fontColor,
            font: new type.Font(this.element.font.face, this.element.font.size- 5, 0),
            wordWrap : false
        });

        if (description.bottom > this.element.bottom){
            Object.assign(name, {height: name.height/2});
            Object.assign(view_type, {height: view_type.height/2});
        }
    }

    refactorTextBottom(name, view_type){

        Object.assign(view_type, {
            selectable: false,
            horzAlign: 0,
            top: this.element.bottom - 18 - this.element.font.size,
            width: this.element.width,
            left: this.element.left +2,
            fontColor: this.element.fontColor,
            font: new type.Font(this.element.font.face, this.element.font.size, 0),
            wordWrap: true
        });

        Object.assign(name, {
            selectable: false,
            horzAlign: 0,
            top: view_type.top - this.element.font.size,
            left: this.element.left + 2,
            width: this.element.width,
            fontColor: this.element.fontColor,
            font: new type.Font(this.element.font.face, this.element.font.size, 0),
            wordWrap: true
        });
    }
}

exports.new= function () {
    return new Refactor();
}

