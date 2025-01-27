import toast from "react-hot-toast"

const axiosToastError = (error)=>{
    toast.error(
        error?.response?.data?.message
    )
}

export default axiosToastError