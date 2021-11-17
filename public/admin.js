const books_url = "http://localhost:3001/listBooks"
async function getBooks() {
    let response = await fetch(books_url)
    let data = await response.json()
    console.log(data)
}