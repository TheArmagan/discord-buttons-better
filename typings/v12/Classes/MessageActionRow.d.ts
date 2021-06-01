export = MessageActionRow;
declare class MessageActionRow extends BaseMessageComponent {
    constructor(data?: {});
    setup(data: any): MessageActionRow;
    component: MessageActionRow | import("./MessageButton");
    components: (import("./MessageButton"))[];
    addComponents(...components: (import("./MessageButton"))[]): MessageActionRow;
    addComponent(component: import("./MessageButton")): MessageActionRow;
    toJSON(): {
        components: (import("./MessageButton"))[];
        type: number;
    };
}
import BaseMessageComponent = require("./interfaces/BaseMessageComponent");
