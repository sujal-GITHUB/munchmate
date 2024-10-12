import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

    const [cartItems, setCartItems] = useState({});
    const url = "https://chownow-backend.onrender.com"
    const [token,setToken] = useState("")
    const [darkMode, setDarkMode] = useState(false)
    const [food_list,setFoodList] = useState([])

    const addToCart = async(itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev)=>({
                ...prev, [itemId]:1
            }))
        }
        else{
            setCartItems((prev)=>({
                ...prev,[itemId]:prev[itemId]+1
            }))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }

    const fetchFoodList = async() =>{
        const response = await axios.get(url+'/api/food/list')
        setFoodList(response.data.data)
    }

    const loadCartData = async (token) => {
        try {
            const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
            setCartItems(response.data.cartData);
        } catch (error) {
            console.error("Error loading cart data:", error);
        }
    };
    
    useEffect(() => {
        async function loadData() {
            await fetchFoodList(); // Assuming fetchFoodList is defined elsewhere
    
            const storedToken = localStorage.getItem('token');
            if (storedToken) {
                setToken(storedToken);
                await loadCartData(storedToken);
            }
        }
        loadData();
    }, []);

    const removeFromCart = async(itemId) =>{
        setCartItems((prev)=>({
            ...prev,[itemId]:prev[itemId]-1
        }))
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
           if(cartItems[item] > 0){
            let itemInfo = food_list.find((product)=>product._id === item);
            totalAmount += itemInfo.price * cartItems[item]
           }
        }
        return totalAmount;
    }
 
    const contextValue={
        food_list, cartItems, setCartItems, addToCart, removeFromCart, getTotalCartAmount, url, token, setToken, darkMode, setDarkMode
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
