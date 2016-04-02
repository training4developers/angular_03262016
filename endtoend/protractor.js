exports.config = {

	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['specs.js'],
	multiCapabilities: [
		{
			browserName: 'chrome'
		},
		{
			browserName: 'phantomjs',
			'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
		}
	]

};
