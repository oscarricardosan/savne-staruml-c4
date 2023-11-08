const config = require("./Config");
const Template = require("./Template")
class Dialog {
    systemc4;
    element;
    constructor() {
        this.template= Template.new()
    }
    show(element, system_c4 ){
        this.element = element;
        this.systemc4 = system_c4

        switch (system_c4.text) {
            case config.system_ids.person:
                this.getPersonDialog();
                break;
            case config.system_ids.system:
                this.getSystemDialog();
                break;
            case config.system_ids.system_limit:
                this.getSystemLimitDialog();
                break;
            case config.system_ids.container:
                this.getContainerDialog();
                break;
            case config.system_ids.message_bus_container:
                this.getMessageBusContainerDialog();
                break;
            case config.system_ids.component:
                this.getComponentDialog();
                break;
            case config.system_ids.container_limit:
                this.getContainerLimitDialog();
                break;
            case config.system_ids.relationship:
                this.getRelationshipDialog();
                break;
            case config.system_ids.relationship_with_technology:
                this.getRelationshipWithTechnologyDialog();
                break;
            case config.system_ids.database:
                this.getDatabaseDialog();
                return false;
        }
    }

    getPersonDialog() {
        const template= this.template.getPersonTemplate(this.element);
        let self = this;
        this.getDialog(template)
            .then(function (response) {
                if (response.success === 'ok'){
                    app.engine.setProperty(self.element.subViews[1], 'text', response.data.name);
                    let str_replace= response.data.type.replace(/\[|\]/g, '').trim();
                    app.engine.setProperty(self.element.subViews[2], 'text', `[${str_replace}]`);
                    app.engine.setProperty(self.element.subViews[3], 'text', response.data.description);
                }
            })
    }

    getSystemDialog() {
        const template= this.template.getSystemTemplate(this.element);
        this.assignGeneralTextValue(template);
    }

    getSystemLimitDialog(){
        app.diagrams.selectInDiagram(this.element)
        const template= this.template.getSystemLimitTemplate(this.element);
        this.assignLimitTextValue(template);
    }

    getContainerDialog() {
        const template= this.template.getContainerTemplate(this.element);
        this.assignGeneralTextValue(template);
    }

    getMessageBusContainerDialog() {
        let self= this
        const template= this.template.getMessageBusContainerTemplate(self.element);
        app.diagrams.selectInDiagram(self.element)
        this.getDialog(template)
            .then(function (response) {
                if (response.success === 'ok'){
                    app.engine.setProperty(self.element.subViews[1], 'text', response.data.name);
                    let str_replace= response.data.type.replace(/\[|\]/g, '').trim();
                    app.engine.setProperty(self.element.subViews[2], 'text', `[${str_replace}]`);
                    app.engine.setProperty(self.element.subViews[3], 'text', response.data.description);
                }
            })
    }

    getComponentDialog() {
        const template= this.template.getComponentTemplate(this.element);
        this.assignGeneralTextValue(template);
    }

    getContainerLimitDialog() {
        app.diagrams.selectInDiagram(this.element)
        const template= this.template.getContainerLimitTemplate(this.element);
        this.assignLimitTextValue(template);
    }

    getRelationshipDialog(){
        let element = this.element;
        if (element instanceof type.UMLNoteLinkView){
            if (element.subViews.length <= 1){
                let description=  new type.EdgeLabelView();
                Object.assign(description,{
                    alpha: 0.44,
                    distance: 58,
                    font: new type.Font('Helvetica', 11, 0),
                    fontColor: '#373737',
                    wordWrap: true
                });
                app.engine.addModel(this.element, 'subViews', description);

                let label_sys=  new type.LabelView();
                Object.assign(label_sys,{
                    text: config.system_ids.relationship,
                    visible: false
                });
                app.engine.addModel(description, 'subViews', label_sys);
            }
        }else{
            element = this.element._parent;
        }

        const template= this.template.getRelationTemplate(element);
        this.getDialog(template)
            .then(function (response) {
                if (response.success === 'ok'){
                    app.engine.setProperty(element.subViews[1], 'text', response.data.description);
                }
            })
    }

