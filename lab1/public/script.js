document.getElementById('registrationForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const client = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        phoneNumber: formData.get('phoneNumber'),
        dob: formData.get('dob'),
        gender: formData.get('gender'),
        country: formData.get('country'),
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
            <br> Дата народження: ${c.dob} 
            <br> Стать: ${c.gender} 
            <br> Країна: ${c.country} 
            <br> Фото: ${c.photo ? `<img src="${c.photo}" width="50" height="50">` : 'Немає фото'}
        </p>
    `).join('');
}

loadClients();
