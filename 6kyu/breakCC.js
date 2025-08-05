function solution(string) {
    const spp = string.split('').map(char => (char === char.toUpperCase() ? ' ' + char : char))

    return spp.join('')
}