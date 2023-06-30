import kreditiweb from '../../../../images/products/logo_kreditiweb.png'
import mrfinan from '../../../../images/products/logo_mrfinan.png'
import kubofinanciero from '../../../../images/products/kubofinanciero.png'
import fidea from '../../../../images/products/logo--dark.svg'



const products = [
    {
        producto: 'MrFinan',
        img: mrfinan,
        tasa: {
            anual: 36.00,
            hasta: 45.00
        },
        mensual: 3450,
        total:  29990,
        comision: 0
    },
    {
        producto: 'KreditiWeb',
        img: kreditiweb,
        tasa: {
            anual: 34.00,
            hasta: 55.00
        },
        mensual: 3080,
        total:  28890,
        comision: 0
    },
    {
        producto: 'Kubo Financiero',
        img: kubofinanciero,
        tasa: {
            anual: 32.00,
            hasta: 42.00
        },
        mensual: 2090,
        total:  28120,
        comision: 0
    },
    {
        producto: 'Fidea',
        img: fidea,
        tasa: {
            anual: 47.00,
            hasta: 65.00
        },
        mensual: 4050,
        total:  28890,
        comision: 0
    },

]

const anualSorted = () => {
    products.sort(function(a,b) {
        return b.tasa.anual - a.tasa.anual
    })
}

const anualSortedReverse = () => {
    products.sort(function(a,b) {
        return a.tasa.anual - b.tasa.anual
    })
}

const mensualSorted = () => {
    products.sort(function (a,b) {
        return b.mensual - a.mensual
    })
}

const mensualSortedReverse = () => {
    products.sort(function (a,b) {
        return a.mensual - b.mensual
    })
}
export { products, anualSorted, anualSortedReverse, mensualSorted, mensualSortedReverse }