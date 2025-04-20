// Modelo base de Misión para Level Up AI

class Mission {
  constructor({ id, titulo, descripcion, completada = false, recompensa = {}, fechaLimite = null }) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.completada = completada;
    this.recompensa = recompensa;
    this.fechaLimite = fechaLimite;
  }
}

module.exports = Mission;