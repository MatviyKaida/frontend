async function loadClients() {
    const res = await fetch('/clients');
    const clients = await res.json();
    const table = document.getElementById('clientsTable');
    table.innerHTML = '';

    clients.forEach(client => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="text" value="${client.name}" id="name-${client.id}"></td>
            <td>${client.email}</td>
            <td><input type="text" value="${client.phoneNumber}" id="phone-${client.id}"></td>
            <td><input type="date" value="${client.dob}" id="dob-${client.id}"></td>
            <td>
                <select id="gender-${client.id}">
                    <option value="male" ${client.gender === 'male' ? 'selected' : ''}>Чоловік</option>
                    <option value="female" ${client.gender === 'female' ? 'selected' : ''}>Жінка</option>
                </select>
            </td>
            <td>
                <select id="country-${client.id}">
                    <option value="Ukraine" ${client.country === 'Ukraine' ? 'selected' : ''}>Україна</option>
                    <option value="USA" ${client.country === 'USA' ? 'selected' : ''}>США</option>
                    <option value="Germany" ${client.country === 'Germany' ? 'selected' : ''}>Німеччина</option>
                </select>
            </td>
            <td>
                <button onclick="updateClient(${client.id})">Зберегти</button>
                <button onclick="deleteClient(${client.id})">Видалити</button>
            </td>
        `;
        table.appendChild(row);
    });
}

async function updateClient(id) {
    const client = {
        name: document.getElementById(`name-${id}`).value,
        phoneNumber: document.getElementById(`phone-${id}`).value,
        dob: document.getElementById(`dob-${id}`).value,
        gender: document.getElementById(`gender-${id}`).value,
        country: document.getElementById(`country-${id}`).value,
    };

    await fetch(`/clients/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(client)
    });

    loadClients();
}

async function deleteClient(id) {
    await fetch(`/clients/${id}`, {
        method: 'DELETE'
    });

    loadClients();
}

loadClients();
