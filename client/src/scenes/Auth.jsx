import React, {useRef} from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebaseHandler.js"

const Auth = () =>  {
    const EmailRef = useRef(null)
    const PassRef = useRef(null)

    const Login = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, EmailRef.current.value, PassRef.current.value)
        .then((authUser)=>{
            console.log(authUser)
        }).catch((err)=>{
            console.log(err.message)
            alert("UserName / Password is wrong.")
        }
        )
    }
    const SignUp = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, EmailRef.current.value, PassRef.current.value)
        .then((authUser)=>{
            console.log(`${authUser} created`)
            alert("User Created")
        }).catch((error)=>{
            alert(error.message)
        })
    }
  return (
    <div className='h-screen bg-red-100 flex justify-center  items-center'>
        <div className=' bg-white w-1/4 rounded-lg p-3'>
                <h1 className='text-center my-5 text-2xl'>Welcome to random Social Media</h1>
                <form className='w-full'>
                    <input type="text" placeholder="Enter Email" className="w-full bg-red-100 p-5" ref={EmailRef}/>
                    <input type="password" placeholder="Enter Password" className="w-full mt-2 bg-red-100 p-5" ref={PassRef}/>
                    <div className='mt-3 flex justify-around'>

                    <button onClick={Login} className='bg-teal-600 w-1/3  rounded-lg p-2 text-white hover:bg-teal-500'>Login</button>
                    <button onClick={SignUp} className='bg-teal-600 w-1/3  rounded-lg p-2 text-white  hover:bg-teal-500'>SignUp</button>
                    </div>
                </form>
        </div>
    </div>  
  )
}

export default Auth