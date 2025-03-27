document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorText = document.getElementById("error");

    try {
        const response = await fetch("/clients");
        if (!response.ok) throw new Error("Не вдалося завантажити клієнтів");

        const clients = await response.json();
        const user = clients.find(client => client.email === email && client.password === password);

        if (user) {
            localStorage.setItem("loggedInUser", email);
            window.location.href = "index.html";
        } else {
            errorText.textContent = "Неправильний логін або пароль.";
        }
    } catch (error) {
        errorText.textContent = "Помилка авторизації!";
        console.error(error);
    }
});
document.getElementById("register-btn").addEventListener("click", async (e) => {
    e.preventDefault();
    location = "regForm.html";
    
});
