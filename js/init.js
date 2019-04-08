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
