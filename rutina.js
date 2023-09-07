class Series {
  constructor(series, repeticiones, dropSet, descanso) {
    this.series = series;
    this.repeticiones = repeticiones;
    this.repeticionesDropset = dropSet;
    this.descanso = descanso;
  }
}

const hipertrofia = new Series("4", "12-10-8-8", "10+10+10", "1 minuto");
const livianas = new Series("4", "15 - 15 - 12 - 12", " ", "1 minuto");
const repAltas = new Series("4", "20-20-20-20", " ", "1 minuto");

function seriesHipertrofia() {
  alert(
    "Series: " +
      hipertrofia.series +
      "\nRepeticiones: " +
      hipertrofia.repeticiones +
      "\nDescanso: " +
      hipertrofia.descanso
  );
}

function seriesLiviano() {
  alert(
    "Series: " +
      livianas.series +
      "\nRepeticiones: " +
      livianas.repeticiones +
      "\nDescanso: " +
      livianas.descanso
  );
}

function seriesAltas() {
  alert(
    "Series: " +
      repAltas.series +
      "\nRepeticiones: " +
      repAltas.repeticiones +
      "\nDescanso: " +
      repAltas.descanso
  );
}
