import React from "react"
class Table extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         details: [
            {name: 'Song Name',  artist:"Artist Name", uploaded: "Sep 18, 2018 by 11:26 PM", region: "Adelaide, Australia","":"" },
            {name: 'Song Name', artist:"Artist Name", uploaded: "Sep 18, 2018 by 11:26 PM", region: "Adelaide, Australia","":"button" },
            {name: 'Song Name', artist:"Artist Name", uploaded: "Sep 18, 2018 by 11:26 PM", region: "Adelaide, Australia","":"button"},
            {name: 'Song Name', artist:"Artist Name", uploaded: "Sep 18, 2018 by 11:26 PM", region: "Adelaide, Australia","":"button" },
            {name: 'Song Name', artist:"Artist Name", uploaded: "Sep 18, 2018 by 11:26 PM", region: "Adelaide, Australia","":"button" }
            
         ]
      }
   }

   renderTableHeader() {
      let header = Object.keys(this.state.details[0])
      return header.map((key, index) => {
         return <th className="tableTitle" key={index}>{key.toUpperCase()}</th>
      })
   }

   renderTableData() {
      return this.state.details.map((detail, index) => {
         const btn=<button className="approve_button">Approve</button>
         const playTime=<span class="darkBtn">3:08</span>
         const { name, artist, uploaded, region,button } = detail 
         return (
            <tr className="otherInfo">
               <td ><span className="artistBold">{name} {playTime}</span></td>
             
               <td><span className="artistBold">{artist}</span></td>
               <td className="uploaded">{uploaded}</td>
              
               <td className="rregion">{region}</td>
               <td>{btn}</td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div>
            <table className='infoTable'>
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