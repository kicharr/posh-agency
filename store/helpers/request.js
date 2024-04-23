export async function makeGetReq(url) {
    try {
        const res = await fetch(url);

        if (res?.status === 200) {
            return {
                data: res,
                status: res.status
            }
        }

    } catch (e) {
        console.log(e)
    }
}