# 📚 SISTEMA DE GESTIÓN DE BIBLIOTECA PÚBLICA

### Proyecto de Base de Datos 2 - Node.js + MongoDB

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-brightgreen)
![Express](https://img.shields.io/badge/Express-4.18-blue)

## 📋 DESCRIPCIÓN DEL PROYECTO

Sistema de gestión para biblioteca pública que implementa **5 colecciones** en MongoDB con operaciones **CRUD completas**. Desarrollado como parte de la evaluación de Base de Datos 2.

### 🗄️ COLECCIONES IMPLEMENTADAS

| #   | Colección          | Campos                                                                  | Descripción               |
| --- | ------------------ | ----------------------------------------------------------------------- | ------------------------- |
| 1   | **Libros**         | título, autor, isbn, añoPublicación, género, ejemplares                 | Información bibliográfica |
| 2   | **Usuarios**       | nombre, email, teléfono, dirección, fechaRegistro                       | Datos de los socios       |
| 3   | **Préstamos**      | libroId, usuarioId, fechaPréstamo, fechaDevolución, fechaLímite, estado | Control de préstamos      |
| 4   | **Categorías**     | nombre, descripción, sección, estante                                   | Clasificación de libros   |
| 5   | **Bibliotecarios** | nombre, email, teléfono, turno, fechaContratación                       | Personal de la biblioteca |

## ⚙️ REQUISITOS PREVIOS

- **Node.js** (v14 o superior) - [Descargar](https://nodejs.org)
- **MongoDB Compass** - [Descargar](https://www.mongodb.com/products/compass)
- **Git** (opcional) - [Descargar](https://git-scm.com)
- **Navegador web** (Chrome, Firefox, Edge)
- **Postman** o **Thunder Client** (opcional, para probar API)

## 🚀 GUÍA RÁPIDA DE INSTALACIÓN (5 minutos)

### PASO 1: Descargar el proyecto

**Opción A - Con Git:**

```
git clone https://github.com/TU-USUARIO/biblioteca-proyecto
cd biblioteca-proyecto
Opción B - Sin Git:

Descargar el ZIP desde GitHub

Extraer en una carpeta

Abrir terminal en esa carpeta

PASO 2: Instalar dependencias

npm install
PASO 3: Configurar variables de entorno
Crear archivo .env en la raíz del proyecto con:

env
MONGODB_URI=mongodb+srv://inventario:inventario123@inventario.rffvlws.mongodb.net/biblioteca
PORT=3000
PASO 4: Poblar la base de datos

node seed.js
Este comando inserta 4 libros, 3 usuarios y datos de ejemplo automáticamente

PASO 5: Iniciar el servidor

npm start
El servidor correrá en: http://localhost:3000

📌 VERIFICAR QUE TODO FUNCIONA
1. Abrir el navegador en:

http://localhost:3000
Deberías ver un JSON con la información de la API.

2. Probar los endpoints (en otra terminal):
Obtener todos los libros:


curl http://localhost:3000/api/libros
Libros por género (Ciencia):


curl http://localhost:3000/api/libros/genero/Ciencia
Crear un libro nuevo:


curl -X POST http://localhost:3000/api/libros -H "Content-Type: application/json" -d "{\"titulo\":\"El Principito\",\"autor\":\"Antoine Saint-Exupéry\",\"isbn\":\"978-84-9759-999-5\",\"anioPublicacion\":1943,\"genero\":\"Infantil\",\"ejemplaresDisponibles\":10}"
Ver usuarios:


curl http://localhost:3000/api/usuarios

📡 ENDPOINTS DE LA API
LIBROS
MétodoEndpoint	Descripción
GET	     /api/libros Obtener todos los libros
GET	/api/libros/:id	Obtener libro por ID
GET	/api/libros/genero/:genero	Buscar por género
POST	/api/libros	Crear nuevo libro
PUT	/api/libros/:id	Actualizar libro
DELETE	/api/libros/:id	Eliminar libro
USUARIOS
Método	Endpoint	Descripción
GET	/api/usuarios	Obtener todos los usuarios
GET	/api/usuarios/:id	Obtener usuario por ID
POST	/api/usuarios	Crear nuevo usuario
PUT	/api/usuarios/:id	Actualizar usuario
DELETE	/api/usuarios/:id	Eliminar usuario

🗄️ VERIFICACIÓN EN MONGODB COMPASS
Conectar a la base de datos:
text
mongodb+srv://inventario:inventario123@inventario.rffvlws.mongodb.net/
Verificar las colecciones:
Abrir MongoDB Compass

Conectar con la URI anterior

Seleccionar base de datos biblioteca

Verificar que existen las 5 colecciones:

✅ libros

✅ usuarios

✅ prestamos

✅ categorias

✅ bibliotecarios

Datos de ejemplo insertados:
Libros: "Cien años de soledad", "El origen de las especies", etc.

Usuarios: Juan Pérez, María García, Carlos López

Categorías: Ficción, Ciencia, Historia, Infantil

🛠️ SOLUCIÓN DE PROBLEMAS COMUNES
Error: "Cannot find module 'mongoose'"
bash
npm install
Error: Puerto 3000 en uso
Cambiar el puerto en .env:

env
PORT=3001
Error de conexión a MongoDB
Verificar que la URI en .env sea correcta:


MONGODB_URI=mongodb+srv://inventario:inventario123@inventario.rffvlws.mongodb.net/biblioteca
Error en Windows PowerShell al usar curl
Usar curl.exe en lugar de curl:


curl.exe http://localhost:3000/api/libros

📁 ESTRUCTURA DEL PROYECTO

biblioteca-proyecto/
├── 📂 config/
│   └── database.js           # Configuración MongoDB
├── 📂 controllers/
│   ├── libroController.js    # CRUD de libros
│   └── usuarioController.js  # CRUD de usuarios
├── 📂 models/
│   ├── Libro.js              # Modelo de libros
│   ├── Usuario.js            # Modelo de usuarios
│   ├── Prestamo.js           # Modelo de préstamos
│   ├── Categoria.js          # Modelo de categorías
│   └── Bibliotecario.js      # Modelo de bibliotecarios
├── 📂 routes/
│   ├── libroRoutes.js        # Rutas de libros
│   └── usuarioRoutes.js      # Rutas de usuarios
├── 📂 screenshots/           # Capturas de pantalla
├── 📄 .env                    # Variables de entorno
├── 📄 .gitignore              # Archivos ignorados
├── 📄 package.json            # Dependencias
├── 📄 README.md               # Este archivo
├── 📄 seed.js                  # Datos de ejemplo
└── 📄 server.js                # Punto de entrada

✅ CRITERIOS DE EVALUACIÓN CUMPLIDOS
5 colecciones en MongoDB

4+ campos por colección

CRUD completo (Create, Read, Update, Delete)

Consulta sencilla (libros por género)

Capturas de pantalla en MongoDB Compass/Atlas

README.md con instrucciones claras

Código fuente en GitHub

npm install y npm start funcionando

👥 INTEGRANTES DEL GRUPO

[Yolimar Ramos C.I: 12.400.107]

[Luis Villarroel C.I: 16.313.858]


📝 NOTAS PARA LA PROFESORA
Usuario MongoDB: inventario

Contraseña: inventario123

Base de datos: biblioteca

Puerto: 3000 (configurable en .env)

Datos de ejemplo: Se insertan automáticamente con node seed.js
```

PASOS PARA ARRANCAR EL BACKEND (GUÍA RÁPIDA)

Sigue estos pasos en orden:

PASO 1: Abrir PowerShell como administrador
Haz clic derecho en el menú Inicio

Selecciona "Windows PowerShell (Administrador)" o "Terminal (Administrador)"

PASO 2: Navegar a la carpeta del proyecto
powershell
cd C:\biblioteca-proyecto
PASO 3: Verificar que existe el archivo .env
powershell

# Verificar que el archivo .env existe

Get-Content .env
Deberías ver:

text
MONGODB_URI=mongodb+srv://inventario:inventario123@inventario.rffvlws.mongodb.net/biblioteca
PORT=3000
PASO 4: Instalar dependencias (solo la primera vez)
powershell
npm install
PASO 5: Poblar la base de datos (solo la primera vez)
powershell
node seed.js
PASO 6: ARRANCAR EL BACKEND
powershell
npm start
PASO 7: Verificar que el backend está corriendo
Deberías ver en la terminal:

text
🚀 Servidor corriendo en http://localhost:3000
✅ Conexión exitosa a MongoDB
📁 Base de datos: biblioteca
📚 Colecciones disponibles: Libros, Usuarios, Prestamos, Categorias, Bibliotecarios
🎯 COMANDOS ÚTILES (mantén esta terminal abierta)
Para probar que todo funciona:
Abre OTRA terminal de PowerShell (sin cerrar la que tiene el backend corriendo) y ejecuta:

powershell

# 1. Probar que el servidor responde

curl.exe http://localhost:3000

# 2. Ver todos los libros

curl.exe http://localhost:3000/api/libros

# 3. Ver libros de ciencia

curl.exe http://localhost:3000/api/libros/genero/Ciencia

# 4. Ver usuarios

curl.exe http://localhost:3000/api/usuarios

🔄 SI NECESITAS REINICIAR EL BACKEND
Detener el backend actual:

Presiona Ctrl + C en la terminal donde está corriendo

Confirma con S (Sí)

Volver a arrancar:

powershell
npm start

🐛 SOLUCIÓN DE PROBLEMAS COMUNES
Error: "Port 3000 is already in use"

powershell

# Cambiar el puerto en el archivo .env

notepad .env
Cambia a:

text
PORT=3001
Luego:

powershell
npm start
Error: "Cannot find module"
powershell

# Reinstalar dependencias

npm install
Error de conexión a MongoDB
powershell

# Verificar que el .env tiene la URI correcta

Get-Content .env
La terminal se queda "colgada"
powershell

# Forzar detener

Ctrl + C
Ctrl + C (dos veces)

📋 VERIFICACIÓN RÁPIDA (todo en uno)
Copia y pega todo esto en una nueva terminal:

powershell
Write-Host "=== VERIFICANDO BACKEND ===" -ForegroundColor Cyan
Write-Host "1. Probar servidor:" -ForegroundColor Yellow
curl.exe -s http://localhost:3000 | findstr /C:"mensaje"

Write-Host "`n2. Contar libros:" -ForegroundColor Yellow
curl.exe -s http://localhost:3000/api/libros | findstr /C:"titulo" | measure | % { $\_.Count }

Write-Host "`n3. Libros de Ciencia:" -ForegroundColor Yellow
curl.exe -s http://localhost:3000/api/libros/genero/Ciencia | findstr /C:"titulo"

Write-Host "`n✅ Backend funcionando correctamente!" -ForegroundColor Green
🎮 MODO DESARROLLO (con auto-reinicio)
Si vas a estar haciendo cambios, usa:

powershell
npm run dev
Esto reinicia automáticamente el servidor cuando guardas cambios.

📌 RESUMEN: Lo mínimo que necesitas
Solo 3 comandos y ya está corriendo:

powershell
cd C:\biblioteca-proyecto
npm install
npm start
