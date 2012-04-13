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
		},

		curve: function (length, duration) {
			var _this = this, origin = {
				x: _this.position().left,
				y: _this.position().top,
				}, x, y, x_v = length/duration,
				t = 0, g = 3/(1000*1000);
			
			setInterval(function () {
				t = settings.per_frame + t;
				y = origin.y + g*t*t/2;
				x = origin.x + x_v*t;
				_this.css({
					left: x,
					top: y
				});
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

	$.fn.curve = function (length, duration) {
		var args = arguments;
		this.each(function () {
			var $this = $(this);
			methods.curve.apply($this, args);
		});
	}
	
})(jQuery, window);