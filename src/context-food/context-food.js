import React, { createContext, useState, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { dataStateReducer, dataStateReducerObj } from "./dataState";

export const Context = createContext();

export const Provider = ({ children }) => {
  const navigate = useNavigate();

  const allProductsUrl = "https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=pizzas&json=true"

  const [loading, setLoading] = useState(false);
  const [dataState, dispatch] = useReducer(dataStateReducer, dataStateReducerObj);
  const [tags, setTags] = useState([])

  const fetchingData = (url) => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch( { type: 'DATA_LOADED', payload: data.products });
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchingData(allProductsUrl)
  }, []);

  const goHomeRoute = () => {
    navigate("/");
  };


  const sendPageNumberAsDispatch = (number) => {
    dispatch({type: 'PAGE_NUMBER', payload: number})
}

const getValueTagsHandler = (value) => {
        const valueTags = value.split(' ')
        const allTags = valueTags.filter(el => el)
        setTags(allTags)
}

const onTagsSearchHandler = () => {
  if(!tags.length) {
    fetchingData(allProductsUrl)
  } else {
        const base_url = 'https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=pizzas&'
        const end_url = 'json=true'
        let stringUrl = ''
        tags.forEach((tag, idx) => {
          const tagTypeIdx = idx + 1
          const tagLowerCase = tag.toLowerCase()
          stringUrl += `tagtype_${tagTypeIdx}=ingredients&tag_contains_${tagTypeIdx}=contains&tag_${tagTypeIdx}=${tagLowerCase}&`
        })
        const filteredByTagsUrl = base_url + stringUrl + end_url
        fetchingData(filteredByTagsUrl)
        setTags([])
  }
}

  const contextFood = {
    goHomeRoute,
    loading,
    dataState,
    sendPageNumberAsDispatch,
    tags,
    getValueTagsHandler,
    onTagsSearchHandler
  };

  return <Context.Provider value={contextFood}>{children}</Context.Provider>;
};
