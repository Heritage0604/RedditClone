import {atom} from "recoil"
 export interface AuthModalState{
  open:boolean;
  view:"login"|"signup"|"resetpassword";
 }

 const defaultModalState:AuthModalState = {
  open:false,
  view:"login"
 }