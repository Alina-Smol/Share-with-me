import ClearIcon from '@mui/icons-material/Clear';
import './CreatePage.scss'

const InputsSearch =({searchValue, setSearchValue, findBooks})=>{

    const handleChange = (even) => {
        console.log(even.target.value)
        setSearchValue({search: even.target.value});
        console.log('search target', {search: even.target.value})
        findBooks({search: even.target.value})
    }
    return(
        <div className="search">
            <input className="input_book" placeholder="Название книги" onChange={(handleChange)}  value={searchValue}/>
            {searchValue && <div
                onClick={() => setSearchValue({search:''})} onChange={handleChange}><ClearIcon/></div>}
        </div>
    )
}

export default InputsSearch