const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

export function convert(num: number): string {
    if (num === 0) {
        return chars[0];
    }
    let result = ''
    while (num > 0) {
        const s = num % 62
        result = chars[s] + result
        num = Math.floor(num / 62)

    }
    return result
}

export function unique_random(counter: number, minL: number, maxL: number): string {
    let salt = 1_000_000
    const value = counter + salt
    let unique = convert(value)

    if (unique.length < minL) {
        unique = unique.padStart(minL, '0')
    }
    if (unique.length > maxL) {
        unique = unique.slice(-maxL)
    }



    return unique

}