class Keys {
    _voice;
    _a;
    _z;
    _show: HTMLElement;
    _key: HTMLElement;

    constructor(a: string, z: string) {
        this._a = a.charCodeAt(0)
        this._z = z.charCodeAt(0)
        this._voice = new SpeechSynthesisUtterance()
        this._show = document.getElementById("show")
        this._key = document.getElementById("key")
        this.add()
    }

    add = () => {
        let src = document.getElementById("keysHolder")
        for (let i = this._a; i <= this._z; i++) {
            let key: HTMLElement = document.createElement("button")
            key.setAttribute("class", "keys")
            key.setAttribute("data-key", i + "")
            key.setAttribute("title", i + "")
            key.innerText = String.fromCharCode(i);
            key.addEventListener("click", (e) => {
                let x = key.dataset["key"]
                this.sound(parseInt(x))
                this._key.innerText=key.innerText
                this._show.innerText = x
            })
            src.appendChild(key)
        }
        addEventListener("keydown", (e) => {
            this._show.innerText = e.keyCode + ""
            this._key.innerText=e.key.toUpperCase()
            this.sound(e.keyCode)
        })
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