export const getAllData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_LINK}`, { cache: 'force-cache' });
    if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }
    return res.json();
};

export const getSingleData = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_LINK}/${id}`, { cache: 'force-cache' });
    if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }
    return res.json();
};