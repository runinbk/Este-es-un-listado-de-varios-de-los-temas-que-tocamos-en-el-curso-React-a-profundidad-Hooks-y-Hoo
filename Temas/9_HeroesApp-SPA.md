# HeroesApp - Single Page Application (SPA)

## 1. Introducción

En esta sección vamos a crear una aplicación SPA (Single Page Application). Esta aplicación va a ser una aplicación de gestión de héroes, donde vamos a poder ver los héroes, añadir nuevos héroes, editarlos y borrarlos.

## 2. Temas Puntales

### ¿Qué veremos en esta sección?

- SPA ( Single Page Application ) a profundidad
- Diferentes temas en la misma aplicación aplicados a diferentes rutas
- Multiples Routers
- Push y Replace en el History
- Leer argumentos por URL
  \*QueryParams
- Aplicar filtros utilizando QueryStrings

En esta sección aún no haremos protección de rutas, pero dejaremos el estilo de esos componentes listos para la siguiente sección.

Aquí quiero enfocarme en la funcionalidad de la aplicación suponiendo que estamos autenticados.

## 3. Single Page Application (SPA)

### 3.1. ¿Qué es una SPA?

Una SPA (Single Page Application) es una aplicación web que se ejecuta en un solo archivo HTML. Esta aplicación se carga una sola vez y se actualiza dinámicamente a medida que el usuario interactúa con ella.

### 3.2. ¿Por qué usar una SPA?

- Mejor experiencia de usuario
- Mejor SEO
- Menos consumo de recursos
- Menos tiempo de carga

### 3.3. ¿Cómo funciona una SPA?

Una SPA funciona de la siguiente manera:

- Cuando el usuario ingresa a la aplicación, se carga el archivo HTML principal.
- El archivo HTML principal carga el archivo JavaScript principal.
- El archivo JavaScript principal carga el resto de archivos JavaScript y CSS necesarios.

### 3.4. ¿Cómo se actualiza una SPA?

Una SPA se actualiza dinámicamente a medida que el usuario interactúa con ella. Esto se logra mediante la manipulación del DOM (Document Object Model) y la actualización de la URL.

### 3.5. ¿Cómo se actualiza la URL?

La URL se actualiza mediante el objeto History. Este objeto nos permite navegar entre páginas sin recargar la aplicación. El objeto History tiene dos métodos principales:

- pushState(): Este método agrega una nueva entrada al historial de navegación.
- replaceState(): Este método reemplaza la entrada actual del historial de navegación.

### 3.6. ¿Cómo se manipula el DOM?

La manipulación del DOM se realiza mediante el objeto Document. Este objeto nos permite manipular el HTML de la página. El objeto Document tiene varios métodos principales:

- getElementById(): Este método nos permite obtener un elemento del DOM por su ID.
- getElementsByClassName(): Este método nos permite obtener un elemento del DOM por su clase.
- querySelector(): Este método nos permite obtener un elemento del DOM por su selector CSS.
- querySelectorAll(): Este método nos permite obtener varios elementos del DOM por su selector CSS.

## 4. Multiples Routers

### 4.1. Multiples Routers

En esta sección vamos a crear una aplicación con múltiples routers. Esto nos va a permitir tener diferentes temas en la misma aplicación.

# Nota de Actualización - React Router Docs

# Nota de Actualización - React Router Docs

Antes de iniciar con el siguiente video, la documentación que se presenta en React router docs ha sido actualizada(6.X.X) y ya no se ofrece el mismo quick start.

Para efectos del curso, te recomendamos seguir con la configuración que se presenta en el video de la siguiente lección.
