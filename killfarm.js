/*

Команды аддона:

@kfarm enable - включает
@kfarm disable - выключает
@kfarm method - метод тп
@kfarm setmethod <команду> - изменяет команду тп

*/


let ctx;

// exports
function load(sctx) {
	ctx = sctx;
}

const name = "Kill Farm";
var tpmethod = "marry tp";

function task() {
	const bot = ctx.getInstance();
	bot.chat(`/${tpmethod}`);
}

function enable() {
	ctx.getInstance().on("spawn", task);
}
function disable() {
	ctx.getInstance().removeListener("spawn", task);
}

const commands = {
	"kfarm": function(input) {
		const mode = input[0];
		const args = input.splice(1);

		if (mode === "enable") {
			enable();
			console.log(`[94m[Kill Farm][0m Enabled kill farming. Current teleportation method is /${tpmethod}`)
		} else if (mode === "disable") {
			disable();
			console.log("[94m[Kill Farm][0m Disabled kill farming.")
		} else if (mode === "method") {
			console.log(`[94m[Kill Farm][0m Current teleportation method is /${tpmethod}`)
		} else if (mode === "setmethod") {
			tpmethod = args.join(" ");
			console.log(`[94m[Kill Farm][0m Set teleportation method to /${tpmethod}.`)
		} else {
			console.log("[94m[Kill Farm][0m Unknown command! (valid: enable, disable, method, setmethod <method>)")
		}
	}
}

module.exports = {
	load: load,
	name: name,
	commands: commands
};