import {useEffect, useState} from 'react';
import axios from '../api/axios';
import useAuth from '../hooks/useAuth';
import useDebounce from '../hooks/useDebounce';


const useSearch = ( ) => {
  const {auth} = useAuth();

  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState('');
  const [search, setSearch] = useState('');
  

  const [totalPages, setTotalPages] = useState(1);
  
    console.log(totalPages);
    
    
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const fetchSearch = async () => {
      setLoading(true);
      const res = await axios.get(
        `/user/players/all?country=${country}&pageSize=10&page=1&searchKey=${debouncedSearch}`,
        {
          headers: {
            Authorization: `Bearer ${auth?.accessToken}`,
          },
        },
      );
      // console.log(res.data);
      setSearchResult(res?.data?.data);
      // console.log(res?.data?.meta?.totalPages);
      setTotalPages(res?.data?.meta?.totalPages);
      
      // console.log(searchResult);
      
    
    };

    if (debouncedSearch ) {
      fetchSearch();
    }
  }, [debouncedSearch]);

  return {searchResult, loading,search,country, setTotalPages,totalPages, setSearch,setCountry};
};

export default useSearch;