import { getMetals, setMetal } from "./database.js"

const metals = getMetals()  //State variable (copy of the data)

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            // window.alert(`User chose metal ${event.target.value}`)
            setMetal(parseInt(event.target.value))
        }
    }
)

export const Metals = () => {  //Iterate over the copy of the metal object array
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}

