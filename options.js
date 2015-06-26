$("#save").click(function(e) {
	chrome.storage.sync.set({
		refresh_interval: $("#refresh_interval").val(),
		product_code: $("#product_code").val(),
		shoe_size: $("#shoe_size").val()
	});
});

	chrome.storage.sync.get({
		refresh_interval: 1000,
		product_code: "AQ4832",
		shoe_size: "670"
	}, function(items) {
		$("#refresh_interval").val(items.refresh_interval);
		$("#product_code").val(items.product_code);
		$("#shoe_size").val(items.shoe_size);
	});

$("#start").click(function(e) {
	chrome.storage.sync.get({
		product_code: "AQ4832",
		shoe_size: "670"
	}, function(items) {
		OpenInNewTab(
			"http://www.adidas.com/on/demandware.store/Sites-adidas-US-Site/en_US/Cart-MiniAddProduct?layer=Add%20To%20Bag%20overlay&pid=" +
			items.product_code + "_" + items.shoe_size +
			"&Quantity=1&masterPid=" + items.product_code +
			"add-to-cart-button=")
	});
});

function OpenInNewTab(url) {
	var win = window.open(url, '_blank');
	win.focus();
}
