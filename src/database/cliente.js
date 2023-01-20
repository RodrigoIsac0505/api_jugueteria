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

const createNewWorkout = (newWorkout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // agregar multiples filas se deja el signo de interrogacion sin parentesis
      //$query = "INSERT INTO usuario (id, email, password, name, last_name,createdAt,updatedAt) VALUES ?"
      // agregar una sola fila
      $query = "INSERT INTO usuario (id, email, password, name, last_name,createdAt,updatedAt) VALUES (?)"
      let datos = [
        newWorkout.id,
        newWorkout.email,
        newWorkout.password,
        newWorkout.name,
        newWorkout.last_name,
        newWorkout.createdAt,
        newWorkout.updatedAt
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
  createNewWorkout,
  getOneWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};