import products from "./products";

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
   products = products.sort(function (a, b) {
        return b.mensual - a.mensual
    })
}

const mensualSortedReverse = () => {
   products = products.sort(function (a, b) {
        return a.mensual - b.mensual
    })
}


export { anualSorted, anualSortedReverse, mensualSorted, mensualSortedReverse }

