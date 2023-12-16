document.getElementById('userDataForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get user input
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
  
    // Store data in Local Storage
    localStorage.setItem('userName', name);
    localStorage.setItem('userAge', age);
  
    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
  
    alert('Data stored successfully!');
  });
  
  function retrieveData() {
    var userName = localStorage.getItem('userName');
    var userAge = localStorage.getItem('userAge');
  
    // Display data in a table
    var table = document.getElementById('userDataTable');
    table.innerHTML = '<tr><th>Name</th><th>Age</th></tr>';
  
    if (userName && userAge) {
      table.innerHTML += '<tr><td>' + userName + '</td><td>' + userAge + '</td></tr>';
    } else {
      alert('No data found in Local Storage.');
    }
  }
  