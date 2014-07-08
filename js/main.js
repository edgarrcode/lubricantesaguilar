// OnLoad
$(function() {
	$( ".accordion" ).accordion({
		collapsible: true
	});
	$( ".fadeIn" ).animate({
		opacity: 1,
		},250,function () {
			$(".btnAnimate").animate({
				top: "0",
				opacity:1
			},250);
	});
	$(".slideInBT").animate({
		top: 0,
		opacity: 1
	},250);
	$( ".mobileNavToggle" ).click(function() {
			$(".navigationBar").slideToggle("fast", function () {
			$(".sideBar").toggleClass("mobileNo");
		});
	});
	$(".searchTabletToggle").click(function () {
		$(".googleSearchWrapper").slideToggle("fast");
	});
	$(".sidebearMobileToggle").click(function () {
		$(".sideBar").toggleClass("sbExpanded");
	});
});
// Animate if visible
$(window).scroll(function(event) {
	$(".anWV").each(function(i, el) {
	var el = $(el);
	if(el.visible(true)) {
			el.animate({
				opacity:1,
				top: 0
			});
		}
	});
});

// LogosToggle
var losLogos = $('.logo1,.logo2,.logo3');
setInterval(function() {
    losLogos.toggleClass('setB');
},4000);

// Youtbe
//Remove div if mobile
if ($(window).width() < 768) {
  $('#theIfraeWrapper, #theIframeShield').remove();
}

      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '100%',
            width: '100%',
            videoId: 'Jo5fPXLlko4',
                playerVars: {
                    controls: 0,
                    showinfo: 0,
                    modestbranding: 1,
                    wmode: 'transparent',
                    loop: 1,
                    playlist: 'Jo5fPXLlko4',
                },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange,
            }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
        event.target.setVolume(0);

      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {

          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();

      }

