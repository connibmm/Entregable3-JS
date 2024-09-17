const pizzas = [
  {
    id: 1,
    nombre: "Pizza de muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", " tomate", " aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", " tomate", " cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 quesos",
    precio: 1380,
    ingredientes: ["Muzzarella", " tomate", " queso azul", " parmesano", " roquefort"],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza especial",
    precio: 1000,
    ingredientes: ["Muzzarella", " tomate", " rúcula", " jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con anana",
    precio: 600,
    ingredientes: ["Muzzarella", " tomate", " ananá"],
    imagen: "./img/anana.png",
  },
];

const pizzaIdInput = document.getElementById("pizzaIdInput");
const pizzaContainer = document.getElementById("pizzaContainer");
const buscarPizzaButton = document.getElementById("buscarPizza");

function renderPizza(pizza){
  pizzaContainer.innerHTML = `
    <div class="pizza-card">
      <h2>${pizza.nombre}</h2>
      <img src="${pizza.imagen}" alt="${pizza.nombre}"/>
      <p>Ingredientes: ${pizza.ingredientes}</p>
      <p>Precio: $${pizza.precio}</p>
    </div>
  `
}

function renderError(message){
  pizzaContainer.innerHTML = `<p class="error-message">${message}</p>`
}

function buscarPizza(){
  const pizzaId = parseInt(pizzaIdInput.value);
  
  if(isNaN(pizzaId)){
    renderError("Por favor, ingrese un número válido");
    return;
  }

  const pizza = pizzas.find(p => p.id === pizzaId);

  if(pizza){
    renderPizza(pizza)
    localStorage.setItem("UltimaPizza", JSON.stringify(pizza));
  } else{
    renderError("No existe una pizza con ese ID");
  }
}

buscarPizzaButton.addEventListener("click", buscarPizza);

window.addEventListener("DOMContentLoaded", () => {
  const pizzaGuardada = localStorage.getItem("UltimaPizza");

  if(pizzaGuardada){
    const pizza = JSON.parse(pizzaGuardada);
    renderPizza(pizza);
  }
})