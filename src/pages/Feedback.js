import React from 'react'
import Table from '../components/table/table'
import "./Feedback.css"

const Feedback = () => {
  const headers = [ 'Name', 'Descriptipn', 'Date'];
  const data = [
    ['commentaire 5 ', ' speedwapp  est une bonne application ', '2023-02-10'],
    ['commentaire 5 ', ' speedwapp  est une bonne application ', '2023-02-10'],
    ['commentaire 5 ', ' speedwapp  est une bonne application ', '2023-02-10'],
    ['commentaire 5 ', ' speedwapp  est une bonne application ', '2023-02-10'],
    ['commentaire 5 ', ' speedwapp  est une bonne application ', '2023-02-10'],
    ['commentaire 5 ', ' speedwapp  est une bonne application ', '2023-02-10'],
    ['commentaire 5 ', ' speedwapp  est une bonne application ', '2023-02-10'],
    ['commentaire 5 ', ' speedwapp  est une bonne application ', '2023-02-10'],
  ];
  return (
    <div style={{ width : "100%" }}>
      <div className='block mt-4'>
        <h4 className='title'>Feedback</h4>
        <div className="flex mt-3 ">
          <p> Filtrer par :</p>
          <div >
            <select id="periode" name="periode" className="focus:outline-none border p-2 flex  bg-white mx-4 rounded px-2" >
              <option value="Aujourd'hui">Aujourd'hui</option>
              <option value=" La semaine derniere">La semaine dernière</option>
              <option value="Mois dernier">Mois dernier</option>
              <option value="Tout ">Tout</option>
            </select>
          </div>
          <div>
            <input type="date" className="focus:outline-none border p-1 flex text-sky-900 border-sky-700  bg-white mx-4 rounded px-2" />
          </div> 
        </div>
        <div>
        <div className='mt-4'>
      <Table headers={headers} data={data} />
    </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback