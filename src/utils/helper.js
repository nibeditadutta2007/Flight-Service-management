export function compareTime(arrivalTime, departureTime) {
  return new Date(arrivalTime) > new Date(departureTime);
}