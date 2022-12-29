# Temas puntuales de la sección

## ¿Qué veremos en esta sección?

- Context
- Provider
- useContext
- React Router
- Links y NavLinks
- CreateContext
- SPA ( Single Page Application )

El objetivo de la sección es principalmente aprender sobre el Context, el Router es un valor agregado que explotaremos mucho más en próximas secciones, pero al usar un Router, podemos explicar claramente el problema y necesidad del context.

## ¿Qué es el Context?

- Context es una forma de pasar datos a través de la jerarquía de componentes sin tener que pasar props manualmente en cada nivel.
- El Context provee una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel.
- El Context es diseñado para compartir datos que pueden considerarse “globales” para un árbol de componentes, como el usuario autenticado, preferencias de tema o idioma.

## ¿Qué es un Provider?

- El Provider es un componente que se encarga de proveer los datos que queremos compartir a través de la jerarquía de componentes.

## ¿Qué es useContext?

- useContext es un hook que nos permite consumir el Context sin necesidad de usar un componente de clase.

## ¿Qué es React Router?

- React Router es una librería que nos permite manejar rutas en nuestra aplicación de React.

## ¿Qué es un Link?

- Link es un componente que nos permite navegar entre rutas de nuestra aplicación.

## ¿Qué es un NavLink?

- NavLink es un componente que nos permite navegar entre rutas de nuestra aplicación y además nos permite agregar estilos a la ruta activa.

## ¿Qué es una SPA?

- SPA es una aplicación que se ejecuta en un solo archivo HTML, CSS y JS.
- SPA es una aplicación que se ejecuta en un solo archivo HTML, CSS y JS. Esto quiere decir que no se recarga la página cuando navegamos entre rutas, sino que se actualiza el contenido de la página.

# Inicializacion

## Comando de instalacion de dependencias

`npm install react-router-dom`, tambien se puede agregar a ese comando `localforage match-sorter sort-by`

## react-router-dom

- React Router es una librería que nos permite manejar rutas en nuestra aplicación de React. Esta librería nos permite manejar rutas de dos formas, con componentes y con hooks.

## localforage

- `localForage` es una biblioteca de JavaScript que mejora la experiencia sin conexión de la aplicación web mediante un almacén de datos asincrónico con una API sencilla. Permite a los desarrolladores almacenar muchos tipos de datos en lugar de solo cadenas. `localStorage` y `sessionStorage` solo pueden almacenar cadenas, pero `localForage` puede almacenar cadenas, matrizes, objetos, binarios y mucho más. `localForage` también admite el almacenamiento de datos en el almacenamiento de caché del navegador, lo que permite que los datos se almacenen incluso cuando el navegador se cierra.

## match-sorter

- `match-sorter` es una biblioteca de JavaScript que le permite ordenar los elementos de una matriz de acuerdo con la coincidencia de una cadena de búsqueda. Esto es útil para la búsqueda de elementos en una matriz de datos.
- Por ejemplo, si tiene una matriz de nombres de personas y desea encontrar a todas las personas cuyos nombres comiencen con la letra "A", puede usar `match-sorter` para ordenar la matriz de acuerdo con la coincidencia de la letra "A".
- `match-sorter` es útil para la búsqueda de elementos en una matriz de datos. Por ejemplo, si tiene una matriz de nombres de personas y desea encontrar a todas las personas cuyos nombres comiencen con la letra "A", puede usar `match-sorter` para ordenar la matriz de acuerdo con la coincidencia de la letra "A".
- `match-sorter` también puede ordenar los elementos de acuerdo con la coincidencia de una cadena de búsqueda completa.
- clasificador de coincidencias: Clasificación simple, esperada y determinista de una matriz en JavaScript

## sort-by

- Una utilidad para crear funciones de comparación para el nativo tanto en el nodo como en el navegador. Permite ordenar por múltiples propiedades. `Array.sort()`
-
