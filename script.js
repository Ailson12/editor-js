const controles = document.querySelector("#controles");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");

controles.addEventListener("change", handleChange);

const handleStyle = {
    elemento: btn,
    height(valor) {
        this.elemento.style.height = valor + 'px';
    },
    width(valor) {
        this.elemento.style.width = valor + 'px';
    },
    texto(valor) {
        this.elemento.innerText = valor;
    },
    color(valor) {
        this.elemento.style.color = valor;
    },
    border(valor) {
        this.elemento.style.border = valor;
    },
    borderRadius(valor) {
        this.elemento.style.borderRadius = valor + 'px';
    },
    fontFamily(valor) {
        this.elemento.style.fontFamily = valor;
    },
    fontSize(valor) {
        this.elemento.style.fontSize = valor + 'rem';
    },
    backgroundColor(valor) {
        this.elemento.style.backgroundColor = valor;
    }
}

function handleChange(evento) {
    const name = evento.target.name;
    const valor = evento.target.value;

    handleStyle[name](valor);
    saveValues(name, valor);
    showCss();
}

function saveValues(nome, value) {
    localStorage[nome] = value;
}

function setValues() {
    const propriedades = Object.keys(localStorage);
    propriedades.forEach(propriedade => {
        handleStyle[propriedade](localStorage[propriedade]);
        controles.elements[propriedade].value = localStorage[propriedade];
    });

    showCss();
}

setValues();

function showCss() {
    cssText.innerHTML = '<span>' + btn.style.cssText.split("; ").join("; </span><span>");
}