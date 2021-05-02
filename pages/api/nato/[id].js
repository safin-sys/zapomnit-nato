async function callNato() {
    const res = await fetch('http://localhost:3000/api/nato')
    const nato = await res.json();
    return nato;   
}

export default async (req, res) => {
    const nato = await callNato();
    res.status(200).json(nato[req.query.id - 1])
}