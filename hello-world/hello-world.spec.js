var HelloWorld = require('./hello-world');

describe('Hello World', function () {
  var helloWorld = new HelloWorld();

  it('says hello world', function () {
  	const expected = 'Hello, World!';
    expect(helloWorld.hello()).toEqual(expected);
  });
    it('should have length 13 of hello world', function () {
  	const expected = 13;
    expect(helloWorld.hello().length).toEqual(expected);
  });
});
