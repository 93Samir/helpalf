function HelpAlf() {}

HelpAlf.prototype.findSpaceship = function (map) {
	// Prüfen, ob überhaupt eine Karte übergeben wurde
	if (!map) {
		return "Spaceship lost forever.";
	}

	// Karte in Zeilen aufteilen und dabei umdrehen (damit y=0 ganz unten beginnt)
	const lines = map.split('\n').reverse();

	// Jede Zeile durchsuchen
	for (let y = 0; y < lines.length; y++) {
		const x = lines[y].indexOf('X'); // Position des Raumschiffs (X) in dieser Zeile
		if (x !== -1) {
			return [x, y]; // Koordinaten zurückgeben, sobald gefunden
		}
	}

	// Wenn kein Raumschiff gefunden wurde
	return "Spaceship lost forever.";
};
