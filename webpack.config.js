function buildConfig(env){
    return require("./" + env + ".js")({ env:env })
}

module.exports = buildConfig; //Hace la función pública
