## 🟢 Etapa 1: Base de Nest y Controllers ✅

1. Hola Mundo con módulos y controllers

- Crear un proyecto Nest (nest new).
- Armar un AppController con rutas:
  - GET /hello → devuelve "Hola Nest".
  - GET /ping → devuelve { msg: "pong" }.

2. Routing con parámetros

- GET /users/:id → devuelve "User con id: X".
- GET /search?term=abc → devuelve "Buscando: abc".

👉 Objetivo: entender controllers, routes, params y query params.

## 🟡 Etapa 2: Providers y Services ✅

3. Service básico

- Crear un UsersService que tenga un array local [{ id: 1, name: 'Juan' }].
- GET /users → devuelve todos.
- GET /users/:id → busca uno.

👉 Objetivo: separar lógica de datos en servicios.

4. POST con DTO

- POST /users con body { name: "Ana" } → agrega al array.
- Usar un DTO y un Pipe de validación (class-validator).

👉 Objetivo: practicar DTOs + Pipes.

## 🟠 Etapa 3: Middleware, Guards, Interceptors

5. Middleware

- Middleware que loguee cada request con método y URL.

6. Guard básico

- Guard que solo deja pasar si el header x-auth existe.
- Si no existe → 403.

7. Interceptor

- Interceptor que mida cuánto tarda cada request y lo muestre por consola.

👉 Objetivo: practicar el ciclo de ejecución (middleware → guard → interceptor → controller).

## 🔵 Etapa 4: Decoradores + Reflector

8. Roles

- Crear decorador @Roles('admin').
- Crear RolesGuard con Reflector que lea la metadata.
- Aplicarlo a un endpoint de UsersController.

👉 Objetivo: entender bien decoradores + reflector.

## 🟣 Etapa 5: Excepciones y Filters

9. Filter de Excepciones

- Crear un filter que atrape errores y siempre devuelva JSON con { error: mensaje }.
- Forzar un error en algún endpoint para probar.

## 🔴 Etapa 6: Mini Proyecto Integrado

10. API de Tareas (Todo App)

- CRUD de tareas (id, title, done).
- Validar inputs con DTOs.
- Guard simple para “loguear” con header x-auth.
- Roles: solo admin puede borrar tareas.
- Interceptor que loguee tiempo de cada request.
- Exception filter custom.

👉 Con este cierras un mini proyecto completo que toca todas las capas importantes de Nest.

### 🧑‍💻 Organización en tu Git

- Carpeta 01-controllers-basic/
- Carpeta 02-services-dtos/
- Carpeta 03-guards-interceptors/
- Carpeta 04-decorators-reflector/
- Carpeta 05-filters/
- Carpeta 06-mini-todo/

