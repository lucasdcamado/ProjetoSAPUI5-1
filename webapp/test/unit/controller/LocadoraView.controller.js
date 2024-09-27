/*global QUnit*/

sap.ui.define([
	"locadorasap/projetolocadorafiori/controller/LocadoraView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("LocadoraView Controller");

	QUnit.test("I should test the LocadoraView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
