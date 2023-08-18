const helper = require("./helpers/DescriptionHelper");

class Template {
    constructor() {}
    getPersonTemplate = (element) => {
        const subviews = element.subViews;
        return `      
            <div class="input-dialog dialog modal instance k-window-content k-content" data-title="Person" data-role="window" tabindex="0">
                <div class="dialog-body">                 
                    <div class="dialog-message">Name:
                        <span class="tooltip">
                            <i class="info-circle-icon"></i>
                            <span class="tooltip-content">${helper.elements.person.name}</span>
                         </span>
                    </div>
                    <textarea id="name" class="k-input k-textbox input-box" rows="1">${subviews[0].text}</textarea>
                    <div class="dialog-message c4-dialog-message">Type:
                       <span class="tooltip">
                            <i class="info-circle-icon"></i>
                            <span class="tooltip-content">${helper.elements.person.type}</span>
                         </span>
                    </div>
                    <textarea id="type" class="k-input k-textbox input-box"  rows="1" placeholder="[type]">${subviews[1].text}</textarea>
                    <div class="dialog-message c4-dialog-message">Description:
                        <span class="tooltip">
                            <i class="info-circle-icon"></i>
                            <span class="tooltip-content">${helper.elements.person.description}</span>
                        </span>
                    </div>
                    <textarea id="description" class="k-textbox input-box" style="width: 100%">${subviews[2].text}</textarea>
                </div>
                <div class="dialog-footer">
                    <button class="k-button dialog-button primary" data-button-id="ok">OK</button>
                    <button class="k-button dialog-button" data-button-id="cancel">Cancel</button>
                </div>
            </div>
        `;
    }

    getSystemTemplate = (element) => {
        const subviews= element.subViews;
        return `
            <div class="input-dialog dialog modal instance k-window-content k-content" data-title="System" data-role="window" tabindex="0">
                <div class="dialog-body">
                    <div class="dialog-message">Name:
                        <span class="tooltip">
                            <i class="info-circle-icon"></i>
                            <span class="tooltip-content">${helper.elements.system.name}</span>
                        </span>
                    </div>
                    <textarea id="name" class="k-input k-textbox input-box" rows="1">${subviews[0].text}</textarea>
                    <div class="dialog-message c4-dialog-message">Type:
                        <span class="tooltip">
                            <i class="info-circle-icon"></i>
                            <span class="tooltip-content">${helper.elements.system.type}</span>
                        </span>
                    </div>
                    <textarea id="type" class="k-input k-textbox input-box"  rows="1" placeholder="[type]">${subviews[1].text}</textarea>
                    <div class="dialog-message c4-dialog-message">Description:
                        <span class="tooltip">
                            <i class="info-circle-icon"></i>
                            <span class="tooltip-content">${helper.elements.system.description}</span>
                        </span>
                    </div>
                    <textarea id="description" class="k-textbox input-box" rows="4">${subviews[2].text}</textarea>
                </div>
                <div class="dialog-footer">
                    <button class="k-button dialog-button primary" data-button-id="ok">OK</button>
                    <button class="k-button dialog-button" data-button-id="cancel">Cancel</button>
                </div>
            </div>
        `;
    };
    getSystemLimitTemplate = (element) => {
        const subviews= element.subViews;
        return `
            <div class="input-dialog dialog modal instance k-window-content k-content" data-title="System Limit" data-role="window" tabindex="0">
                <div class="dialog-body">
                    <div class="dialog-message">Name:
                        <span class="tooltip">
                            <i class="info-circle-icon"></i>
                            <span class="tooltip-content">${helper.elements.system_limit.name}</span>
                        </span>
                    </div>
                    <input type="text" id="name" class="k-input k-textbox input-box" value="${subviews[0].text}">
                    <div class="dialog-message c4-dialog-message">Type:
                        <span class="tooltip">
                            <i class="info-circle-icon"></i>
                            <span class="tooltip-content">${helper.elements.system_limit.type}</span>
                        </span>
                    </div>
                    <input type="text" id="type" class="k-input k-textbox input-box" value="${subviews[1].text}">                
                </div>
                <div class="dialog-footer">
                    <button class="k-button dialog-button primary" data-button-id="ok">OK</button>
                    <button class="k-button dialog-button" data-button-id="cancel">Cancel</button>
                </div>
            </div>
        `;
    };
    getContainerTemplate = (element) => {
        const subviews= element.subViews;
        return `
            <div class="input-dialog dialog modal instance k-window-content k-content" data-title="Container" data-role="window" tabindex="0">
               <div class="dialog-body">
                    <div class="dialog-message">Name:
                        <span class="tooltip">
                            <i class="info-circle-icon"></i>
                            <span class="tooltip-content">${helper.elements.container.name}</span>
                        </span>
                    </div>
                    <textarea id="name" class="k-input k-textbox input-box" rows="1">${subviews[0].text}</textarea>
                    <div class="dialog-message c4-dialog-message">Type:
                        <span class="tooltip">
                            <i class="info-circle-icon"></i>
                            <span class="tooltip-content">${helper.elements.container.type}</span>
                        </span>
                    </div>
                    <textarea id="type" class="k-input k-textbox input-box"  rows="1" placeholder="[type]">${subviews[1].text}</textarea>
                    <div class="dialog-message c4-dialog-message">Description:
                        <span class="tooltip">
                            <i class="info-circle-icon"></i>
                            <span class="tooltip-content">${helper.elements.container.description}</span>
                        </span>
                    </div>
                    <textarea id="description" class="k-textbox input-box" rows="4">${subviews[2].text}</textarea>
                </div>
                <div class="dialog-footer">
                    <button class="k-button dialog-button" data-button-id="ok">OK</button>
                    <button class="k-button dialog-button" data-button-id="cancel">Cancel</button>
                </div>
            </div>
        `;
    };
    getContainerLimitTemplate = (element) => {
        const subviews= element.subViews;
        return `
            <div class="input-dialog dialog modal instance k-window-content k-content" data-title="Container Limit" data-role="window" tabindex="0">
                <div class="dialog-body">
                    <div class="dialog-message">Name:
                        <span class="tooltip">
                            <i class="info-circle-icon"></i>
                            <span class="tooltip-content">${helper.elements.container_limit.name}</span>
                        </span>
                    </div>
                    <input type="text" id="name" class="k-input k-textbox input-box" value="${subviews[0].text}">
                    <div class="dialog-message c4-dialog-message">Type:
                        <span class="tooltip">
                            <i class="info-circle-icon"></i>
                            <span class="tooltip-content">${helper.elements.container_limit.type}</span>
                        </span>
                    </div>
                    <input type="text" id="type" class="k-input k-textbox input-box" value="${subviews[1].text}">                
                </div>
                <div class="dialog-footer">
                    <button class="k-button dialog-button primary" data-button-id="ok">OK</button>
                    <button class="k-button dialog-button" data-button-id="cancel">Cancel</button>
                </div>
            </div>
        `;
    };