    getRelationshipWithTechnologyDialog(){
        let element = this.element;
        if (element instanceof type.UMLNoteLinkView){
            if (element.subViews.length < 2){
                let description= new type.EdgeLabelView();
                Object.assign(description,{
                    alpha: 0.30,
                    distance: 83,
                    text: "Description",
                    font: new type.Font('Helvetica', 11, 0),
                    fontColor: '#373737',
                    wordWrap: true
                });
                app.engine.addModel(this.element, 'subViews', description)

                let technology=  new type.NodeLabelView();
                Object.assign(technology,{
                    alpha: 1.6,
                    distance: -17,
                    enabled: false,
                    text: "[JSON/HTTPS]",
                    fontColor: '#373737',
                    wordWrap: true
                });
                app.engine.addModel(description, 'subViews', technology);

                let label_sys=  new type.LabelView();
                Object.assign(label_sys,{
                    text: config.system_ids.relationship_with_technology,
                    visible: false
                });
                app.engine.addModel(description, 'subViews', label_sys);
            }
        }else{
            element = this.element._parent
        }

        const template= this.template.getRelationWithTechnologyTemplate(element);
        this.getDialog(template)
            .then(function (response) {
                if (response.success === 'ok'){
                    const description_element = element.subViews[1];
                    const technology_element = element.subViews[1].subViews[1];
                    app.engine.setProperty(description_element, 'text', response.data.description);
                    let technology= response.data.technology.replace(/\[|\]/g, '').trim();
                    app.engine.setProperty(technology_element, 'text', `[${technology}]`);
                }
            })
    }

    getDatabaseDialog(){
        let element = this.element
        app.diagrams.selectInDiagram(this.element)
        const template= this.template.getDatabaseTemplate(element);
        this.getDialog(template)
            .then(function (response) {
                if (response.success === 'ok'){
                    app.engine.setProperty(element.subViews[1], 'text', response.data.name);
                    let str_replace= response.data.type.replace(/\[|\]/g, '').trim();
                    app.engine.setProperty(element.subViews[2], 'text', `[${str_replace}]`);
                    app.engine.setProperty(element.subViews[3], 'text', response.data.description);
                }
            })
    }

    getDialog(template) {
        return new Promise(function (resolve) {
            template = $(template)
            template.addClass('instance')
            $(window.document.body).append(template)

            template.kendoWindow({
                modal: true,
                pinned: true,
                resizable: false,
                title: template.data('title'),
                close: function () {
                    let data= {}
                    if (template.data('button') === 'ok'){
                        template.find('input, textarea').each(function (index, item) {
                            const name = $(item).attr('id');
                            data[name]= $(item).val()
                        })
                    }

                    const response =  {
                        success : template.data('button'),
                        data: data
                    }
                    this.destroy()
                    resolve(response)
                }
            })

            template.data('kendoWindow').center()

            template.one('click', '.dialog-button', function () {
                template.data('button', $(this).data('button-id'))
                template.data('kendoWindow').close()
            })
        })

    }

    assignGeneralTextValue(template){
        let self = this;
        this.getDialog(template)
            .then(function (response) {
                if (response.success === 'ok'){
                    app.engine.setProperty(self.element.subViews[0], 'text', response.data.name);
                    let str_replace= response.data.type.replace(/\[|\]/g, '').trim();
                    app.engine.setProperty(self.element.subViews[1], 'text', `[${str_replace}]`);
                    app.engine.setProperty(self.element.subViews[2], 'text', response.data.description);
                }
            })
    }

    assignLimitTextValue(template){
        let self = this;
        this.getDialog(template)
            .then(function (response) {
                if (response.success === 'ok'){
                    app.engine.setProperty(self.element.subViews[0], 'text', response.data.name);
                    let str_replace= response.data.type.replace(/\[|\]/g, '').trim();
                    app.engine.setProperty(self.element.subViews[1], 'text', `[${str_replace}]`);
                }
            })
    }
}
exports.new= function () {
    return new Dialog();
}

