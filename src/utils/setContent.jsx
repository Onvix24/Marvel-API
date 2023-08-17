import ErrorMessage from "../components/errorMessage/ErrorMessage";
import Skeleton from "../components/skeleton/Skeleton";
import Spinner from "../components/spinner/Spinner";

const setContent= (procces, Component, data) => {
   switch (procces) {
       case 'waiting'  : 
           return <Skeleton/>;
           break;
       case 'loading'  : 
           return <Spinner/>;
           break;
       case 'error'  : 
           return <ErrorMessage/>
           break;
       case 'confirmed'  : 
           return <Component data={data}/>;
           break;
       default:
           throw new Error('Unexpected procces state')
   }
}

export default setContent;