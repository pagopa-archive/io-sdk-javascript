export function main(args) {
    var greet = "Hello"
    if("GREET" in process.env) 
        greet = process.env["GREET"]
    let name = args.name || "world"
    console.log("name: ", name)
    return {
        body: greet+", "+name
    }
}