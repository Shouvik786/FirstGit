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
  
    const deleteButton = document.createElement('button');
    deleteButton.type = "button";
    deleteButton.value = "Delete";
    deleteButton.onclick = () => {
      localStorage.removeItem(userDetails.email);
      parentElm.removeChild(childElm);
    };
  
    childElm.appendChild(deleteButton);
    parentElm.appendChild(childElm);
  }
  //module.exports = handleFormSubmit;