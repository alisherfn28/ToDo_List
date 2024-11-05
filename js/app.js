const button = document.querySelector("#btn");
const block = document.querySelector("#block");
const userTask = document.querySelector("#Task");

function createCard(data) {
  return `
   <div class="card">
          <div class="title">
            <h3>${data.Task}</h3>
          </div>
          <div class="images">
            <img src="./img/pen.svg" alt=" " />
            <img src="./img/clear.svg" id="img2" alt=" " />
          </div>
        </div>
    `;
}

button &&
  button.addEventListener("click", function (event) {
    event.preventDefault();
    if (userTask.value.trim() !== "") {
      let data = {
        Task: userTask.value,
      };

      let card = createCard(data);
      block.innerHTML += card;

      userTask.value = "";
      localStorage.setItem("userTask", JSON.stringify(data));
    } else {
      alert("Iltimos, vazifangizni kiriting !!!");
      userTask.focus();
    }
  });
