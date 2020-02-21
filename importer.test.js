const importer = require("./importer")

test("importer", () => {
    imp = importer("data/test.xlsx")
    expect(imp).toMatchSnapshot()
})