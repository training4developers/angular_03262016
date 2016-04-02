var fs = require("fs");

describe('angularjs homepage', function() {
	it('should have a title', function() {
		browser.get('http://juliemr.github.io/protractor-demo/');

		browser.takeScreenshot().then(function(png) {
			var stream = fs.createWriteStream("./initial_screenshot.png");
			stream.write(new Buffer(png, 'base64'));
			stream.end();
		});

		var historyCount;
		var history = element.all(by.repeater("result in memory"));

		history.count().then(function(count) {
			historyCount = count;
		});

		element(by.model("first")).sendKeys(2);
		element(by.model("second")).sendKeys(4);
		element(by.model('operator'))
			.element(By.xpath('//option[text() = \'*\']')).click();

		browser.takeScreenshot().then(function(png) {
			var stream = fs.createWriteStream("./entry_screenshot.png");
			stream.write(new Buffer(png, 'base64'));
			stream.end();
		});

		element(by.css("#gobutton")).click();

		expect(browser.getTitle()).toEqual('Super Calculator');

		var newHistoryCount;
		history = element.all(by.repeater("result in memory"));

		history.count().then(function(count) {
			newHistoryCount = count;
			console.log(newHistoryCount);

			browser.takeScreenshot().then(function(png) {
				var stream = fs.createWriteStream("./complete_screenshot.png");
				stream.write(new Buffer(png, 'base64'));
				stream.end();
			});

			expect(newHistoryCount).toBe(historyCount + 1);

		});



	});
});
