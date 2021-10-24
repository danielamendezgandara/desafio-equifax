import React, { useState } from 'react';
import ModalNotSaved from '../elements/ModalNotSaved';
import "../styles/EditPluginList.css"
import ModalConfigPluggin from './ModalConfigPluggin';



const EditPluginList = ({ listPlugin, setListPlugin, filterPluggin, checkSaved }) => {
  
  const [modalNotSaved, setModalNotSaved] = useState(false);

  const createYaml = () => setModalNotSaved(true);

  return (
    <div>
      <div className="list-group-item m-2 overflow-auto text-white bgItems">
        { listPlugin.length === 0 ? (
          <h1 className="text-center fst-italic text-black-50">Add a new plugin</h1>
        ): (
        <ModalConfigPluggin listPlugin={listPlugin} setListPlugin={setListPlugin} filterPluggin={filterPluggin} checkSaved={checkSaved} />
        )}
        </div>
      <button className= "buttonCreate" onClick={() => createYaml()}>Create</button>
      {modalNotSaved && <ModalNotSaved closeModal={setModalNotSaved} />}
    </div>
  )
}

export default EditPluginList
