let main = document.querySelector(".main");
let cards = document.querySelector(".cards-container");
let error = document.querySelector("error-container");

fetch("https://fakestoreapi.com/products")
.then(result => {
    return result.json();
})
.then(data => {
    console.log(data);

    data.forEach(ele => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.innerHTML = `
        <h1>${ele.title}</h1>
        <img src=${ele.image}>
        <div><strong>Category:</strong> ${ele.category}</div>
        <div><strong>Price:</strong> ${ele.price}</div>
        <div><strong>Description:</strong> ${ele.description}</div>
        <div><strong>Rating:</strong> ${ele.rating.rate}</div>
        <div><strong>Review Count:</strong> ${ele.rating.count}</div>
        `;
        document.body.append(card);
    });
})
.catch(error => {
    console.log(error);
}
)