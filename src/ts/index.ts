class Keys {
    _voice;
    _a;
    _z;

    constructor(a: string, z: string) {
        this._a = a.charCodeAt(0)
        this._z = z.charCodeAt(0)
        this._voice = new SpeechSynthesisUtterance()
        this.add()
    }

    add = () => {
        for (let i = this._a; i <= this._z; i++) {
            let key: HTMLElement = document.createElement("button")
            key.setAttribute("class", "keys")
            key.setAttribute("data-key", i + "")
            key.innerText = String.fromCharCode(i) + " " + i;
            key.addEventListener("click", (e) => {
                this.sound(parseInt(key.dataset["key"]))
            })
            document.body.appendChild(key)
        }
        addEventListener("keydown", (e) => this.sound(e.keyCode))
    }

    sound = (x: number) => {
        if (this._a > x || x > this._z) {
            return
        }
        window.speechSynthesis.cancel()
        this._voice.text = x + ""
        window.speechSynthesis.speak(this._voice);
    }
}

new Keys('A', 'Z');