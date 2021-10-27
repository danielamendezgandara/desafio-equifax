import React, {useState } from "react";
import ModalSave from "../elements/ModalSave";
import ModalDelete from "../elements/ModalDelete";

const ConfigPluginModified = ({
  pluginSelect,
  setPlugin,
  listPlugin,
  setListPlugin,
  orchestration,
  setOrchestration,
}) => {
  const [modalSave, setModalSave] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [inputKeyValue,setFieldKeyValue]=useState([]);
  const [inputList,setFieldsList]=useState([]);
  const [inputMap,setFieldsMap]=useState([]);


  console.log(inputList)
 /* const firstKeysPlugin=Object.keys(pluginSelect)
  let firstKeysConfig=[]

  if(firstKeysPlugin.length !== 0){
    firstKeysPlugin.forEach((key)=>{
      if(key==='config'){
        Object.keys(pluginSelect[key]).forEach((keyConfig)=>{
            firstKeysConfig.push(keyConfig)
        })
      }
    })
  }*/
    const pluginSelectModified=JSON.parse(JSON.stringify(pluginSelect))
    console.log(pluginSelectModified)
  

   // const createInput=()=>{
      let firstKeysConfig=[]
      let fieldsKeyValue=[]
      let fieldsList=[]
      let fieldsMap=[] 
    
      const firstKeysPlugin=Object.keys(pluginSelect)
    
      if(firstKeysPlugin.length !== 0){
        firstKeysPlugin.forEach((key)=>{
          if(key==='config'){
            Object.keys(pluginSelect[key]).forEach((keyConfig)=>{
                firstKeysConfig.push(keyConfig)
                if(Array.isArray(pluginSelect[key][keyConfig])){
                   fieldsList.push(pluginSelect[key][keyConfig][0])
                   //setFieldsList(fieldsList)
    
                }else if(!Array.isArray(pluginSelect[key][keyConfig]) && typeof(pluginSelect[key][keyConfig])==='object')
                {
                  fieldsMap.push(pluginSelect[key][keyConfig])
                  //setFieldsMap(fieldsMap)
                }else{
                  fieldsKeyValue.push({[keyConfig]:pluginSelect[key][keyConfig]})
                  //setFieldKeyValue(fieldsKeyValue)
                }
            })
          } 
        })
      }
    //}


   //useEffect(()=>{createInput()}) 
  
  //const [inputKeyValue,setFieldKeyValue]=useState([]);
  //const [inputList,setFieldsList]=useState({});
  //const [inputMap,setFieldsMap]=useState({});
  console.log(firstKeysConfig)
  
  
 // console.log(pluginSelect)

  /*Object.keys(pluginSelect.config).forEach((firstKey)=>{
      setFirstKeys([firstKey]);
  
  })*/
 /* const firstKeysPlugin=Object.keys(pluginSelect)
  let firstKeysConfig=[]
  let fieldsKeyValue=[]
  let fieldsList=[]
  let fieldsMap=[]
  
  
  if(firstKeysPlugin.length !== 0){
    firstKeysPlugin.forEach((key)=>{
      if(key==='config'){
        Object.keys(pluginSelect[key]).forEach((keyConfig)=>{
            firstKeysConfig.push(keyConfig)
            if(Array.isArray(pluginSelect[key][keyConfig])){
               fieldsList.push(pluginSelect[key][keyConfig][0])
            }else if(!Array.isArray(pluginSelect[key][keyConfig]) && typeof(pluginSelect[key][keyConfig])==='object')
            {
              fieldsMap.push(pluginSelect[key][keyConfig])
            }else{
              fieldsKeyValue.push({[keyConfig]:pluginSelect[key][keyConfig]})
              setFieldKeyValue(fieldsKeyValue)
            }
        })
      } 
    })
  }*/
   
 
  


  const handleChangeInputValue = (event) => {
     console.log(event.target.name)
     //console.log(fieldsKeyValue)

     if(fieldsKeyValue.length >0){
      fieldsKeyValue.forEach((obj)=>{
          Object.keys(obj).forEach((name)=>{
          if(event.target.name===name){
             obj[event.target.name]=event.target.value;
             
          }})

      console.log(fieldsKeyValue)
      setFieldKeyValue([...inputKeyValue,{[event.target.name]:event.target.value}])

       
        console.log(inputKeyValue)
     

        })}
      
      
      }
     

  const handleChangeInputMap = (event)=>{
       console.log(event.target.dataset.tag,event.target.name,event.target.dataset.id)
       if( fieldsMap.length >0){
        fieldsMap.forEach((obj)=>{
          Object.keys(obj).forEach((name)=>{
          if(event.target.name===name){
             obj[event.target.name]=event.target.value;
             
          }})

      
      console.log( fieldsMap)
     

        })}


    }

    const handleChangeInputList = (event)=>{
      console.log(event.target.dataset.tag,event.target.name)
      if(fieldsList.length >0){
        fieldsList.forEach((obj)=>{
         Object.keys(obj).forEach((name)=>{
         if(event.target.name===name){
            obj[event.target.name]=event.target.value;
            
         }})

     
     //console.log(fieldsMap)
    

       })}
      console.log(inputList)
   }

   /*const handleAddFieldsList = () => {
    setFieldsList([...inputList,inputList])
    console.log(inputList)
    console.log('hola')
  }*/

    
    

  //console.log(inputMap)
  //console.log(inputKeyValue)
 
  const openModalDelete = (e) => {
    e.preventDefault();
    setModalDelete(true);
  };

  const pluginChecked = (uid) => {
    const plugins = listPlugin.map((plugin) => {
      if (plugin.uid === uid) {
        plugin.checkSaved = true;
      }
      return plugin;
    });
    setListPlugin([...plugins]);
  };

  const saveId = (uid) => {
    pluginChecked(uid);
  };

  const changesSaved = (e) => {
    e.preventDefault();
    setOrchestration([...orchestration, pluginSelect]);
    setModalSave(true);
  };

  return (
    <div>
      <span>ConfigPluginModified</span>
      <form onSubmit={(e) => changesSaved(e)}>
        {firstKeysPlugin.length === 0 ? (
          <h1 className="text-center fst-italic text-black-50">
            Select and modify plugins
          </h1>
        ) : (
          <div key={pluginSelect.uid}>
            <div>
              <button onClick={(e) => openModalDelete(e)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
              </button>
              {modalDelete && (
                <ModalDelete
                  closeModal={setModalDelete}
                  pluginSelectId={pluginSelect.uid}
                  listPlugin={listPlugin}
                  setPlugin={setPlugin}
                  setListPlugin={setListPlugin}
                />
              )}
            </div>
            <label>id</label>
            <input
              type="text"
              data-name="id"
              data-tag="id"
              name="id"
            />
            <label>dependencies</label>
            <select
              data-name="dependencies"
              data-tag="dependencies"
              name="dependencies"
            >
              <option selected>dependencies</option>
              <option value="input">input</option>
              {listPlugin.map((plugin) => (
                <option key={plugin.uid} value={plugin.id}>
                  {plugin.id}
                </option>
              ))}
            </select>

            <label>stepName</label>
            <input
              type="text"
              data-name="text"
              data-tag="stepName"
              name="stepName"
            />
            <label>mainClass</label>
            <input
              type="text"
              data-name="mainClass"
              data-tag="mainClass"
              name="mainClass"
            />
            <label>Config</label>
              {firstKeysConfig.map((key,index)=>{
                return( 
                <div key={index}>
                  {Array.isArray(pluginSelect['config'][key])?
                  (<section>
                    <label>{key}</label>
                   {Object.keys(fieldsList[0]).map((item)=>{
                    if(pluginSelect['config'][key]){
                    return( <section><label>{item}</label> <input type="text" data-tag={key} name={item} onChange={(event)=>handleChangeInputList(event)}/></section>
                    )}
                   })}
                    <button>BORRAR</button>
                    <button>ADD</button>
                  </section>
                 
                  ):null}
                  {!Array.isArray(pluginSelect['config'][key]) && typeof(pluginSelect['config'][key])==='object'?
                  (<section>
                   <label>{key}</label>
                   {(Object.keys(fieldsMap[0])).map((item,i)=>{
                    return( <section>
                    <section><label>{item}</label> <input type="text"data-id={key} data-name={i} data-tag={index} name={item} onChange={(event)=>handleChangeInputMap(event)}/></section>
                    <button>BORRAR</button>
                    </section>
                    )
                   })}
                   <button>ADD</button>
                  </section>
                  ):null}
                   { typeof(pluginSelect['config'][key])!=='object'?
                  (
                   <section><label>{key}</label> <input type="text" name ={key} onChange={(event) => handleChangeInputValue(event)} /></section>
                  ):null} 
                </div>)
              
              })}
            <div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ConfigPluginModified;
