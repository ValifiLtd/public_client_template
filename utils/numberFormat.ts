export function formatNumber(number: number) {
    return new Intl.NumberFormat("en-UK", { maximumFractionDigits: 0 }).format(number);
}

export function formatCurrency(number: number) {
    return new Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "GBP",
        maximumFractionDigits: 0,
    }).format(number);
}
