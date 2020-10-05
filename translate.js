const config = require("./config")

// extract and convert fields using the config
function extract(key, data) {
	console.log("Andrea")
    if(key === 'due_date') {
        console.log(data)
    }
	let field_map = config["field_map"]
    let convert = config["convert"]
    let value = undefined
    if(key in field_map) {
        value = data[field_map[key]]
    }
    if(key in convert) {
        value = convert[key](value)
    }
    if(key === 'due_date') {
        console.log(value.toString())
    }

    return value
}

module.exports = function(data) {
    return {
        "time_to_live": config["time_to_live"],
        "subject": extract("subject", data),
        "markdown": extract("markdown", data),
        "due_date": extract("due_date", data),
        "amount": extract("amount", data),
        "notice_number": extract("notice_number", data),
		"invalid_after_due_date": extract("invalid_after_due_date", data),
        "fiscal_code": extract("fiscal_code", data)
    }
}