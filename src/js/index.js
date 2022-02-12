var Keys = /** @class */ (function () {
    function Keys(a, z) {
        var _this = this;
        this.add = function () {
            var _loop_1 = function (i) {
                var key = document.createElement("button");
                key.setAttribute("class", "keys");
                key.setAttribute("data-key", i + "");
                key.innerText = String.fromCharCode(i) + " " + i;
                key.addEventListener("click", function (e) {
                    _this.sound(parseInt(key.dataset["key"]));
                });
                document.body.appendChild(key);
            };
            for (var i = _this._a; i <= _this._z; i++) {
                _loop_1(i);
            }
            addEventListener("keydown", function (e) { return _this.sound(e.keyCode); });
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
        console.log(this._a, this._z);
        this._voice = new SpeechSynthesisUtterance();
        this.add();
    }
    return Keys;
}());
new Keys('A', 'Z');
//# sourceMappingURL=index.js.map