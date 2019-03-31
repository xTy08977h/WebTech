$(document).ready(function(){
  //Init Scrollmagic
  var controller = new Scrollmagic.Controller();

  //build scene
  var ourScene = new Scrollmagic.Scene({
    triggerElement: '#tah'
  })
  .setClassToggle('#tah','fade-in')
  .addTo(controller);
});
