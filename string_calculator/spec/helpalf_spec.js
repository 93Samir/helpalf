describe('Help ALF', function () {
	let helpAlf;

	beforeEach(function () {
		helpAlf = new HelpAlf();
	});

	it('sollte die korrekten Koordinaten [0, 0] zurückgeben, wenn das Raumschiff gefunden wird', function () {
		const map = "X";
		expect(helpAlf.findSpaceship(map)).toEqual([0, 0]);
	});

});
