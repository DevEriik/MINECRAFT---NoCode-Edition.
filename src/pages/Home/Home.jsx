import {useState, useEffect} from "react";
import { Card } from "../../components/Card/Card";
import { getAllItems } from "../../services/getAllItems";

const Home = () => {
    const [items, setItems]= useState([])
    const [page, setPage]= useState(1)
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    const loadItems = async () => {
        setLoading(true)
        const newItems = await getAllItems(page, 10, searchTerm)
        if (page === 1){
            setItems(newItems)
        } else {
            setItems((prevItems)=>[...prevItems, ...newItems])
        }
        setLoading(false)
    }

    useEffect(()=>{
        loadItems();
    }, [page, searchTerm])

    const handleScroll =  () => {
        const isBottom = window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight;
        if (isBottom && !loading){
            setPage((prevPage)=>prevPage+1);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
        return()=> window.removeEventListener('scroll', handleScroll)
    }, [loading]);



}
export default Home;