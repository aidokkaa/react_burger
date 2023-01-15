import React from 'react'

export default function Categories ({value, onChangeCategory}){
    
 

    const categories=['Все','Мясные','Вегетарианские','Острые','Гриль','Закрытые']

    return(
        <>
         <div class="categories">
              <ul>
                 {categories.map((categoryName,i)=>(<li key={i} onClick={()=>onChangeCategory(i)} className={value===i ? 'active': ""}>{categoryName}</li>))}
              </ul>
            </div>
        </>
    )
}