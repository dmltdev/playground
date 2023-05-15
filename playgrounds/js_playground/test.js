const calculatePrice = (price, taxes, description) => {
    taxes = taxes ?? 0.05
    description = description ?? "Default item"
    const total = price * (1 + taxes)
    console.log(
        `%c${description} with tax:%c $${total}`,
        "font-weight: bold",
        "color: red"
    )
}

calculatePrice(100, 0.07, "Item 1");
calculatePrice(100, 0, "Item 2");
calculatePrice(100, undefined, undefined);