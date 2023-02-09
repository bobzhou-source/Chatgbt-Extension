const API_KEY = "";
const prompt = `"__question__"`;

function csreplace(text, keys, values) {
    keys.forEach((key, i) => {
        text = text.replace(`__${key}__`, values[i]);
    });
    return text;
}

function sendDataToGPT(question) {
    const body = {
        model: "text-davinci-003",
        prompt: csreplace(prompt, 
            ['question'], [question]
            ), temperature: 0,
        max_tokens: 50,
    };
    // 
    return fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify(body)
    });
}