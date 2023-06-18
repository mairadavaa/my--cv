import React from 'react'
import styles from '../style/styles.module.css';
import data from '../../data.json'
const Bill = () => {
  return (
    <div className={`${styles.bgImage} h-screen flex justify-center flex-col`}>
        <p className='text-black p-6'>- bill-how much amount of money to spend on lunch per week</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
          {data.map((item) =>(



          <figure key={item.id} className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-orange-50 dark:border-orange-700">
            item.balance = item.expenses - item.debt - item.receivable;
              <figcaption className="flex items-center justify-center space-x-3">
                  <img className="rounded-full w-9 h-9" src={item.image} alt={item.name}/>
                  <div className="space-y-0.5 font-medium dark:text-black text-left">
                      <div>{item.name}</div>
                      <div className="text-sm text-gray-500 dark:text-black">{item.professional}</div>
                      <div>{item.id}</div>
                  </div>
              </figcaption>    
              <ul role="list" className="space-y-5 my-7">
                  <li className="flex space-x-3">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> expenses-{item.expenses}tug</span>
                  </li>
                  <li className="flex space-x-3">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">for lunch- {item.spendYourself} tug </span>
                  </li>
                  <li className="flex space-x-3">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">debt-{item.debt} tug</span>
                  </li>
                  <li className="flex space-x-3">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">receible-{item.receivable} tug</span>
                  </li>
                  <li className="flex space-x-3">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">balance </span>
                  </li>
              </ul>
          </figure>
           ))}
      </div>

    
       
       
    </div>
  )
}

export default Bill


