const { resolveStyle, isEmoji } = require('../Util');
const { resolveString } = require('discord.js').Util;

class MessageButton {

    constructor(data = {}) {
        this.setup(data);
    }

    setup(data={}) {

        if (data?.style == "gray") data.style = "grey";
        
        this.style = 'style' in data ? resolveStyle(resolveString(data.style)) : 1;

        this.label = 'label' in data ? resolveString(data.label) : null;

        this.disabled = 'disabled' in data ? Boolean(data.disabled) : false;

        if (this.style == 5) {
            this.url = 'url' in data ? resolveString(data.url) : null;
        } else {
            this.custom_id = 'id' in data ? resolveString(data.id): `dbb${Date.now()}`;
        }

        this.setEmoji(data.emoji);

        this.type = 2;

        return this;
    }

    setStyle(style) {
        style = resolveStyle(resolveString(style));
        this.style = style;
        return this;
    }

    setLabel(label) {
        label = resolveString(label);
        this.label = label;
        return this;
    }

    setDisabled(boolean = false) {
        this.disabled = boolean;
        return this;
    }

    setURL(url) {
        this.url = this.style === 5 ? resolveString(url) : null;
        return this;
    }

    setID(id) {
        this.custom_id = this.style === 5 ? null : resolveString(id);
        return this;
    }

    setEmoji(emoji) {
        if (typeof emoji == "object") {
            if ("id" in emoji) {
                this.emoji = { id: emoji.id, animated: "animated" in emoji ? emoji.animated : false };
            } else if ("name" in emoji) {
                this.emoji = { name: emoji.name };
            }
        } else if (typeof emoji == "string" && isEmoji(emoji)) {
            this.emoji = { name: emoji };
        }

        return this;
    }

    toJSON() {
        return {
            type: 2,
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
