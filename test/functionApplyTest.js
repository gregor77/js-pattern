var fs = require("fs");
var functionApply = fs.readFileSync("./src/functionApply.js");

var jsdom = require("jsdom");
var expect = require("chai").expect;

describe("sayHi() is anonymous function", function () {
    var subject;

    before(function (done) {
        jsdom.env({
            html: "",
            src: [functionApply],
            done: function (err, window) {
                subject = window.sayHi;

                done();
            }
        });
    });

    describe("#call method", function () {
        it("should be return 'Hi! Rhyno'", function () {
            expect(subject("Rhyno").message).to.equal("Hi! Rhyno");
        });
    });

    describe("#apply with null object parameter", function () {
        it("should be return 'Hi! Rhyno'", function () {
            //전역 객체 -> window
            var hi = subject.apply(null, ["Rhyno"]);
            expect(hi.message).to.equal("Hi! Rhyno");
            expect(hi.hometown).to.equal(undefined);
        });
    });

    describe("#apply with tempObj", function () {
        it("should be return error code", function () {
            var tempObj = {};
            tempObj.language = "EN";
            tempObj.hometown = "America";

            var hi = subject.apply(tempObj, ["Rhyno"]);
            expect(hi.message).to.equal("Hi! Rhyno");

            expect(hi.language).to.equal("ko");
            expect(hi.hometown).to.equal("America")
        });
    });
});