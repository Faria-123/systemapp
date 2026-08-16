export const getdata = async (get) => {
    const res = await fetch(`http://localhost:8000/${get}`);
    const result = await res.json();
    return result;
}
export const getdatabyId = async (get, token) => {
    const res = await fetch(`http://localhost:8000/allsports/${get}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const result = await res.json();
    return result;
}
export const postdata = async (data) => {
    const res = await fetch('http://localhost:8000/bookings', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)

    });
    const dat = await res.json();
    return dat;
}
export const getbook = async (get) => {
    const res = await fetch(`http://localhost:8000/bookings/${get}`);
    const result = await res.json();
    return result;
}