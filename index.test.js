// @ts-check

let { MessageButton } = require('.');

let a = new MessageButton();

a.setEmoji("1342323", true)
a.setEmoji({name: "😳"})

console.log(a);