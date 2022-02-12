var Keys = /** @class */ (function () {
    function Keys(a, z) {
        var _this = this;
        this.add = function () {
            var src = document.getElementById("keysHolder");
            var _loop_1 = function (i) {
                var key = document.createElement("button");
                key.setAttribute("class", "keys");
                key.setAttribute("data-key", i + "");
                key.setAttribute("title", i + "");
                key.innerText = String.fromCharCode(i);
                key.addEventListener("click", function (e) {
                    var x = key.dataset["key"];
                    _this.sound(parseInt(x));
                    _this._key.innerText = key.innerText;
                    _this._show.innerText = x;
                });
                src.appendChild(key);
            };
            for (var i = _this._a; i <= _this._z; i++) {
                _loop_1(i);
            }
            addEventListener("keydown", function (e) {
                _this._show.innerText = e.keyCode + "";
                _this._key.innerText = e.key.toUpperCase();
                _this.sound(e.keyCode);
            });
        };
        this.sound = function (x) {
            if (_this._a > x || x > _this._z) {
                return;
            }
            window.speechSynthesis.cancel();
            _this._voice.text = x + "";
            window.speechSynthesis.speak(_this._voice);
        };
        this._a = a.charCodeAt(0);
        this._z = z.charCodeAt(0);
        this._voice = new SpeechSynthesisUtterance();
        this._show = document.getElementById("show");
        this._key = document.getElementById("key");
        this.add();
    }
    return Keys;
}());
new Keys('A', 'Z');
//# sourceMappingURL=index.js.map