    getRelationTemplate = (element) => {
        const description= element.subViews[1].text;
        return `         
            <div class="input-dialog dialog modal instance k-window-content k-content" data-title="Relationship" data-role="window" tabindex="0">
                <div class="dialog-body">
                    <div class="dialog-message c4-dialog-message">Description:
                        <span class="tooltip">
                            <i class="info-circle-icon"></i>
                            <span class="tooltip-content">${helper.elements.relationship.description}</span>
                        </span>                    
                    </div>
                    <input type="text" id="description" class="k-input k-textbox input-box" value="${description}">                                  
                </div>
                <div class="dialog-footer">
                    <button class="k-button dialog-button primary" data-button-id="ok">OK</button>
                    <button class="k-button dialog-button" data-button-id="cancel">Cancel</button>
                </div>
            </div>
        `;
    };
    getRelationWithTechnologyTemplate = (element) => {
        const description = element.subViews[1].text;
        const technology = element.subViews[1].subViews[1].text;
        return `         
            <div class="input-dialog dialog modal instance k-window-content k-content" data-title="Relationship With Technology" data-role="window" tabindex="0">
                <div class="dialog-body">
                    <div class="dialog-message">Description:
                        <span class="tooltip">
                            <i class="info-circle-icon"></i>
                            <span class="tooltip-content">${helper.elements.relation_with_technology.description}</span>
                        </span>       
                    </div>
                    <input type="text" id="description" class="k-input k-textbox input-box" value="${description}">
                    <div class="dialog-message c4-dialog-message">Technology:
                        <span class="tooltip">
                            <i class="info-circle-icon"></i>
                            <span class="tooltip-content">${helper.elements.relation_with_technology.type}</span>
                        </span>       
                    </div>
                    <input type="text" id="technology" class="k-input k-textbox input-box" value="${technology}">                
                </div>
                <div class="dialog-footer">
                    <button class="k-button dialog-button primary" data-button-id="ok">OK</button>
                    <button class="k-button dialog-button" data-button-id="cancel">Cancel</button>
                </div>
            </div>
        `;
    };

