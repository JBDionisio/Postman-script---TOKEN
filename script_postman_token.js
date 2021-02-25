var variable_name = "auth:token" //name of environment variable.

if(pm.response.status == 'OK') {
    console.log('ok');
    pm.environment.set(variable_name, JSON.parse(responseBody)["data"]["token"]);
} else {
    console.log('not 200');
}
