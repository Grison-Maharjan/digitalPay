import { Inter } from 'next/font/google'
import Login from './login'
import Home from './homePage'
import { UseSelector, useSelector } from 'react-redux'

const inter = Inter({subsets: ['latin']})

export default function Main() {
    const {isLoggedIn} = useSelector((state) => state.user)
    if(isLoggedIn){
        return <Home/>
    }
    else{
        return <Login/>
    }
}