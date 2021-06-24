 document.addEventListener("DOMContentLoaded", () =>

     {
         const cliente = document.getElementById("cliente");
         const tecnico = document.getElementById("tecnico");
         const dia = document.getElementById("instalacion");
         const detalle = document.getElementById("detalle");
         const BtnEnviar = document.getElementById("enviar");
         const template = document.getElementById("template").content;
         const tBody = document.getElementById("aqui")
         let rojo
         let rojoI = [0]
         let identificador
         let identificadorInt

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

                 for (let i = 0; i <= rojoI.length; i++) {
                     if (rojoI[i] === element.id) {

                         const indice = incidencia.findIndex(ind => ind == element)

                         console.log("entro")
                         tBody.style.backgroundColor = "red"
                         tBody.style.color = "white"

                     }
                 }
                 fragment.appendChild(clone)
             })
             tBody.appendChild(fragment)
         }












         /*DEVUELVE ID*/

         tBody.addEventListener("click", e => {
             e.preventDefault
                 /*COMPRUEBA SI ES EL IDENTIFICADOR LO QUE PULSAN*/
             if (e.target.classList.contains("identificador")) {
                 document.querySelector(".contenedor-boton").style.opacity = "1"

                 identificador = e.target.textContent
                 identificadorInt = parseInt(identificador)
             } else {
                 alert("HAS DE CLICKAR EN IDENTIFICADOR")
             }
         })

         /* BOTON DE BORRADO*/
         document.getElementById("erase").addEventListener("click", e => {
             e.preventDefault()

             document.querySelector(".contenedor-boton").style.opacity = "0"

             incidencia.forEach(element => {

                 const indice = incidencia.findIndex(ind => ind == element)

                 if (identificadorInt === element.id) {

                     borrar(indice)
                     return
                 }
             })

         })

         /* EN ROJO */

         document.getElementById("important").addEventListener("click", e => {

             e.preventDefault()
             document.querySelector(".contenedor-boton").style.opacity = "0"

             incidencia.forEach(element => {
                 const indice = incidencia.findIndex(ind => ind == element)

                 if (identificadorInt === element.id) {
                     rojo = true;
                     rojoI.push(identificadorInt)

                     pintarTabla(rojoI)




                 }

             })


         })

         /* BOTON move*/

         document.getElementById("move").addEventListener("click", e => {

             e.preventDefault()
             document.querySelector(".contenedor-boton").style.opacity = "0"
             let sal = false;
             incidencia.forEach((element, i) => {
                 if (sal != true && identificadorInt == element.id) {
                     sal = true
                     let abajo = element.id

                     incidencia.splice(i - 1, 0, element)
                     incidencia.splice(i + 1, 1, abajo)
                 }
                 eliminarDesechos()
             })

         })

         /* BOTON EDITAR*/

         document.getElementById("editar").addEventListener("click", e => {
             e.preventDefault()
             document.querySelector(".modificar-form").style.opacity = "1"

             incidencia.forEach((element, i) => {

                 if (identificadorInt == element.id) {
                     document.getElementById("dia-m").value = element.dia
                     document.getElementById("tecnico-m").value = element.tecnico
                     document.getElementById("cliente-m").value = element.cliente
                     document.getElementById("detalles-m").value = element.detalle
                 }
             })
         })
         document.querySelector(".btn-modifica").addEventListener("click", (e) => {
             e.preventDefault()


             incidencia.forEach(element => {

                 if (identificadorInt == element.id) {
                     element.instalacion = document.getElementById("dia-m").value
                     element.tecnico = document.getElementById("tecnico-m").value
                     element.cliente = document.getElementById("cliente-m").value
                     element.detalle = document.getElementById("detalles-m").value
                 }

             })


             document.querySelector(".modificar-form").style.opacity = "0"

             pintarTabla()

         })




         /*FUNCION DE BORRADO */

         const borrar = (erase) => {
             console.log(erase)
             incidencia.splice(erase, 1)

             pintarTabla()
         }


         /*FUNCION DE BORRADO DE ELEMENTOS INDEFINIDOS QUE CREABA */

         const eliminarDesechos = () => {

             incidencia.forEach((elemento, i) => {

                 if (elemento.id === undefined)
                     incidencia.splice(i, 1)

             })
             pintarTabla()

         }



     })