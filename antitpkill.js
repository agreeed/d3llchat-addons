/*

[Анти-Бараны]
- Предотвращяет телепортирование вас к людям которые пытаются
фармить засчет этого.

Команды аддона:
@kfarm enable - включает
@kfarm disable - выключает

*/

let ctx;

// exports
function load(sctx) {
	ctx = sctx;
}

const name = "Anti TP-Kill";
var fallback = "marry tp";

function task(message) {
	if (message.startsWith("[*] ") && message.includes("телепортировал вас к")) {
		const bot = ctx.getInstance();
		console.log("[92m[Anti TP-Kill][0m Bot got teleported! Using the fallback command.")
		bot.chat(`/${fallback}`);
	}
}

function enable() {
	ctx.getInstance().on("messagestr", task);
}
function disable() {
	ctx.getInstance().removeListener("messagestr", task);
}

const commands = {
	"antitpk": function(input) {
		const mode = input[0];
		const args = input.splice(1);

		if (mode === "enable") {
			enable();
			console.log(`[92m[Anti TP-Kill][0m Enabled anti tp-killing. Current fallback is /${fallback}`)
		} else if (mode === "disable") {
			disable();
			console.log("[92m[Anti TP-Kill][0m Disabled anti tp-killing.")
		} else if (mode === "fallback") {
			console.log(`[92m[Anti TP-Kill][0m Current Fallback is /${fallback}`)
		} else if (mode === "setfallback") {
			fallback = args.join(" ");
			console.log(`[92m[Anti TP-Kill][0m Set teleportation method to /${fallback}.`)
		} else {
			console.log("[92m[Anti TP-Kill][0m Unknown command! (valid: enable, disable, fallback, setfallback <fallback>)")
		}
	}
}

module.exports = {
	load: load,
	name: name,
	commands: commands
};