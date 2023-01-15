import React from 'react'
import Sort from '../components/Sort'
import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import Sceleton from '../components/PizzaBlock/Sceleton'
import Pagination from '../components/Pagination'
import { SearchContext } from '../App'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import {setCategoryId,setCurrentPage,setFilters} from '../redux/slices/FilterSlice'
import axios from 'axios'
import qs from 'qs';
import { useNavigate } from 'react-router-dom'
import { sortList } from '../components/Sort'

export default function Home (){

  const navigate=useNavigate()
const dispatch=useDispatch()
const categoryId=useSelector((state)=>state.filter.categoryId);
const sortType=useSelector(state=>state.filter.sort.sortProperty)
const currentPage=useSelector(state=>state.filter.currentPage)



    const {searchValue}=React.useContext(SearchContext)
    const [items,setItems]=React.useState([]);
    const [isLoading,setIsLoading]=React.useState(true)
    
    
   const onChangecategory=(id)=>{
       dispatch(setCategoryId(id))
   }
  
   const onChangePage=number=>{
    dispatch(setCurrentPage(number))
   }


   React.useEffect(()=>{
    if(window.location.search){
      const params=qs.parse(window.location.search.substring(1));

      const sort=sortList.find(obj=>obj.sortProperty===params.sortProperty)
     dispatch(setFilters({...params,sort}))
    }
   },[])
    React.useEffect(()=>{
        setIsLoading(true)

        const sortBy=sortType.replace('-','');
        const order=sortType.includes('-') ? 'asc' : 'desc';
        const category= categoryId>0 ? `category=${categoryId}`: '';
        const search=searchValue? `&search=${searchValue}`: ''

      // fetch(`https://63b5fb4e58084a7af3a674cf.mockapi.io/items?page=${currentPage}
      // &limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
      // .then((res)=>{
      //   return res.json()
      // })
      // .then((arr)=>{
      //   setItems(arr)
      //   setIsLoading(false)
      // })

      axios.get(`https://63b5fb4e58084a7af3a674cf.mockapi.io/items?page=
      ${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
      .then(res=>{
        setItems(res.data)
        setIsLoading(false)
      })
      window.scrollTo(0,0)
    },[categoryId,sortType,searchValue,currentPage])

    React.useEffect(()=>{
    const queryString=qs.stringify({
      sortProperty: sortType,categoryId,currentPage
    }) 
    navigate(`?${queryString}`)
    },[categoryId,sortType,searchValue,currentPage] )

     const pizzas =items.filter((obj)=>{
      if(obj.title.toLowerCase().includes(searchValue.toLowerCase())){
        return true
      }
      return false
     }).map((obj)=><PizzaBlock key={obj.id} {...obj} ></PizzaBlock>)
    return(
        <>
        <div class="content__top">
           <Categories value={categoryId} onChangeCategory={onChangecategory}></Categories>
            <Sort></Sort>
          </div>
          <h2 class="content__title">Виды бургеров:</h2>
          <div class="content__items">
          {
            isLoading
            ? [...new Array(6)].map((_,index)=> <Sceleton key={index}/>)
            : pizzas
          }
          </div>
          <Pagination currentPage={currentPage} onChangePage={onChangePage}></Pagination>
        </>
    )
}