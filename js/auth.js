const $window = $(window),
	$document = $(document),
	$html_body = $('html, body'),
	$loader = $('.loader'),
	$btn_auth = $('.btn-auth'),
	$btn_register = $('.btn-register'),
	$btn_active = $('.btn-active'),
	$btn_email = $('.btn-email'),
	$btn_password = $('.btn-password'),
	$btn_send = $('.btn-send'),
	$btn_reset = $('.btn-reset'),
	$btn_close = $('.btn-close'),
	$anwers = $('.anwers'),
	$ver_msg = $('.verification .msg');

var $anwers_query = null,
	$anwers_result = null;

$window.on('load', function()
{
	window.setTimeout(function()
	{
		$loader.fadeOut();
		$html_body.css('overflow', 'visible');
	}, 250);
	return true;
});

$document.ready(function()
{
	$btn_auth.on('click', function(event)
	{
		event.preventDefault();
		Form('#form-auth', 'modules/form-auth.php');
		return true;
	});

	$btn_register.on('click', function(event)
	{
		event.preventDefault();
		Form('#form-register', 'modules/form-register.php');
		return true;
	});

	$btn_active.on('click', function(event)
	{
		event.preventDefault();
		Form('#form-active', 'modules/form-active.php');
		return true;
	});

	$btn_email.on('click', function(event)
	{
		event.preventDefault();
		Form('#form-email', 'modules/form-email.php');
		return true;
	});

	$btn_password.on('click', function(event)
	{
		event.preventDefault();
		Form('#form-password', 'modules/form-password.php');
		return true;
	});

	$btn_send.on('click', function(event)
	{
		event.preventDefault();
		Form('#form-recovery', 'modules/form-recovery.php');
		return true;
	});

	$btn_reset.on('click', function(event)
	{
		event.preventDefault();
		Form('#form-reset', 'modules/form-reset.php');
		return true;
	});

	$btn_close.on('click', function(event)
	{
		event.preventDefault();
		HideAnwers($anwers_query, $anwers_result);
		return true;
	});
});

function Form(query, url)
{
	$.ajax({
		url: url,
		type: 'post',
		data: $(query).serialize(),
		cache: false,
		processData: false,
		success: function(response)
		{
			if($.parseJSON(response).ref == true)
			{
				document.location.href = document.location;
				return true;
			}
			$anwers_query = query;
			$anwers_result = $.parseJSON(response);
			ShowAnwers($anwers_result.msg, $anwers_result.title);
		}
	});
	return true;
}

function ShowAnwers(msg, title)
{
	if(!$anwers.hasClass('active'))
	{
		$('#anwers-title').html('<h3>' + title + '</h3>');
		$('#anwers').html('<p>' + msg + '</p>');
//		$html_body.css('overflow', 'hidden');
		$anwers.addClass('active');
	}
	return true;
}

function HideAnwers(query, result)
{
	if($anwers.hasClass('active'))
	{
//		$html_body.css('overflow', 'visible');
		$anwers.removeClass('active');
		if(result.status == 'error' && result.field != null)
		{
			var $idx = $(query).find('[name|=' + result.field + ']');
			$idx.focus();
			return true;
		}
		$(query)[0].reset();
	}
	return true;
}