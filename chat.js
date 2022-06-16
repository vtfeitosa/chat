const chatBox = document.getElementById("chatBox");
const msg = document.getElementById("msg");
const send = document.getElementById("send");
const clear = document.getElementById("clear");

function sendMsg() {
    if (msg.value) {
        chatBox.textContent += "\n" + msg.value;
        chatBox.scrollTop += chatBox.scrollHeight;
        msg.value = "";
    }
    return null;
}

function clearChat() {
    chatBox.textContent = "";
    return null;
}

clear.addEventListener("click", clearChat);
send.addEventListener("click", sendMsg);
msg.addEventListener("keydown", (e)=>{
    if (e.keyCode === 0x0D) {
        sendMsg();
    }
})