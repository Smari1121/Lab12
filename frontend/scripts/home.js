//Why was this file created???
//Why did I do this???
//I don't know...
//
//Is there some use for this... hmmm...

// home.js

//chutiya

const baseURL = "http://127.0.0.1:8000"; // update this if you're deploying elsewhere

document.addEventListener("DOMContentLoaded", () => {
  const homeContainer = document.querySelector(".container");

  // 👋 Welcome message fetched from backend
  fetch(`${baseURL}/api/welcome`)
    .then((res) => res.json())
    .then((data) => {
      const msg = document.createElement("p");
      msg.textContent = data.message || "Welcome to the FastAPI App!";
      homeContainer.appendChild(msg);
    })
    .catch((err) => {
      console.error("Error fetching welcome message:", err);
    });

  // 📝 Maybe show some stats if needed?
  fetch(`${baseURL}/users`)
    .then((res) => res.json())
    .then((users) => {
      const userStats = document.createElement("p");
      userStats.textContent = `👥 Registered users: ${users.length}`;
      homeContainer.appendChild(userStats);
    })
    .catch((err) => {
      console.error("Error fetching user data:", err);
    });

  // 🎉 Easter egg: dynamic fun message
  const funFact = document.createElement("p");
  funFact.textContent = "✨ Did you know? FastAPI is super fast because it's built on Starlette & Pydantic!";
  funFact.style.fontStyle = "italic";
  funFact.style.color = "#555";
  homeContainer.appendChild(funFact);
});
