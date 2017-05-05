/**
 * Created with JetBrains WebStorm.
 * User: alicia
 * Date: 20/04/17
 * Time: 11:14
 * To change this template use File | Settings | File Templates.
 */

function buildConfig(env){
    return require("./" + env + ".js")({ env:env })
}

module.exports = buildConfig; //Hace la función pública
