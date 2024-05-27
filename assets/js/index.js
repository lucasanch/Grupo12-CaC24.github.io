const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const errorFirstname = document.querySelector('#error-firstname');
const formRegister = document.querySelector('#formRegister');


if(firstname && lastname && errorFirstname && formRegister){
    formRegister.addEventListener('submit', validarFormulario)
}else{
    console.log("error no se puede manejar eventos no encontrados")
}

function validarFormulario(event){
    event.preventDefault();

    let validation = true;

    if(firstname.value===''){
        firstname.classList.add("error");
        errorFirstname.textContent = "El nombre no puede estar vacio"
        validation = false
    }else{
        firstname.classList.remove("error");
        errorFirstname.textContent = ""
    }


    if(lastname.value===''){
        lastname.classList.add("error");
        alert = "El apellido no puede estar vacio"
        validation = false
    }else{
        lastname.classList.remove("error");
       
    }
    
    if (validation){
        console.log("Nombre y apellidos validos")
    }else{
        console.log("el formulario tiene errores, no se puede enviar")
    }

    firstname.addEventListener('input', () =>{
        if(firstname.value !== ''){
            firstname.classList.remove('error')
            errorFirstname.textContent = "";
        }
    } );
     
    lastname.addEventListener('input', () =>{
     
            lastname.classList.remove('error')
    } );


}