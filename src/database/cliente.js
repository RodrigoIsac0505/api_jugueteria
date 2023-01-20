const pool = require('./connection');

const getMiDeuda = (clienteId) => {
  try {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      $query = "CALL `mi_deuda`(?)"
      //$query = "select * from cliente where cedula=";
      pool.query($query,clienteId, function (e, rows) {
        if (e) {
          resolve("Error ocurred in executing the query.")
          return
        }
        resolve(rows)
      })
    }, 1500)
  })
  } catch (error) {
    console.log("Ha ocurrido un error: "+error);
  }
};

const getMisPagos = (clienteId) => {
  try {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      $query = "CALL `mis_pagos`(?)"
      //$query = "select * from cliente where cedula=";
      pool.query($query,clienteId, function (e, rows) {
        if (e) {
          resolve("Error ocurred in executing the query.")
          return
        }
        resolve(rows)
      })
    }, 1500)
  })
  } catch (error) {
    console.log("Ha ocurrido un error: "+error);
  }
};

const getMisJuguetesSeparados = (clienteId) => {
  try {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      $query = "CALL `mis_juguetes_separados`(?)"
      //$query = "select * from cliente where cedula=";
      pool.query($query,clienteId, function (e, rows) {
        if (e) {
          resolve("Error ocurred in executing the query.")
          return
        }
        resolve(rows)
      })
    }, 1500)
  })
  } catch (error) {
    console.log("Ha ocurrido un error: "+error);
  }
};

const insertarCliente = (newDatos) => {
  try {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // agregar multiples filas se deja el signo de interrogacion sin parentesis
        //$query = "INSERT INTO usuario (id, email, password, name, last_name,createdAt,updatedAt) VALUES ?"
        // agregar una sola fila
        $query = "call insertar_cliente (?);";
        let datos = [
          newDatos.id,
          newDatos.cedula,
          newDatos.nombre,
          newDatos.apellido
        ];
        console.log(datos);
        pool.query($query, [datos]
          , function (e, result, fields) {
            if (e) {
              resolve("Error ocurred in executing the query.")
              return
            }
            console.log("se agrego");
            resolve("Filas afectadas: " + result.affectedRows);
          })
      }, 1500)
    })
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};

const insertarJuguete = (newJuguetes) => {
  try {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // agregar multiples filas se deja el signo de interrogacion sin parentesis
        //$query = "INSERT INTO usuario (id, email, password, name, last_name,createdAt,updatedAt) VALUES ?"
        // agregar una sola fila
        $query = "call insertar_juguetes (?);";
        let datos = [
          newJuguetes.codigo,
          newJuguetes.nombre,
          newJuguetes.cantidad,
          newJuguetes.precio
        ];
        console.log(datos);
        pool.query($query, [datos]
           ,function (e, result, fields) {
            if (e) {
              resolve("Error ocurred in executing the query.")
              return
            }
            console.log("se agrego");
            resolve("Filas afectadas: " + result.affectedRows);
          })
      }, 1500)
    })
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};

const separarJuguetes = (datosJuguetes) => {
  try {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // agregar multiples filas se deja el signo de interrogacion sin parentesis
        //$query = "INSERT INTO usuario (id, email, password, name, last_name,createdAt,updatedAt) VALUES ?"
        // agregar una sola fila
        $query = "call separar_juguete (?);";
        let datos = [
          datosJuguetes.id_cliente,
          datosJuguetes.id_juguete,
          datosJuguetes.cantidad
        ];
        console.log(datos);
        pool.query($query, [datos]
           ,function (e, result, fields) {
            if (e) {
              resolve("Error ocurred in executing the query.")
              return
            }
            console.log("se agrego");
            console.log(result);
            resolve("Filas afectadas: " + result.Saldo);
          })
      }, 1500)
    })
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};

const pagoDeuda = (datosPago) => {
  try {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // agregar multiples filas se deja el signo de interrogacion sin parentesis
        //$query = "INSERT INTO usuario (id, email, password, name, last_name,createdAt,updatedAt) VALUES ?"
        // agregar una sola fila
        $query = "call pago_deuda (?);";
        let datos = [
          datosPago.id_cliente,
          datosPago.pago
        ];
        console.log(datos);
        pool.query($query, [datos]
           ,function (e, result, fields) {
            if (e) {
              resolve("Error ocurred in executing the query.")
              return
            }
            console.log("se agrego pago");
            console.log(result);
            resolve("Filas afectadas: " + result.affectedRows);
          })
      }, 1500)
    })
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};

const getOneWorkout = (workoutId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      $query = "SELECT * from usuario where id = ?"

      pool.query($query, workoutId, function (e, rows) {
        if (e) {
          resolve("Error ocurred in executing the query.")
          return
        }
        resolve(rows)
      })
    }, 1500)
  })
};


const updateOneWorkout = (workoutId, changes) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let datos = [
        changes.email,
        changes.password,
        changes.name,
        changes.last_name,
        changes.updatedAt
      ];
      $query = " UPDATE usuario SET email='"+datos[0]+"',password='"+datos[1]+"' , name='"+datos[2]+"',last_name= '"+datos[3]+"', updatedAt='"+datos[4]+"' WHERE id=?"
      pool.query($query, workoutId
        , function (e, result, fields) {
          if (e) {
            resolve("Error ocurred in executing the query.")
            return
          }
          resolve("Filas afectadas: " + result.affectedRows);
        })
    }, 1500)
  })
};

const deleteOneWorkout = (workoutId) => {
  setTimeout(() => {
  $query = "Delete from usuario where id=?";
  console.log("comienzo de workouts");
  pool.query($query, workoutId
    , function (e, result, fields) {
      if (e) {
        console.log("Error ocurred in executing the query.")
        return
      }
      console.log("se elimino");
    })
  }, 1500)
};

module.exports = {
  getMiDeuda,
  getMisPagos,
  getMisJuguetesSeparados,
  insertarCliente,
  insertarJuguete,
  separarJuguetes,
  pagoDeuda,
  getOneWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};