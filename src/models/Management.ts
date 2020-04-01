import { Command } from '../models/Command';

export class Management {
    // builder: { [key: string]: Array<Command> };
    builder: Array<Command>;
    config: Array<Command>;
    container?: Array<Command>;
    context?: Array<Command>;
    image?: Array<Command>;
    network?: Array<Command>;
    node?: Array<Command>;
    plugin?: Array<Command>;
    secret?: Array<Command>;
    service?: Array<Command>;
    stack?: Array<Command>;
    swarm?: Array<Command>;
    system?: Array<Command>;
    trust?: Array<Command>;
    volume?: Array<Command>;
    constructor(
        builder: Array<Command>,
        config: Array<Command>,
        container: Array<Command>,
        context: Array<Command>,
        image: Array<Command>,
        network: Array<Command>,
        node: Array<Command>,
        plugin: Array<Command>,
        secret: Array<Command>,
        service: Array<Command>,
        stack: Array<Command>,
        swarm: Array<Command>,
        system: Array<Command>,
        trust: Array<Command>,
        volume: Array<Command>
    ) {
        this.builder = builder;
        this.config =  config;
        this.container = container;
        this.context = context;
        this.image = image;
        this.network = network;
        this.node = node;
        this.plugin =  plugin;
        this.secret =  secret;
        this.service = service;
        this.stack = stack;
        this.swarm = swarm;
        this.system =  system;
        this.trust = trust;
        this.volume =  volume;
    }
}