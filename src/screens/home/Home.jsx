
import React from 'react'

import { productApi, useLazyProductDataByQueryQuery, useProductDtaQuery } from '../../services/apis/product';

import SliderComponent from '../../components/slider/slider';
import Loading from '../../components/Common/Loading/loading';

function Home() {
    const {data,isLoading}  = useProductDtaQuery()

    if (isLoading) {
      return <div>  <Loading/></div>;
    }

    const object = data.filter((items)=>items.title.toLowerCase().includes("nature's island"))                       
    



  return (
 <>
   
      {isLoading?"loading":(  <div >




<SliderComponent  title="TRENDING TODAY"  api={data}  style={{border:"4px solid green"}} />

<SliderComponent  title="PERSONAL CARE"  api={data}/>
<SliderComponent  title="SKIN CARE"  api={data}/>
<SliderComponent  title="HAIR CARE"  api={data}/>
<SliderComponent  title="TEST STRIPS"  api={data} /> 
</div>
)}
    


</>
  )
}

export default Home