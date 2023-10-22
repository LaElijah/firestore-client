import $hgUW1$fs from "fs";
import {GetObjectCommand as $hgUW1$GetObjectCommand, PutObjectCommand as $hgUW1$PutObjectCommand, S3Client as $hgUW1$S3Client} from "@aws-sdk/client-s3";
import $hgUW1$crypto from "crypto";


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
///<reference path="./types/index.d.ts" />
var $9727ce5f1d76bdd6$exports = {};

$parcel$export($9727ce5f1d76bdd6$exports, "FireStoreClient", () => $7f1901d132431fa9$export$2e2bcd8739ae039);



class $7f1901d132431fa9$export$2e2bcd8739ae039 {
    constructor({ filepath: filepath, bucket: bucket, options: options }){
        this.setConfig({
            ...options
        });
        this._bucket = bucket;
        this._file = (0, $hgUW1$fs).createReadStream(filepath);
    }
    async download(key, asBuffer = true) {
        const response = await $7f1901d132431fa9$export$2e2bcd8739ae039._s3.send(new (0, $hgUW1$GetObjectCommand)({
            Bucket: this._bucket,
            Key: key
        }));
        return await response.Body.transformToString();
    }
    // stores the file in the chosen store, in dev starting with AWS
    async store(key) {
        if (this._file === undefined) throw Error("Read undefined when attempting to save file");
        let workingKey = key;
        // TODO: Change this to add date and/or file name to key
        if (!key) workingKey = (0, $hgUW1$crypto).randomUUID();
        try {
            const response = await $7f1901d132431fa9$export$2e2bcd8739ae039._s3.send(new (0, $hgUW1$PutObjectCommand)({
                Bucket: this._bucket,
                Body: this._file,
                Key: workingKey,
                ContentType: "text/markdown"
            }));
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    // Change to return status and or message 
    }
    // Resets firestore client config 
    setConfig({ region: region, accessKeyId: accessKeyId, secretAccessKey: secretAccessKey }) {
        $7f1901d132431fa9$export$2e2bcd8739ae039._s3 = new (0, $hgUW1$S3Client)({
            region: region,
            credentials: {
                accessKeyId: accessKeyId,
                secretAccessKey: secretAccessKey
            }
        });
    }
    // 
    set file(filepath) {
        this._file = (0, $hgUW1$fs).createReadStream(filepath);
    }
} // The client should be able to take in
 // a uri to connect to s3, then it should be able 
 // to store a file in that s3 bucket
 // or be able to get a a markdown file
 // each operation should return an option status 
 // and if theres a failure then it should respond 








//# sourceMappingURL=module.js.map
