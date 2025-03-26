let currentLocation;

window.addEventListener('load', () => {
    dom()
})

const bindurl = () => { }

const changeMap = () => {
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const response = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json&apiKey=e0545b91f3584fb9aebff8dce93cbef4`);
            const data = await response.json();
            console.log(data)
            setTimeout(() => {
                document.querySelector('#Peta h1').innerHTML = `📍 ${data.results[0].formatted}`
                document.querySelector('#Makanan h3').style.display = 'none'
                document.querySelectorAll('#Makanan .card').forEach((Element) => Element.style.display = 'flex')
            }, 500)
            currentLocation = position.coords
            const location = `https://maps.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}&hl=id&z=17&output=embed`
            document.querySelector('#Peta iframe').setAttribute('src', location)
        }
    )
}

const dom = () => {
    document.querySelector('#Home > input').addEventListener('keypress', (e) => {
        if (e.keyCode !== 13) return;
        const inputValue = document.querySelector('#Home > input').value

        if (inputValue !== '' && inputValue.trim() !== '') {
            changeMap()
            document.querySelectorAll('#Makanan .card-content p').forEach((items) => {
                const keyword = document.createElement('span')
                const value = document.createTextNode(`Tempat ini memiliki menu andalan ${inputValue}`)
                keyword.appendChild(value)
                keyword.style.fontWeight = 700
                items.appendChild(keyword)
            })
            document.querySelectorAll('#Makanan .card').forEach((item) => {
                item.addEventListener('click', () => [
                    location.href = `https://www.google.com/search?q=${inputValue}`
                ])
            })
            document.getElementById('Makanan').scrollIntoView({ behavior: 'smooth' });
            return;
        }

        alert('Harap Mengisi Input Pencarian Dengan Benar')
    })
    document.querySelector('#Peta button').addEventListener('click', changeMap)
    document.querySelectorAll('#Rekomendasi .card').forEach((item) => {
        item.addEventListener('click', () => [
            location.href = `https://www.google.com/search?q=${item.children[1].innerHTML}`
        ])
    })
    document.querySelectorAll('#Makanan .card').forEach((item) => {
        item.addEventListener('click', () => [
            location.href = `https://www.youtube.com/watch?v=xvFZjo5PgG0`
        ])
    })
}