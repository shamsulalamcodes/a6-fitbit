export const getAllData = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    return await res.json()
}

export const getSingleData = async (id) => {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/:${id}`)
    return await res.json()
}