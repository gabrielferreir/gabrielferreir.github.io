---
path: "/blog/monitorando-seu-aplicativo-em-producao-com-flutter"
date: "2020-03-06"
title: "Monitorando seu aplicativo Flutter em produção"
---

## Introdução

Fala galera, hoje farei um breve tutorial de como monitorar os erros de 
sua aplicação Flutter utilizando o <a href="https://sentry.io" target="_blank">Sentry</a>. 

- Passo 1: Criar conta no <a href="https://sentry.io" target="_blank">Sentry</a>;
- Passo 2: Projeto no <a href="https://sentry.io" target="_blank">Sentry</a>;
- Passo 3: Configurar projeto na sua aplicação <a href="https://flutter.dev/" target="_blank">Flutter</a>;


## Passo 1: Criar conta no Sentry

<p>

Acesse o site do Sentry e crie sua conta.

<br/>

<img title="Pagina de cadastro do Sentry" src="http://localhost:8000/monitorando-seu-aplicativo-flutter-em-producao/sentry.png"/>

</p>


## Passo 2: Criar projeto no Sentry

<p>

Clique no botão "Create project".

<br />

<img title="Pagina inicial do Sentry" src="http://localhost:8000/monitorando-seu-aplicativo-flutter-em-producao/home-sentry.png"/>

</p>

<p>

O Sentry ainda não possui a opção de plataforma "Flutter" então selecione a opção "React Native" e digite o nome do 
projeto, após clique em "Create Project".
<br /><br />
Ele ira abrir uma tela com as instruções para fazer a instalação do Sentry no React Native, você pode simplismente 
ignorar isso. E clicar em "Got it! Take me to the Issue Stream".

<br />

<img title="Pagina inicial do Sentry" src="http://localhost:8000/monitorando-seu-aplicativo-flutter-em-producao/platform.png"/>

</p>

## Configurar projeto na sua aplicação Flutter;
 
