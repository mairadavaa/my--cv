import React, { useState } from 'react'
import styles from '../style/styles.module.css';
import data from "../../data.json"

type Data =typeof data

type SortKeys = keyof Data[0]

type SortOrder = 'ascn' | 'desc'
const Database = ({data}: {data:Data}) => {
  const [sortKey, setSortKey] = useState<SortKeys> ('id')
  const [sortOrder, setSortOrder] = useState<SortOrder>('ascn')
  const headers =[
    {key: "id", label: "ID"},
    {key: "name", label: "name"},
    {key: "paid", label: "paid"},
    {key: "total", label: "total"},
    {key: "lunch", label: "lunch"},
    {key: "debt", label: "debt"},
    {key: "receivable", label: "receivable"}
  ]
  return (
    <div className={`${styles.bgImage} h-screen`}>
         <table>
        <thead>
          <tr>
            {headers.map((row) =>{
              return <td key={row.key} className='text-black py-3 px-5'>{row.label}</td>
            })}
          </tr>
        </thead>
        <tbody className=''>
          {data.map((person) => {
            return(
              <tr key={person.id} className='text-black py-3 px-5  '>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.paid}</td>
                <td>{person.total}</td>
                <td>{person.spendYourself}</td>
                <td>{person.debt}</td>
                <td>{person.receivable}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
   
  )
}

export default Database
