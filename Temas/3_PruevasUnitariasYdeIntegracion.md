# Pruevas unitarias y de integracion

Las pruevas son igual o mas demorosas que crear la misma aplicacion
El mejor consejo es provar la ""ruta critica de la aplicacion""

El objetivo de las pruevas es pasar el codigo lo mas limpio posible antes depasar a produccion

## Temas Puntuales

### ¿Qué veremos en esta sección?

-Introducción a las pruebas
-AAA
--Arrange - Arreglar
--Act - Actuar
--Assert - Afirmar
-Primeras pruebas
-Jest
-Expect
-toBe
-Enzyme
-Comandos útiles en la terminal para pruebas
-Revisar elementos renderizados en el componente
-Simular eventos

Esta sección de pruebas es sumamente importante porque nos dará la base de las pruebas que estaremos haciendo durante el curso, las pruebas irán creciendo en complejidad, por lo que les recomiendo que nos aseguremos de comprender bien todos estos conceptos para que nos sea más fácil las siguientes secciones de pruebas.

## Introduccion a las pruevas unitarias y de integracion

¿Que son las pruevas? -> "no son una perdida de tiempo"
ej: ustedes manejarian un auto que jamas ha sido probado por el fabricante

pruebas unitarias: enfocadas en pequeñas funcionalidades
pruebas de integracion: enfocadas en como reaccionan varias piezas en conjunto

ej: una llanta es una pieza sensilla, seria una prueva unitaria
las llantas en conjunto con la carroseria seria una forma de prueva de integracion

Caracteristicas en las pruebas:
-faciles de escribir
-faciles de leer
-confiables
-rapidas
-principalmente unitarias -> empezamos de pequeñas partes, al hacer una prueva de integracion solo probamos que estas piezas funcionen en conjunto, puesto que cada pequeña pieza fue provada independientemente

A -> Arrange (Arreglar)
A -> Act (Actuar)
A -> Assert (Afirmar)

Arrange -->> Paso donde establesemos el estado a probar
Act --->>>> donde aplicamos acciones o estimulos al sujeto de pruevas
Assert -->> Se resume a observar el comportamiento resultante

Existen ciertos mitos que rodean las pruevas :
-Hace que mi aplicacion no tenga errores -> No es cierto, puesto que los programadores son escritos por humanos y estamos propensos a errores
-Las pruevas no pueden fallar -> no es cierto, por que las pruevas pueden arrojar falsos positivos
-Hacen mas lenta mi aplicacion -> no es cierto, puesto que las pruevas se hace en el ambiente de desarrollo y no asi en produccion
-Es una perdida de tiempo -> a veces, si queremos probar algo que no compete, ej si queremos provar una libreria, es una perdida de timepo porque el creador de la libreria ya provo a misma
-Hay que probar todo -> no siempre, puesto que puede tomar mas tiempo que crear la misma aplicacion, la recomentadion es provar la ruta critica de la aplicacion

## Inicio de la seccion de pruevas... sobre lo aprendido anteriormente

## Mi primera prueva y configuraciones iniciales

En vite no tenemos ninguna configuracion de testing por lo tanto la haremos nosotros

1.  intalamos jest
    npm install --save-dev jest

2.  Configuramos el package.json

        {
            "scripts": {
                "test": "jest"
            }
        }

3.  Creamos nuestra primera prueva
    creamos la carpeta "test" sobre el archibo raiz y en ella creo mi primera prueva demo.test.js

4.  Ejecuar la libreria
    npm run test

5.  Instalamos las inteliccens
    npm install --save-dev @types/jest

### Nota de Actualización - Extensión de archivos

En la siguiente clase se hace la configuración para las pruebas de nuestros distintos archivos, en caso de ver el error "You appear to be using a native ECMAScript module configuration file, which is only supported when running Babel asynchronously."

Cambiar extensión de los archivos jest.config.js y babel.config.js a .cjs

Para ver mas detalles al respecto pueden ir a https://nodejs.org/docs/latest/api/modules.html#enabling.
