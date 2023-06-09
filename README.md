# Grupo 4

Este es el repositorio del *Grupo 4*, cuyos integrantes son:

* Erik Sepúlveda - 201873548-5
* Rodrigo Vera - 202073567-0
* Diego Villegas - 202073131-4
* **Tutor**: Tabata Ahumada

## Wiki

Puede acceder a la Wiki mediante el siguiente [enlace]
* [Objetivos](https://github.com/dvilleg/INF236-2023-1-PAR201-GRUPO-04/wiki/Objetivos)
* [Actores relevantes](https://github.com/dvilleg/INF236-2023-1-PAR201-GRUPO-04/wiki/Actores-relevantes)
* [Diagrama de contexto](https://github.com/dvilleg/INF236-2023-1-PAR201-GRUPO-04/wiki/Diagrama-de-Contexto)
* [Modelo de dominio](https://github.com/dvilleg/INF236-2023-1-PAR201-GRUPO-04/wiki/Modelo-de-dominio)
* [Diagrama de secuencia](https://github.com/dvilleg/INF236-2023-1-PAR201-GRUPO-04/wiki/Diagramas-de-secuencia)
* [Evidencia](https://github.com/dvilleg/INF236-2023-1-PAR201-GRUPO-04/wiki/Evidencia-de-levantamiento)
* [Pruebas de Pantalla](https://github.com/dvilleg/INF236-2023-1-PAR201-GRUPO-04/wiki/Prueba-de-Pantallas)
* [Seguimiento](https://github.com/dvilleg/INF236-2023-1-PAR201-GRUPO-04/wiki/Seguimiento)
* [Calificación proyecto](https://github.com/dvilleg/INF236-2023-1-PAR201-GRUPO-04/wiki/Calificaci%C3%B3n-proyecto)
## Videos

* [Video presentación avance 1](https://youtu.be/v2L-krch6zk)
* [Video Entrega H6-7](https://drive.google.com/drive/folders/16YigbdqF0a57aY1EgKqz6HLNJGKBzgHF?usp=sharing)

## Aspectos técnicos relevantes

# MERN-base-proyect
Mern Stack code for the [Mern Tutorial](https://www.mongodb.com/languages/mern-stack-tutorial)

## prerequisites
- Install node.js ([Node](https://nodejs.org/en/))
- Install Code editor ([VS code](https://code.visualstudio.com/))
- Create Atlas cluster ([Get started with Atlas](https://www.mongodb.com/docs/atlas/getting-started/?_ga=2.60427181.186721350.1682018286-1256642793.1682018286))

> Disclaimer: The React application works with Node.js 16 and below.
## How To Run
Create an Atlas URI connection parameter in `server/config.env` with your Atlas URI (get it from your own created cluster), should look like this:
```
ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
PORT=5000
```

Start server:
```
cd mern/server
npm install
npm start
```

Start Web server
```
cd mern/client
npm install
npm start
```

