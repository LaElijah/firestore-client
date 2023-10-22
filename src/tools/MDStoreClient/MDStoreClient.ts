import fs, { ReadStream } from "fs"
import AWS from "aws-sdk"



interface Options {
    accessKeyId: string,
    secretAccessKey: string,
    key: string
}


export default class StoreClient {
    // properties

    private _file: ReadStream;
    private _bucket: string;
    private static _s3: any;
   


    constructor({
        filepath,
        bucket,
        options
    }: {
        filepath: string,
        bucket: string,
        options: Options
    }
    ) {

        const { accessKeyId, secretAccessKey } = options

        this.updateConfig(accessKeyId, secretAccessKey)
        this._bucket = bucket
        this._file = fs.createReadStream(filepath)
        StoreClient._s3 = new AWS.S3()


        

        
    }


    // stores the file in the chosen store, in dev starting with AWS
    public store(key: string) {
        let workingKey = key
        // TODO: Change this to add date and/or file name to key
        if (!key) workingKey = crypto.randomUUID()

        StoreClient._s3.upload({
            Bucket: this._bucket,
            Body: this._file,
            Key: workingKey

            
        }, (err: any, data: any) => { 
            if (err) throw new Error("Could not save file")
            if (data) return {
                key: workingKey,
                message: `Uploaded in: ${data.Location}`
            }
        })
    }



    public updateConfig(accessKeyId: string, secretAccessKey: string) {
        AWS.config.update({
            accessKeyId,
            secretAccessKey
        })
    }


    public set file(filepath : string) {
        this._file = fs.createReadStream(filepath)
    }
    

}



// The client should be able to take in
// a uri to connect to s3, then it should be able 
// to store a file in that s3 bucket
// or be able to get a a markdown file
// each operation should return an option status 
// and if theres a failure then it should respond 
