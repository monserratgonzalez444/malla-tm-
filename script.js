function mostrarInfo(curso) {
  const info = {
    'Anatomía': 'Estudio de la estructura del cuerpo humano.',
    'Histología': 'Estudio de los tejidos bajo el microscopio.',
    'Bioquímica': 'Análisis de los procesos químicos en organismos vivos.',
    'Fisiología': 'Estudia las funciones del cuerpo humano.',
    // Puedes agregar más asignaturas aquí
  };

  const infoBox = document.getElementById("infoBox");
  infoBox.innerHTML = `<strong>${curso}</strong><br>${info[curso] || "Descripción no disponible."}`;
}
