export default function slugfy(text: string) {
    return text
        .split(' ')
        .join('-')
        .toLowerCase()
        .replace(/[*+~.()'"!:@]/g, '')
}
