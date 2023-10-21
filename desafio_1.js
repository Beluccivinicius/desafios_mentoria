const limparNome = (nome) => {
  const regex = /^[A-Za-z\s]+$/;

  if (regex.test(nome) == false) {
    console.log("nome incorreto");
    return;
  }

  let allLowerCase = nome.toLowerCase();

  //ver outras formas de fazer
  allLowerCase = allLowerCase.replace(/[ ]/g, "<>");
  allLowerCase = allLowerCase.replace(/></g, "");
  allLowerCase = allLowerCase.replace(/<>/g, " ");

  allLowerCase = allLowerCase.replace(/(^\w{1})|(\s+\w{1})/g, (letra) =>
    letra.toUpperCase()
  );

  console.log(allLowerCase.trim());
};

module.exports = { limparNome };
