module.exports = function main(inputs) {

	var dic = inputs;
	var a = [];
	for (var key in dic){
        a.push(dic[key]);
     }

	var price;
	if(a[0]<=2){
		price = 6;	
	}
	else if(a[0]>2&&a[0]<=8){
		price = 6 + (a[0]-2)*0.8;			
	}
	else if(a[0]>8){
		price = 10.8 + (a[0]-8)*1.2;
	}
	
	if(a[1]!=0)
		price += a[1]*0.25;
	
    return Math.round(price);
};
