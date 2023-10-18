
import { useNavigate, useLocation  } from "react-router-dom";
import useSearch from "../hooks/useSearch";

const Search = () => {
  const {searchResult, loading,search,country, setSearch,setCountry} = useSearch()

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/search';


  const handleSubmit = () => {
    navigate(from,{ state: {searchResult, loading}});
  };

  return (
    <>
    
        <div className="flex ">
        <select
                  id="role"
                  name="role" 
                  required
                  value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  className="block outline-none rounded-l-md border px-2 py-1.5 text-gray-900 shadow-sm    sm:text-sm sm:leading-6"
                >
                     <option value={""}  >Select Country</option>
                  <option value={"np"}  >Nepal</option>
                  <option value={"in"}>India</option>
                  <option value={"us"}>USA</option>
                  <option value={"au"}>Australia</option>
                  <option value={"af"}> Afganistan </option>


                </select>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" className="border border-r-0 border-l-0 w-[16vw] pl-2 border-gray-200 outline-none" />
            <button onClick={handleSubmit} className="border border-gray-200 border-l-0 rounded-r-md w-8 ">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>

        </div>

        
     
 
    </>
  );
};

export default Search;
