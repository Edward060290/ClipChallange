import React from 'react'
import Transaction from './Transaction.jsx'

const TransList = (props) => (
  <div className="Transactions-List">
    {props.list.map((item, index) => <Transactions item={item} key{index} />}
  </div>
)

export default TransList;
