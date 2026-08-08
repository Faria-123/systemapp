export const getdata = async (get) => {
    const res = await fetch(`http://localhost:8000/${get}`);
    const result = await res.json();
    return result;
}