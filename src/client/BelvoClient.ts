import { BelvoClient as FernClient } from "../Client";
import * as environments from "../environments";

export declare namespace BelvoClient {
    interface Options {
        environment?: environments.BelvoEnvironment;
        secretId: string;
        secretPassword: string; 
    }
}

export class BelvoClient extends FernClient {
    constructor(options: BelvoClient.Options) {
        super({
            environment: options.environment,
            credentials: {
                username: options.secretId,
                password: options.secretPassword
            }
        });
    }
}