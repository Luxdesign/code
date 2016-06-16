$(document).ready(function(){
	
	$('.main-form').submit(function( event ) {

		var fieldsFlag = 1;

		if($('.main-form-username').val() == "")
		{
			$('.main-form-username').addClass('not-filled');
			fieldsFlag = 0;
		}
		else
		{
			if($('.main-form-username').hasClass('not-filled'))
			{
				$('.main-form-username').removeClass('not-filled');
			}

		}


		if($('.main-form-telephone').val() == "")
		{
			$('.main-form-telephone').addClass('not-filled');
			fieldsFlag = 0;
		}
		else
		{
			if($('.main-form-telephone').hasClass('not-filled'))
			{
				$('.main-form-telephone').removeClass('not-filled');
			}

		}


		if($('.main-form-email').val() == "")
		{
			$('.main-form-email').addClass('not-filled');
			fieldsFlag = 0;
		}
		else
		{
			if($('.main-form-email').hasClass('not-filled'))
			{
				$('.main-form-email').removeClass('not-filled');
			}

		}

			
		if(!fieldsFlag) {
			event.preventDefault();

		}

	});	

	
});
