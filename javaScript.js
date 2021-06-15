document.addEventListener("DOMContentLoaded", ()=>{


const formulario=document.getElementById("formulario")
const submit =document.querySelector("button")
const  tabla =document.querySelector(".table")
const diaM=document.getElementById("dia-m")
const tecnicoM=document.getElementById("tecnico-m")
const clienteM=document.getElementById("cliente-m")
const detallesM=document.getElementById("detalles-m")
// let id=Date.now();


let rep=0;
let idConsumo=[]
let incidencias=[]

const borrarElemento= (id) =>
{   const mierda =document.getElementById(id)
    document.getElementById(id).remove()
    console.log(mierda)
}




// COLOR IMPORTANTE
const instalacionImportante = (id , rep)=>{
    
    if (rep%2 == 0)
    {//si el numero es par
    document.getElementById(id).style.backgroundColor="#C58E90"
    
 
   }
    else {
    document.getElementById(id).style.backgroundColor="#ccc"
    return
    }
    
}
 

//ENVIAR TABLA
submit.onclick = (e)=>{

   obtenId(e)
    e.preventDefault()
}

const obtenId = () =>{
    let id=Date.now()
    pintarTabla(id)

}

//SECCION PINTAR TABLA


const pintarTabla = (id) =>

{   
    

   const row = tabla.insertRow()
   row.innertHTML="";
   row.setAttribute( "id" , id)
       
       row.innerHTML=(
           `<td class="item"> ${instalacion.value} </td>
            <td class="item"> ${tecnico.value} </td>
            <td class="item"> ${cliente.value} </td>
            <td class="item"> ${detalles.value} </td>
            <td class="container-button"></td>
          `
   
       )
      
     incidencias.push({instalacion:instalacion.value, tecnico:tecnico.value, cliente:cliente.value, detalles:detalles.value})
        
        
     console.log(incidencias)
      
    pintarBotones(row)
    

       

// SECCION PINTAR MODIFICADO //

    row.addEventListener("click" , e => {

        if (e.target.classList.contains("item"))
        {

        pintarModificado(row.getAttribute("id"),row)
       }


        e.stopPropagation()
      
      
    })

}
    
const pintarModificado = (id , e) =>{
    
       
       
       
       document.querySelector(".modificar-form").style.opacity="1";
        document.querySelector(".h3").textContent=id
         diaM.value=e.querySelectorAll("td")[0].textContent
        tecnicoM.value=e.querySelectorAll("td")[1].textContent
        clienteM.value=e.querySelectorAll("td")[2].textContent
         detallesM.value=e.querySelectorAll("td")[3].textContent
     
     const btnModifica = document.querySelector(".btn-modifica")
     const btnSalir = document.querySelector(".btn-salir")
     
     btnSalir.onclick=(e)=>{
        e.preventDefault()
        document.querySelector(".modificar-form").style.opacity="0";
           
     }

     
        // SECCION MODIFICADO
     btnModifica.onclick = ( id , e =>{
       
        e.preventDefault() 
       
        instalacion.value=diaM.value;
        tecnico.value=tecnicoM.value;
        cliente.value=clienteM.value;
        detalles.value=detallesM.value;
    
    
    document.querySelector(".modificar-form").style.opacity="0";
     const nuevo = document.getElementById(id) // te da el id que deseas para sustituir el row que quieras
  
    
    nuevo.innerHTML=(
        `<td class="item"> ${instalacion.value} </td>
         <td class="item"> ${tecnico.value} </td>
         <td class="item"> ${cliente.value} </td>
         <td class="item"> ${detalles.value} </td>
         <td class="container-button"></td>
       `

    )
    
    pintarBotones(nuevo)
  
     
     
})}

//SECCION BOTON UP

const botonUp = ()=>{
   
   console.log("botonup")
   const arriba=incidencias.shift() 
   const abajo=incidencias.pop()
    
    
    intercambio(arriba,abajo)
 
 
}
const intercambio = (arriba,abajo)=>{

incidencias.splice(0,1,abajo)
incidencias.splice(1,1,arriba)
console.log(incidencias)



}

  const pintarid = (idConsumo,up,id)=>{
     
  
  
    up.innerHTML=(
        `<td class="item"> ${instalacion.value} </td>
         <td class="item"> ${tecnico.value} </td>
         <td class="item"> ${cliente.value} </td>
         <td class="item"> ${detalles.value} </td>
         <td class="container-button"></td>
       `


    )
  
 
    pintarBotones(up)

  
    
  
  }    

//BOTONES
   const pintarBotones = (row) => {
           
    const importantBtn=document.createElement("button")
    importantBtn.classList.add('btn', 'btn-outline-success',"ml-1" ,"m-1")
    importantBtn.innerHTML=`<i class="fa fa-exclamation-triangle" ></i>`
    
   

    const deleteBtn= document.createElement("button")
    deleteBtn.classList.add('btn', 'btn-outline-danger' ,"ml-1" ,"m-1")
    deleteBtn.innerHTML =`<i class="fa fa-trash"></i>`
     
    const btnUp=document.createElement("button")
    btnUp.classList.add("flecha-arriba", "btn",  'btn-outline-dark')
    
    
    const btnDown=document.createElement("button")
    btnDown.classList.add("flecha-abajo", "btn", 'btn-outline-dark')
    
    // LLAMADA A FUNCIONES POR ORDEN DE BOTON

    deleteBtn.onclick = ()=>borrarElemento(row.getAttribute("id"))
    importantBtn.onclick= () => instalacionImportante(row.getAttribute("id"), rep++)
    btnUp.onclick=()=>botonUp()

    
    // editarBtn.onclick=()=>pintarModificado(row.getAttribute("id"))

    
    // row.children[4].appendChild(editarBtn)
    row.children[4].appendChild(importantBtn)
    row.children[4].appendChild(deleteBtn)
    row.children[4].appendChild(btnUp)
    row.children[4].appendChild(btnDown)

   }       

})          
     
        
        
    
     
    
    


 




