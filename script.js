
//SELECTEURS
const listInput = document.querySelector("#name");
const listButton = document.querySelector(".list-button");
const listMember = document.querySelector(".member-list");
//ECOUTEURS
listButton.addEventListener("click", addMember);

//FUNCTIONS
function addMember(event) {
  event.preventDefault();
  const memberDiv = document.createElement("div");
  memberDiv.classList.add("member-item");
  memberDiv.innerText = listInput.value;
  listMember.appendChild(memberDiv);
  listInput.value = "";
}


const member = db.collection("members").get().then((snap) =>{
  snap.docs.forEach(doc => {
    console.log(doc.data())
  });
})