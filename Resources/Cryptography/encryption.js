var crypto = require('crypto');


session.input.readAsJSON (function (error, json) {
    if (error) {
      // an error occurred when parsing the content, e.g. invalid JSON object
      // uncatched error will stop the processing and the error will be logged
      throw error;
    }
    // Add data to the input object and write to the ouput context

	console.error("Data Received: " + json.data);
	
	var keyBuff = new Buffer(json.key, 'base64');
	var ivBuff = new Buffer(json.iv, 'base64');
	var cipher = crypto.createCipheriv('A128GCM', keyBuff, ivBuff);
	
	cipher.update(json.data, 'utf8');
	
	var encryptedData = cipher.final();
	var authTag = cipher.getAuthTag();
	var iv = cipher.getIV();
	var result = Buffer.concat([iv, encryptedData, authTag]);
	
	json.authTagStr = authTag.toString('base64');
	json.encryptedDataStr = encryptedData.toString('base64');
	json.ivStr = iv.toString('base64');
	json.result = result.toString('base64');
    
    session.output.write(json);
});