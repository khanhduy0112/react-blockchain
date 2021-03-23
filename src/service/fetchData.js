import axios from "axios";

export const fetchCoinStats = async () => {
    const url = "https://api.blockchair.com/stats"
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}