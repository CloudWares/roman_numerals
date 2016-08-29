function convertToRoman(num) {
  var ans = "";
  
  var dictionary = [["I", "V"], ["X", "L"], ["C", "D"], ["M"]];
   
  var unit = parseInt(num % 10);
  var tens = parseInt((num % 100) / 10);
  var hundreds = parseInt((num % 1000) / 100);
  var thousands = parseInt(num / 1000);

  var number = [unit, tens, hundreds];  

  var padder = function(str, n) {
  	if (n > 1) {
  		return str + padder(str, n - 1);
  	}
    if (n <= 0) {
      return "";
    }
  	return str;
  };

  if (thousands > 0) {
  	ans += padder(dictionary[3][0], thousands);
  }  
  
  for (var i = 2; i >= 0; i--) {

  	if (number[i] >= 1 && number[i] <= 3) {
  		ans += padder(dictionary[i][0], number[i]);
  	}

  	if (number[i] >= 5 && number[i] <= 8) {
  		ans += dictionary[i][1];
  		ans += padder(dictionary[i][0], number[i] - 5);
  	}

  	if (number[i] == 4 || number[i] == 9) {
  		ans += dictionary[i][0];
  		ans += (number[i] % 2) ? dictionary[i + 1][0] : dictionary[i][1];
  	}

  }

  return ans;
}