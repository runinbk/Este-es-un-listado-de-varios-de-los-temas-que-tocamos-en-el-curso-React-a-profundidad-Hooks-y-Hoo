## Temas Puntuales

### ¿Qué veremos en esta sección?

-Nuestra primera aplicación - Hola Mundo
-Exposiciones sobre los componentes
-Creación de componentes (Functional Components)
-Propiedades - Props
-Impresiones en el HTML
-PropTypes
-DefaultProps
-Introducción general a los Hooks
-useState

Es una sección importante, especialmente para todos los que están empezando de cero en React, ya que dará las bases de cómo segmentar la lógica de nuestra aplicación en pequeñas piezas más fáciles de mantener.

## ¿Que son los componentes?

Un componente es una pieza de codigo 'encapsulada re-utilizable' que puede tener estado o no.

ej: TwitterApp > Router > Screen/Page > Menu > MenuItem --->>> y asi se va creando el arbol de conponentes

cada componente tiene un estado, cuando es renderizado la primera vez tiene un estado incial...
cada vez que el estado toco una tecla eso cambia un estado

""El estado es como se encuentra la informacion de un componente en un punto determniado del timepo""

## Primera aplicacion de React

vite --->>> npm create vite

cra --->>> npx create-react-app 03-counter-app-cra

## Estructura de Directorios CRA

lo primero que podemos observar es que esta creado con npm

.gitignore -> listado de archivos o directorios de los que no seran subidos en el repo git
package.json -> tiene las dependencias de produccion, tiene los script basicos del proyecto, tiene las configuraciones nesesarias, dependencias de desarrollo, etc...
readme.md -> esta lo que tu queres ver cuando abres tu repositorio
node_modules --->>> son las librerias, depedendcias de desarrollo, etc...
public --->>>  
src --->>> archivos de desarrollo , no todos son indispensables
src -> App.jsx -> se encuentra la raiz de la apliccion
src -> App.test.js -> para el testing
src -> index.html -> archivo raiz en html del proyecto

## Estructura de Directorios - Vite

package.json -> la diferencia es que en CRA ya hay instalado muchas cosas default que en Vite lo tenes que instalar y configurar cuando lo uses, esto a su vez hace que en Vite los cambios en caliente al momento de desarrollar sean sumanmente rapidos..
Readme.md -> aqui no se crea por defecto este archivo
index.html -> esta sin configuracioines adicionales, no asi como con cra
vite.config.js -> nos va a servir si queremos hacer configuraciones propias de Vite
yarn.lock -> archivo de configuracion yarm --- estrictamente no usar yarm a la vez de npm , o uno o lo otro...

## Hola Mundo en React
