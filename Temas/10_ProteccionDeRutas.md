# Proteccion de Rutas

## Temas Puntales

- [ ] 10.1. [Introduccion](#101-introduccion)
- [ ] 10.2. [Rutas Publicas](#101-rutas-publicas)
- [ ] 10.3. [Rutas Privadas](#102-rutas-privadas)
- [ ] 10.4. [Login y Loguot - Sin Backend aun](#103-login-y-loguot---sin-backend-aun)
- [ ] 10.5. [Recordar cuál fue la última ruta visitada para mejorar la experiencia de usuario](#104-recordar-cuál-fue-la-última-ruta-visitada-para-mejorar-la-experiencia-de-usuario)
- [ ] 10.6. [Contexto](#105-contexto)
- [ ] 10.7. [Reducer](#105-reducer)

      Esta es una sección pequeña pero importante para trabajar las bases de la autenticación y protección de nuestra aplicación.

## 10.1. Introduccion

En el archivo `App.js` vamos a crear una función que nos permita saber si una ruta es pública o privada.

```js
// App.js
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route path="/" component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  );
};
```

## 10.2. Rutas Publicas

Las Rutas Publicas son aquellas que no necesitan de una autenticación para poder ser accedidas. En nuestro caso, la ruta `/login` es una ruta pública.

## 10.3. Rutas Privadas

Las Rutas Privadas son aquellas que necesitan de una autenticación para poder ser accedidas. En nuestro caso, la ruta `/` es una ruta privada.

## 10.4. Login y Loguot - Sin Backend aun

Se refiere a la autenticación de un usuario. En nuestro caso, vamos a simular que el usuario se autentica con el usuario `Fernando` y la contraseña `123456` y que el usuario se desautentica al hacer click en el botón `Logout`.
De esta manera, vamos a crear un `context` para manejar el estado de la autenticación del usuario.

```js
// AuthContext.js
import { createContext } from "react";

export const AuthContext = createContext();
```

Ahora, vamos a crear un `reducer` para manejar el estado de la autenticación del usuario.

```js
// authReducer.js
export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "login":
      return {
        ...action.payload,
        logged: true,
      };
    case "logout":
      return {
        logged: false,
      };
    default:
      return state;
  }
};
```

## 10.5. Recordar cuál fue la última ruta visitada para mejorar la experiencia de usuario

Nos referimos a que cuando el usuario se autentica, se redirija a la última ruta visitada. Para esto, vamos a crear un `context` para manejar el estado de la última ruta visitada.

```js
// LastPathContext.js
import { createContext } from "react";

export const LastPathContext = createContext();
```

Ahora, vamos a crear un `reducer` para manejar el estado de la última ruta visitada.

```js
// lastPathReducer.js
export const lastPathReducer = (state = {}, action) => {
  switch (action.type) {
    case "lastPath":
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
```

## 10.6. Contexto

El contexto es un objeto que se puede utilizar para pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel.

## 10.7. Reducer

Un reducer es una función que determina cambios en un estado de aplicación en respuesta a una acción enviada al store. Recibe el estado actual junto con la acción, y devuelve un nuevo estado.
