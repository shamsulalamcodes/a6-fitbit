export const getAllData = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    if (!res.ok) throw new Error('Failed to fetch data')
    return await res.json()
}

export const getSingleData = async (id) => {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
    if (!res.ok) throw new Error('Failed to fetch data')
    return await res.json()
}