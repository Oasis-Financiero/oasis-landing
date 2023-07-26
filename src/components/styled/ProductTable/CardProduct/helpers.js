import products from "./products";
import { monthPayFinal } from "./CardProduct";

const anualSorted = () => {
   products = products.toSorted(function (a, b) {
        return a.tasa.anual - b.tasa.anual
    })
    
}

const anualSortedReverse = () => {
   products = products.toSorted(function (a, b) {
        return b.tasa.anual - a.tasa.anual
    })
    
}

const mensualSorted = () => {
   products = products.toSorted(function (a, b) {
        return b.mensual - a.mensual
    })
}

const mensualSortedReverse = () => {
   products = products.toSorted(function (a, b) {
        return a.mensual - b.mensual
    })
}


export { anualSorted, anualSortedReverse, mensualSorted, mensualSortedReverse }

