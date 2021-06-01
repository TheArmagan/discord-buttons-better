const { MessageComponentTypes } = require('../Constants.js');
const BaseMessageComponent = require('./interfaces/BaseMessageComponent');
const { resolveString } = require('discord.js').Util;
const { resolveStyle, isEmoji } = require('../Util');

class MessageButton extends BaseMessageComponent {

    constructor(data = {}) {
        super({ type: 'BUTTON' });
        this.setup(data);
    }

    setup(data) {

        this.style = 'style' in data ? resolveStyle(data.style) : null;

        this.label = ('label' in data && data.label) ? resolveString(data.label) : undefined;

        this.disabled = 'disabled' in data ? data.disabled : false;

        this.emoji = 'emoji' in data ? data.emoji : undefined;

        if ('url' in data && data.url)
            this.url = resolveString(data.url)
        else this.url = undefined;

        if (('id' in data && data.id) || ('custom_id' in data && data.custom_id))
            this.custom_id = data.id || data.custom_id;
        else this.custom_id = undefined

        return this;
    }

    setStyle(style) {
        style = resolveStyle(style);
        this.style = style;
        return this;
    }

    setLabel(label) {
        label = resolveString(label);
        this.label = label;
        return this;
    }

    setDisabled(disabled = true) {
        this.disabled = disabled;
        return this;
    }

    setURL(url) {
        this.url = resolveString(url);
        return this;
    }

    setID(id) {
        this.custom_id = resolveString(id);
        return this;
    }

    setEmoji(emoji, animated = false) {
        
        if (typeof emoji == "string") {
            if (isEmoji(emoji)) {
                this.emoji = { name: emoji };
            } else if (emoji.length > 0) {
                this.emoji = { id: emoji, animated };
            } else {
                throw new TypeError("INVALID_EMOJI_STRING")
            }
        } else if (typeof emoji == "object") {
            if (typeof emoji?.name == "string" && isEmoji(emoji.name)) {
                this.emoji = { name: emoji.name };
            } else if (typeof emoji?.id == "string" && emoji.id.length > 0) {
                this.emoji = { id: emoji.id, animated: Boolean(emoji?.animated) };
            } else {
                throw new TypeError("INVALID_EMOJI_OBJECT")
            }
        }

        return this;
    }

    toJSON() {
        return {
            type: MessageComponentTypes.BUTTON,
            style: this.style,
            label: this.label,
            emoji: this.emoji,
            disabled: this.disabled,
            url: this.url,
            custom_id: this.custom_id
        }
    }

}

module.exports = MessageButton;