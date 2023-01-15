import  React from 'react'
import styles from './Search.module.scss'
import closeIcon from './img/211652_close_icon.svg'
import search from './img/search_icon.svg'
import { SearchContext } from '../../App'
import debounce from 'lodash.debounce'
import { useCallback } from 'react'



export default function Search (){

const [value,setValue]=React.useState('')
const {searchValue,setSearchValue}=React.useContext(SearchContext)
const inputRef=React.useRef()

const onClickClear=()=>{
    setSearchValue('');
    setValue('')
    inputRef.current.focus()
}

const upDateSearchValue=
    React.useCallback(debounce((str)=>{
        setSearchValue(str)
        
    }, 250),[])

const onChangeInput=(event)=>{
    setValue(event.target.value);
    upDateSearchValue(event.target.value)
}


    return(
        <>
        <div className={styles.root}>
        <img className={styles.icon}src={search} alt="" />
        <input ref={inputRef} value={value} onChange={onChangeInput} 
        className={styles.input} placeholder='Поиск бургеров. . .' />
        {value && (<img onClick={onClickClear} className={styles.clearIcon} src={closeIcon} alt="" />)}
        </div>
        </>
    )
}