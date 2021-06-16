 document.addEventListener("DOMContentLoaded", () =>

     {
         const cliente = document.getElementById("cliente");
         const tecnico = document.getElementById("tecnico");
         const dia = document.getElementById("instalacion");
         const detalle = document.getElementById("detalle");
         const BtnEnviar = document.getElementById("enviar");
         const template = document.getElementById("template").content;
         const tBody = document.getElementById("aqui")
         const fragment = document.createDocumentFragment()


         let incidencia = []

         class Datos {
             constructor(id, cliente, tecnico, dia, detalle) {
                 this.id = id;
                 this.cliente = cliente;
                 this.tecnico = tecnico;
                 this.dia = dia;
                 this.detalle = detalle;

             }
         }

         function rellenarDatos() {

             incidencia.push(new Datos(Date.now(), cliente.value, tecnico.value, dia.value, detalle.value))
             console.log(incidencia)
             pintarTabla()


         }



         BtnEnviar.addEventListener("click", e => {
             e.preventDefault()
             rellenarDatos();

         })

         const pintarTabla = () => {

             tBody.innerHTML = ""
             incidencia.forEach(element => {
                 const clone = template.cloneNode(true)
                 clone.querySelectorAll("td")[0].textContent = element.id
                 clone.querySelectorAll("td")[1].textContent = element.dia
                 clone.querySelectorAll("td")[2].textContent = element.tecnico
                 clone.querySelectorAll("td")[3].textContent = element.cliente
                 clone.querySelectorAll("td")[4].textContent = element.detalle


                 fragment.appendChild(clone)

             })
             tBody.appendChild(fragment)
         }

         tBody.addEventListener("click", e => {
             e.preventDefault
             let identificador = e.target.textContent
             let identificadorInt = parseInt(identificador)
             console.log(identificador, identificadorInt)
             document.querySelector(".botones").style.opacity = "0"

             incidencia.forEach(element => {

                 const indice = incidencia.findIndex(ind => ind == element)
                 console.log(element.id)
                 if (identificadorInt === element.id) {

                     borrar(indice)
                     return

                 }



             })

         })

         const borrar = (erase) => {
             console.log(erase)
             incidencia.splice(erase, 1)

             pintarTabla()
         }


















     })