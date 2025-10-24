function calculateTotalPrice(basePrice, taxRate, discount = 0) {
    const priceAfterDiscount = basePrice - discount;
    const finalPrice = priceAfterDiscount * (1 + taxRate);
    return finalPrice.toFixed(2); // Return with 2 decimal places
}
