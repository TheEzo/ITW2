$(document).ready(function(){
	Web.init();
	$('#readmore').on('click', function(){
		Web.readmore();
		return false;
	});
	$('#readless').on('click', function(){
		Web.readless();
		return false;
	});
});

var Web = {
	init : function(){
		if(document.cookie.indexOf('status') == -1)
			document.cookie = 'status=0';
		if (Web.cookie())
			Web.readmore();
		else
			Web.readless();
		return false;
	},

	readmore : function(){
		document.cookie = 'status=1';
		$('#tohide').removeClass('hidden');
		$('#readmore').addClass('hidden');
		$('#readless').removeClass('hidden');
	},

	readless : function(){
		document.cookie = 'status=0';
		$('#tohide').addClass('hidden');
		$('#readmore').removeClass('hidden');
		$('#readless').addClass('hidden');
	},

	cookie : function(){
		var pos = document.cookie.indexOf('status') + 7;
		if(document.cookie[pos] == '1')
			return true;
		return false;
	}
}


