// Modelo base de Stats para Level Up AI

class Stats {
  constructor({ experiencia = 0, nivel = 1, energia = 100, puntos = 0 }) {
    this.experiencia = experiencia;
    this.nivel = nivel;
    this.energia = energia;
    this.puntos = puntos;
  }
}

module.exports = Stats;