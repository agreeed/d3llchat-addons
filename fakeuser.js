/*

Подделывает ник игрока

Команды аддона:
@fake <nickname> - Устанавливает ник с замененными буквами

*/

let ctx;

replaceables = {
//   e -> r       r -> e
	"e": "е",   "е": "e",
	"y": "у",   "у": "y",
	"o": "о",   "о": "o",
	"p": "р",   "р": "p",
	"a": "а",   "а": "a",
	"x": "х",   "х": "x",
	"c": "с",   "с": "c",
	"E": "Е",   "Е": "E",
	"T": "Т",   "Т": "T",
	"O": "О",   "О": "O",
	"P": "Р",   "Р": "P",
	"A": "А",   "А": "A",
	"H": "Н",   "Н": "H",
	"K": "К",   "К": "K",
	"X": "Х",   "Х": "X",
	"C": "С",   "С": "C",
	"B": "В",   "В": "B",
	"M": "М",   "М": "M"
};


// exports
function load(sctx) {
	ctx = sctx;
}

const name = "Fake User";

const commands = {
	"fake": function(input) {
		botname = input[0];
		botname2 = "";

		for (var i = 0; i < botname.length; i++) {
			let l = botname[i];

			if (Math.random() < 0.5 && replaceables[l]) {
				botname2 += replaceables[l];
			} else {
				botname2 += l;
			}
		}

		botname = botname2;

		ctx.setUser(botname);
		console.log(`[93m[Fake User][0m Set username to: ${botname}`);
	}
}

module.exports = {
	load: load,
	name: name,
	commands: commands
}