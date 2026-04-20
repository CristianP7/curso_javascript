const text = document.getElementById("text");
const btn = document.getElementById("btn");
const result = document.getElementById("result")

function age(input){
    if (input >= 18) return `Perfecto, tienes ${input} años, puedes pasar 🔥.`;
    return `Lo siento, tienes ${input} años, no puedes pasar ✖️`;
}

btn.addEventListener("click", () => {
    let input = text.value;
    result.textContent = age(input);
})