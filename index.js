// code your solution here
function saturdayFun(activity = "roller-skate") {
  // function saturdayFun(activity) {
  //   if (typeof activity === "undefined") activity = "roller-skate";
  return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(spec = "*") {
  return function (adj = "special") {
    return `You are ${spec}${adj}${spec}!`;
  };
}
