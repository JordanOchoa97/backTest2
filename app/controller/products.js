//Simulating getting Products from DB

export async function getProducts (limit, skip) {
    let products
    await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
    .then(res => res.json())
    .then(r => products = r);
    return products
}

export async function deleteProduct (id) {
    let product
    await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(r => product = r);
    return product
}

export async function updateProduct (payload) {
    let product
    await fetch(`https://dummyjson.com/products/${payload.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: payload.title,
            price: payload.price,
            description: payload.description,
            category: payload.category,
            brand: payload.brand
        })
    })
    .then(res => res.json())
    .then(r => product = r);
    return product
}

export async function addProduct (payload) {
    let product
    await fetch(`https://dummyjson.com/products/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(r => product = r);
    return product
}