document.addEventListener("DOMContentLoaded", () => {

    let datos = [];

    let incidencias = []


    const cliente = document.getElementById("cliente")
    const tecnico = document.getElementById("tecnico")
    const instalacion = document.getElementById("instalacion")
    const detalle = document.getElementById("detalle")
    const BtnEnviar = document.querySelector(".btn-primary")
    const tabla = document.querySelector(".table")
    const fragment = document.createDocumentFragment()
    const template = document.getElementById("template").content
    const tBody = document.getElementById("aqui")
    const diaModi = document.getElementById("dia-m")
    const tecnicoModi = document.getElementById("tecnico-m-choose")
    const clienteModi = document.getElementById("cliente-m")
    const detallesModi = document.getElementById("detalles-m")

    class Datos {
        constructor(cliente, tecnico, instalacion, detalle, ) {

            this.cliente = cliente
            this.tecnico = tecnico
            this.instalacion = instalacion
            this.detalle = detalle
        }


    }

    const insertarDatos = () => {
        datos.push(new Datos(cliente.value, tecnico.value, instalacion.value, detalle.value))
        console.log(datos)
        pintarTabla()

    }

    const pintarTabla = () =>

        {
            console.log(datos)
            tBody.innerHTML = ("")
            datos.forEach(element => {

                const clone = template.cloneNode(true)

                clone.querySelectorAll("td")[0].textContent = element.instalacion
                clone.querySelectorAll("td")[1].textContent = element.tecnico
                clone.querySelectorAll("td")[2].textContent = element.cliente
                clone.querySelectorAll("td")[3].textContent = element.detalle
                clone.getElementById("important").classList.add('btn', 'btn-outline-success', "ml-1", "m-1")
                clone.getElementById("delete").classList.add('btn', 'btn-outline-danger', "ml-1", "m-1")
                clone.getElementById("up").classList.add("flecha-arriba", "btn", 'btn-outline-dark')
                clone.getElementById("down").classList.add("flecha-abajo", "btn", 'btn-outline-dark')
                fragment.appendChild(clone)
            })
            tBody.appendChild(fragment)

         
        }


    /* ENCUENTRA UNA COINCIDENCIA ENTRE ELEMENTO Y LO QUE PINCHAS Y DEVUELVE EL ELEMENTO*/
    tBody.addEventListener("click", e => {
        e.preventDefault()

        const palabra = e.target.textContent
        datos.forEach(element => {

            if (palabra === element.tecnico) {

                pintarModificado(element)
            }
            console.log(element.tecnico, palabra)
        })


    })

    document.querySelector(".btn-salir").addEventListener("click", e => {

        e.preventDefault()
        document.querySelector(".modificar-form").style.opacity = "0"

    })




    const pintarModificado = (element) => {

        const index = datos.findIndex(ind => ind == element)
            /* CONVIERTE EL ELEMENTO QUE HA ENTONCTRADO EN EL INDICE DEL CAMPO DEL ARRAY
             Y LO PINTA EN LA TABLA MODIFICADO*/


        document.querySelector(".modificar-form").style.opacity = "1"

        document.getElementById("dia-m").value = datos[index].instalacion

        document.getElementById("tecnico-m-choose").value = datos[index].tecnico

        document.getElementById("cliente-m").value = datos[index].cliente

        document.getElementById("detalles-m").value = datos[index].detalle



        document.querySelector(".btn-modifica").addEventListener("click", (e) => {

            e.preventDefault()
            datos.instalacion = diaModi.value
            datos.tecnico = tecnicoModi.value
            datos.cliente = clienteModi.value
            datos.detalles = detallesModi.value
             datos.splice(index, 1)
             console.log(index)
           
          
            




        })


    }
    BtnEnviar.addEventListener("click", e => {
        e.preventDefault()
        insertarDatos()
    })





})