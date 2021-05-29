export = MessageButton;

interface ButtonDefaultEmoji {
    name: string;
}

interface ButtonGuildEmoji {
    id: string;
    animated: boolean;
}


declare class MessageButton {
    constructor(data?: {});
    setup(data: object): MessageButton;
    style: string;
    label: string;
    disabled: boolean;
    url: string;
    custom_id: string;
    type: number;
    setStyle(style: string): MessageButton;
    setLabel(label: string): MessageButton;
    setDisabled(boolean: boolean): MessageButton;
    setURL(url: string): MessageButton;
    setID(id: string): MessageButton;
    setEmoji(emoji: ButtonDefaultEmoji | ButtonGuildEmoji | string): MessageButton;
    toJSON(): {
        type: number;
        style: string;
        label: string;
        disabled: boolean;
        url: string;
        custom_id: string;
    };
}
