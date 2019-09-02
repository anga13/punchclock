module.exports = {
	getAppEnv(opts) {
		return appEnv
	}
}

const appEnv = {
	services: {
		cloudantNoSQLDB: [
			{
				credentials: '0'
			}, {
				credentials: '1'
			}
		]
	}
}
