const $window = $(window),
	$document = $(document),
	$html_body = $('html, body'),
	$loader = $('.loader'),
	$bar = $('.bar'),
	$scrolly = $('.scrolly'),
	$toggle = $('.toggle'),
	$menu = $('.menu'),
	$media = $('.media'),
	$verification = $('.verification'),
	$btn_enter = $('.btn-enter'),
	$btn_exit = $('.btn-exit');

$window.on('load', function()
{
	window.setTimeout(function()
	{
		$loader.fadeOut();
		if($verification.length)
		{
			return true;
		}
		$html_body.css('overflow', 'visible');
	}, 250);
	return true;
});

$document.ready(function()
{
	$scrolly.scrolly(
	{
		offset: function()
		{
			return $bar.height();
		}
	});

	$scrolly.on('click', function(event)
	{
		event.preventDefault();
		if($menu.hasClass('active'))
		{
			$menu.removeClass('active');
		}
		return true;
	});

	$toggle.on('click', function(event)
	{
		event.preventDefault();
		if($menu.hasClass('active'))
		{
			$menu.removeClass('active');
		}
		else
		{
			$menu.addClass('active');
		}
		return true;
	});

	$btn_enter.on('click', function(event)
	{
		event.preventDefault();
		alert('Accept');
		return true;
	});

	$btn_exit.on('click', function(event)
	{
		event.preventDefault();
		alert('Cancel');
		return true;
	});

	$media.poptrox({
		preload: false,									// If true, preload fullsize images in the background
		baseZIndex: 1000,								// Base Z-Index
		fadeSpeed: 300,									// Global fade speed
		overlayColor: '#000000',						// Overlay color
		overlayOpacity: 0.6,							// Overlay opacity
		windowMargin: 50,								// Window margin size (in pixels; only comes into play when an image is larger than the viewport)
		windowHeightPad: 0,								// Window height pad
		selector: 'a',									// Anchor tag selector
		caption: null,									// Caption settings (see docs)
		popupSpeed: 300,								// Popup (resize) speed
		popupWidth: 200,								// Popup width
		popupHeight: 100,								// Popup height
		popupIsFixed: false,							// If true, popup won't resize to fit images
		useBodyOverflow: false,							// If true, the BODY tag is set to overflow: hidden when the popup is visible
		usePopupEasyClose: true,						// If true, popup can be closed by clicking on it anywhere
		usePopupForceClose: false,						// If true, popup can be closed even while content is loading
		usePopupLoader: true,							// If true, show the popup loader
		usePopupCloser: false,							// If true, show the popup closer button/link
		usePopupCaption: false,							// If true, show the popup image caption
		usePopupNav: false,								// If true, show (and use) popup navigation
		usePopupDefaultStyling: true,					// If true, default popup styling will be applied (background color, text color, etc)
		popupBackgroundColor: '#0F0F0F',				// (Default Style) Popup background color (when usePopupStyling = true)
		popupTextColor: '#6a4674',						// (Default Style) Popup text color (when usePopupStyling = true)
		popupLoaderTextSize: '2em',						// (Default Style) Popup loader text size
		popupCloserBackgroundColor:	'#000000',			// (Default Style) Popup closer background color (when usePopupStyling = true)
		popupCloserTextColor: '#FFFFFF',				// (Default Style) Popup closer text color (when usePopupStyling = true)
		popupCloserTextSize: '20px',					// (Default Style) Popup closer text size
		popupPadding: 2,								// (Default Style) Popup padding

		popupCaptionHeight: 60,							// (Default Style) Popup height of caption area
		popupCaptionTextSize: null,						// (Default Style) Popup caption text size
		popupBlankCaptionText: 'untitled',				// Applied to images that don't have captions

		popupCloserText: '&#215;',						// Popup closer text
		popupLoaderText: '&bull;&bull;',				// Popup loader text
		popupClass: 'poptrox-popup',					// Popup class
		popupSelector: null,							// (Advanced) Popup selector (use this if you 

		popupLoaderSelector: '.loader',					// (Advanced) Popup Loader selector
		popupCloserSelector: '.closer',					// (Advanced) Popup Closer selector
		popupCaptionSelector: '.caption',				// (Advanced) Popup Caption selector
		popupNavPreviousSelector: '.nav-previous',		// (Advanced) Popup Nav Previous selector
		popupNavNextSelector: '.nav-next',				// (Advanced) Popup Nav Next selector
		onPopupClose: null,								// Called when popup closes
		onPopupOpen: null								// Called when popup opens
	});

	setInterval(function()
	{
		if($('.header .bg_cont .background.active').index() == ($('.header .bg_cont .background').length - 1))
		{
			$('.header .bg_cont .background.active').removeClass('active');
			$('.header .bg_cont .background').eq(0).addClass('active');
		}
		else
		{
			var $idx = $('.header .bg_cont .background.active').index();
			$('.header .bg_cont .background.active').removeClass('active');
			$('.header .bg_cont .background').eq($idx + 1).addClass('active');
		}
	}, 6000);
});