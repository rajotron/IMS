var format = require('date-fns');


//success response for the api's request in a json format 
exports.successJson = function(message, data) {
    let obj = {}
    obj["code"] = "Success";
    obj["message"] = message
    obj["status"] = "200"
    if (data != null) {
        obj["data"] = data
    }
    return obj;
}


//failure response for the api's request in a json format 
exports.errorJson = function(message, data) {
    let obj = {}
    obj["code"] = "Failure"
    obj["message"] = message
    obj["status"] = "400"
    if (data != null) {
        obj["data"] = data
    }

    return obj;
}

//particular date format used for the whole project wherever needed 
exports.getDate = function() {

    const now = format(new Date().toDateString(), "YYYY-MM-DD");
    return now
}
