# Temas Puntuales de la sección

## ¿Qué veremos en esta sección?

-useReducer
-Reducers
-Teoría de un reducer
-Aplicación de TODOs
-CRUD local
Esta es una sección dedicada a comprender el concepto de un Reducer, el cual es sumamente importante para poder entrar a Redux o bien usar el contextAPI fácilmente.

# Intorduccion al concepto de un Reducer

## ¿Que es un Reducer?

-Es una funcion comun y corriente
-Debe de ser un funcion pura
-Debe de retornar un estado
-Usualmente solo recibe 2 argumentos, el estado inicial y la accion

## ¿Que es una funcion pura?

-No debe de tener efectos secundarios
-No debe de realizar tareas asincronas
-Debe de retornar siempre el mismo resultado si recibe los mismos argumentos
-No debe de llamar localStorage, sessionstorage, etc
-Para modificar el estado, no debe de modificar el estado directamente, debe de retornar un nuevo estado

## Ciclo de vida de un reducer

-El reducer se ejecuta cuando se dispara una accion
-El reducer recibe el estado actual y la accion
-El reducer debe de retornar un nuevo estado
-El nuevo estado reemplaza al estado anterior

## ¿Que es una accion?

-Una accion es un objeto plano
-Debe de tener un type
-El type es un string que indica que tipo de accion se esta ejecutando
-El type debe de ser unico
-El type debe de ser descriptivo
-El type debe de estar escrito en mayusculas y separado por guiones bajos
-El type debe de estar definido en una constante
-El type debe de estar definido en un archivo separado
-El type debe de estar definido en un archivo separado

## ¿Que es un type?

-El type es un string que indica que tipo de accion se esta ejecutando
-El type debe de ser unico
-El type debe de ser descriptivo
-El type debe de estar escrito en mayusculas y separado por guiones bajos
-El type debe de estar definido en una constante
-El type debe de estar definido en un archivo separado
-El type debe de estar definido en un archivo separado

## ¿Que es una dispatch?

-Una dispatch es una funcion que recibe una accion

## ¿Que es un store?

-El store es el estado global de la aplicacion
-El store es un objeto
-El store es inmutable
-El store es inmutable
-El store es inmutable
