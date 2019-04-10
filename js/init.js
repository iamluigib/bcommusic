// controls for soundcloud widget
$(document).ready(function () {
  var widget = SC.Widget(document.getElementById('sc-Drift'));
  widget.bind(SC.Widget.Events.READY, function () {
    console.log('Ready...');
  });
  $('a#Drift-toggle').click(function () {
    widget.toggle();
  });
  $('a#Drift-replay').click(function () {
    widget.seekTo(0);
  });
});
$(document).ready(function () {
  var widget = SC.Widget(document.getElementById('sc-Vanessa'));
  widget.bind(SC.Widget.Events.READY, function () {
    console.log('Ready...');
  });
  $('a#Vanessa-toggle').click(function () {
    widget.toggle();
  });
  $('a#Vanessa-replay').click(function () {
    widget.seekTo(0);
  });
});
$(document).ready(function () {
  var widget = SC.Widget(document.getElementById('sc-Off Guard'));
  widget.bind(SC.Widget.Events.READY, function () {
    console.log('Ready...');
  });
  $('a#Off Guard-toggle').click(function () {
    widget.toggle();
  });
  $('a#Off Guard-replay').click(function () {
    widget.seekTo(0);
  });
});
