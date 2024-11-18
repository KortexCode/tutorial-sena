// scripts.js

/*Ejemplo de Callbacks*/
document.getElementById("runCallbackExample").addEventListener("click", () => {
  // Función que simula una operación proceso donde se solicitan datos síncronos y asincronos
  const fetchData = (callback) => {
    const firtsProcess = () => {
      document.getElementById("callbackOutput1").textContent =
        "datos del hilo principal, síncrono";
    };

    setTimeout(() => {
      const data = "Datos del hilo paralelo después de 2 segundos, asíncrono.";
      callback(data);
    }, 2000);

    firtsProcess(); //Los resultados de esta función se obtendrán primero que el setTimeout
  };

  // Callback que procesa los datos
  const processData = (data) => {
    document.getElementById("callbackOutput2").textContent = `${data}`;
  };

  // Ejecutar la función con un callback
  fetchData(processData);
});

// Botón para limpiar la salida
document.getElementById("resetOutput").addEventListener("click", () => {
  document.getElementById("callbackOutput1").textContent = "";
  document.getElementById("callbackOutput2").textContent = "";
});

/*Ejemplo de Promesas*/
document.getElementById("runPromiseExample").addEventListener("click", () => {
  // Función que devuelve una promesa
  const fetchDataWithPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true; // Cambiar a false para probar el rechazo
        if (success) {
          resolve("Datos del hilo paralelo después de 2 segundos, asíncrono.");
        } else {
          reject("Error al obtener los datos.");
        }
      }, 2000);
    });
  };
  //Función síncrona
  const firtsProcess = () => {
    document.getElementById("promiseOutput1").textContent =
      "datos del hilo principal, síncrono";
  };
  // Manejo de la promesa con then, simula asincronismo
  fetchDataWithPromise()
    .then((data) => {
      document.getElementById("promiseOutput2").textContent = `${data}`;
    })
    .catch((error) => {
      document.getElementById("promiseOutput").textContent = `Error: ${error}`;
    });

  firtsProcess(); //Los resultados de esta función se obtendrán primero que la promesa
});

// Botón para limpiar la salida
document.getElementById("resetPromiseOutput").addEventListener("click", () => {
  document.getElementById("promiseOutput1").textContent = "";
  document.getElementById("promiseOutput2").textContent = "";
});