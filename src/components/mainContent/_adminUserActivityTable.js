import React, {Component} from "react"
class Table extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         details: [
            { Description: 'uploaded a song', date: "Sep 18, 2018 by 11:26 PM", region: "Adelaide, Australia", CPS: "" },
            { Description: 'uploaded a song', date: "Sep 18, 2018 by 11:26 PM", region: "Adelaide, Australia", CPS: ""},
            {  Description: 'uploaded a song', date: "Sep 18, 2018 by 11:26 PM", region: "Adelaide, Australia", CPS: ""},
            { Description:  'uploaded a song', date: "Sep 18, 2018 by 11:26 PM", region: "Adelaide, Australia", CPS: ""}
         ]
      }
   }

   renderTableHeader() {
      let header = Object.keys(this.state.details[0])
      return header.map((key, index) => {
         return <th className="tableTitle_" key={index}>{key.toUpperCase()}</th>
      })
   }

   renderTableData() {
      
      return this.state.details.map((detail, index) => {
        
         const cps=<div className="cps"/>
         const { Description, date, region } = detail 
         return (
            <tr className="otherInfo_users">
               <td><span className="artistBold">Artist Name </span>{Description}</td>
               <td>{date}</td>
               <td>{region}</td>
               <td>{cps}</td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div>
            <table className='infoTable_'>
               <tbody>
                  <tr className="detailsTit_users">{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

export default Table;