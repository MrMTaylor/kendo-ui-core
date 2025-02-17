(function() {
    describe("FlatColorPicker", function() {
        afterEach(function() {
            kendo.destroy(Mocha.fixture);
        });

        it("input: false does not show input", function() {
            var dom = $("<div />").appendTo(Mocha.fixture).kendoFlatColorPicker({ input: false });

            var inputsWrapper = dom.find(".k-colorgradient-inputs");

            assert.equal(inputsWrapper.length, 0);
        });

        it("initialization from input nests it into wrapper", function() {
            var dom = $("<input name='foo' />").appendTo(Mocha.fixture).kendoColorPicker();

            assert.equal($(".k-colorpicker [name=foo]").length, 1);
        });

        it("maintains tabIndex after disable/enable", function() {
            var dom = $("<div tabindex='5' />").appendTo(Mocha.fixture).kendoFlatColorPicker();
            var cp = dom.data("kendoFlatColorPicker");
            cp.enable(false);
            cp.enable(true);
            assert.equal(cp.wrapper.attr("tabIndex"), 5);
        });

        it("unbinds events from hsv area container", function() {
            var dom = $("<div tabindex='5' />").appendTo(Mocha.fixture).kendoColorGradient();
            var cp = dom.data("kendoColorGradient");

            cp.destroy();

            assert.isOk($.isEmptyObject(cp._hsvEvents._events));
        });

        it("receives k-state-disabled class when disabled", function() {
            var dom = $("<div tabindex='5' />").appendTo(Mocha.fixture).kendoFlatColorPicker();
            var cp = dom.data("kendoFlatColorPicker");

            cp.enable(false);

            assert.isOk(cp.wrapper.hasClass("k-disabled"));
        });

        it("removes k-state-disabled class when enabled", function() {
            var dom = $("<div tabindex='5' />").appendTo(Mocha.fixture).kendoFlatColorPicker();
            var cp = dom.data("kendoFlatColorPicker");

            cp.enable(false);
            cp.enable();

            assert.isOk(!cp.wrapper.hasClass("k-disabled"));
        });

    });
}());


(function() {
    describe("ColorPicker", function() {
        afterEach(function() {
            kendo.destroy(Mocha.fixture);
        });

        it("maintains tabIndex after disable/enable", function() {
            var dom = $("<input tabindex='5' />").appendTo(Mocha.fixture).kendoColorPicker();
            var cp = dom.data("kendoColorPicker");
            cp.enable(false);
            cp.enable(true);
            assert.equal(cp.wrapper.attr("tabIndex"), 5);
        });

        it("opens on click on an associated <label>", function() {
            expect(2);

            // embedded in <label>
            $("<label>ColorPicker: <input /></label>")
                .appendTo(Mocha.fixture)
                .find("input").kendoColorPicker({
                    open: function() {
                        assert.isOk(true);
                    }
                }).end()
                .click();

            // <label for="...">
            $("<div><label for='colorpicker'>ColorPicker:</label><input id='colorpicker' /></div>")
                .appendTo(Mocha.fixture)
                .find("input").kendoColorPicker({
                    open: function() {
                        assert.isOk(true)
                    }
                }).end()
                .find("label").click();
        });

        it("clicking on an associated label does not open a disabled ColorPicker", function() {
            expect(0);

            // embedded in <label>
            $("<label>ColorPicker: <input /></label>")
                .appendTo(Mocha.fixture)
                .find("input").prop("disabled", true).kendoColorPicker({
                    open: function() {
                        assert.isOk(true);
                    }
                }).end()
                .click();

            // <label for="...">
            $("<div><label for='colorpicker'>ColorPicker:</label><input id='colorpicker' /></div>")
                .appendTo(Mocha.fixture)
                .find("input").prop("disabled", true).kendoColorPicker({
                    open: function() {
                        assert.isOk(true)
                    }
                }).end()
                .find("label").click();
        });

        it("open() method does not open a disabled ColorPicker", function() {
            expect(0);

            var dom = $("<input disabled='disabled' />").appendTo(Mocha.fixture).kendoColorPicker({
                open: function() {
                    assert.isOk(true);
                }
            });
            var cp = dom.data("kendoColorPicker");

            cp.open();
        });

        it("toggle() method does not open a disabled ColorPicker", function() {
            expect(0);

            var dom = $("<input disabled='disabled' />").appendTo(Mocha.fixture).kendoColorPicker({
                open: function() {
                    assert.isOk(true);
                }
            });
            var cp = dom.data("kendoColorPicker");

            cp.toggle();
        });

        it("receives k-state-disabled class when disabled", function() {
            expect(0);

            var dom = $("<input disabled='disabled' />").appendTo(Mocha.fixture).kendoColorPicker();
            var cp = dom.data("kendoColorPicker");

            cp.enable(false);

            assert.isOk(cp.wrapper.hasClass("k-disabled"));
        });

        it("removes k-state-disabled class when enabled", function() {
            expect(0);

            var dom = $("<input disabled='disabled' />").appendTo(Mocha.fixture).kendoColorPicker();
            var cp = dom.data("kendoColorPicker");

            cp.enable(false);
            cp.enable();

            assert.isOk(!cp.wrapper.hasClass("k-disabled"));
        });
    });
}());

