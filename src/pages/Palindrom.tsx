import React, { useState } from 'react'
import styles from '../style/styles.module.css';

const Palindrom = () => { 
  const [inputWord, setInputWord]= useState('')
  const [words, setwords] = useState('')
  const [palindrom, setPalindrom] = useState('')
  const [result,  setResult] = useState('')


  
    function checkPalindromeArray(arr: any) {
      const isPalindrome = (subarr: any) => {
        const len = subarr.length;
        for (let i = 0; i < len / 2; i++) {
          if (subarr[i] !== subarr[len - 1 - i]) {
            return false;
          }
        }
        return true;
      };
      let longestPalindromeSubarray = [];
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
          const subarray = arr.slice(i, j);
          if (isPalindrome(subarray) && subarray.length > longestPalindromeSubarray.length) {
            longestPalindromeSubarray = subarray;
          }
        }
      }
     
      
      return longestPalindromeSubarray;
    }
    
   
  const handleInputChange = (event: any) => {
    setInputWord(event.target.value)
   
  
  }
  const handleCheckClick = () =>{
   
    
    const array1 = inputWord.split('');
    const hasPalindrome = checkPalindromeArray(array1);


    setPalindrom(hasPalindrome)

  if(palindrom.length === 1){
    setResult("this word does not acontain a part palindrome ")
  }else{
    setResult("this part is palindrom")
  }
    setwords(inputWord)
    setInputWord('')
  }
  return (
    <div className={`bg-image ${styles.bgImage} h-screen flex justify-center items-center`}>
      <div>
     
      
      <input type="text" value={inputWord} onChange={handleInputChange} placeholder="Enter a word" className="block w-full p-4 text-black border border-gray-300 rounded-lg bg-white-50 sm:text-md focus:ring-orange-500 focus:border-orange-500 dark:bg-white-700 dark:border-orange-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-orange-500 dark:focus:border-orange-500"/>
      <button onClick={handleCheckClick} className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-black   rounded-lg border    dark:hover:text-black dark:hover:bg-white'>Check</button>
      <p className='text-black'>input words - {words}</p>
      <p className='text-black'>{result}-{palindrom}</p>
      </div>
      
    </div>
  )
}

export default Palindrom;
