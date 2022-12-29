# Repositorio de Custom Hooks

## Temas Punmtuales

###¿Qué veremos en esta sección?

- Subir código a nuestro repositorio
- Tener un listado de customHooks y código que podemos reutilizar
- Una idea para mantener tu repositorio ordenado con ejemplos

No es una sección obligatoria, pero puede ayudarles a tener su código ordenado y fácil de utilizar en proyectos futuros.

## PAra saber mas del tema...

- [ ] 1. [¿Qué son los Custom Hooks?](#1-qué-son-los-custom-hooks)
- [ ] 2. [¿Cómo crear un Custom Hook?](#2-cómo-crear-un-custom-hook)
- [ ] 3. [¿Cómo usar un Custom Hook?](#3-cómo-usar-un-custom-hook)
- [ ] 4. [¿Cómo compartir un Custom Hook?](#4-cómo-compartir-un-custom-hook)
- [ ] 5. [¿Cómo usar un Custom Hook de otra persona?](#5-cómo-usar-un-custom-hook-de-otra-persona)

## 1. ¿Qué son los Custom Hooks?

Los Custom Hooks son funciones que permiten reutilizar el estado lógico entre componentes. Esto nos permite separar la lógica de los componentes y reutilizarla en otros componentes.

## 2. ¿Cómo crear un Custom Hook?

Para crear un Custom Hook, debemos crear una función que comience con la palabra `use` y que contenga la lógica que queremos reutilizar. Por ejemplo, si queremos reutilizar la lógica de un contador, podemos crear un Custom Hook que se llame `useCounter`:

```js
function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
}
```

## 3. ¿Cómo usar un Custom Hook?

Para usar un Custom Hook, debemos importarlo en el componente donde queremos usarlo y luego invocarlo. Por ejemplo, si queremos usar el Custom Hook `useCounter` en un componente, podemos hacerlo de la siguiente manera:

```js
import useCounter from "./useCounter";

function Counter() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
```

## 4. ¿Cómo compartir un Custom Hook?

Para compartir un Custom Hook, debemos subirlo a un repositorio de GitHub y luego importarlo en el proyecto donde queremos usarlo. Por ejemplo, si queremos compartir el Custom Hook `useCounter`, podemos subirlo a un repositorio de GitHub y luego importarlo en el proyecto donde queremos usarlo:

```js
import useCounter from "  ";

function Counter() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
```

## 5. ¿Cómo usar un Custom Hook de otra persona?

Para usar un Custom Hook de otra persona, debemos importarlo en el componente donde queremos usarlo y luego invocarlo. Por ejemplo, si queremos usar el Custom Hook `useCounter` de otra persona en un componente, podemos hacerlo de la siguiente manera:

```js
import useCounter from "  ";
```
