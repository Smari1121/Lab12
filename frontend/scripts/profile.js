const baseURL = ""; // Set this if you’re using full backend URL-itstandon
async function loadUsers() {
  const res = await fetch(`/users`);
  const users = await res.json();
  const list = document.getElementById("userList");
  list.innerHTML = "";
  
  document.getElementById("userCount").textContent = `Total users: ${users.length}`;
  // why did I give such a weird task
  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user.username}: ${user.bio}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = async () => {
      await fetch(`${baseURL}/users/${user._id}`, { method: "DELETE" });
      loadUsers();
    };

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

document.getElementById("search").addEventListener("input", async (e) => {
  const term = e.target.value.toLowerCase();
  const res = await fetch(`${baseURL}/users`);
  const users = await res.json();
  const list = document.getElementById("userList");
  list.innerHTML = "";

  const filteredUsers = users.filter(user => user.username.toLowerCase().includes(term));
  document.getElementById("userCount").textContent = `Total users: ${filteredUsers.length}`;

  filteredUsers.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user.username}: ${user.bio}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = async () => {
      await fetch(`/users/${user._id}`, { method: "DELETE" });  //instead of patch write delete- itstandon
      loadUsers();
    };

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
});

loadUsers();

document.getElementById("userForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim(); //trim--itstandon
  const bio = document.getElementById("bio").value.trim();
  if (!username || !bio) {
    alert("Username and bio are required.");
    return;
  }
  await fetch(`${baseURL}/users/create`, {          //Fixed the path to /users/create.-itstandon
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, bio })
  });
  e.target.reset();
  loadUsers();
});