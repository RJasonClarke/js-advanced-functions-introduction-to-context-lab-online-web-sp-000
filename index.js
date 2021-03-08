// Your code here
function createEmployeerecord(record) {
  const employeeRecord = {
    firstName: record[0],
    familyName: record[1],
    title: record[2],
    payPerHour: record[3],
    timeInEvents: [],
    timeOutEvents: []

  };
  return employeeRecord;
}
