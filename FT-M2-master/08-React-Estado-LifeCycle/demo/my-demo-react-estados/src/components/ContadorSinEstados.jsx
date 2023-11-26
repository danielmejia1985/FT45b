//! Notacion Funcional
//? Sin props -> utilizando variables
/* function ContadorSinEstados() {
  let counter = 0;
  function aumento() {
    counter++;
    console.log(`Counter vale: ${counter}`);
  }
  return (
    <div>
      <h1>Soy el contador sin estados: {counter}</h1>
      <button onClick={aumento}>Aumentar</button>
    </div>
  );
}

export default ContadorSinEstados; */

//! Notacion Funcional
//? Con props
/* function ContadorSinEstados(props) {
  console.log(props);
  // let counter = props.contador;
  function aumento() {
    //? Que pasa si tratamos de modificar directamente las props?
    props.contador++
    console.log(`Counter vale: ${props.contador}`);
    //? Creando una variable auxiliar 
    // counter++;
    // console.log(`Counter vale: ${counter}`);
  }
  return (
    <div>
      <h1>Soy el contador sin estados: {props.contador}</h1>
      <button onClick={aumento}>Aumentar</button>
    </div>
  );
}

export default ContadorSinEstados; */

//! Notacion de Clases
//? Sin props
/* import React from "react";
class ContadorSinEstados extends React.Component {
  render() {
    let counter = 0;
    function aumento() {
      counter++;
      console.log(`Counter vale: ${counter}`);
    }
    return (
      <div>
        <h1>Soy el contador sin estados: {counter}</h1>
        <button onClick={aumento}>Aumentar</button>
      </div>
    );
  }
}

export default ContadorSinEstados; */

//! Notacion de Clases
//? Con props
/* import React from "react";
class ContadorSinEstados extends React.Component {
  constructor(props) {
    //* El constructor se encarga de recibir las props
    // console.log(props)
    //* Para ello debe setearse un metodo llamado super,
    //* El cual, recibe las props y al mismo tiempo permite
    //* Heredar metodos de React.Component
    // super(props);
    // console.log(props); // -> {contador : 0}
    //? Bindeando la funcion para que tome el this de la clase
    // this.aumento = this.aumento.bind(this);
  }
  //* Hay una diferencia clave entre las funciones que se crean dentro del método render y las que se definen como métodos de la clase fuera del render.
  // aumento() { }
  //* Cuando definimos una función como un método de la clase fuera del método render, como el método aumento, la función se crea una vez y se adjunta a la instancia de la clase. Esto es más eficiente en términos de rendimiento, ya que no se crea una nueva función en cada renderización.
  //? Como lo veiamos en la notacion de clases
  // aumento() {
  //   // console.log("hola");
  //   // console.log(this);
  //   // console.log(props);
  // }
  //* En esta sintaxis la funcion crea su propio contexto y por ende su propio this. Por ende, debemos bindear su this al de la clase
  //? Como lo veremos sin el bind
  // aumento = () => {
  //   // console.log("hola") 
  //   // console.log(this);
  //   // console.log(props);
  // }
  //* Recordemos que cuando creamos una funcion flecha, esta toma el this del contexto en el que fue creada, por ende estaria tomando el contexto de la clase

  render() {
    //* Cuando definimos una función dentro del método render, como la función aumento, estamos creando una nueva función cada vez que se renderiza el componente. Esto puede tener un impacto en el rendimiento, ya que se crea una nueva función en cada renderización, incluso si la lógica de la función no ha cambiado. Además, estas funciones pueden causar problemas con el manejo correcto de this.
    // function aumento() {
    //   // console.log("hola")
    //   // console.log(props);
    //   // console.log(this);
    // }
    return (
      <div>
        <h1>Soy el contador sin estados: </h1>
        <button onClick={aumento}>Aumentar</button>
        <button onClick={this.aumento}>Aumentar</button>
      </div>
    );
  }
}

export default ContadorSinEstados;  */
