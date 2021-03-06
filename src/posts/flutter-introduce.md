---
path: "/blog/flutter-introduce"
date: "2019-02-15"
title: "Flutter Introduce"
---

## O quê é Flutter?

Flutter é um SDK da Google para desenvolvimento mobile multiplataforma(Android, IOS) apartir de uma
unica base de código, ele foi apresentado em 2015 em um evento da linguagem Dart e tinha 
como objetivo renderizar de forma consistente a 120 fps. O lançamento inicial aconteceu em maio de 2017
e o lançamento da versão estavel(1.0.0) aconteceu no dia 4 de dezembro de 2018.

## Por que Flutter?

- Produtividade (Base unica de codigo, Hot reload, Widgets prontos)

- Crie experiencias de usuarios fodas e altamente personalizadas

- Fluidez
   
![Galery](/flutter-introduce/galery-animation.gif)
![Galery](/flutter-introduce/galery-posse.gif)

## Dart
Cogitaram o uso de muitas linguagem no inicio do desenvolvimento do Flutter, entre elas a linguagem que
se destacou foi a Dart. 

Dart é uma linguagem orientada a objetos, tipada e foi desenvolvida pelo Google, possui uma sintaxe que parecida
com Java, Javascript. Então se você tem conhecimento em alguma dessas linguagens orientação a objetos Dart não sera 
um problema.

``` dart
void main() {
  for (int i = 0; i < 5; i++) {
    print('hello ${i + 1}');
  }
}
```

O Dart ainda pode compilar para codigo nativo em AOT (Ahead Of Time) e em JIT (Just In Time).

O AOT permite que seu app seja compilado no código nativo de cada plataforma antes da execução fazendo com 
que o app inicie rapidamente. E o JIT torna HotReload possível, fazendo com que sua aplicação seja recompilada
em tempo de execução e que mantenha o estado de desenvolvimento, e como resultado isso faz com que suas variáveis não percam o valor 
enquanto seu app é recarregado na fase de desenvolvimento.

![HotReload](/flutter-introduce/hotreload.gif)

## Flutter vs WebViews(Ionic/Cordova)

![WebViews](/flutter-introduce/webview.png)

As WebViews renderizam paginas web e executam o seu codigo HTML/CSS/Javascript e como o Javascript não se 
comunica diretamente com o codigo nativo eles passam por uma ponte(Bridge) e é essa ponte que ira se comunicar com o 
dominio nativo quando for necessario acessar algum dos serviços internos como por exemplo a Localização, 
Bluetooth e etc. 

## Ponte(Bridge)

![Bridge](/flutter-introduce/bridge.png)

A ponte trabalha de maneira semelhante a de um WebSocket que envia e recebe informações e esse fluxo acontece de ambos os
lados, enviando dados do seu codigo Javascript e recebendo dados da sua plataforma nativa.  

## Flutter vs React Native?

![reactive-views](/flutter-introduce/reactive-views.png)

Com o React-native não é diferente, ele não se comunica diretamente com o dominio nativo.
Mesmo que a maior parte do codigo do app seja escrito em Javascript a interface do usuario
é 100% nativa.

O React Native trabalha em dois domínios diferentes o domínio nativo e o domínio do JS. 
E ambos os domínios são extremamente rápidos. O problema acontece quando esses lados precisam se 
comunicar. Quando acontece uma alteração na arvore de Widgets do seu App ele envia essas alterações 
para a ponte que as envia para a plataforma nativa e ela acessa os seus Widgets nativos e recria a sua interface, 
em casos em que são realizadas animações/transições entre esses reinos podem se comunicar ate 60 vezes 
por segundos o que dificulta que o app rode a 60 fps e deixe seu app com uma fluidez legal.


## Como o Flutter funciona?

![Flutter](/flutter-introduce/flutter.png)


O Flutter utiliza uma abordagem diferente, ele abandona a Brigde e utiliza uma linguagem 
compilada chamada Dart que compila em AOT (ahead of time) código nativo para múltiplas 
plataformas.

Ele trás para si a responsabilidade de analisar e renderizar os Widgets e envia para ponte somente 
o que a GPU precisa para renderizar o seus Widgets. 

Comparado a outros frameworks o Flutter funciona de maneira totalmente diferente dos frameworks tradicionais 
para criação de aplicativos, ele funciona de maneira semelhante a de um mecanismo de jogo.

O Flutter utiliza um mecanismo chamado Skia que recebe seus Widgets e envia as informações diretamente para o 
canvas da plataforma e a plataforma retorna os eventos conforme necessário.

![Skia](/flutter-introduce/skia.png) 

## Fluter não utiliza os widgets OEM

![Evolution](/flutter-introduce/evolution.png)

Os widgets OEM são os widgets nativos de cada interface. 
Porem isso não significa que você terá que criar seus Widgets do zero, Os Widgets de 
ambas as plataformas estarão disponíveis para uso somente na versão mais recente do Material Designer.

##### Isso significa que seus usuario mais atentos podem ter surpresas...

![OEM](/flutter-introduce/oem.png)


## Biografia

- <https://flutter.io/docs/resources/technical-overview>
- <https://hackernoon.com/whats-revolutionary-about-flutter-946915b09514>
- <https://medium.com/47billion/flutter-how-does-it-works-6e4c73842e67>
- <https://medium.com/the-andela-way/why-you-should-give-flutter-some-of-your-attention-22dd7e5cae42>
- <https://hackernoon.com/flutter-5-reasons-why-you-may-love-it-55021fdbf1aa>
- <https://medium.com/@talkol/performance-limitations-of-react-native-and-how-to-overcome-them-947630d7f440>
- <https://hackernoon.com/why-flutter-uses-dart-dd635a054ebf>
- <https://medium.com/flutter-io/why-flutter-doesnt-use-oem-widgets-94746e812510>
- <https://medium.com/flutter-community/flutter-platformview-how-to-create-flutter-widgets-from-native-views-366e378115b6>
- <https://buildflutter.com/how-flutter-works/>
