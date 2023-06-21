import classes from '../pages/Homepage/homepage.module.css'
import search_icon from '../pages/Homepage/search_icon.png'

const SearchItem = ({ search, setSearch, chats }) => {
    return (


        <div className={classes.i_ctn}>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input 
                            id='search'
                            type="text" 
                            className={classes.i_field} 
                            placeholder="Search or start new chat"
                            role={'searchbox'}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            // onChange={handleChange}
                             />
                        <img src={search_icon} alt="icon not found" className={classes.icn}></img>
                    </form>
        </div>



        // <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        //     <label htmlFor='search'>Search</label>
        //     <input
        //         id='search'
        //         type='text'
        //         role='searchbox'
        //         placeholder='Search Items'
        //         value={search}
        //         onChange={(e) => setSearch(e.target.value)}
        //     />
        // </form>
    )
}

export default SearchItem
