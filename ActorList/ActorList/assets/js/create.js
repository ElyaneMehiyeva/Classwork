let createBtn = document.getElementById("create");
createBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let actorName = document.getElementById("actorName").value;
  let actorImage = document.getElementById("actorImage").value;
  let data = {
      Name : actorName,
      Image : actorImage
  }
  if (actorName.trim() != "" && actorImage.trim() != "") {
    $.ajax({
      url: "http://localhost:46457/api/actor",
      type: "Post",
      dataType: "json",
      data: JSON.stringify(data),
      contentType: "application/json; charset=UTF-8",
      success:function(data){
          window.location.href = "file:///C:/Users/tu7bpv1mf/Desktop/Classwork-main/ActorList/index.html";
      }
    });
  }
});


