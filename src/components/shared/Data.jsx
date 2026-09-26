export const getAllData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_LINK}`)
    if (!res.ok) throw new Error('Failed to fetch data')
    return await res.json()
}

export const getSingleData = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_LINK}/${id}`)
    if (!res.ok) throw new Error('Failed to fetch data')
    return await res.json()
}