const nomeLimpo = (nome) => {
  //declarando regex apenas com letras maiusculas e minusculas
  //Remover caracteres especiais
  //Remover números
  const regex = /^[A-Za-z\s]+$/;

  if (regex.test(nome) == false) {
    console.log("nome incorreto");
  }

  let allLowerCase = nome.toLowerCase();

  allLowerCase = allLowerCase.replace(/[ ]/g, "<>");
  allLowerCase = allLowerCase.replace(/></g, "");
  allLowerCase = allLowerCase.replace(/<>/g, " ");

  allLowerCase = allLowerCase.replace(/(^\w{1})|(\s+\w{1})/g, (letra) =>
    letra.toUpperCase()
  );

  console.log(allLowerCase.trim());
};

nomeLimpo(" vinícius    kldfkds     ");
