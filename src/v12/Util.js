const Util = require("../Util.js");
const { MessageButtonStyles, MessageButtonStylesAliases, MessageComponentTypes } = require('./Constants.js');

module.exports = {
    resolveStyle(style) {
        if (!style) throw new TypeError('NO_BUTTON_STYLE: Please provide button style');

        if (style === 'gray') style = 'grey';

        if (!MessageButtonStyles[style] && !MessageButtonStylesAliases[style]) throw new TypeError('INVALID_BUTTON_STYLE: An invalid button styles was provided');

        return typeof style === 'string' ? MessageButtonStyles[style] : style;
    },
    resolveButton(data) {

        if (data.type !== 2 && data.type !== 3) throw new TypeError('NO_BUTTON_TYPE: Invalid type');

        if (!data.style) throw new TypeError('NO_BUTTON_STYLE: Please provide button style');

        if (!data.label && !data.emoji) throw new TypeError('NO_BUTTON_LABEL_AND_EMOJI: Please provide button label and/or emoji');

        if ('disabled' in data && typeof (data.disabled) !== 'boolean') throw new TypeError('BUTTON_DISABLED: The button disabled option must be boolean (true/false)')

        if (data.style === MessageButtonStyles.url && !data.url) throw new TypeError('NO_BUTTON_URL: You provided url style, you must provide an URL');

        if (data.style !== MessageButtonStyles.url && data.url) throw new TypeError('BOTH_URL_CUSTOM_ID: A custom id and url cannot both be specified');

        if (data.style === MessageButtonStyles.url && data.custom_id) throw new TypeError('BOTH_URL_CUSTOM_ID: A custom id and url cannot both be specified');

        if (data.style !== MessageButtonStyles.url && !data.custom_id) throw new TypeError('NO_BUTTON_ID: Please provide button id');

        if (data.emoji) {
            if (isNaN(data.emoji ? data.emoji.id : 0) && !this.isEmoji(data.emoji.name)) throw new TypeError('INCORRECT_EMOJI_ID: Please provide correct emoji id');
        }

        return {
            style: data.style,
            label: data.label,
            emoji: data.emoji,
            disabled: data.disabled,
            url: data.url,
            custom_id: data.custom_id,
            type: 2
        }
    },
    resolveType(type) {
        return typeof type === 'string' ? MessageComponentTypes[type] : type;
    },
    isEmoji(string) {
        return Util.isEmoji(string);
    }
}