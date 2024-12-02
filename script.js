//API -> https://my-json-server.typicode.com/fedegaray/telefonos/db

// registro individual -> https://my-json-server.typicode.com/fedegaray/telefonos/db/[id]

//La API que estás usando es solo para pruebas y no realizará cambios persistentes. Aunque el PUT funcionará, no verás reflejados los cambios en la base de datos.

//MOSTRAR TODOS LOS REGISTROS - GET
function obtenerTodos() {
  axios
    .get("https://my-json-server.typicode.com/fedegaray/telefonos/db")
    .then((respuesta) => {
      let cuerpoTabla = document.getElementById("tblContenido");
      let salida = "";
      for (let elemento of respuesta.data.dispositivos) {
        salida += `
            <tr>
                <td>${elemento.id}</td>
                <td>${elemento.marca}</td>
                <td>${elemento.modelo}</td>
                <td>${elemento.color}</td>
                <td>${elemento.almacenamiento}</td>
                <td>${elemento.procesador}</td>
            </tr>
            `;
        cuerpoTabla.innerHTML = salida;
      }
      console.log(respuesta.data.dispositivos);
    })
    .catch((error) => console.error("Error en la solicitud ", error));
}

//CONSULTA INDIVIDUAL - GET

function consultarUno(id) {
  try {
    id = document.getElementById("txtConsulta").value;

    axios.get(
        "https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/" +
          id
      )
      .then((respuesta) => {
        let dispositivo = respuesta.data;
        document.getElementById("consultaNombre").value = dispositivo.marca;
        document.getElementById("consultaModelo").value = dispositivo.modelo;
        document.getElementById("consultaColor").value = dispositivo.color;
        document.getElementById("consultaProcesador").value =
          dispositivo.almacenamiento + "GB";
        document.getElementById("consultaAlmacenamiento").value =
          dispositivo.procesador;
      })
      .catch((error) => {
        throw new Error("Error en la solicitud", error);
      });
  } catch (error) {
    console.error(error);
  }
}

//AGREGAR UNO - POST
function agregarUno() {
  try {
    //Obtener los valores de los inputs del formulario
    let marca = document.getElementById("inputMarca").value;
    let modelo = document.getElementById("inputModelo").value;
    let color = document.getElementById("inputColor").value;
    let almacenamiento = document.getElementById("inputAlmacenamiento").value;
    let procesador = document.getElementById("inputProcesador").value;

    let nuevoDispositivo = {
      marca: marca,
      modelo: modelo,
      color: color,
      almacenamiento: almacenamiento,
      procesador: procesador,
    };

    axios.post(
        "https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/",
        nuevoDispositivo
      )
      .then((respuesta) => {
        let dispositivoAgregado = respuesta.data;

        console.log("Dispositivo agregado:", dispositivoAgregado);

        //Llama a la función obtenerTodos() para actualizar la lista de dispositivos
        //No veremos esa actualización porque la API real no se modificará
        obtenerTodos();
        alert(`Se ha agregado un nuevo dispositivo:
                Marca: ${dispositivoAgregado.marca}
                Modelo: ${dispositivoAgregado.modelo}
                Color: ${dispositivoAgregado.color}
                Almacenamiento: ${dispositivoAgregado.almacenamiento}
                Procesador: ${dispositivoAgregado.procesador}`);
      })

      .catch((error) => {
        console.log(error);
        alert("Error al agregar el dispositivo. Inténtalo de nuevo.");
      });
  } catch (error) {
    console.error("Error en la función agregarUno:", error);
  }
}

//BORRAR UNO - DELETE

function eliminarUno() {
  try {
   let id = document.getElementById("txtConsulta").value;

    axios.delete(
        "https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/" +
          id
      )

      .then((respuesta) => {
        alert(`Se ha eliminado el dispositivo ${id}.`);
        document.getElementById("consultaNombre").value = '';
        document.getElementById('consultaModelo').value = "";
        document.getElementById("consultaColor").value = '';
        document.getElementById("consultaProcesador").value ='';
        document.getElementById("consultaAlmacenamiento").value ='';
        //Llama a la función obtenerTodos() para actualizar la lista de dispositivos
            //No veremos esa actualización porque la API real no se modificará
            obtenerTodos(); 
      })
      .catch(error => { throw new Error("Error en la solicitud: " + error) })
  } catch(error) {
    console.error("Error en la función eliminarUno:", error);
  }
}

//MODIFICAR UNO - PUT
function modificarUno() {
  try {
    // Obtener valores de los inputs del formulario
    let id = document.getElementById("txtConsulta").value;
    let marca = document.getElementById("consultaNombre").value;
    let modelo = document.getElementById("consultaModelo").value;
    let color = document.getElementById("consultaColor").value;
    let almacenamiento = document.getElementById(
      "consultaAlmacenamiento"
    ).value;
    let procesador = document.getElementById("consultaProcesador").value;

    // Crear objeto con los datos del dispositivo editado (sin incluir id)
    let dispositivoEditado = {
      marca: marca,
      modelo: modelo,
      color: color,
      almacenamiento: almacenamiento,
      procesador: procesador,
    };

    // Hacer la solicitud PUT usando el ID en la URL
    axios
      .put(
        "https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/" +
          id,
        dispositivoEditado
      )
      .then((respuesta) => {
        let dispositivo = respuesta.data;
        console.log("Dispositivo modificado:", dispositivo);

        // Mostrar los datos del dispositivo modificado
        alert(`Se ha modificado el dispositivo ${id} :
                Marca: ${dispositivo.marca}
                Modelo: ${dispositivo.modelo}
                Color: ${dispositivo.color}
                Almacenamiento: ${dispositivo.almacenamiento}
                Procesador: ${dispositivo.procesador}`);

        // Llamar a obtenerTodos() para refrescar la lista de dispositivos, aunque en este caso no la cambia porque esta api no es mia
        obtenerTodos();
      })

      .catch((error) => {
        console.log(error);
        alert("Error al editar el dispositivo. Inténtalo de nuevo.");
      });
  } catch (error) {
    console.error("Error en la función modificarUno:", error);
  }
}
