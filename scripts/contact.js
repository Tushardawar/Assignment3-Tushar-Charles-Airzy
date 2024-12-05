// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// Get the submit button and contact page container
const submitButton = document.getElementById('submit-button');
const contactPage = document.getElementById('contact-page');

// Add event listener for the button click
submitButton.addEventListener('click', function() {
  // Clear the contents of the contact page
  contactPage.innerHTML = '';

  // Create a new <p> element
  const thankYouMessage = document.createElement('p');

  // Set the text and style of the new element
  thankYouMessage.textContent = 'Thank you for your message';
  thankYouMessage.classList.add('thank-you');

  // Append the new element to the contact page
  contactPage.appendChild(thankYouMessage);
});
