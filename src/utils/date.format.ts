export function formatDate(
    timestamp: number | Date,
    locale: string = 'en-US',
    options: Intl.DateTimeFormatOptions = {
        year: 'numeric', month: '2-digit', day: '2-digit'
    },
): string {
    let value = timestamp;
    if (typeof timestamp === 'number') {
        value = new Date(timestamp);
    }
    return new Intl.DateTimeFormat(locale, options).format(value);
}
