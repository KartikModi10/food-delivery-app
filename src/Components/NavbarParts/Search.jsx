import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [input, setInput] = useState("")
    const [results, setResults] = useState([])
    const [showResults, setShowResults] = useState(false)

    const wrapperRef = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (input.trim() === "") {
            setResults([])
            return
        }

        const fetchdata = async () => {
            const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`)
            const json = await data.json()
            setResults(json?.recipes || [])
            setShowResults(true)
        }

        fetchdata()
    }, [input])

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setShowResults(false)
            }
        }

        document.addEventListener("mousedown", handleOutsideClick)
        return () => document.removeEventListener("mousedown", handleOutsideClick)
    }, [])

    const closeSearch = () => {
        setIsSearchOpen(false)
        setInput("")
        setResults([])
        setShowResults(false)
    }

    const handleResultClick = (r) => {
        setShowResults(false)
        navigate(`/restaurant/${r.id}`)
    }

    return (
        <>
            {isSearchOpen ? (
                <div ref={wrapperRef} className='serchOpen flex justify-center bg-[#FE9A00] w-full z-10 fixed left-0 top-0 py-6'>
                    <div className='searchInputAndResult w-[45%] relative'>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onFocus={() => results.length > 0 && setShowResults(true)}
                            type="text"
                            name="dish-lookup-field"
                            placeholder='Search'
                            autoComplete='new-password'
                            className='text-white border flex justify-center w-full py-2 px-5 rounded-2xl bg-transparent'
                        />

                        {showResults && results.length > 0 && (
                            <div className='absolute top-[110%] left-0 w-full bg-white rounded-xl shadow-md max-h-60 overflow-y-auto'>
                                {results.map((r) => (
                                    <span
                                        key={r.id}
                                        onClick={() => handleResultClick(r)}
                                        className='block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer'
                                    >
                                        {r.name}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    <div onClick={closeSearch} className='cross hover:cursor-pointer absolute right-3 top-6'>
                        X
                    </div>
                </div>
            ) : (
                <input
                    onClick={() => setIsSearchOpen(true)}
                    type="text"
                    placeholder='Search'
                    className='border border-[#FF7F00] rounded-full px-5 py-1 w-30 shadow-gray-950'
                />
            )}
        </>
    )
}

export default Search