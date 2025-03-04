document.getElementById('registrationForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const client = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        phoneNumber: formData.get('phoneNumber'),
    };

    await fetch('/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(client)
    });

    loadClients();
});

async function loadClients() {
    const res = await fetch('/clients');
    const clients = await res.json();
    document.getElementById('clientsList').innerHTML = clients.map(c => `
        <p><strong>${c.name}</strong> - ${c.email}</p>
    `).join('');
}

loadClients(); 
