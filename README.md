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
* [Modelo de dominio](https://gitlab.inf.utfsm.cl/tabata.ahumada/inf236-2023-1-par201-grupo-04/-/wikis/Modelo-de-dominio)
* [Diagrama de secuencia](https://gitlab.inf.utfsm.cl/tabata.ahumada/inf236-2023-1-par201-grupo-04/-/wikis/Diagramas-de-secuencia)
* [Evidencia](https://gitlab.inf.utfsm.cl/tabata.ahumada/inf236-2023-1-par201-grupo-04/-/wikis/Evidencia-de-levantamiento)
* [Pruebas de Pantalla](https://gitlab.inf.utfsm.cl/tabata.ahumada/inf236-2023-1-par201-grupo-04/-/wikis/Prueba-de-Pantallas)
## Videos

* [Video presentación avance 1](https://youtu.be/v2L-krch6zk)
* ...

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

