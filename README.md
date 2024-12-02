# 📱 Lemon Cell - Administrador de Smartphones con API

 Lemon Cell es una aplicación web que permite gestionar smartphones de manera eficiente. Ofrece una simulación completa de funciones como listar, buscar, agregar, modificar y eliminar dispositivos. Sin embargo, ya que utiliza una API simulada proporcionada por My JSON Server, los datos no se modificarán realmente, lo que la hace ideal para demostraciones y aprendizaje.

## 🌐 **URL del Sitio**
¡Prueba la aplicación en vivo aquí!
👉 [https://adivinumator-juego.netlify.app/]

## 🚀 Características

- 📋 Mostrar todos los registros: Obtén una tabla con todos los dispositivos disponibles.
- 🔍 Consulta individual: Busca un dispositivo específico por su ID.
- ➕ Agregar dispositivos: Añade nuevos smartphones proporcionando detalles como marca, modelo y especificaciones (simulado).
- ✏️ Modificar dispositivos: Edita la información de un dispositivo existente (simulado).
- 🗑️ Eliminar dispositivos: Borra un dispositivo por su ID (simulado).

Nota: Las operaciones de agregar, modificar y eliminar no afectan los datos reales de la API debido a su naturaleza simulada.

## 🛠️ Tecnologías utilizadas

- HTML5: Proporciona la estructura de la aplicación.
- CSS3: Diseños y estilos personalizados.
- JavaScript (ES6): Gestiona la lógica de la aplicación.
- Axios: Realiza solicitudes HTTP a la API.

## 🧩 Estructura del proyecto

├── telefonos.html       # Página principal de la aplicación
├── estilos.css          # Estilos personalizados para la interfaz
├── script.js            # Lógica principal (funciones GET, POST, PUT, DELETE)
└── README.md            # Documentación del proyecto

## ⚙️ Cómo funciona

1️⃣ Mostrar todos los registros (GET)
Cargará todos los dispositivos en una tabla interactiva. La función obtenerTodos() realiza una solicitud GET a la API y genera dinámicamente el contenido en una tabla HTML.

2️⃣ Buscar dispositivo por ID (GET)
Introduce un ID en el cuadro de texto y presiona el botón Buscar. Esto llamará a la función consultarUno(id), que busca el dispositivo correspondiente y llena los campos del formulario con los detalles.

3️⃣ Agregar un nuevo dispositivo (POST)
Rellena los campos del formulario de creación y presiona el botón Agregar. Aunque la operación se simula exitosamente, no se realiza ningún cambio en los datos reales.

4️⃣ Modificar un dispositivo (PUT)
Tras buscar un dispositivo por ID, edita sus detalles en el formulario y presiona el botón Modificar. Similar al caso anterior, esta operación solo simula la actualización.

5️⃣ Eliminar un dispositivo (DELETE)
Introduce el ID del dispositivo a eliminar y presiona el botón Eliminar. La función simula el borrado exitoso del dispositivo.

## 🐛 Contribuir

- Si encuentras un error o tienes ideas para mejorar este proyecto:
- Abre un issue.
- Envía un pull request con tus cambios.

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Siéntete libre de usarlo, modificarlo y distribuirlo.

## 🙌 Autor

Desarrollado con ❤ por **Laura Castaño** *(laucdevs)*
