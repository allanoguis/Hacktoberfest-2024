import axios from "axios";


export const saveGame = async (data) => {
    try {
        const reviewsUrl = process.env.NEXT_PUBLIC_API_KEY;

        return await axios.post(`${reviewsUrl}/add`, data);
    } catch (error) {
        console.log("Error while calling saveGame API", error);
    }
}
