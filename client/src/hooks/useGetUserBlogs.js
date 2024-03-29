import { useEffect, useState } from "react";
import axios from 'axios'
import useBlogStore from "../store/useBlogStore";

const useGetUserBlogs = () => {
    const [loading, setLoading] = useState(false)
    const { setUserBlogs } = useBlogStore()
    useEffect(() => {
        setLoading(true)
        const getUserBlogs = async () => {
            try {
                const res = await axios.get("https://full-stack-blog-app-5cen.onrender.com/api/users/get")
                setUserBlogs(res?.data?.blogs)
            } catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false)
            }
        }
        getUserBlogs()
    }, [setUserBlogs])
    return { loading }
}
export default useGetUserBlogs