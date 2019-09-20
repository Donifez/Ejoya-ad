import React, {Component} from "react"
class Table extends React.Component {
  
   constructor(props) {
      super(props)
      this.state = {
         details: [
            {description: 'paid to',  date: "Sep 18, 2018 by 11:26 PM",region: "Adelaide, Australia", amount:"$20" },
            {description: 'paid to', date: "Sep 18, 2018 by 11:26 PM", region: "Adelaide, Australia", amount:"$20" },
            {description: 'paid to', date: "Sep 18, 2018 by 11:26 PM", region: "Adelaide, Australia", amount:"$20"},
            {description: 'paid to', date :"Sep 18, 2018 by 11:26 PM", region: "Adelaide, Australia",  amount:"$20"},
            {description: 'paid to', date: "Sep 18, 2018 by 11:26 PM", region: "Adelaide, Australia", amount:"$20" }
            
         ]
      }
   }

   renderTableHeader() {
      let header = Object.keys(this.state.details[0])
      return header.map((key, index) => {
         return <th className="tableTit_le" key={index}>{key.toUpperCase()}</th>
      })
   }

   renderTableData() {
      return this.state.details.map((detail, index) => {
         const artistName=<span className="artistBold">Artist Name</span>
         const { description, date,region, amount } = detail 
         return (
            <tr className="otherInfo">
               <td >{artistName} {description} <span className="italized" > name@mail.com</span></td>
               <td> {date}</td>
               <td className="re_gion">{region}</td>
               <td className="centerBold">{amount}</td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div>
            <table className='infoTab_le'>
               <tbody>
                  <tr className="detailsTitle">{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

export default Table;