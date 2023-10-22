interface Options {
    accessKeyId: string;
    secretAccessKey: string;
    key: string;
    region: string;
}
export class FireStoreClient {
    constructor({ filepath, bucket, options }: {
        filepath: string;
        bucket: string;
        options: Options;
    });
    download(key: string, asBuffer?: boolean): Promise<any>;
    store(key: string): Promise<void>;
    setConfig({ region, accessKeyId, secretAccessKey }: {
        region: string;
        accessKeyId: string;
        secretAccessKey: string;
    }): void;
    set file(filepath: string);
}

//# sourceMappingURL=types.d.ts.map
