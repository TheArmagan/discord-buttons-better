export = ButtonEvent;
declare class ButtonEvent {
    constructor(client: Client, data: object);
    client: Client;
    id: Snowflake;
    version: any;
    token: string;
    discordID: Snowflake;
    applicationID: Snowflake;
    guild: Guild;
    channel: Channel;
    clicker: {
        user: User;
        member: GuildMember;
        fetch: ()=>Promise<any>;
    };
    message: Message;
    webhook: WebhookClient;
    replied: boolean;
    deferred: boolean;
    defer(ephemeral?: boolean): Promise<void>;
    think(ephemeral?: boolean): Promise<void>;
    followUp(content: any, options: any): Promise<void>;
    get reply(): {
        send: (content: any, options: any) => Promise<void>;
        fetch: () => Promise<any>;
        edit: (content: any, options: any) => Promise<any>;
        delete: () => Promise<void>;
    };
}
import Message = require("./Message");
import WebhookClient = require("./WebhookClient");
import { Client, Snowflake, Guild, Channel, User, GuildMember } from 'discord.js';
