import {useState} from "react";

export default function Page2() {
  const tableList = [
    {
      num: 'R09',
      address: "Winnipeg",
      name: "Jurriaan van der Broek"
    },
    {
      num: 'R02',
      address: "Havana",
      name: "Thoma Fulloway"
    },
    {
      num: 'R03',
      address: "Montreal",
      name: "Alberto Raya"
    },
    {
      num: 'R05',
      address: "Seville",
      name: "Adam Denisov"
    },
    {
      num: 'R01',
      address: "Austin",
      name: "Sofietje Boksem"
    },
    {
      num: 'R09',
      address: "Chicago",
      name: "Lubomir Dvorak"
    },
    {
      num: 'R03',
      address: "Miami",
      name: "Hashim Briscam"
    },
    {
      num: 'R03',
      address: "San Francisco",
      name: "Alan Marti"
    },
  ]
  const [newTable, setTableList] = useState(tableList);
  const deleteTitle = (i) => {
    let tableData = newTable.slice();
    tableData.splice(i, 1);
    setTableList(tableData);
  }
  // const [table, setNewTable] = useState(tableList)
  // const [showTable, setShowTable] = useState(tableList)
  const onAddBtnClicked = () => {
    let tableData = Math.floor(Math.random() * tableList.length)
    // console.log(newTable)
    // console.log(tableList[newTable])
    const showTable = newTable.slice()
    showTable.push(tableList[tableData])
    // console.log(tableList[newTable])
    // console.log(addTable)
    setTableList(showTable)
    console.log(showTable)
  }

  return (
    <div className="titleTable">
      <table className="table">
        <caption>
          <svg t="1632661535456" className="icon" viewBox="0 0 1024 1024" version="1.1"
               xmlns="http://www.w3.org/2000/svg" p-id="4199" width="20" height="20" onClick={onAddBtnClicked}>
            <path
              d="M904 64c30.9 0 56 25.1 56 56v784c0 30.9-25.1 56-56 56H120c-30.9 0-56-25.1-56-56V120c0-30.9 25.1-56 56-56h784m0-64H120C53.7 0 0 53.7 0 120v784c0 66.3 53.7 120 120 120h784c66.3 0 120-53.7 120-120V120c0-66.3-53.7-120-120-120z"
              fill="#7A7A7A" p-id="4200"></path>
            <path d="M736 480H288c-17.7 0-32 14.3-32 32s14.3 32 32 32h448c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
                  fill="#7A7A7A" p-id="4201"></path>
            <path d="M480 288v448c0 17.7 14.3 32 32 32s32-14.3 32-32V288c0-17.7-14.3-32-32-32s-32 14.3-32 32z"
                  fill="#7A7A7A" p-id="4202"></path>
          </svg>
        </caption>
        <thead>
        <tr>
          <th>Title</th>
          <th>Title</th>
          <th>Title</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        {
          newTable.map((table, i) => {
            return (
              <tr>
                <td>{table.num}</td>
                <td>{table.address}</td>
                <td>{table.name}</td>
                <td id="th4">
                  <svg t="1632661305911" className="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="3134" width="20" height="20"
                       onClick={() => deleteTitle(i)}>
                    <path
                      d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zM864 256H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                      p-id="3135" fill="#1296FE"></path>
                  </svg>
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}
