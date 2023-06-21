import React, { FC, useState } from 'react'
import styles from '../style/styles.module.css';
import Data from '../../data.json'
import { Person } from '@/component/person';
interface HTMLInputElement extends EventTarget {
  value: number;
  name: string;
}
export interface PersonState {
  id: number;
  name: string;
  paid: number;
  total: number;
  lunch: number;
  debt: number;
  receivable: number;
  count: number;
}
 export interface PersonProps {
  state: PersonState;
  setState: React.Dispatch<React.SetStateAction<PersonState>>
  onClick: (e: number) => void
}
 const Bill: React.FC = () => {
  const [nara, setNara] = useState<PersonState>({
    id: 1,
    name: "Naraa",
    paid: 0,
    total: 0,
    lunch: 0,
    debt: 0,
    receivable: 0,
    count: 0
  });
  const [sara, setSara]= useState<PersonState>({
    id: 2,
    name: "Saraa",
    paid: 0,
    total: 0,
    lunch: 0,
    debt: 0,
    receivable:0,
    count:0
  }
  )
  const [bata, setBata]= useState<PersonState>({
    id: 3,
    name: "Bataa",
    paid: 0,
    total: 0,
    lunch: 0,
    debt: 0,
    receivable:0,
    count:0
  }
  )
  const [boldoo, setBoldoo]=useState<PersonState>({
    id: 4,
    name: "Boldoo",
    paid: 0,
    total: 0,
    lunch: 0,
    debt: 0,
    receivable:0,
    count:0
  }
  )

  const toCalculateNara = (e: number) => {
    setSara((prevState) => ({
      ...prevState,
      lunch: prevState.lunch + Number(e) / 4,
      debt:prevState.debt + Number(e)/4
    }));
  
    setBata((prevState) => ({
      ...prevState,
      lunch: prevState.lunch + Number(e) / 4,
      debt: prevState.debt + Number(e)/4
    }));
  
    setBoldoo((prevState) => ({
      ...prevState,
      lunch: prevState.lunch + Number(e) / 4,
      debt: prevState.debt + Number(e)/4
    }));
  
    setNara((prevState) => ({
      ...prevState,
      total: Number(prevState.total) + Number(e),
      count:prevState.count + 1,
      lunch: prevState.lunch + e / 4,
      receivable: prevState.receivable + Number(e)/4*3
    }));
  };
  
  const toCalculateSara = (e: number) =>{

    setNara ((prevState) => ({
        ... prevState,
        lunch: prevState.lunch + Number(e) / 4,
        debt: prevState.debt + Number(e)/4
    }))
    setBata ((prevState) => ({
        ... prevState,
        lunch: prevState.lunch + Number(e) / 4,
        debt: prevState.debt + Number(e)/4
    }))
    setBoldoo ((prevState) => ({
        ... prevState,
        lunch: prevState.lunch + Number(e) / 4,
        debt: prevState.debt + Number(e)/4
    }))
    setSara ((prevState) => ({
        ... prevState,
        total: Number(prevState.total) + Number(e),
        count:prevState.count + 1,
        lunch: prevState.lunch + e/4,
        receivable: prevState.receivable + Number(e)/4*3
    }))
  }
  const toCalculateBata = (e: number) =>{

    setSara ((prevState) => ({
        ... prevState,
        lunch: prevState.lunch + Number(e) / 4,
        debt: prevState.debt + prevState.lunch
    }))
    setNara ((prevState) => ({
        ... prevState,
        lunch: prevState.lunch + Number(e) / 4,
        debt: prevState.debt + prevState.lunch
    }))
    setBoldoo ((prevState) => ({
        ... prevState,
        lunch: prevState.lunch + Number(e) / 4,
        debt: prevState.debt + prevState.lunch
    }))
    setBata ((prevState) => ({
        ... prevState,
        total: Number(prevState.total) + Number(e),
        count:prevState.count + 1,
        lunch: prevState.lunch + e/4,
        receivable: prevState.receivable + Number(e)/4*3
    }))
  }
  const toCalculateBoldoo = (e: number) =>{

    setSara ((prevState) => ({
        ... prevState,
        lunch:prevState.lunch + Number(e) / 4,
        debt: prevState.debt + Number(e)/4
    }))
    setBata ((prevState) => ({
        ... prevState,
        lunch:prevState.lunch + Number(e) / 4,
        debt: prevState.debt + Number(e)/4
    }))
    setNara ((prevState) => ({
        ... prevState,
        lunch: prevState.lunch + Number(e) / 4,
        debt: prevState.debt + Number(e)/4,
        receivable: prevState.receivable - Number(e)/4
    }))
    setBoldoo ((prevState) => ({
        ... prevState,
        total: Number(prevState.total) + Number(e),
        count:prevState.count + 1,
        lunch: prevState.lunch + Number(e)/4,
        receivable: prevState.receivable + Number(e)/4*3
    }))
    console.log(boldoo,"boldoo")
  }
 

  
  return (
    <div className={`${styles.bgImage} h-screen flex  flex-col `}>
        <p className='text-black p-6 mt-10'>- bill-how much amount of money to spend on lunch per week</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <Person state={nara} setState={setNara} onClick={toCalculateNara}/>
        <Person state={sara} setState={setSara} onClick={toCalculateSara}/>
        <Person state={bata} setState={setBata} onClick={toCalculateBata}/>
        <Person state={boldoo} setState={setBoldoo} onClick={toCalculateBoldoo}/>
       
               
               

           
       
        </div>
             
    </div>
  )
}

export default Bill


