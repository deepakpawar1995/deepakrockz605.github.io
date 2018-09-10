
$(document).ready(function() {
$(document).ready(function() {

  var $draggable = $(".draggable");
  var $droppable = $('.droppable');
  var $aside = $(".right-side");
  var $restart_page = $(".restart-page");
  var $restart = $(".restart");
  var $activity_part = $(".activtiy-part");
  var $objectCollect = $(".left-side");


  // $restart_page.hide();
  $activity_part.addClass("addActivity-part");
  var $this = $droppable;

  $draggable.click(function(event){
    event.preventDefault();
  });

  $draggable.draggable({
    revert: 'invalid',
    // revertDuration: 5,
    start: function() {
      $(this).addClass("ondrage");
      $(this).tooltip('hide');
    },
    stop: function() {
      $(this).removeClass("ondrage");
      $(this).draggable('option', 'revert', 'invalid');
    }
  });


  var dragElement;
  var dropElement;
  // add droppable to blank box for adding term to it
  $droppable.droppable({
      drop: function(event, ui) {
      $(this).removeClass("ondrage");
      dragElement = ui.draggable;
      dropElement = $(this);
      var alreadyHaveTerm = dropElement.find(".draggable").length > 0;
      if (dragElement.data("match") === dropElement.data("match") && !alreadyHaveTerm) {
        var x = dragElement.detach();
        dropElement.append(x);
      } else {
        ui.draggable.draggable('option', 'revert', true);
        $(ui.draggable).addClass("wrong_drop");
        var abc = setInterval(function(){
          $(ui.draggable).removeClass("wrong_drop")
          clearInterval(abc);
        },800);
      }
      accept: ".draggable"
      droppedObjCount();
    }
  });

  function droppedObjCount(){
    var objLength = $(".right-side .draggable").length;
    if(objLength == $(".draggable").length){
      $restart_page.show();
    }else{
      return false;
    }
  }

  $restart.click(function() {
    $activity_part.show();
    $restart_page.hide();
    $(".draggable").each(function(index, btn){
      var id = $(btn).data('id');
      $objectCollect.find("#" + id).append(btn);
      $(btn).removeAttr("style");
    });
  });

  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="tooltip"]').tooltip();

});
});