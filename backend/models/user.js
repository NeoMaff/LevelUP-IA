// Modelo base de Usuario para Level Up AI

class User {
  constructor({ id, nombre, email, password, stats = {}, misiones = [] }) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.stats = stats;
    this.misiones = misiones;
  }
}

module.exports = User;