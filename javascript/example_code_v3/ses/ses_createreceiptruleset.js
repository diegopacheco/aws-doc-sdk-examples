/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with Version 3 (V3) of the AWS SDK for JavaScript,
which is scheduled for release later in 2020. The prerelease version of the SDK is available
at https://github.com/aws/aws-sdk-js-v3. The 'SDK for JavaScript Developer Guide' for V3 is also
scheduled for release later in 2020, and the topic containing this example will be hosted at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/ses-examples-receipt-rules.html.

Purpose:
ses_createreceiptruleset.js demonstrates how to create an empty Amazon SES rule set.

Inputs:
- REGION (into command line below)
- RULE_SET_NAME (into command line below)

Running the code:
node ses_createreceiptruleset.js REGION RULE_SET_NAME
*/
// snippet-start:[ses.JavaScript.v3.rules.createReceiptRuleSet]
// Import required AWS SDK clients and commands for Node.js
const { SES, CreateReceiptRuleSetCommand } = require("@aws-sdk/client-ses");
// Set the AWS Region
const region = process.argv[2]; // REGION
// Create SES service object
const ses = new SES(region);
// Set the parameters
const params = {RuleSetName: process.argv[3]} //RULE_SET_NAME

async function run(){
    try{
        const data = await ses.send(new CreateReceiptRuleSetCommand(params));
        console.log("Success, receipt rule created; requestId", data.$metadata.requestId)
    }
    catch(err){
        console.error(err, err.stack);
    }
};
run();
// snippet-end:[ses.JavaScript.v3.rules.createReceiptRuleSet]
exports.run = run; //for unit tests only
