import React from 'react'
import Transaction from './Transaction.jsx'

const TransList = (props) => (
  <div className="Transactions-List">
    {props.list.map((transactions, index) => <Transactions transactions={transactions} key={index} />)}
  </div>
)

export default TransList;
