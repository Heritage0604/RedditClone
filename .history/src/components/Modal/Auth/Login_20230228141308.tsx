import { Input } from '@chakra-ui/react'
import React ,{useState} from 'react'

type Props = {}

const Login = (props: Props) => {

 const [loginform,setLoginform]=useState({
  email:"",
  password:"",
 })
  return (
<form autoComplete='off'>
<Input type="email" name="email" placeholder='email' mb={2}/>
<Input type="password" name="password" placeholder='password' mb={2}/>
<Button></Button>


</form>
  )
}

export default Login