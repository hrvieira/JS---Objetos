const cliente = {
  nome: "Andre",
  idade: 36,
  cpf: "12543652266",
  email: "andre@email.com"
}

// console.log(cliente.nome);
console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`);
// Acessando com o substring para capiturar e exibir os treis primeiro digitos da string cpf
console.log(cliente.cpf.substring(0,3))