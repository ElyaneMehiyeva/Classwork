async function GetAllData(){
   let data = await fetch("http://localhost:46457/api/actor");
   let result = await data.json();
   return result;
}
async function InsertData(){
    let data = await GetAllData();
    let item = document.querySelector(".item");
    item.innerHTML = "";
    data.forEach(cardData => {
        let cardHtml = ` <div class="main-container">
        <img src="${cardData["imageUrl"]}" alt="" />
        <div>
          <p><b>FullName:</b> ${cardData["fullName"]}</p>
          <div class="button">
            <button type="button" class="update" onclick="updateData(${cardData["id"]})">Update</button>
            <button type="button" class="delete" onclick="deleteData(${cardData["id"]})">Delete</button>
          </div>
        </div>
      </div>`;
      item.innerHTML+=cardHtml;
    });
}
InsertData();



function deleteData(id){
    $.ajax({
        url: "http://localhost:46457/api/actor/"+id,
        type: "Get",       
        success:function(data){
            location.reload();
        }
      });
}

