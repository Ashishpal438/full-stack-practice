function applyBrakes(distance, time) {
  var speed = distance / time;
  if (speed > 40) {
    return ("Apply Brake");
  } else {
    return("Keep Going");
  }
}
console.log(applyBrakes(200,4));