var $8zHUo$fs = require("fs");
var $8zHUo$awssdkclients3 = require("@aws-sdk/client-s3");
var $8zHUo$crypto = require("crypto");


function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
///<reference path="./types/index.d.ts" />
var $4c7e64a3d18daf99$exports = {};

$parcel$export($4c7e64a3d18daf99$exports, "FireStoreClient", () => $ded74823cf6f35f0$export$2e2bcd8739ae039);



class $ded74823cf6f35f0$export$2e2bcd8739ae039 {
    constructor({ filepath: filepath, bucket: bucket, options: options }){
        this.setConfig({
            ...options
        });
        this._bucket = bucket;
        this._file = (0, ($parcel$interopDefault($8zHUo$fs))).createReadStream(filepath);
    }
    async download(key, asBuffer = true) {
        const response = await $ded74823cf6f35f0$export$2e2bcd8739ae039._s3.send(new (0, $8zHUo$awssdkclients3.GetObjectCommand)({
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
        if (!key) workingKey = (0, ($parcel$interopDefault($8zHUo$crypto))).randomUUID();
        try {
            const response = await $ded74823cf6f35f0$export$2e2bcd8739ae039._s3.send(new (0, $8zHUo$awssdkclients3.PutObjectCommand)({
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
        $ded74823cf6f35f0$export$2e2bcd8739ae039._s3 = new (0, $8zHUo$awssdkclients3.S3Client)({
            region: region,
            credentials: {
                accessKeyId: accessKeyId,
                secretAccessKey: secretAccessKey
            }
        });
    }
    // 
    set file(filepath) {
        this._file = (0, ($parcel$interopDefault($8zHUo$fs))).createReadStream(filepath);
    }
} // The client should be able to take in
 // a uri to connect to s3, then it should be able 
 // to store a file in that s3 bucket
 // or be able to get a a markdown file
 // each operation should return an option status 
 // and if theres a failure then it should respond 






$parcel$exportWildcard(module.exports, $4c7e64a3d18daf99$exports);


//# sourceMappingURL=main.js.map
