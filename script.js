document.getElementById('surpriseBtn').addEventListener('click', function() {
    const messages = [
        "你是我的唯一 💖",
        "每天都想你一百遍！",
        "情人节快乐，永远宠你！",
        "今天也要开心哦~"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('message').textContent = randomMessage;
    document.getElementById('message').classList.remove('hidden');
});

// 聊天机器人逻辑
const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const responses = {
    "你好": "你好呀！今天过得怎么样？",
    "你是谁": "我是你的专属聊天机器人！",
    "我想你了": "我也想你，每天都在呢~",
    "晚安": "晚安，好梦~",
    "爱你": "我也爱你！"
};

sendBtn.addEventListener('click', function() {
    let userText = userInput.value.trim();
    if (userText === "") return;

    let botResponse = responses[userText] || "嗯嗯，我在听呢~";
    
    chatLog.innerHTML += `<p><strong>你:</strong> ${userText}</p>`;
    chatLog.innerHTML += `<p><strong>机器人:</strong> ${botResponse}</p>`;
    userInput.value = "";
    chatLog.scrollTop = chatLog.scrollHeight;
});
