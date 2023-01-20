const pool = require('./connection');

const getAllJuguetes = () => {
  try {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      $query = "CALL `all_juguetes`"
      pool.query($query, function (e, rows) {
        if (e) {
          resolve("Error ocurred in executing the query.")
          return
        }
        for (let index = 0; index < rows.length; index++) {
          const juguetes = rows[index];
          resolve(juguetes);  
        }
      })
    }, 1500)
  })
  } catch (error) {
    console.log("Ha ocurrido un error: "+error);
  }
};


const getMiDeuda = (clienteId) => {
  try {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      $query = "CALL `mi_deuda`(?)"
      pool.query($query,clienteId, function (e, rows) {
        if (e) {
          resolve("Error ocurred in executing the query.")
          return
        }
        for (let index = 0; index < rows.length; index++) {
          const deuda = rows[index];
          resolve(deuda);  
        }
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
      pool.query($query,clienteId, function (e, rows) {
        if (e) {
          resolve("Error ocurred in executing the query.")
          return
        }
        for (let index = 0; index < rows.length; index++) {
          const misPagos = rows[index];
          resolve(misPagos);  
        }
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
        for (let index = 0; index < rows.length; index++) {
          const juguetesSeparados = rows[index];
          resolve(juguetesSeparados);  
        }
      })
    }, 1500)
  })
  } catch (error) {
    console.log("Ha ocurrido un error: "+error);
  }
};

const insertarCliente = (datosCliente) => {
  try {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        $query = "call insertar_cliente (?);";
        let datosInsertar = [
          datosCliente.id,
          datosCliente.cedula,
          datosCliente.nombre,
          datosCliente.apellido
        ];
        pool.query($query, [datosInsertar]
          , function (e, result, fields) {
            if (e) {
              if (e == "Error: ER_DUP_ENTRY: Duplicate entry '0005' for key 'PRIMARY'") {
              resolve("La cedula cliente ya esta en uso")
              return
              }
              resolve("Ha ocurrido un error" + e)
              return
            }
            resolve("Filas afectadas: " + result.affectedRows);
          })
      }, 1500)
    })
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};

const insertarJuguete = (datosJuguete) => {
  try {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        $query = "call insertar_juguetes (?);";
        let datosInsertar = [
          datosJuguete.codigo,
          datosJuguete.nombre,
          datosJuguete.cantidad,
          datosJuguete.precio
        ];
        pool.query($query, [datosInsertar]
           ,function (e, result, fields) {
            if (e) {
              if (e == "Error: ER_DUP_ENTRY: Duplicate entry '0005' for key 'PRIMARY'") {
              resolve("El codigo de juguete ya esta en uso")
              return
              }
              resolve("Ha ocurrido un error" + e)
              return
            }
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
        $query = "call separar_juguete (?);";
        let datosInsertar = [
          datosJuguetes.id_cliente,
          datosJuguetes.id_juguete,
          datosJuguetes.cantidad
        ];
        pool.query($query, [datosInsertar]
           ,function (e, result, fields) {
            if (e) {
              resolve("Error ocurred in executing the query.")
              return
            }
            resolve("Se separaron los juguetes");
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
        $query = "call pago_deuda (?);";
        let datosInsertar = [
          datosPago.id_cliente,
          datosPago.pago
        ];
        pool.query($query, [datosInsertar]
           ,function (e, result, fields) {
            if (e) {
              resolve("Error ocurred in executing the query.")
              return
            }
              resolve("Se realizo el pago satisfactoriamente");  
          })
      }, 1500)
    })
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};

const updatedJuguetes = ( changes) => {
  try {
     return new Promise((resolve, reject) => {
    setTimeout(() => {
      let datosActualizar = [
        changes.nombre_juguete,
        changes.cantidad_juguete,
        changes.precio,
        changes.codigo
      ];
      $query = "call actualizar_juguete (?);";
      pool.query($query,[datosActualizar]
        , function (e, result, fields) {
          if (e) {
            resolve("Error ocurred in executing the query."+ e)
            return
          }
          resolve("Filas afectadas: " + result.affectedRows);
        })
    }, 1500)
  })
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};


const deleteJuguetes = (jugueteId) => {
  try {
    setTimeout(() => {
  $query = "call eliminar_juguete(?)";
  pool.query($query, jugueteId
    , function (e, result, fields) {
      if (e) {
        console.log("Error ocurred in executing the query.")
        return
      }
      console.log("se elimino");
    })
  }, 1500)
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }  
};

const deleteCliente = (clienteId) => {
  try {
    setTimeout(() => {
  $query = "call eliminar_cliente(?)";
  pool.query($query, clienteId
    ,function (e, result, fields) {
      if (e) {
        console.log("Error ocurred in executing the query.")
        return
      }
      console.log("se elimino");
    })
  }, 1500)
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }  
};

module.exports = {
  getAllJuguetes,
  getMiDeuda,
  getMisPagos,
  getMisJuguetesSeparados,
  insertarCliente,
  insertarJuguete,
  separarJuguetes,
  pagoDeuda,
  updatedJuguetes,
  deleteJuguetes,
  deleteCliente
};