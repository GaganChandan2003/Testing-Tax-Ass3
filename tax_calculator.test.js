const tax = require("./tax_calculator")

describe("Tax",()=>
{
    it("should be less than 250000",()=>
    {
        expect(tax(20000)).toBe("no tax");
    });
    it("should be between 2,50,000 and 5,00,000",()=>
    {
        expect(tax(300000)).toBe(30000)
    })
    it("should be between 5,00,000 and 10,00,000",()=>
    {
        expect(tax(750000)).toBe(150000)
    })
    it("should be abouve 10,00,000",()=>
    {
        expect(tax(1200000)).toBe(360000)
    })
    it("should be below 2,50,000",()=>
    {
        expect(tax(100000)).toBe("no tax")
    })
    it("should be between 2,50,000 and 5,00,000",()=>
    {
        expect(tax(475000)).toBe(47500)
    })
    it("should be between 5,00,000 and 1,00,0000 ",()=>
    {
        expect(tax(777000)).toBe(155400)
    })
    it("should be above 10,00,000",()=>
    {
        expect(tax(5000000)).toBe(1500000)
    })

});