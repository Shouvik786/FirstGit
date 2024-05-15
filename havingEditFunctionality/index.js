function handleFormSubmit(event) {
    event.preventDefault();
  
    const name = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
    const userDetails = {
      username: name,
      email: email,
      phone: phone,
    };
  
    localStorage.setItem(userDetails.email, JSON.stringify(userDetails));
    showUserOnScreen(userDetails);
  }
  
  function showUserOnScreen(userDetails) {
    const parentElm = document.getElementById('listItem');
    const childElm = document.createElement("li");
    childElm.textContent = `Username: ${userDetails.username}, Email: ${userDetails.email}, Phone: ${userDetails.phone}`;
  
    const deleteButton = document.createElement('input');
    deleteButton.type = "button";
    deleteButton.value = "Delete";
    deleteButton.onclick = () => {
      localStorage.removeItem(userDetails.email);
      parentElm.removeChild(childElm);
    };

    const editButton = document.createElement('input');
    editButton.type = "button";
    editButton.value = "Edit";
    editButton.onclick = () => {
      localStorage.removeItem(userDetails.email);
      parentElm.removeChild(childElm);
      document.getElementById('usernameInputTag').value = userDetails.name
      document.getElementById('emailInputTag').value = userDetails.email
      document.getElementById('phoneNumberInputTag').value = userDetails.phonenumber
    };
  
    childElm.appendChild(deleteButton);
     childElm.appendChild(editButton);
    parentElm.appendChild(childElm);
  }
  module.exports = handleFormSubmit;