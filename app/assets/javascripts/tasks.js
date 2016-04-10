/* Adding page load event solve my probelm
  Is there any better way to this ?
*/
$(document).on('ready page:load', function(event) {
  $(".task_done").on("change",function () {
    var self = $(this);
    $.post("/tasks/"+self.data("id")+"/toggle",{"_method":"patch"},function () {
      self.parent().effect("highlight");
    });
  });
});
