import React, { useState } from 'react';
import ModalNotSaved from '../elements/ModalNotSaved';
import ModalConfigPluggin from './ModalConfigPluggin';
import Orchestration from './Orchestration';


const EditPluginList = ({ listPlugin, setListPlugin, filterPluggin, orchestration}) => {
  
  const [modalNotSaved, setModalNotSaved] = useState(false);

  const createYaml = () => setModalNotSaved(true);

  return (
    <div>
      <span>EditPluginList</span>
      <ul>
        { listPlugin.length === 0 ? (
          <h1 className="text-center fst-italic text-black-50">Add a new plugin.</h1>
        ): (
        <ModalConfigPluggin listPlugin={listPlugin} setListPlugin={setListPlugin} filterPluggin={filterPluggin} />
        )}
        </ul>
      <button onClick={() => createYaml()}>CREATE</button>
      {modalNotSaved && <ModalNotSaved closeModal={setModalNotSaved} />}
      <Orchestration orchestration={orchestration} />
    </div>
  )
}

export default EditPluginList
