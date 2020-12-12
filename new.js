const output = document.querySelector("#message-screen");
const input = document.getElementById("test-input");
document
  .getElementById("sent-button")
  .addEventListener("click", addTextAfterClick);
console.log(document.documentElement.clientHeight);

setTimeout(() => {
  output.insertAdjacentHTML(
    "beforebegin",
    `<div class='bot_wrapper'>
      <img src="img/bot.svg" alt="bot">
      <div class="bot-text">Здрасьтити! Используй команду /start и погнали!</div>
           </div>`
  );
}, 1500);

function botMessage(text) {
  setTimeout(() => {
    output.insertAdjacentHTML(
      "beforebegin",
      `<div class='bot_wrapper'>
         <img src="img/bot.svg" alt="bot">
         <div class="bot-text">${text}</div>
              </div>`
    );
  }, 800);
}
function userMessage(reply) {
  output.insertAdjacentHTML(
    "beforebegin",
    `<div class='user_wrapper'>
         <img src="img/user.svg" alt="user">
           <div class="user-text">${reply}</div>
</div>`
  );
}
// logic
function addTextAfterClick() {
  const text = input.value;
  if (text === "start") {
    userMessage(text);
    botMessage("Привет! Меня зовут Чат-бот. А как тебя? (Введите name Имя)");
  } else if (text[1] === "a") {
    userMessage(text);
    const name = text.slice(4);
    botMessage(`${name}? ахахаха. Какое дурацкое имя!`);
    setTimeout(() => {
      botMessage(`Ладно, ${name}, без обид. Это я юмор шучу :)`);
    }, 3000);
  } else if (text === "num") {
    botMessage("Калькулятер пока что в разработке");
  } else {
    botMessage("I don't undertand :( ");
  }
}
//keypress on Enter
document.getElementById("test-input").addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    addTextAfterClick();
  }
});
//calculate

function calc(a, b) {}
