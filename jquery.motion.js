(function ($, w) {

	var settings = {
		per_frame: 1000/50
	}

	var methods = {
		uniform_liner: function (length, duration) {
			var _this = this;
			var s = 0, t = 0, v = length/duration,
				origin = _this.position().left;

			var clock = setInterval(function () {
				t = t + settings.per_frame;
				s = v*t;
				_this.css({
					left: origin + s
				});
				if (t === duration) {clearInterval(clock)};
			}, settings.per_frame);
		},

		speed_change_liner: function (length, duration) {
			var _this = this;
			var a = 2*length / (duration*duration);
				origin = _this.position().left,
				s = 0, t = 0;
			var clock = setInterval(function () {
				t = t + settings.per_frame;
				s = a*t*t/2;
				_this.css({
					left: origin + s
				});
				if (t === duration) {
					clearInterval(clock);
				};
			}, settings.per_frame);
		}
	}

	$.fn.uniform_liner = function (length, duration) {
		var args = arguments;
		this.each(function(){
			var $this = $(this);
			methods.uniform_liner.apply($this, args);
		});
	};

	$.fn.speed_change_liner = function (length, duration) {
		var args = arguments;
		this.each(function () {
			var $this = $(this);
			methods.speed_change_liner.apply($this, args);
		});
	}
	
})(jQuery, window);