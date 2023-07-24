import kreditiweb from '../../../../images/products/logo_kreditiweb.png'
import mrfinan from '../../../../images/products/logo_mrfinan.png'
import kubofinanciero from '../../../../images/products/kubofinanciero.png'
import fidea from '../../../../images/products/logo--dark.svg'
import escampa from '../../../../images/products/escampa.png'



const products = [
    {
        producto: 'MrFinan',
        key: 1,
        img: mrfinan,
        tasa: {
            anual: 36.00,
            hasta: 45.00
        },
        mensual: 3450,
        total: 29990,
        comision: 0
    },
    {
        producto: 'KreditiWeb',
        key: 2,
        img: kreditiweb,
        tasa: {
            anual: 34.00,
            hasta: 55.00
        },
        mensual: 3080,
        total: 28890,
        comision: 0
    },
    // {
    //     producto: 'Kubo Financiero',
    //     key: 3,
    //     img: kubofinanciero,
    //     tasa: {
    //         anual: 32.00,
    //         hasta: 42.00
    //     },
    //     mensual: 2090,
    //     total: 28120,
    //     comision: 0
    // },
    {
        producto: 'Fidea',
        key: 4,
        img: fidea,
        tasa: {
            anual: 47.00,
            hasta: 65.00
        },
        mensual: 4050,
        total: 28890,
        comision: 0
    },
    {
        producto: 'Escampa',
        key: 4,
        img: escampa,
        tasa: {
            anual: 75.00,
            hasta: 65.00
        },
        mensual: 4050,
        total: 28890,
        comision: 0
    },

]


export default products