(function() {
    describe("ColorPalette", function() {
        afterEach(function() {
            kendo.destroy(Mocha.fixture);
        });

        it("maintains tabIndex after disable/enable", function() {
            var dom = $("<div tabindex='5' />").appendTo(Mocha.fixture).kendoColorPalette();
            var cp = dom.data("kendoColorPalette");
            cp.enable(false);
            cp.enable(true);
            assert.equal(cp.wrapper.attr("tabIndex"), 5);
        });

        it("receives k-state-disabled class when disabled", function() {
            var dom = $("<div tabindex='5' />").appendTo(Mocha.fixture).kendoColorPalette();
            var cp = dom.data("kendoColorPalette");

            cp.enable(false);

            assert.isOk(cp.wrapper.hasClass("k-disabled"));
        });

        it("removes k-state-disabled class when enabled", function() {
            var dom = $("<div tabindex='5' />").appendTo(Mocha.fixture).kendoColorPalette();
            var cp = dom.data("kendoColorPalette");

            cp.enable(false);
            cp.enable();

            assert.isOk(!cp.wrapper.hasClass("k-disabled"));
        });
    });
}());

(function() {
    describe("ColorGradient", function() {
        afterEach(function() {
            kendo.destroy(Mocha.fixture);
        });

        it("renders colorinput", function() {
            var dom = $("<div></div>").appendTo(Mocha.fixture).kendoColorGradient();

            var inputsWrapper = dom.find(".k-colorgradient-inputs");

            assert.equal(inputsWrapper.length, 1);
            assert.equal(inputsWrapper.find("[data-role=textbox]").length, 1);
            assert.equal(inputsWrapper.find("[data-role=numerictextbox]").length, 3);
        });

        it("input: false does not show input", function() {
            var dom = $("<div></div>").appendTo(Mocha.fixture).kendoColorGradient({ input: false });

            var inputsWrapper = dom.find(".k-colorgradient-inputs");

            assert.equal(inputsWrapper.length, 0);
        });

        it("maintains tabIndex after disable/enable", function() {
            var dom = $("<div tabindex='5' />").appendTo(Mocha.fixture).kendoColorGradient();
            var cp = dom.data("kendoColorGradient");
            cp.enable(false);
            cp.enable(true);
            assert.equal(cp.wrapper.attr("tabIndex"), 5);
        });

        it("unbinds events from hsv area container", function() {
            var dom = $("<div tabindex='5' />").appendTo(Mocha.fixture).kendoColorGradient();
            var cp = dom.data("kendoColorGradient");

            cp.destroy();

            assert.isOk($.isEmptyObject(cp._hsvEvents._events));
        });

        it("receives k-state-disabled class when disabled", function() {
            var dom = $("<div tabindex='5' />").appendTo(Mocha.fixture).kendoColorGradient();
            var cp = dom.data("kendoColorGradient");

            cp.enable(false);

            assert.isOk(cp.wrapper.hasClass("k-disabled"));
        });

        it("removes k-state-disabled class when enabled", function() {
            var dom = $("<div tabindex='5' />").appendTo(Mocha.fixture).kendoColorGradient();
            var cp = dom.data("kendoColorGradient");

            cp.enable(false);
            cp.enable();

            assert.isOk(!cp.wrapper.hasClass("k-disabled"));
        });

    });
}());
