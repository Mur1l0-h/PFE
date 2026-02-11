function MudarCartao() {

    let nome = document.getElementById("Nome")
    let cargo = document.getElementById("Cargo")
    let inputNome = document.getElementById("valorNome")
    let inputCargo = document.getElementById("valorCargo")
    

    if (inputNome.value == "") {
        nome.innerHTML = "Nome"
    }
    if (inputCargo.value == "") {
        cargo.innerHTML = "Cargo"
    }


    inputNome.addEventListener("input", () => {
        let valorNome = inputNome.value
        nome.innerHTML = valorNome
    })


    inputCargo.addEventListener("input", () => {
        let valorCargo = inputCargo.value

        if (!inputCargo) {
            cargo.innerHTML = "Cargo"
            console.log(valorCargo);
            return
        }

        cargo.innerHTML = valorCargo
    })
}

MudarCartao()