    getDatabaseTemplate = (element) => {
        const subviews = element.subViews;
        return `
            <div class="input-dialog dialog modal instance k-window-content k-content" data-title="Database" data-role="window" tabindex="0">
                <div class="dialog-body">
                    <div class="dialog-message">Name:
                        <span class="tooltip">
                            <i class="info-circle-icon"></i>
                            <span class="tooltip-content">${helper.elements.database.name}</span>
                        </span>  
                    </div>
                    <textarea id="name" class="k-input k-textbox input-box" rows="1">${subviews[1].text}</textarea>
                    <div class="dialog-message c4-dialog-message">Type:
                        <span class="tooltip">
                            <i class="info-circle-icon"></i>
                            <span class="tooltip-content">${helper.elements.database.type}</span>
                        </span>  
                    </div>
                    <textarea id="type" class="k-input k-textbox input-box"  rows="1" placeholder="[type]">${subviews[2].text}</textarea>
                    <div class="dialog-message c4-dialog-message">Description:
                        <span class="tooltip">
                            <i class="info-circle-icon"></i>
                            <span class="tooltip-content">${helper.elements.database.description}</span>
                        </span>  
                    </div>
                    <textarea id="description" class="k-textbox text-box primary" style="width: 100%">${subviews[3].text}</textarea>
                </div>
                <div class="dialog-footer">
                    <button class="k-button dialog-button primary" data-button-id="ok">OK</button>
                    <button class="k-button dialog-button" data-button-id="cancel">Cancel</button>
                </div>
            </div>
        `;
    }

    getComponentTemplate = (element) => {
        const subviews = element.subViews;
        return `
            <div class="input-dialog dialog modal instance k-window-content k-content" data-title="Component" data-role="window" tabindex="0">
                <div class="dialog-body">
                    <div class="dialog-message">Name:
                        <span class="tooltip">
                            <i class="info-circle-icon"></i>
                            <span class="tooltip-content">${helper.elements.component.name}</span>
                        </span>  
                    </div>
                    <textarea id="name" class="k-input k-textbox input-box" rows="1">${subviews[0].text}</textarea>
                    <div class="dialog-message c4-dialog-message">Type:
                        <span class="tooltip">
                            <i class="info-circle-icon"></i>
                            <span class="tooltip-content">${helper.elements.component.type}</span>
                        </span>  
                    </div>
                    <textarea id="type" class="k-input k-textbox input-box"  rows="1" placeholder="[type]">${subviews[1].text}</textarea>
                    <div class="dialog-message c4-dialog-message">Description:
                        <span class="tooltip">
                            <i class="info-circle-icon"></i>
                            <span class="tooltip-content">${helper.elements.component.description}</span>
                        </span>  
                    </div>
                    <textarea id="description" class="k-textbox text-box primary" style="width: 100%">${subviews[2].text}</textarea>
                </div>
                <div class="dialog-footer">
                    <button class="k-button dialog-button primary" data-button-id="ok">OK</button>
                    <button class="k-button dialog-button" data-button-id="cancel">Cancel</button>
                </div>
            </div>
        `;
    }

    getMessageBusContainerTemplate = (element) => {
        const subviews = element.subViews;
        return `
            <div class="input-dialog dialog modal instance k-window-content k-content" data-title="Message Bus Container" data-role="window" tabindex="0">
                <div class="dialog-body">
                    <div class="dialog-message">Name:
                        <span class="tooltip">
                            <i class="info-circle-icon"></i>
                            <span class="tooltip-content">${helper.elements.message_bus_container.name}</span>
                        </span>  
                    </div>
                    <textarea id="name" class="k-input k-textbox input-box" rows="1">${subviews[1].text}</textarea>
                    <div class="dialog-message c4-dialog-message">Type:
                        <span class="tooltip">
                            <i class="info-circle-icon"></i>
                            <span class="tooltip-content">${helper.elements.message_bus_container.type}</span>
                        </span>  
                    </div>
                    <textarea id="type" class="k-input k-textbox input-box"  rows="1" placeholder="[type]">${subviews[2].text}</textarea>
                    <div class="dialog-message c4-dialog-message">Description:
                        <span class="tooltip">
                            <i class="info-circle-icon"></i>
                            <span class="tooltip-content">${helper.elements.message_bus_container.description}</span>
                        </span>  
                    </div>
                    <textarea id="description" class="k-textbox text-box primary" style="width: 100%">${subviews[3].text}</textarea>
                </div>
                <div class="dialog-footer">
                    <button class="k-button dialog-button primary" data-button-id="ok">OK</button>
                    <button class="k-button dialog-button" data-button-id="cancel">Cancel</button>
                </div>
            </div>
        `;
    }

}

exports.new= function () {
    return new Template();
}