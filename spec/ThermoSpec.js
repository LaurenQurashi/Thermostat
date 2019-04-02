

describe('Thermo', function() {

  var thermostat;
  // similar to an instance variable initialization.

  beforeEach(function() {
    thermostat = new Thermo()
    // creates a new object before each test.
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
    // tests that the variable we stored our object under has our base temp
  });
});
