//******************************Task1******************************************************//

const apiURL = 'http://127.0.0.1:8000/'
const btnVote = document.querySelector('.btnVote')

btnVote.addEventListener('click', async (e) => {
    let res;
    try {
        res = await fetch(apiURL)
        res = await res.json()
    } catch (error) {
        console.log(error.message)
    }
    if (!res) return;
    btnVote.innerHTML = `You vote accepted ${res.date}`
})