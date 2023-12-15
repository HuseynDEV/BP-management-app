import {configureStore} from '@reduxjs/toolkit'
import user from './store/userStore'

export const store=configureStore({
    reducer:user
})