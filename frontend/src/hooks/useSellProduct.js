import { useState } from "react";
import toast from "react-hot-toast";

const useSellProduct = () => {
    const [loading, setLoading] = useState();
    const apiUrl = import.meta.env.VITE_API_URL;

    const sell = async ({
        product_name,
        image_url,
        seller,
        seller_name,
        seller_type,
        price
    }) => {
        setLoading(true)
        try {
            const res = await fetch(`${apiUrl}/marketplace/sell`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    product_name,
                    image_url,
                    seller,
                    seller_name,
                    seller_type,
                    price
                })
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            if (data) {
                toast.success("Item listed for selling");
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return {loading, sell};
}

export default useSellProduct;