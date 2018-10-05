



function getEnvironment(env, def) {
	envDefault = def
	if (process.env[env] !== undefined) {
		return  process.env[env]
	}
	return envDefault
}



module.exports.COURSES_URL = getEnvironment("COURSES_URL", "");

