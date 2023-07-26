const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    validateInputs();
  });

function validateInputs() {
  const firstnameValue = firstname.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;

  if (firstnameValue === "") {
    setErrorFor(firstname, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(firstname);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (confirmPasswordValue === "") {
    setErrorFor(confirmPassword, "A confirmação de senha é obrigatória.");
  } else if (confirmPasswordValue !== passwordValue) {
    setErrorFor(confirmPassword, "As senhas não conferem.");
  } else {
    setSuccessFor(confirmPassword);
  }

  const inputBoxes = form.querySelectorAll("input-field");

  const formIsValid = [...inputBoxes].every((inputBox) => {
    return inputBox.className === "input-field success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const inputBox = input.parentElement;
  const small = inputBox.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  inputBox.className = "input-field error";
}

function setSuccessFor(input) {
  const inputBox = input.parentElement;

  // Adicionar a classe de sucesso
  inputBox.className = "input-field success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}