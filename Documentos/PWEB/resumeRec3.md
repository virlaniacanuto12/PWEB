# Variáveis e Funções em JS

## Atribuição a variável

const soma = function(a, b) {
    return a + b;
};

### Usando a variável 

const resultado = soma(3, 4);

console.log(resultado);

### Explicação

**Como uma função:** A variável soma armazena uma função, então você pode chamá-la com parênteses e passar os parâmetros que a função espera, como faria com uma função declarada diretamente.

**Flexibilidade:** A grande diferença é que, como soma é uma variável que contém uma função, você pode manipulá-la como uma variável normal. Por exemplo, você pode passar soma como argumento para outra função ou até mesmo reatribuir um valor diferente a soma no futuro.

____________________________________________________________________________________________________________

## Passagem como argumentos:

Funções podem ser passadas como argumentos para outras funções (chamado de funções de ordem superior). Isso seria o equivalente a passar variáveis como parâmetros:

____________________________________________________________________________________________________________

## Retorno de função 

Funções podem ser retornadas de outras funções, semelhante ao retorno de variáveis.

javascript

function criarMultiplicador(fator) {
  return function(n) {
    return n * fator;
  };
}

const duplica = criarMultiplicador(2);
console.log(duplica(5)); // 10

A função criarMultiplicador retorna outra função, que é atribuída a uma variável, o que mostra a flexibilidade das funções serem tratadas como valores.