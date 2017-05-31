var romanNumbers = {

	convertToRoman : function (argument) {
		var str="";
		var i
		if (argument < 4){
    		i= 0;
       			while (i < argument){
 					str = str +"I";
					i++;
				}
			return str;
		}

		else if (argument == 4){
			str = "IV";
			return str;
		}

		else if (argument < 9){
			i = 5;
			str ="V";
       			while (i < argument){
 					str = str +"I";
					i++;
				}
			return str;
		}

		else{
			return str = "IX"
		}
	}

	convertSymbol : function (length) {

		var str = "";
		if (length < 2){
			return str="IVX";

		}
		else if ((length > 2 ) && ( length < 3)){
			return str="XLC " + "IVX";
		}
		else if ((length> 3) && (length < 4)){
			return str= "CDM " + "XLC " + "IVX";
        }
		else {
			return str= "M " + "CDM " + "XLC " + "IVX";
        }
	}

};
