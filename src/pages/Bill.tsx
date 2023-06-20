import React, { useState } from 'react'
import styles from '../style/styles.module.css';
import Data from '../../data.json'
interface HTMLInputElement extends EventTarget {
  value: number;
  name: string;
}
const Bill = () => {
  const [nara, setNara]= useState({
    name: "Naraa",
    paid: 0,
    total: 0,
    lunch: 0,
    debt: 0,
    receivable:0,
    count: 0
  }
  )
  const [sara, setSara]= useState({
    name: "Saraa",
    paid: 0,
    total: 0,
    lunch: 0,
    debt: 0,
    receivable:0,
    count:0
  }
  )
  const [bata, setBata]= useState({
    name: "Bataa",
    paid: 0,
    total: 0,
    lunch: 0,
    debt: 0,
    receivable:0,
    count:0
  }
  )
  const [boldoo, setBoldoo]= useState({
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
        <div className='rounded overflow-hidden shadow-lg'>
            <div className="px-6 py-4 flex flex-col ">
                <div className="font-bold text-xl mb-2 text-black">{nara.name}</div>
                <input type="number" name="paid" placeholder="tug"  onChange={ handleInputNara} className='text-black px-4 py-3' />
                <button className="bg-orange-300 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-3" onClick={() => toCaculateNara(nara.paid)}>Paid {nara.count}</button>

            </div>
            <div className="px-6 py-2">
                <ul>
                <li className="flex items-center py-1">
                    <svg className=" h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5 8h10a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 4h6a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2zm0 4h8a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z" />
                    </svg>
                    <span className="text-gray-700">paid {nara.total} tug</span>
                </li>
                <li className="flex items-center py-1">
                    <svg className=" h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5 8h10a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 4h6a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2zm0 4h8a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z" />
                    </svg>
                    <span className="text-gray-700">lunch {nara.lunch} tug</span>
                </li>
                <li className="flex items-center py-1">
                    <svg className=" h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5 8h10a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 4h6a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2zm0 4h8a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z" />
                    </svg>
                    <span className="text-gray-700">debt {nara.debt} tug</span>
                </li>
                <li className="flex items-center py-1">
                    <svg className=" h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5 8h10a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 4h6a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2zm0 4h8a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z" />
                    </svg>
                    <span className="text-gray-700">receivable {nara.receivable} tug</span>
                </li>
                </ul>
             </div>
        </div>
        <div className='rounded overflow-hidden shadow-lg'>
            <div className="px-6 py-4 flex flex-col ">
                <div className="font-bold text-xl mb-2 text-black">{sara.name}</div>
                <input type="number" name="paid" placeholder="tug"   onChange={handleInputSara} className='text-black px-4 py-3'/>
                <button className="bg-orange-300 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-3" onClick={() => toCaculateSara(sara.paid)}>Paid  {sara.count}</button>

            </div>
            <div className="px-6 py-2">
                <ul>
                <li className="flex items-center py-1">
                    <svg className=" h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5 8h10a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 4h6a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2zm0 4h8a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z" />
                    </svg>
                    <span className="text-gray-700">paid {sara.total} tug</span>
                </li>
                <li className="flex items-center py-1">
                    <svg className=" h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5 8h10a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 4h6a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2zm0 4h8a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z" />
                    </svg>
                    <span className="text-gray-700">lunch {sara.lunch} tug</span>
                </li>
                <li className="flex items-center py-1">
                    <svg className=" h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5 8h10a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 4h6a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2zm0 4h8a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z" />
                    </svg>
                    <span className="text-gray-700">debt {sara.debt} tug</span>
                </li>
                <li className="flex items-center py-1">
                    <svg className=" h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5 8h10a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 4h6a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2zm0 4h8a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z" />
                    </svg>
                    <span className="text-gray-700">receivable {sara.receivable} tug</span>
                </li>
                </ul>
             </div>
        </div>
        <div className='rounded overflow-hidden shadow-lg'>
            <div className="px-6 py-4 flex flex-col ">
                <div className="font-bold text-xl mb-2 text-black">{bata.name}</div>
                <input type="number" name="paid" placeholder="tug"   onChange={handleInputBata} className='text-black px-4 py-3'/>
                <button className="bg-orange-300 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-3" onClick={() => toCaculateBata(bata.paid)}>Paid  {bata.count} </button>

            </div>
            <div className="px-6 py-2">
                <ul>
                <li className="flex items-center py-1">
                    <svg className=" h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5 8h10a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 4h6a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2zm0 4h8a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z" />
                    </svg>
                    <span className="text-gray-700">paid {bata.total} tug</span>
                </li>
                <li className="flex items-center py-1">
                    <svg className=" h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5 8h10a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 4h6a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2zm0 4h8a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z" />
                    </svg>
                    <span className="text-gray-700">lunch {bata.lunch} tug</span>
                </li>
                <li className="flex items-center py-1">
                    <svg className=" h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5 8h10a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 4h6a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2zm0 4h8a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z" />
                    </svg>
                    <span className="text-gray-700">debt {bata.debt} tug</span>
                </li>
                <li className="flex items-center py-1">
                    <svg className=" h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5 8h10a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 4h6a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2zm0 4h8a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z" />
                    </svg>
                    <span className="text-gray-700">receivable {bata.receivable} tug</span>
                </li>
                </ul>
             </div>
        </div>
        <div className='rounded overflow-hidden shadow-lg'>
            <div className="px-6 py-4 flex flex-col ">
                <div className="font-bold text-xl mb-2 text-black">{boldoo.name}</div>
                <input type="number" name="paid" placeholder="tug"   onChange={handleInputBoldoo} className='text-black px-4 py-3'/>
                <button className="bg-orange-300 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-3" onClick={() => toCaculateBoldoo(boldoo.paid)}>Paid {boldoo.count}</button>

            </div>
            <div className="px-6 py-2">
                <ul>
                <li className="flex items-center py-1">
                    <svg className=" h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5 8h10a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 4h6a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2zm0 4h8a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z" />
                    </svg>
                    <span className="text-gray-700">paid {boldoo.total} tug</span>
                </li>
                <li className="flex items-center py-1">
                    <svg className=" h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5 8h10a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 4h6a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2zm0 4h8a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z" />
                    </svg>
                    <span className="text-gray-700">lunch {boldoo.lunch} tug</span>
                </li>
                <li className="flex items-center py-1">
                    <svg className=" h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5 8h10a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 4h6a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2zm0 4h8a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z" />
                    </svg>
                    <span className="text-gray-700">debt {boldoo.debt} tug</span>
                </li>
                <li className="flex items-center py-1">
                    <svg className=" h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5 8h10a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 4h6a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2zm0 4h8a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z" />
                    </svg>
                    <span className="text-gray-700">receivable {boldoo.receivable} tug</span>
                </li>
                </ul>
             </div>
        </div>
        </div>
             
    </div>
  )
}

export default Bill


