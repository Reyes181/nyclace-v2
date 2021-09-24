import {toast} from 'react-toastify';

const showToast = (type, msg) => {
    switch(type){
        case 'INFO':
            toast.info(msg,{
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar: true,
                draggable: false,
                theme: 'colored'
            })
        break;
        case 'SUCCESS':
            toast.success(msg,{
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar: true,
                draggable: false,
                theme: 'colored'
            })
        break;
        case 'ERROR':
            toast.error(msg,{
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar: true,
                draggable: false,
                theme: 'colored'
            })
        break;
        default:
            return false
    }
}

export default showToast;