const objToSearchStr = (obj: Record<string, string>) => {
    // ["size=1", "page=10", "query=name"]
    const params: string[] = []

    Object.entries(obj).forEach((keyValue: string[]) => {
        const [key, value] = keyValue  // [size, 1]...
        var str = key + '=' + value
        params.push(str)
    })

    return params.join('&')
}

export default objToSearchStr