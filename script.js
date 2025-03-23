let currentLocation;

window.addEventListener('load', () => {
    dom()
})

const changeMap = () => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            setTimeout(() => {
                document.querySelector('#Peta h1').innerHTML = 'Lokasi Sekarang'
            }, 400)
            console.log(currentLocation)
            document.querySelector('#Makanan h3').style.display = 'none'
            document.querySelectorAll('.card').forEach((Element) => Element.style.display = 'block')
            currentLocation = position.coords
            const location = `https://maps.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}&hl=id&z=17&output=embed`
            document.querySelector('#Peta iframe').setAttribute('src', location)
        }
    )
}

const dom = () => {
    document.querySelector('#Home > input').addEventListener('keypress', (e) => {
        if (e.keyCode === 13) {
            document.querySelector('#Peta button').click()
            location.href = '#Makanan'
        }
    })

    document.querySelector('#Peta button').addEventListener('click', changeMap)
}