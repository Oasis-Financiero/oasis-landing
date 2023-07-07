import products from "../ProductTable/CardProduct/products";

const kreditiweb = products.filter(prod => prod.producto === 'KreditiWeb')

const anual = Number(kreditiweb[0]?.tasa?.anual / 100).toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 2
})


const totalPay = kreditiweb[0]?.total.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
})

const mensualPay = kreditiweb[0]?.mensual.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
})

const comision = Number(kreditiweb[0]?.comision / 100).toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 0
})

const text1 = 'CAT PROMEDIO del 94.6% sin IVA. Fecha de cálculo 27 de abril de 2023. CAT vigente hasta el 27 de octubre de 2023.'
const text2 = 'La tasa presentada es anual, simple, fija, antes de impuestos y podrá variar del 16.50% al 81.45% según la calificación crediticia.'
const text3 = `Para fines informativos y de comparación.  Consultar términos, condiciones y comisiones en nuestro aviso de privacidad`


export { anual, totalPay, mensualPay, comision, text1, text2, text3 }