import { Input } from '@chakra-ui/react'
import React ,{useState} from 'react'

type Props = {}

const Login = (props: Props) => {

 const [loginform,setLoginform]=useState({
  email:"",
  password:"",
 })
  return (
<form au>
<Input type="email" name="email" placeholder='email' mb={2}/>
<Input type="password" name="password" placeholder='email' mb={2}/>



</form>
  )
}

export default Login