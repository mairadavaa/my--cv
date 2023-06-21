import { PersonProps, PersonState } from '@/pages/Bill';
import * as React from 'react';



 export const Person: React.FC<PersonProps> = ({ state, setState, onClick }) => {
    const { name, paid, total, lunch, debt, receivable, count } = state;
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        setState: React.Dispatch<React.SetStateAction<PersonState>>
      ) => {
        const { name, value } = e.target;
        setState((prevState) => ({
          ...prevState,
          [name]: value
        }));
      }
  return (
    <div className='rounded overflow-hidden shadow-lg  bg-orange-100'>
            <div className="px-6 py-4 flex flex-col ">
                <div className="font-bold text-xl mb-2 text-black">{name}</div>
                <input type="number" name="paid" placeholder="tug" onChange={(e) => handleInputChange(e, setState)}  className='text-black  px-4 py-3' />
                <button className="bg-orange-300 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-3" onClick={() => onClick(paid)}>Paid {count}</button>

            </div>
            <div className="px-6 py-2">
                <ul>
                <li className="flex items-center py-1">
                    <svg className=" h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5 8h10a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 4h6a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2zm0 4h8a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z" />
                    </svg>
                    <span className="text-gray-700">paid {total} tug</span>
                </li>
                <li className="flex items-center py-1">
                    <svg className=" h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5 8h10a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 4h6a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2zm0 4h8a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z" />
                    </svg>
                    <span className="text-gray-700">lunch {lunch} tug</span>
                </li>
                <li className="flex items-center py-1">
                    <svg className=" h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5 8h10a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 4h6a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2zm0 4h8a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z" />
                    </svg>
                    <span className="text-gray-700">debt {debt} tug</span>
                </li>
                <li className="flex items-center py-1">
                    <svg className=" h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5 8h10a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 4h6a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2zm0 4h8a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z" />
                    </svg>
                    <span className="text-gray-700">receivable {receivable} tug</span>
                </li>
                </ul>
             </div>
        </div>
  );
}


