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
		if (document.cookie)
			Web.readmore();
		else
			Web.readless();
		return false;
	},

	readmore : function(){
		document.cookie = 's';
		$('#tohide').removeClass('hidden');
		$('#readmore').addClass('hidden');
		$('#readless').removeClass('hidden');
	},

	readless : function(){
		document.cookie = '';
		$('#tohide').addClass('hidden');
		$('#readmore').removeClass('hidden');
		$('#readless').addClass('hidden');
	}
}


