# Estudo da biblioteca do Angular RxJs
RxJs é uma biblioteca utilizada para a construção de programas assíncronos ou baseados em eventos, utilizando Observables - são como “canais de dados" que emitem valores ao longo do tempo e podem ser manipulados com operadores, além de deixar o código mais legível e limpo.

## Vantagens

1. **Melhor controle de assincronia**

Trabalha bem com requisições HTTP, eventos de usuário e WebSockets - comunicação entre navegador e servidor.

1. **Evita o "callback hell”**

Os operadores podem ser encadeados para formar uma sequência de transformações, filtragens e manipulações. Isso resulta em um código mais linear, evitando o famoso **callback hell** que pode ocorrer quando a lógica está aninhada dentro de blocos `subscribe`

1. **Alta performance**

Reduz chamadas desnecessárias à API

4. **Manutenibilidade:** 

Separar a lógica do `subscribe` torna o código mais fácil de manter. Se precisar fazer alterações ou adicionar novos comportamentos, pode fazê-lo diretamente nos operadores, sem interferir na lógica de subscrição ou em outras partes do código.