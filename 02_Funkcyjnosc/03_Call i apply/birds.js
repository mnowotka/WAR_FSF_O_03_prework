// Możesz użyć tego obiektu jako bazy do kolejnych ptaków
const birdSpeciesObj = {
  species: '',
  dominantColor: '',
  size: '' // small || medium || large
};

function reportBird(date, certainty) {
  if (!(date instanceof Date)) {
    throw new Error('Passed date is not a proper Date object!');
  }

  if (certainty < 0 || certainty > 1) {
    throw new Error('Recognition certainty has to be between 0 and 1');
  }

  if (!this.species) {
    throw new Error('No context bound for recognition - add a proper bird species context!');
  }

  console.log(
    '[' + date + '] Identified bird: ' + this.species +
    ', dominant color: ' + this.dominantColor +
    ', size: ' + this.size +
    ', recognition certainty: ' + certainty
  )
}
