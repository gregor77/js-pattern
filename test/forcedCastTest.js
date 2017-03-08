var jsdom = require("jsdom");
var fs = require("fs");

var forcedCast = fs.readFileSync("./src/forcedCast.js");

var expect = require("chai").expect;

describe("forced cast test", function () {
    var subject;

    beforeEach(function (done) {
        jsdom.env({
            html: "",
            src: [forcedCast],
            done: function (err, window) {
                subject = window.Cast;

                //for window.console to nodejs console
                var virtualConsole = jsdom.getVirtualConsole(window);
                virtualConsole.on("log", function (message) {
                    console.log(message);
                });

                done();
            }
        });

    });

    describe("== vs ===", function () {
        it("String 1 and Int 1 is equal(==) ", function () {
            var result = subject("1", 1, "==");
            expect(result).to.equal(true);
        });

        it("String 1 and Int 1 is not equal(===)", function () {
            var result = subject("1", 1, "===");
            expect(result).to.equal(false);
        });
    });
});