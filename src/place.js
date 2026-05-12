function Place(location,landmark) {
    this.location = location; 
    this.landmark = landmark;
    console.log(
    `Place created: ${this.location} (${this.season}) with landmarks: ${this.landmarks.join(", ")}`
    );
}

Place.prototype.summary = function() {
    return `The place is located at ${this.location} and has a landmark called ${this.landmark}.`;
};

module.exports = Place;