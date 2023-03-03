
/* import checksum generation utility */
var PaytmChecksum = require("./../PaytmChecksum");

exports.Payments =(req,res)=>{
var paytmParams = {};

/* initialize an array */
paytmParams["MID"] = "YOUR_MID_HERE";
paytmParams["ORDERID"] = "YOUR_ORDER_ID_HERE";

/**
* Generate checksum by parameters we have
* Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
*/
var paytmChecksum = PaytmChecksum.generateSignature(paytmParams, "YOUR_MERCHANT_KEY");
paytmChecksum.then(function(checksum){
	console.log("generateSignature Returns: " + checksum);
}).catch(function(error){
	console.log(error);
});

}