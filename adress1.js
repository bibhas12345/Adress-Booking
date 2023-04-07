const tableBody = document.querySelector('#employeeList tbody');

// Create a function to generate the edit and delete buttons for each row
function createEditDeleteButtons() {
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('edit-button');

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');

  const buttonCell = document.createElement('td');
  buttonCell.appendChild(editButton);
  buttonCell.appendChild(deleteButton);

  return buttonCell;
}

// Loop through the data and create a new row for each item
for (let i = 0; i < data.length; i++) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${data[i].id}</td>
    <td>${data[i].fullName}</td>
    <td>${data[i].city}</td>
    <td class="mobile">${data[i].mobile}</td>
    <td>${data[i].pinCode}</td>
  `;

  // Add the edit and delete buttons to the row
  const buttonCell = createEditDeleteButtons();
  row.appendChild(buttonCell);

  tableBody.appendChild(row);
}
const searchInput = document.querySelector('#searchInput');
const tableRows = document.querySelectorAll('#employeeList tbody tr');

searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.trim().toLowerCase();

  tableRows.forEach((row) => {
    const nameCell = row.querySelector('td:nth-child(2)');
    const nameValue = nameCell.textContent.trim().toLowerCase();

    if (nameValue.includes(searchValue)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});
