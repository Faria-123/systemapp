


export const getdatato = async (get) => {

    // console.log(token);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/${get}`);
    const result = await res.json();
    return result
}




export const getdata = async (
    endpoint,
    search = "",
    sportType = "",


) => {
    try {
        const params = new URLSearchParams();

        if (search) {
            params.append("search", search);
        }

        if (sportType) {
            params.append("sportType", sportType);
        }

        const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/${endpoint}?${params.toString()}`;

        console.log("FETCHING:", url);

        const res = await fetch(url);

        console.log("STATUS:", res.status);

        if (!res.ok) {
            const errorText = await res.text();

            console.log("BACKEND ERROR:", errorText);

            throw new Error(
                `Request failed: ${res.status} ${errorText}`
            );
        }

        return await res.json();

    } catch (error) {
        console.error("getdata error:", error);

        return [];
    }
};
export const getdatabyId = async (get, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allsports/${get}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const result = await res.json();
    return result;
}
export const postdata = async (data) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
        method: "POST",
        headers: {
            "content-type": "application/json",

        },
        body: JSON.stringify(data)

    });
    const dat = await res.json();
    return dat;
}
export const getbook = async (get, token) => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${get}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const result = await res.json();
    return result;
}