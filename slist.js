var SList = function(seleccionado, lista){
	var self = this;
	
	self.seleccionado = seleccionado;
	self.lista = lista;
	
	self.seleccionado.click(function(){
		//$( "#book" ).slideToggle
		self.lista.slideToggle();
	});
}

SList.prototype.init = function(colores){
	var self = this;
	
	self.lista.empty;
	var html = "";
	for(var i = 0; i < colores.length; i++){
		html += "<div class=\"it_secund\"><span class=\"c_blue\" style=\"background: " + colores[i].color + " \" color=\"" + colores[i].color + "\"></span> <span class=\"nombre\">" + colores[i].name + "</span></div>";
	}
	
	self.lista.html(html);
	
	$(".it_secund").click(function(){
		var nombre = $(this).find(".nombre").html();
		var color = $(this).find(".c_blue").attr("color");
		
		self.seleccionado.empty();
		self.seleccionado.html("<span class=\"c_blue\" style=\"background: " + color + " \"></span><span class=\"nombre\">" + nombre + "</span>");
		
		self.seleccionado.click();
		
		console.log(self.selected());
		
	});
}

SList.prototype.selected = function(){
	return this.seleccionado.find(".nombre").html();
}



