import React, { FC, useState } from 'react'
import styles from '../style/styles.module.css';
import Data from '../../data.json'
import { Person } from '@/component/person';
interface HTMLInputElement extends EventTarget {
  value: number;
  name: string;
}
interface PersonState {
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
  const handleInputNara = (e: React.ChangeEvent<HTMLInputElement>): void => {
  
    const { name, value } = e.target;
    setNara((prevState) => ({
      ...prevState,
      [name]: value
    }));
    
  };
  const handleInputSara = (e:React.ChangeEvent<HTMLInputElement>): void => {
  
    const { name, value } = e.target;
    setSara((prevState) => ({
      ...prevState,
      [name]: value
    }));
    
  };
  const handleInputBata = (e: React.ChangeEvent<HTMLInputElement>): void => {
  
    const { name, value } = e.target;
    setBata((prevState) => ({
      ...prevState,
      [name]: value
    }));
    
  };
  const handleInputBoldoo = (e:React.ChangeEvent<HTMLInputElement>): void => {
  
    const { name, value } = e.target;
    setBoldoo((prevState) => ({
      ...prevState,
      [name]: value
    }));
    
  };
  const toCaculateNara = (e: number) => {
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
  
  const toCaculateSara = (e: number) =>{

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
  const toCaculateBata = (e: number) =>{

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
  const toCaculateBoldoo = (e: number) =>{

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
    <div className={`${styles.bgImage} h-screen flex justify-center flex-col`}>
        <p className='text-black p-6'>- bill-how much amount of money to spend on lunch per week</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Person state={nara}/>
        <Person state={sara}/>
        <Person state={bata}/>
        <Person state={boldoo}/>
       
                {/* <input type="number" name="paid" placeholder="tug"   onChange={handleInputSara} className='text-black px-4 py-3'/>
                <button className="bg-orange-300 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-3" onClick={() => toCaculateSara(sara.paid)}>Paid  {sara.count}</button> */}

           
       
        </div>
             
    </div>
  )
}

export default Bill


