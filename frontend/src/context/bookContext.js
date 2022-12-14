import { createContext, useReducer } from "react";

export const booksContext = createContext()

export const booksReducer = (state, action) => {
    switch (action.type) {
        case "SET_BOOKS":
            return {
                books: action.payload
            }
        case "CREATE_BOOK":
            return {
                books: [action.payload, ...state.books]
            }
        case "DELETE_BOOK":
            return {
                books: state.books.filter((book) => book._id !== action.payload._id)
            }
        default:
            return state

    }
}

export const BooksContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(booksReducer, {
        books: null
    })

    return (
        <booksContext.Provider value={{ ...state, dispatch }}>
            {children}
        </booksContext.Provider>

    )
}