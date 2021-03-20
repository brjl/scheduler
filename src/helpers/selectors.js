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

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }

const id = interview.interviewer;
const interviewer = state.interviewers[id];

const result = {...interview, interviewer}

  return result;
}

export function getInterviewersForDay(state, day){
  const newArray = state.days.filter(function (item) {
    return item.name === day;
  });

  if (newArray.length === 0) {
    return [];
  }
  const interviewersArray = newArray[0].interviewers.map((appointment) => {
    return state.interviewers[appointment];
  });

  return interviewersArray;


}