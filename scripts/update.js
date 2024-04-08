// document.getElementById('submit-button').addEventListener('click', function() {
//     var currentOrderCount = localStorage.getItem('orderCount') || 0;

//     currentOrderCount++;

//     localStorage.setItem('orderCount', currentOrderCount);
// });




// function togglePhoneNumberField() {
//     var checkBox = document.getElementById("phone-opt-in");
//     var phoneNumberField = document.getElementById("phone-number-field");
//     if (checkBox.checked === true){
//       phoneNumberField.style.display = "block";
//     } else {
//       phoneNumberField.style.display = "none";
//     }
//   }


// window.onscroll = function() {
//     var header = document.querySelector('header');
//     if(window.pageYOffset > 0){
//       header.classList.add('sticky-header');
//     } else {
//       header.classList.remove('sticky-header');
//     }
//   };
  

// Function to handle the order form submission
function handleOrderSubmission() {
    // Retrieve the current value from local storage (default to 0 if not set)
    var currentOrderCount = parseInt(localStorage.getItem('orderCount') || '0');

    // Increment the value
    currentOrderCount++;

    // Save the new value back to local storage
    localStorage.setItem('orderCount', currentOrderCount);
}

// Event listener for form submission
document.addEventListener('DOMContentLoaded', function() {
    var orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', handleOrderSubmission);
    }
});

// Function to toggle phone number field display based on checkbox
function togglePhoneNumberField() {
    var checkBox = document.getElementById("phone-opt-in");
    var phoneNumberField = document.getElementById("phone-number-field");
    phoneNumberField.style.display = checkBox.checked ? "block" : "none";
}



// Event listener for the phone opt-in checkbox
document.addEventListener('DOMContentLoaded', function() {
    var phoneOptInCheckbox = document.getElementById("phone-opt-in");
    if (phoneOptInCheckbox) {
        phoneOptInCheckbox.addEventListener('change', togglePhoneNumberField);
    }
});



// function loadDarkModeSetting() {
//     const darkModeToggle = document.getElementById('dark-mode-toggle');
//     const darkModeOn = localStorage.getItem('darkMode') === 'true';
  
//     if (darkModeOn) {
//       document.body.classList.add('dark-mode');
//       darkModeToggle.checked = true;
//     } else {
//       document.body.classList.remove('dark-mode');
//       darkModeToggle.checked = false;
//     }
//   }
  
//   function toggleDarkMode() {
//     const darkModeToggle = document.getElementById('dark-mode-toggle');
//     darkModeToggle.addEventListener('change', function () {
//       document.body.classList.toggle('dark-mode');
//       const isDarkMode = document.body.classList.contains('dark-mode');
//       localStorage.setItem('darkMode', isDarkMode);
//     });
//   }
  
//   loadDarkModeSetting();
  
//   toggleDarkMode();



// const toggleSwitch = document.querySelector('#dark-mode-toggle');

// function switchTheme(e) {
//   if (e.target.checked) {
//     document.documentElement.setAttribute('data-theme', 'dark');
//     localStorage.setItem('theme', 'dark');
//   } else {
//     document.documentElement.setAttribute('data-theme', 'light');
//     localStorage.setItem('theme', 'light');
//   }
// }

// toggleSwitch.addEventListener('change', switchTheme, false);

// function checkTheme() {
//   const localTheme = localStorage.getItem('theme');
//   if (localTheme) {
//     document.documentElement.setAttribute('data-theme', localTheme);

//     if (localTheme === 'dark') {
//       toggleSwitch.checked = true;
//     }
//   }
// }

// document.addEventListener('DOMContentLoaded', checkTheme);

// This function will toggle the dark mode
function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }
  
  // This function will set the initial theme based on localStorage
  function setInitialTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      document.body.classList.toggle('dark-mode', storedTheme === 'dark');
    }
  }
  
  // Adding the event listener to the dark mode toggle switch
  document.addEventListener('DOMContentLoaded', function() {
    setInitialTheme(); // Set the initial theme when the page loads
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    if (darkModeToggle) {
      darkModeToggle.addEventListener('change', toggleDarkMode);
    }
  });
  

  
  