import axios from "../Features/axios";
import React , {useState , useEffect} from 'react'
import DispalyUsers from "../components/DisplayUsers";
import useFetch from '../Features/useFetch'
import NotFound from "./notFound";
import Loading from "./loading";
 

function UsersList() {
    const [users , setUsers ]= useState([]);

    useEffect ( () => {
      async function fetchData(){
        const request = await axios.get('/users/all', {new: true })
        setUsers(request.data)
        return request;
      }
      fetchData();
    },[]);
    const { data, isPending, error } = useFetch('https://team-el-gazoly-bank-system-main-k3vbm4kpjq-wm.a.run.app/api/users/all')

  return (
    <div>
      {isPending && <Loading />}
      {error && <NotFound />}
      <DispalyUsers users={users} />
    </div>
  )
}

export default UsersList