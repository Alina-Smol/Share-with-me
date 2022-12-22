import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const Search =({searchValue, setSearchValue, findBooks})=>{

    const handleChange = (even) => {
        //console.log(even.target.value)
        setSearchValue({search: even.target.value});
        //console.log('search target', {search: even.target.value})
        findBooks({search: even.target.value})
    }
    const deleteInput = () => {
        setSearchValue({search:''})
        findBooks({search:''})
    }

    return(
        <div className="search_block">
            <SearchIcon/>
            <input className="input_search" placeholder="Название книги" onChange={(handleChange)}  value={searchValue} />
            {searchValue && <div
                onClick={(deleteInput)}>
                <ClearIcon fontSize="small"/>
            </div>}
        </div>
    )
}

export default Search