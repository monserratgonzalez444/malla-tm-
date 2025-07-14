function mostrarInfo(nombre, requisitos) {
  const infoBox = document.getElementById('infoBox');
  infoBox.innerHTML = `<strong>${nombre}</strong><br><em>${requisitos}</em>`;
  infoBox.scrollIntoView({ behavior: 'smooth' });
}
