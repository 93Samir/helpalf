describe('Help ALF', function () {
	let helpAlf;

	beforeEach(function () {
		helpAlf = new HelpAlf();
	});

	it('sollte die korrekten Koordinaten [0, 0] zurückgeben, wenn das Raumschiff gefunden wird', function () {
		const map = "X";
		expect(helpAlf.findSpaceship(map)).toEqual([0, 0]);
	});

	it('sollte die korrekten Koordinaten [1, 0] zurückgeben, wenn das Raumschiff gefunden wird', function () {
		const map = ".X";
		expect(helpAlf.findSpaceship(map)).toEqual([1, 0]);
	});

	it('sollte die korrekten Koordinaten [1, 1] zurückgeben, wenn das Raumschiff gefunden wird', function () {
		const map =
			"..........\n" +
			"..........\n" +
			"..........\n" +
			"..........\n" +
			".X........\n" +
			"..........";
		expect(helpAlf.findSpaceship(map)).toEqual([1, 1]);
	});

	it('sollte die korrekten Koordinaten [10, 0] zurückgeben, wenn das Raumschiff gefunden wird', function () {
		const map =
			".........\n" +
			"..........\n" +
			"..........\n" +
			"..........\n" +
			"..........\n" +
			"..........X";
		expect(helpAlf.findSpaceship(map)).toEqual([10, 0]);
	});

});
