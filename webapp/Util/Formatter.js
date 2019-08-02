sap.ui.define(function(){
	"use strict";
	
	var Formatter = {
		
		statusText: function(vWeight,vMeasure){
			
			var sResult = "";
			
			if(vMeasure === "G"){
				vWeight = vWeight / 1000;
			}
			
			if(vWeight < 0.5){
				sResult = "Peso menor que .5 KG";
			}else if (vWeight < 10){
				sResult = "Peso menor que 10 KG";
			}else {
				sResult = "Peso maior que 10 KG";
			}
			
			return sResult;
			
		},
		
		statusState: function(vWeight,vMeasure){
			
			var sResult = "None";
			
			if(vMeasure === "G"){
				vWeight = vWeight / 1000;
			}
			
			if(vWeight < 0.5){
				sResult = "Error";
			}else if (vWeight < 10){
				sResult = "Warning";
			}else {
				sResult = "Success";
			}
			
			return sResult;
			
		}
		
	};
	
	return Formatter;
	
},true);