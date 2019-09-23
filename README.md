# serverless

Pequeno projeto de aprendizagem sobre Serverless + NodeJS e Express.


## Inicializando o projeto
Inicialmente, após baixar o projeto realize a instalação das dependências utilizando o NPM.

`npm install`

Instalou tudo? Beleza!
Agora roda o comando pra subir um pacote com alterações, basta rodar o comando de deploy do serverless.

`serverless deploy`


## Endpointss

POST: https://hykr6s78s6.execute-api.us-east-1.amazonaws.com/dev/
    
    {    
        userId: "string",
        name: "string" 
    }

GET:  https://hykr6s78s6.execute-api.us-east-1.amazonaws.com/dev/{userId}