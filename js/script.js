$(document).ready(function () {
  var bg = $('#home');
  var i = 1;

  // setInterval(function () {

  //   bg.fadeOut(2000, function () {
  //     bg.css({
  //       "height": "100vh",
  //       "background": "url(img/b0" + i + ".jpg)  no-repeat",
  //       "-webkit-background-size": "cover",
  //       "-moz-background-size": "cover",
  //       "-o-background-size": "cover",
  //       "background-size": "cover",
  //       "background-position": "center"
  //     });
  //     bg.fadeIn(2000);
  //   });

  //   i = i + 1;
  //   if (i > 7) {
  //     i = 1;
  //   }

  // }, 250000);

  $('#about').click(function () {
    $('.tab-content').removeClass('current');
    $('#tab-1').addClass('current');
  });

  $('#projects').click(function () {
    $('.tab-content').removeClass('current');
    $('#tab-2').addClass('current');
  });

  $('#contact').click(function () {
    $('.tab-content').removeClass('current');
    $('#tab-3').addClass('current');
  });

  $('.closebtn').click(function () {
    $('#mySidenav').css('width', '0');
  });

  $('.toggle').click(function () {
    $('#mySidenav').css('width', '30vh');
  });

  var d = new Date();
  if (d.getHours() < 10) {
    var h = " 0" + d.getHours();
  } else {
    var h = " " + d.getHours();
  }
  if (d.getMinutes() < 10) {
    var m = "0" + d.getMinutes();
  } else {
    var m = "" + d.getMinutes();
  }

  $.get("http://ipinfo.io", function (response) {
    var content;
    if ($(window).width() < 751) {
      content = h + ":" + m;
    } else {
      content = h + ":" + m + " <root@" + response.ip + ">";
    }
    setTimeout(function(){console.log($('.shell-body li').width());},3000)
    len = content.length+3;
    $('head').append('<style>.shell-body li:before{content: "' + content + '" !important;}</style>');
    $('head').append('<style>.tab {padding-left: ' + len + 'ch;}</style>');
  }, "jsonp");

});

new TypeIt('.shell-body', {
  // other options
  speed: 22,
  cursorChar: '&#9608;',
  callback: function () {
    $('.project').click(function () {
      $('.tab-content').removeClass('current');
      $('#tab-2').addClass('current');
    });
  }
});