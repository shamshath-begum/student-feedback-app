const API_URL = "http://localhost:5000";
const list = document.getElementById("list");

function sendFeedback() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("msg").value;
console.log(name,message);

  fetch(`${API_URL}/feedback`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, message })
  })
  .then(() => loadFeedback());
}

function loadFeedback() {
  fetch(`${API_URL}/feedback`)
    .then(res => res.json())
    .then(data => {
      list.innerHTML = "";
      data.forEach(f => {
        const li = document.createElement("li");
        li.innerText = `${f.name}: ${f.message}`;
        list.appendChild(li);
      });
    });
}

loadFeedback();
