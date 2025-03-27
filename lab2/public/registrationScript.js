document.getElementById('registrationForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const client = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        phoneNumber: formData.get('phoneNumber'),
        agreement: formData.get('agreement') === 'on',
    };

    const file = formData.get('photo');
    if (file && file.size > 0) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async function() {
            client.photo = reader.result;
            await sendClientData(client);
        };
    } else {
        await sendClientData(client);
    }
    location = "index.html";
});

async function sendClientData(client) {
    await fetch('/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(client)
    });

    loadClients();
}

async function loadClients() {
    const res = await fetch('/clients');
    const clients = await res.json();
    document.getElementById('clientsList').innerHTML = clients.map(c => `
        <p>
            <strong>${c.name}</strong> - ${c.email} 
            <br> Телефон: ${c.phoneNumber} 
            <br> Фото: ${c.photo ? `<img src="${c.photo}" width="50" height="50">` : 'Немає фото'}
        </p>
    `).join('');
}

loadClients();
