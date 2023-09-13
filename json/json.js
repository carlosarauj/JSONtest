let pessoa = {
    nome: 'Carlos',
    idade: 20,
    sexo: 'h'
}

let pessoajson = JSON.stringify(pessoa)

console.log(pessoajson)

let pessoajs = JSON.parse(pessoajson)

console.log(pessoajs)