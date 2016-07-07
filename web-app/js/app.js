/**
 * http://usejsdoc.org/
 */

// using DOM API
//document.addEventListener('DOMContentLoaded', function(e) {
//
//	var box = document.querySelector('.jumbotron');
//	var showBtn = document.querySelector('.btn-primary');
//	var hideBtn = document.querySelector('.btn-danger');
//
//	showBtn.addEventListener('click', function(e) {
//		box.style.display = 'block';
//	});
//	hideBtn.addEventListener('click', function(e) {
//		box.style.display = 'none';
//	});
//
//	// ------------------------------------------------
//
//	var trainer = {
//		tnrName : 'Nag',
//		doTeach : function() {
//			console.log(this.tnrName + " teaching JS");
//		}
//	};
//	
//	//--------------------------------------------------
//
//	var teachBtn = document.querySelector('#teachBtn');
//	teachBtn.addEventListener('click',function(){
//		trainer.doTeach();
//	});
//	teachBtn.addEventListener('click',trainer.doTeach.bind(trainer));
//	
//	//---------------------------------------------------
//
//});

//----------------------------------------------------------



$(document).ready(function(){
	
	var box=$('.jumbotron');
	$('.btn-primary').click(function(){
		box.show();
	});
	$('.btn-danger').click(function(){
		box.hide();
	});
	
	//--------------
	
	$('.well button').on('click',function(event){
		console.dir(event.target.id);
	});
	
});

//------------------------------------------------------------


 















