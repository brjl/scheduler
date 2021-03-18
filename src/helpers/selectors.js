export function getAppointmentsForDay(state, day) {
  const newArray = state.days.filter(function (item) {
    return item.name === day;
  });

  if (newArray.length === 0) {
    return [];
  }
  const appointmentsArray = newArray[0].appointments.map((appointment) => {
    return state.appointments[appointment];
  });

  return appointmentsArray;
}
