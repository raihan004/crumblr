(function () {
  $(".task_done").on("change",function () {
    var self = $(this);
    console.log("what's going on there");
    $.post("/tasks"+self.data("id")+"/toggle",{"_method":"patch"},function () {
      console.log("done");
    });
  });
})();
