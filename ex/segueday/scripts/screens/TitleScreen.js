(function (Ω) {

	"use strict";

	var TitleScreen = Ω.Screen.extend({

		time: 0,

		font: new Ω.Font("../res/fonts/mamefont.png", 16, 16),

		init: function () {

		},

		tick: function () {

			this.time += 1;

			if (Ω.input.pressed("space") && this.time > 20) {
				//game.setScreen(new MainScreen());
			}

		},

		render: function (gfx) {

			var c = gfx.ctx,
				title = "segueday",
				coming = "coming soon!",
				start = "[space]";

			this.clear(gfx, "#123");


			this.font.write(gfx, title, gfx.w / 2 - this.font.w * (title.length / 2), gfx.h * 0.4);
			this.font.write(gfx, coming, gfx.w / 2 - this.font.w * (coming.length / 2), gfx.h * 0.6);

			//c.font = "8pt Monospace";
			//gfx.text.drawShadowed(start, gfx.w / 2 - gfx.text.getHalfWidth(start), gfx.h * 0.75, 1);

		}

	});

	window.TitleScreen = TitleScreen;

}(Ω));