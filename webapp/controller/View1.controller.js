sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"br/com/demomock/DemoMock/Util/Formatter"
], function(Controller,Formatter) {
	"use strict";

	return Controller.extend("br.com.demomock.DemoMock.controller.View1", {
		Formatter: Formatter

	});
});