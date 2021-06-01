export = MessageButton;
declare class MessageButton extends BaseMessageComponent {
    constructor(data?: {});
    setup(data: any): MessageButton;
    style: string;
    label: string;
    disabled: boolean;
    emoji: { name?: string, id?: string, animated?: boolean };
    url: string;
    custom_id: string;
    setStyle(style: "blurple"|"gray"|"green"|"red"|"url"): MessageButton;
    setLabel(label: string): MessageButton;
    setDisabled(disabled?: boolean): MessageButton;
    setURL(url: string): MessageButton;
    setID(id: string): MessageButton;
    setEmoji(emoji: string | ({ name: string } | {id: string, animated?: boolean}), animated?: boolean): MessageButton;
    toJSON(): {
        type: string;
        style: string | null | undefined;
        label: string;
        emoji: string | null | undefined;
        disabled: boolean;
        url: string | null | undefined;
        custom_id: string;
    };
}
import BaseMessageComponent = require("./interfaces/BaseMessageComponent");
