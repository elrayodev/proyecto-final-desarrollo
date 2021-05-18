const agregarLista = (inventario) => {

    const ul = document.querySelector('ul');

    inventario.forEach(element => {
        const elemento = document.createElement("li");
        elemento.innerHTML = element.id + " " + element.name + " " +  element.price ;
        ul.appendChild(elemento);
    });

}

const getInventario = () => {

    axios.get("http://localhost:4000/inventario/")
        .then( response => {
            const inventario = response.data.data;
            console.log(inventario);
            agregarLista(inventario);
        
        }).catch(error => console.error(error.response));
        
};

const createProducto = () => {
    const inventario = {
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        quantity: document.getElementById("quantity").value,
        price: document.getElementById("price").value,
        provider: document.getElementById("provider").value,
        fechaUltimoRegristro: document.getElementById("fechaUltimoRegistro").value
    };

    axios.post("http://localhost:4000/inventario/", inventario)
    .then(response => {
        const newProducto = response.data;
        console.log(newProducto);
        agregarLista([newProducto]);
    }).catch(error => console.error(error.response));
};

