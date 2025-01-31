const books_url = "http://localhost:3001/listBooks"
const update_url = "http://localhost:3001/updateBook"
const root = document.querySelector("#root")

async function getBooks() {
    let response = await fetch(books_url)
    let data = await response.json()
    // console.log(data)
    data.forEach(page)
}

function page(book) {
    let li = document.createElement("li")
    let input = document.createElement("input")
    let btn = document.createElement("button")

    li.textContent = book.title
    input.value = book.quantity
    btn.textContent = "Save"

    root.append(li, input, btn)

    btn.addEventListener("click", () => {
        fetch(update_url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: book.id,
                quantity: input.value
            })
        })
    })
}

getBooks()