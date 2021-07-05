---
path: "/blog/monitorando-sua-aplicacao-flutter-em-producao"
date: "2021-07-04"
title: "Monitorando sua aplicação Flutter em produção"
---

Após subir uma aplicação em produção, é bem provável que seus usuários encontrem alguns erros durante o uso de sua
aplicação.

Sabendo disso, é importante que você desenvolva formas de capturar erros e informações relevantes que levarão a
aplicação a falhar.

A ferramenta mais conhecida para captura de erros em aplicações mobile é o Crashlytics.

Vamos começar.

- [Criando projeto no Firebase](#criando-projeto-no-firebase)
- [Instação no Android](#instalacao-no-android)
- [Instação no IOS](#instalacao-no-ios)
- [Instação no Web](#instalacao-na-web)

<a name="criando-projeto-no-firebase"></a>

## Criando projeto no Firebase

O primeiro passo para a instalação do Crashlytics é a criação de um projeto no Firebase.

Acesse o [Firebase Console](https://console.firebase.google.com/u/0/project/_/overview) e clique em "Adicionar projeto".

![Galery](/monitorando-sua-aplicacao-flutter-em-producao/01.png)

Dê um nome para o seu projeto.

![Galery](/monitorando-sua-aplicacao-flutter-em-producao/02.png)

Desmarque a opção "Ativar o Google Analytics neste projeto".

![Galery](/monitorando-sua-aplicacao-flutter-em-producao/03.png)

<a name="instalacao-no-android"></a>

## Instalação no Android

Vamos iniciar com a configuração no Android.

![Galery](/monitorando-sua-aplicacao-flutter-em-producao/04.png)

Durante a criação o nome do pacote deve ser exatamente igual ao que está no arquivo *
android/app/src/main/AndroidManifest.xml*.

![Galery](/monitorando-sua-aplicacao-flutter-em-producao/05.png)

Faça o download do **google-services.json** e cole na pasta **android/app**.

![Galery](/monitorando-sua-aplicacao-flutter-em-producao/06.png)

Adicione o plugin do google-service no arquivo **android/build.gradle**.

```
buildscript {
    ...
    repositories {
        ...
    }

    dependencies {
        ...
        classpath 'com.google.gms: google-services: 4.3.3'
    }
}
```

Execute o plugin do google-service adicionando  **apply plugin: 'com.android.application'**
no arquivo **/android/app/build.gradle**.

```
...
apply plugin: 'com.android.application'
apply plugin: 'com.google.gms.google-services'
...
```

No arquivo **/android/app/build.gradle** habilite o Multidex e o adicione nas dependecias.

```
android {
    ...
    defaultConfig {
        applicationId "com.example.crashlytics_demo"
        minSdkVersion 16
        targetSdkVersion 30
        versionCode flutterVersionCode.toInteger()
        versionName flutterVersionName
        multiDexEnabled true
    }
    ...
}
...
dependencies {
    implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk7:$kotlin_version"
    implementação 'com.android.support:multidex:1.0.3'
}
```

Habilite o **android:usesCleartextTraffic="true"** para que você possa realizar os testes usando um emulador.

```
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.crashlytics_demo">

    <application
        android:icon="@mipmap/ic_launcher"
        android:label="crashlytics_demo"
        android:usesCleartextTraffic="true">
```

<a name="instalacao-no-ios"></a>

## Instalação no IOS

Agora vamos configurar o Firebase para IOS.

Selecione a opção "Adicionar app", após isso selecione "IOS".

![Galery](/monitorando-sua-aplicacao-flutter-em-producao/07.png)
![Galery](/monitorando-sua-aplicacao-flutter-em-producao/08.png)

Da mesma forma que fizemos no Android, devemos utilizar o nome do pacote igual ao que está no "Bundle
identifier" do IOS.

![Galery](/monitorando-sua-aplicacao-flutter-em-producao/09.png)

Prossiga com a instalação e faça o download do arquivo "GoogleService-Info.plist".

Para adicionar esse arquivo em um projeto IOS você deve usar o Xcode.

Com o projeto aberto clique com o botão direito em "Runner" e selecione a opção "Add Files to Runner".

![Galery](/monitorando-sua-aplicacao-flutter-em-producao/10.png)

Encontre e selecione o arquivo "GoogleService-Info.plist" e verifique se
"Copy items if needed" está selecionado.

![Galery](/monitorando-sua-aplicacao-flutter-em-producao/11.png)

Você ainda precisa ativar o Firebase para funcionar quando você estiver utilizando um emulador.

Para isso abra o arquivo "Info.plist" clicando com o botão direito em cima dele e selecionando a opção "Open as" > "
Source Code".

![Galery](/monitorando-sua-aplicacao-flutter-em-producao/12.png)

E adicione essa chave:

```
...
    <key>NSAppTransportSecurity</key>
    <dict>
        <key>NSAllowsLocalNetworking</key>
        <true/>
    </dict>
</dict>
</plist>
```

## Instalando pacotes

Instale as dependências do Crashlytics.

```
dependencies:
  flutter:
    sdk: flutter
  firebase_core: "^1.3.0"
  firebase_crashlytics: "^2.0.6"
```

## Configurando Crashlytics no Android

```
dependencies {
  ...
  classpath 'com.google.gms:google-services:4.3.5'
  classpath 'com.google.firebase:firebase-crashlytics-gradle:2.5.1'
}
```

```
... 
android {
    ...
}

dependencies {
    ...
}

apply plugin: 'com.google.gms.google-services'
apply plugin: 'com.google.firebase.crashlytics'

```

## Configurando Crashlytics no IOS

Abra sua aplicação no Xcode. Clique em "Runner", selecione a opção "Build Phases"
em seguida clique em "+" > "New Run Script Phase".

![Galery](/monitorando-sua-aplicacao-flutter-em-producao/17.png)

Adicione "${PODS_ROOT}/FirebaseCrashlytics/run" na caixa de texto.

![Galery](/monitorando-sua-aplicacao-flutter-em-producao/18.png)

## Ativação do Crashlytics

![Galery](/monitorando-sua-aplicacao-flutter-em-producao/19.png)

## Iniciando o Crashlytics

No seu arquivo **main.dart** faça a inicialização do Firebase.

```
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  final Future<FirebaseApp> _initialization = Firebase.initializeApp();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: FutureBuilder(
            future: _initialization,
            builder: (context, snapshot) {
              if (snapshot.hasError) return Center(child: Text('Error'));
              if (snapshot.connectionState == ConnectionState.done) {
                return Scaffold(
                    appBar: AppBar(),
                    body: Center(
                      child: Text('Home'),
                    ));
              }
              return Center(child: CircularProgressIndicator());
            }));
  }
}
```

## Evento de Crash

Adicione um botão e simule um evento de crash na aplicação.

```
ElevatedButton(
    child: Text('CRASH'),
    onPressed: () {
      FirebaseCrashlytics.instance.crash();
    },
),
```

Rode sua aplicação e clique no botão Crash. Após isso esperamos que chegue um erro no Firebase Console.

![Galery](/monitorando-sua-aplicacao-flutter-em-producao/20.png)

## Enviando um erro

Você pode enviar um erro manualmente para o Crashlytics utilizando o ```recordError```.

**Parametros:**

- error: dynamic (Obrigatorio) -> Nesse campo você deve enviar a Exception ou a string do erro.
- stackTrace: StackTrace (Obrigatorio) -> A pilha de informações de onde o erro ocorreu. (O Crashlytics utiliza esse
  campo para fazer o agrupamento dos erros).
- reason: String (Opcional) ->  O valor enviado nesse campo será salvo na propriedade ```flutter_error_reason```. Você
  poderia visualizar essa mensagem acessando os detalhes do erro no Console do Firebase. Você pode utilizar esse campo
  para realizar filtros e encontrar todos os erros que possuem e mesma propriedade.
- fatal: boolean (Opcional) ->  Boolean que indicará se o erro é do tipo fatal.

```
...
onPressed: () async {
  try {
    throw Exception('Teste');
  } catch(error, stackTrace) {
    await FirebaseCrashlytics.instance.recordError(
        error,
        stackTrace,
        reason: 'a error test',
        fatal: true,
    );
  }
},
...
```

## Adicionando uma chave personalizada

Podemos adicionar chaves personalizadas ao erro do Crashlytics, para isso usamos o método ```setCustomKey```.

```
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_crashlytics/firebase_crashlytics.dart';
import 'package:flutter/material.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  final Future<FirebaseApp> _initialization = Firebase.initializeApp();
  String _type = 'Padrao';
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: FutureBuilder(
            future: _initialization,
            builder: (context, snapshot) {
              if (snapshot.hasError) return Center(child: Text('Error'));
              if (snapshot.connectionState == ConnectionState.done) {
                return Scaffold(
                    appBar: AppBar(),
                    body: Column(
                      children: [
                        ElevatedButton(
                            onPressed: () {
                              setState(() {
                                _type = 'Digital';
                              });
                              FirebaseCrashlytics.instance
                                  .setCustomKey('type', _type);
                            },
                            child: Text('Digital')),
                        ElevatedButton(
                            onPressed: () {
                              setState(() {
                                _type = 'Analogico';
                              });
                              FirebaseCrashlytics.instance
                                  .setCustomKey('type', _type);
                            },
                            child: Text('Analogico')),
                        ElevatedButton(
                          child: Text('CRASH'),
                          onPressed: () async {
                            try {
                              throw Exception('Teste');
                            } catch (error, stackTrace) {
                              await FirebaseCrashlytics.instance.recordError(
                                error,
                                stackTrace,
                                reason: 'a error test',
                              );
                            }
                          },
                        )
                      ],
                    ));
              }
              return Center(child: CircularProgressIndicator());
            }));
  }
}

```

Esse é o resultado no Console do Firebase:

![Galery](/monitorando-sua-aplicacao-flutter-em-producao/21.png)

## Adicionando logs

Muitas vezes as informações que temos disponíveis no Crashlytics não são suficientes para entendermos o motivo de uma
falha. Com isso, podemos optar por enviar algumas mensagens de log usando o método ```log```.

```
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_crashlytics/firebase_crashlytics.dart';
import 'package:flutter/material.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  final Future<FirebaseApp> _initialization = Firebase.initializeApp();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: FutureBuilder(
            future: _initialization,
            builder: (context, snapshot) {
              if (snapshot.hasError) return Center(child: Text('Error'));
              if (snapshot.connectionState == ConnectionState.done) {
                return Scaffold(
                    appBar: AppBar(),
                    body: Column(
                      children: [
                        ElevatedButton(
                            onPressed: () {
                              FirebaseCrashlytics.instance.log('Tap on "A"');
                            },
                            child: Text('A')),
                        ElevatedButton(
                            onPressed: () {
                              FirebaseCrashlytics.instance.log('Tap on "B"');
                            },
                            child: Text('B')),
                        ElevatedButton(
                          child: Text('CRASH'),
                          onPressed: () async {
                            try {
                              throw Exception('Teste');
                            } catch (error, stackTrace) {
                              await FirebaseCrashlytics.instance.recordError(
                                error,
                                stackTrace,
                              );
                            }
                          },
                        )
                      ],
                    ));
              }
              return Center(child: CircularProgressIndicator());
            }));
  }
}
```

Resultado:

![Galery](/monitorando-sua-aplicacao-flutter-em-producao/22.png)

## Vinculando usuário

Podemos vincular o usuário a um evento de erro usando o ```setUserIdentifier```.

Exemplo:

```
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_crashlytics/firebase_crashlytics.dart';
import 'package:flutter/material.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  final Future<FirebaseApp> _initialization = Firebase.initializeApp();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: FutureBuilder(
            future: _initialization,
            builder: (context, snapshot) {
              if (snapshot.hasError) return Center(child: Text('Error'));
              if (snapshot.connectionState == ConnectionState.done) {
                return Scaffold(
                    appBar: AppBar(),
                    body: Column(
                      children: [
                        ElevatedButton(
                          child: Text('CRASH'),
                          onPressed: () async {
                            try {
                              throw Exception('Teste');
                            } catch (error, stackTrace) {
                              await FirebaseCrashlytics.instance
                                  .setUserIdentifier('25');
                              await FirebaseCrashlytics.instance.recordError(
                                error,
                                stackTrace,
                              );
                            }
                          },
                        )
                      ],
                    ));
              }
              return Center(child: CircularProgressIndicator());
            }));
  }
}
```



