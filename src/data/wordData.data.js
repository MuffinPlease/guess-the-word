const wordData = (category) => {
    // 'Frutas','Marcas','Colores','Red_Social','Paises'
    const words = {
        Frutas: ['Limon','Fresa','Melon','Mango','Mora','Naranja','Pera','Platano','Pomelo','Sandia','Cereza','Uva','Lima','Manzana'],
        Marcas: ['Apple','Amazon','Microsoft','Google','Samsung','Cocacola','Disney','Netflix','Nike','Adidas','Spotify','Paypal','Zoom','Lego'],
        Colores: ['Azul','Rojo','Amarillo','Naranja','Rosa','Morado','Violeta','Verde','Negro','Blanco','Café'],
        Red_social: ['Facebook','Youtube','Whatsapp','Instagram','Tiktok','Twitter','Telegram','Linkedin','Pinterest','Reddit','Café'],
        Paises: ['Mexico','Canada','China','Brasil','Colombia','Argentina','Peru','Chile','Suecia','Japon','Dinamarca','Noruega','Suiza','Australia']
    }
    return (words[category]).map(word => word.toUpperCase());
}

export default wordData;