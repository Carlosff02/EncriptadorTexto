const encriptado = document.getElementById("textoEncriptado");
const desencriptado = document.getElementById("textoDesencriptado");

function rot13(message, output, opcion, key="happycoding", direction = 1) {
  let key_index = 0;
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let final_message = "";
  console.log(message);
  for (let i = 0; i < message.length; i++) {
    let char = message[i].toLowerCase();

    if (!/[a-zA-Z]/.test(char)) {
      final_message += char;
    } else {
      let key_char = key[key_index % key.length];
      key_index++;

      let offset = alphabet.indexOf(key_char);
      let index = alphabet.indexOf(char);
      let new_index = (index + offset * direction) % alphabet.length;
      if (new_index < 0) new_index += alphabet.length;

      final_message += alphabet[new_index];
    }
  }
  
  output.value = final_message;

  opcion == "encriptar"
    ? imgChange("completo", "encriptado")
    : imgChange("completo", "desencriptado");
}

function isAlpha(char) {
  return /^[a-zA-Z]$/.test(char);
}
function encriptar() {
  const custom_key = document.getElementById("claveEncriptar").value;
  const inp = document.getElementById("textoEncriptado").value;
  const out = document.getElementById("textoDesencriptado");
  rot13(inp, out, "encriptar", custom_key);
}
function desencriptar() {
  const custom_key = document.getElementById("claveDesencriptar").value;
  const inp = document.getElementById("textoEncriptado");
  const out = document.getElementById("textoDesencriptado").value;
  console.log(out);
  rot13(out, inp, "desencriptar", custom_key, -1);
}
function imgChange(opcion, variable) {
  const encriptado = document.getElementById("textoEncriptado");
  const desencriptado = document.getElementById("textoDesencriptado");

  const imagen = document.querySelector(".secundario");
  if (opcion == "input") {
    if (encriptado.value != "" || desencriptado.value != "") {
      imagen.innerHTML = `
    <img src="unnamed.png" >
    <h1 class="mensaje">Ya puedes encriptar tu mensaje</h1>
    <p>Pulsa el botón para continuar</p>
    <p class="author">Carlos Felipe Fernández Falcón - 2024</p>
    `;
    } else {
      imagen.innerHTML = `
        <img src="busqueda.webp" >
        <div class="texto">
            <h1 class="mensaje">Ningun mensaje fue encontrado</h1>
            <p>Ingrese el texto que deseas encriptar o desencriptar</p>
            <p class="author">Carlos Felipe Fernández Falcón - 2024</p>
        </div>
        `;
    }
  } else {
    if (encriptado.value != "" || desencriptado.value != "") {
      imagen.innerHTML = `
    <img  src="completo.png" >
    <h1 class="mensaje">Su texto ha sido ${variable} con exito</h1>
    <p class="author">Carlos Felipe Fernández Falcón - 2024</p>
    `;
    }
  }
}
function copiar(output) {
  
  var textarea = document.getElementById(output);
  textarea.select();
  textarea.setSelectionRange(0, 99999); 

  
  try {
    var successful = document.execCommand("copy");
    var msg = successful
      ? "Texto copiado exitosamente!"
      : "No se pudo copiar el texto.";
    console.log(msg);
  } catch (err) {
    console.error("Error al copiar el texto: ", err);
  }
}


