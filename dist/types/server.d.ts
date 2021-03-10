export declare class Server {
    private port;
    constructor(port: string);
    start(): Promise<void>;
}
export declare const server: Server;
