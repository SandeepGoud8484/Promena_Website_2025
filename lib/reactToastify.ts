import { toast } from "react-toastify";

export const errorToast =( message:string ) => toast.error(message, { autoClose: 6000 });
export const successToast = ( message:string ) => toast.success(message);