let prompt = document.querySelector("#prompt");
let btn = document.querySelector("#btn");
let chatContainer = document.querySelector(".chat-container");
let userMessage = null;
let Api_Url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDzFUvCzexQIML1As66xMYw5Yl4oPmNUGY';

function createChatBox(html, className) {
    let div = document.createElement("div");
    div.classList.add(className);
    div.innerHTML = html;
    return div;
}

async function getApiResponse(aiChatBox) {
    let textElement = aiChatBox.querySelector(".text");

    try {
        let response = await fetch(Api_Url, {
            method: "POST",
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify({
                "contents": [{ "parts": [{ text: userMessage }] }]
            })
        });
        let data = await response.json();
        let apiResponse = data?.candidates[0].content.parts[0].text;
        textElement.innerText = apiResponse;

    } catch (error) {
        console.log(error);
    }
}

function showLoading() {
    // Only showing "Answering..." text without any image
    let html = `
        <div class="ai-chat-box">
            <p class="text">Answering...</p>
        </div>`;
    let aiChatBox = createChatBox(html, "ai-chat-box");
    chatContainer.appendChild(aiChatBox);
    getApiResponse(aiChatBox);
}

btn.addEventListener("click", () => {
    userMessage = prompt.value;
    if (!userMessage) return;

    let html = `
        <div class="user-chat-box">
            <p class="text">${userMessage}</p>
        </div>`;
    let userChatBox = createChatBox(html, "user-chat-box");
    chatContainer.appendChild(userChatBox);
    prompt.value = "";
    setTimeout(showLoading, 500);
});
