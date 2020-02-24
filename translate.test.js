const importer = require("./importer")
const translate = require("./translate")

test("translate", () => {
    let imp = importer("data/data.xlsx")
    //console.log(imp)
    let tran = translate(imp[0])
    //console.log(tran)
    expect(tran).toMatchSnapshot()
})