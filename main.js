// Initialize entries from localStorage
let entries = JSON.parse(localStorage.getItem('entries')) || [];
        
// Function to render the table
function renderTable(filter = '') {
    const tableBody = document.getElementById('dataTable');
    tableBody.innerHTML = '';

    entries.forEach((entry, index) => {
        // Filter logic
        if (filter && !Object.values(entry).some(value => value.toLowerCase().includes(filter.toLowerCase()))) {
            return;
        }

        const row = document.createElement('tr');
        row.innerHTML = `
            <td contenteditable="true" oninput="updateEntry(${index}, 'billNo', this.innerText)">${entry.billNo}</td>
            <td contenteditable="true" oninput="updateEntry(${index}, 'date', this.innerText)">${entry.date}</td>
            <td contenteditable="true" oninput="updateEntry(${index}, 'name', this.innerText)">${entry.name}</td>
            <td contenteditable="true" oninput="updateEntry(${index}, 'aadhaarNo', this.innerText)">${entry.aadhaarNo}</td>
            <td contenteditable="true" oninput="updateEntry(${index}, 'phoneNumber', this.innerText)">${entry.phoneNumber}</td>
            <td contenteditable="true" oninput="updateEntry(${index}, 'model', this.innerText)">${entry.model}</td>
            <td contenteditable="true" oninput="updateEntry(${index}, 'imei', this.innerText)">${entry.imei}</td>
            <td contenteditable="true" oninput="updateEntry(${index}, 'serialNo', this.innerText)">${entry.serialNo}</td>
            <td contenteditable="true" oninput="updateEntry(${index}, 'price', this.innerText)">${entry.price}</td>
            <td>
                <button class="btn btn-delete" onclick="deleteRow(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to update a specific entry
function updateEntry(index, field, value) {
    entries[index][field] = value.trim();
}

// Function to add a new row
function addRow() {
    entries.push({
        billNo: '',
        date: '',
        name: '',
        aadhaarNo: '',
        phoneNumber: '',
        model: '',
        imei: '',
        serialNo: '',
        price: ''
    });
    renderTable();
}

// Function to delete a row
function deleteRow(index) {
    if (confirm('Are you sure you want to delete this row?')) {
        entries.splice(index, 1);
        renderTable();
    }
}

// Function to save data to localStorage
function saveData() {
    localStorage.setItem('entries', JSON.stringify(entries));
    alert('Data saved successfully!');
}

// Function to filter/search the table
function searchTable() {
    const filter = document.getElementById('searchInput').value;
    renderTable(filter);
}

// Load the table initially
renderTable();