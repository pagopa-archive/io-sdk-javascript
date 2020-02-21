module.exports = {
    "time_to_live": 3600,
    "field_map": {
        "fiscal_code":  "Destinatario",
        "subject": "Titolo",
        "markdown": "Testo",
        "due_date": "Scadenza"
    },
    "convert": {
        // convert Excel date in JavaScript date
        "due_date": function(v) { return new Date(Math.round((v - 25569)*86400*1000)) }
    }
}
