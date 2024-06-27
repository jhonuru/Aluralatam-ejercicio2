function encriptar() {
	let texto = document.getElementById("texto").value;
	let textoEncriptado = "";

	for (var i = 0; i < texto.length; i++) {
		var codigo = texto.charCodeAt(i);
		if (codigo >= 97 && codigo <= 122) {
			codigo += 1;
		} else if (codigo >= 65 && codigo <= 90) {
			codigo += 1;
		}
		textoEncriptado += String.fromCharCode(codigo);
	}

	document.getElementById("texto2").innerText = textoEncriptado;
  document.getElementById("mensaje").style.display = "none";
}

function desencriptar() {
	let texto = document.getElementById("texto2").innerText;
	let textoDesencriptado = "";

	for (var i = 0; i < texto.length; i++) {
		var codigo = texto.charCodeAt(i);
		if (codigo >= 98 && codigo <= 123) {
			codigo -= 1;
		} else if (codigo >= 66 && codigo <= 91) {
			codigo -= 1;
		}
		textoDesencriptado += String.fromCharCode(codigo);
	}

	document.getElementById("texto2").innerText = textoDesencriptado;
}
