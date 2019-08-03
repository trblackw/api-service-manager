import React, { useEffect, useState } from 'react';
import { APIService } from './APIService';
import { JSON } from './constants';
import './App.css';
import { APIResponse } from './types';

const App: React.FC = () => {
   const [data, setData] = useState<any>()
   const fetchData = async ():Promise<void> => {
      try {
         const api = new APIService('secret-token').setHeaders([...JSON]);
         const res = await fetch("https://rickandmortyapi.com/api/character", api.request());
         const data: APIResponse<any> = await res.json();
         setData(data)
      } catch (error) {
         console.error(error)
      }
   }

   useEffect(() => {
      fetchData()
   }, [])
   useEffect(() => {
      console.log(data)
   }, [data])
   return (
      <div className='App'>
         <header className='App-header'>
            Hello world
         </header>
      </div>
   );
};

export default App;
