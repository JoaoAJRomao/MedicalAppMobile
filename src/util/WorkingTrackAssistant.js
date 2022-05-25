export async function CreateWorkingTrack(timeSchedule, intervalTime, guardarHorariosOcupados) {
  timeSchedule = timeSchedule?.split("-");
  var start = parseInt(timeSchedule[0], 10);
  var end = parseInt(timeSchedule[1], 10);
  var workingTrack = [];
  for (let hours = start; hours < end; hours++) {
    for (let minutes = 0; minutes < 60; minutes += intervalTime) {
      var date = new Date();
      date.setHours(hours);
      date.setMinutes(minutes);
      var schedule = ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2);
      workingTrack.push(schedule);
    }
  }
  if (workingTrack.length !== 0 && guardarHorariosOcupados.length !== 0) {
    let horasNaoMarcadas = workingTrack.filter(a => !guardarHorariosOcupados.includes(a))
    return horasNaoMarcadas
  }
  return workingTrack;
}
