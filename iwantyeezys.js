var finalStagePathname = "/on/demandware.store/Sites-adidas-US-Site/en_US/COSummary-Start"
var loopFunction;

chrome.storage.sync.get({
    refresh_interval: 1000
}, function(items) {
    loopFunction = setTimeout(function(items) {
        $(document).ready(
            chrome.storage.sync.get({
                product_code: "AQ2661",
                shoe_size: "670"
            }, function(items) {
                var body = $("body");
                var htmlString = body.html();
                var indexOfProductCode = htmlString.indexOf(items.product_code);
                if (indexOfProductCode != -1) {
                    console.log("Shoes found");
										if (window.location.pathname != finalStagePathname){
											window.location.href = "https://www.adidas.com/on/demandware.store/Sites-adidas-US-Site/en_US/COSummary-Start";
										}

										$(document).ready(function() {
		                    jQuery('#dwfrm_payment_creditCard_number').val("4388576074562243");
		                    jQuery('#dwfrm_payment > fieldset > div > div.form-row.exp-date.clearfix > div.formfield.month > div > div > div > a > span').click();
		                    jQuery('#dwfrm_payment > fieldset > div > div.form-row.exp-date.clearfix > div.formfield.month > div > div > div > div > div.ffSelectMenuMidBG > div > ul > li:nth-child(7) > span').click();
		                    jQuery('#dwfrm_payment > fieldset > div > div.form-row.exp-date.clearfix > div.formfield.year > div.value > div > div > a > span').click();
		                    jQuery('#dwfrm_payment > fieldset > div > div.form-row.exp-date.clearfix > div.formfield.year > div.value > div > div > div > div.ffSelectMenuMidBG > div > ul > li:nth-child(4) > span').click();
		                    jQuery('#dwfrm_payment_creditCard_cvn').val("969");

												stopFunction();
										});
                } else {
                    console.log("Shoes not found");
                    window.location.href = "http://www.adidas.com/on/demandware.store/Sites-adidas-US-Site/en_US/Cart-MiniAddProduct?layer=Add%20To%20Bag%20overlay&pid=" + items.product_code + "_" + items.shoe_size + "&Quantity=1&masterPid=" + items.product_code + "add-to-cart-button=";
                }

            }));
        // console.log(window.location.pathname == yeezy_boost_350 || window.location.pathname == tubular_runner_primeknit_shoes);
        // if(window.location.pathname == yeezy_boost_350 || window.location.pathname == tubular_runner_primeknit_shoes) {
        //
        // 	window.location.href = "https://www.adidas.com/on/demandware.store/Sites-adidas-US-Site/en_US/COSummary-Start";
        //
        // 	chrome.storage.sync.get({
        // 		api_key: '',
        // 		devices:[]
        // 	}, function(items) {
        // 		PushBullet.APIKey = items.api_key;
        // 		$.each(items.devices, function(index, device_iden){
        // 			PushBullet.push("link", device_iden, null, {title: "I got you your yeezys", url: currenturl});
        // 		});
        // 	});
        // } else {
        // 	if (items.yeezy_or_tubular == "yeezy"){
        // 		window.location.href = "http://www.adidas.com/us/yeezy-boost-350/AQ4832.html?forceSelSize=AQ4832_670";
        // 	} else if (items.yeezy_or_tubular == "tubular"){
        // 		window.location.href = "http://www.adidas.com/us/tubular-runner-primeknit-shoes/B25573.html?forceSelSize=B25573_670";
        // 	}
        // }
    }, items.refresh_interval);
});

function stopFunction() {
    clearTimeout(loopFunction);
}

function send_pushes() {

}
