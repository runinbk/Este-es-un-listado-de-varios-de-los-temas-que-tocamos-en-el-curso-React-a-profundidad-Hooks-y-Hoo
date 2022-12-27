## ¿Que es React?

1. Es una libreria
2. Es Declarativa -> hace facil seguir patrones de diseño
3. Es muy efisiente
4. Es Predecible ->
5. Es basado a Componentes
6. Server-Side con node

   jsx === js + xml

## Primeros pasos en React

Dirigirse a 01-intro-react...

url referencia para importar react:
https://gist.github.com/Klerith/b0111f52ba16451d095f38d4c995605b

## Introduccion a Babbel

babel es algo que funciona en el backgrount cuando ejecutamos codigo js
sirve para ayudar en la compatibiliudad con los navegadores con respecto a las versiones
Ejemplo:

1-
const suma = `1 + 1 = ${ 1 + 1 }`; ===>>> const suma = "1 + 1 =" + (1 + 1)

2-
const restApi = {
/// personajes: ['Goku', 'Vegeta']
};
console.log( respApi.personajes?.length);

===>>> babel

var \_respApi$personajes;
const respApi = {
    /// personajes: ['Goku', 'Vegeta']
};
console.log((_respApi$personajes = respApi.personajes) == null ? void 0 : \_respApi$personajes);

--->>> React no depende de babel, puesto que con JSX cubre lo que hace babel, pero en temas de configuracion si lo usariamos
