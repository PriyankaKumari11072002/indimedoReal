
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyProductSearchByQueryQuery, useProductDtaQuery } from "../../services/apis/product";
import './search.css'
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm1 ,setQueryResults } from "../../redux/features/searchSlice";

const Search1 = () => {

  const [suggestionTitleId, setsuggestionTitleId] = useState("");
  const [inputClick, setInputClick] = useState(false);
  const [showSearchMessage, setShowSearchMessage] = useState(false);
  const [queryRelatedMoreOption, setQueryRelatedMoreOption] = useState([]);
  const [searchProduct, { isError }] = useLazyProductSearchByQueryQuery();
  
  const navigate = useNavigate();
const dispatch = useDispatch()
const searchTermSelector = useSelector((state)=>state.search.searchTerm1)


  useEffect(() => {
    if (searchTermSelector.trim() !== "") {
      searchProduct(searchTermSelector).then((response) => {
        setQueryRelatedMoreOption(response.data || []);
        setShowSearchMessage(true)
        //dispatch(setQueryResults(response.data || []))
      });
    } else {
      setShowSearchMessage(false)
      setQueryRelatedMoreOption([]);
    }
  }, [searchTermSelector]);

  const handleChange = (e) => {
    setShowSearchMessage(true)
    setInputClick(true)
    dispatch(setSearchTerm1(e.target.value))
  };

  const handleSubmit= () => {
    setInputClick(false)
  
if(searchTermSelector.trim() !== ""){ 
  // navigate(`/search/${searchId}`)           //false===false query was not found  && isError===false
  navigate(`/search-results/${searchTermSelector}`);
  dispatch(setSearchTerm1(""))
  showSearchMessage(false)
}
  

  };

  const handleClick = (item) => {  
   
  setsuggestionTitleId(item.title)

   navigate(`/product/${item._id}`);

  dispatch(setSearchTerm1(""))
  setsuggestionTitleId("")



  };

  const handleKeyPress = (e) => {
   
if(e.key==='Enter'){
  setInputClick(false)

  handleSubmit()
  showSearchMessage(false)
}
  }
console.log(showSearchMessage,'showmESS')
  return (
    <>
    {/* <Paper component="form"   style={{width:'500px',display:'flex',justifyContent:'space-between'}} onSubmit={handleSubmit}  sx={{borderRadius:20,border:"1px solid #e3e3e3",pl:2,boxShadow:"none",mr:{sm:5} }}>
  <input type="text" 
  style={{border:"none",outline:"none"}}
  onChange={handleChange} placeholder='...find here anything' value={searchTermSelector} className='search-bar'/>
  <IconButton type='submit' sx={{color:"red"}}><Search/></IconButton>
</Paper>
   */}

    <div className=" search-container"  style={{height:'100%'}}>
 
    <div  className="input-container">
      <input
        type="text"
        value={suggestionTitleId?suggestionTitleId:searchTermSelector}
        onChange={handleChange}
        placeholder="Search Product"
      className={inputClick?'change-search-input':'search-input'}
       onKeyPress={handleKeyPress}
     
      />
       <button onClick={handleSubmit} className={inputClick?'change-search-button':'search-button'}><IoSearchOutline /></button>
      </div>

      <div className={inputClick?'change-suggestion':'suggestion'}>
      {showSearchMessage&&!isError?(<h1>Showing results for <span  className="text-green-600"> {searchTermSelector}</span>  </h1>) :""}

        {queryRelatedMoreOption.map((item) => (
          
        <>

          <div key={item._id} className="suggestion" onClick={() => handleClick(item)}>
            
              <h1>{item.title}</h1>
              </div>
            {/* {item.tags.map((tags)=>(
              <div key={item._id} className="suggestion" onClick={() => handleClick(item)}>
              <h1>{tags}</h1>
              </div>
            ))} */}
          </>
        ))}
        {isError && searchTermSelector.length > 0 && <p className="no-data">No Data Found for<span  className="text-green-600"> {searchTermSelector}</span>  
       </p>}
    </div>
    </div>
    
  
    </>
  );
};

export default Search1;
