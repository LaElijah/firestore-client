import fs, { ReadStream } from "fs"
import { PutObjectCommand, GetObjectCommand, S3Client as S3 } from "@aws-sdk/client-s3";
import crypto from "crypto"


interface Options {
    accessKeyId: string,
    secretAccessKey: string,
    key: string,
    region: string
}


export default class FireStoreClient {
    // properties

    private _file: ReadStream | undefined;
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

        this.setConfig({...options})
        this._bucket = bucket
        this._file = fs.createReadStream(filepath)

    }

    public async download(key: string, asBuffer = true) {
        const response = await FireStoreClient._s3.send(new GetObjectCommand({
            Bucket: this._bucket,
            Key: key
        }))

        return await response.Body.transformToString()
    }


    // stores the file in the chosen store, in dev starting with AWS
    public async store(key: string) {
        if (this._file === undefined) throw Error("Read undefined when attempting to save file")
        let workingKey = key
        // TODO: Change this to add date and/or file name to key
        if (!key) workingKey = crypto.randomUUID()

        try {
        const response = await FireStoreClient._s3.send(new PutObjectCommand({
            Bucket: this._bucket,
            Body: this._file,
            Key: workingKey,
            ContentType: "text/markdown"
        }))
        console.log(response)
        }
        catch (error) {
            console.log(error)
        }


        // Change to return status and or message 
      
    }



    // Resets firestore client config 
    public setConfig({region, accessKeyId, secretAccessKey}: {region: string, accessKeyId: string, secretAccessKey: string}) {
        
        FireStoreClient._s3 = new S3({
            region,
            credentials: {
                accessKeyId: accessKeyId,
                secretAccessKey
            }
        })
    }

    // 
    public set file(filepath: string) {
        this._file = fs.createReadStream(filepath)
    }


}



// The client should be able to take in
// a uri to connect to s3, then it should be able 
// to store a file in that s3 bucket
// or be able to get a a markdown file
// each operation should return an option status 
// and if theres a failure then it should respond 
