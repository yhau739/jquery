$(document).ready(function () {
  $("#showPass[type='checkbox']").on("click", function (e) {
    if ($("#password").attr("type") == "password") {
      $("#password").attr("type", "text");
      $("#password").css({
        border: "2px solid #fa4753",
        "caret-color": "#fa4753",
        color: "#fa4753",
        "box-shadow": "4px 4px 10px #070707",
      });
    } else {
      $("#password").attr("type", "password");
      $("#password").css({
        border: "none",
        "caret-color": "unset",
        color: "unset",
        "box-shadow": "none",
      });
    }
  });
});
