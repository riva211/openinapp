import { useState } from "react";
import TagList from "./TagList";
import "./Upload.css";
import "./TagList.css";


function Upload() {
  const [inputdata, setInputData] = useState();
  const [data, setData] = useState([]);
  const [btnDisabled,setDisabled] = useState(false)
  const fileUploadChnages = (e) => {
    console.log(e);
    console.log(e.target.value);
    let file = e.target.files[0];
    setInputData(file);
    console.log(file);
    setDisabled(true)
    // let reader = new FileReader();
    // reader.readAsText(file);
    // reader.onload = (ev) => {
    //   // console.log(reader.result)
    //   reader.result.split("\n").forEach((element, index) => {
    //     if (index > 0) {
    //       let objdata = {
    //         slNo: element.split(")[0].split(",")[0],
    //         link: element.split(")[0].split(",")[1],
    //         prefix: element.split(")[0].split(",")[2],
    //         tags: element.split(")[1].split(","),
    //       };
    //       tempData.push(objdata);
    //     }
    //   });
    //   console.log(tempData);
    //   setData(tempData);
    // };
  };

  const setTableData=(e)=>{
    e.preventDefault();
    let reader = new FileReader();
    let tempData = [];
    reader.readAsText(inputdata);
    reader.onload = (ev) => {
      // console.log(reader.result)
      reader.result.split("\n").forEach((element, index) => {
        if (index > 0) {
          let objdata = {
            slNo: element.split(`"`)[0].split(",")[0],
            link: element.split(`"`)[0].split(",")[1],
            prefix: element.split(`"`)[0].split(",")[2],
            tags: element.split(`"`)[1].split(","),
          };
          tempData.push(objdata);
        }
      });
      console.log(tempData);
      setData(tempData);
  }
}
  return (
    <div className="App flex flex-col items-center justify-center">
      {/* <div className=" flex justify-center items-center">
        <input
          type="file"
          name="file-data"
          onChange={(e) => {
            fileUploadChnages(e);
          }}
          id="file-data"
          accept=".csv"
        />
        <label htmlFor="file-data">
          {inputdata ? (
            <span>{inputdata.name}</span>
          ) : (
            <div className="blue">
              <img src={excelIcon}></img>Upload File
            </div>
          )}
        </label>
      </div> */}

     <div className=''>
      <div className='box'>
      <div className='input-bx'>
      {/* <div id="showFilebox">
          <div className='left'>
            <span className='filetype'>Csv</span>
          </div>
      </div> */}
        <form action='' className='form'>
          <input type="file" name="file-data"  onChange={(e) => { fileUploadChnages(e) }} id="upload" accept='.csv,.xls' hidden/>
          <label for='upload' className='uploadable'>
          <span><img className='excel' src='https://download.logo.wine/logo/Microsoft_Excel/Microsoft_Excel-Logo.wine.png' alt='excelLogo'/></span>
          <p>{inputdata?inputdata.name:'Drag your excel sheet here or browse'}</p>
          </label>
          <button className={btnDisabled?'upload-btn':'upload-btn disabled'} onClick={(e)=>{setTableData(e)}} >Upload</button>
        </form>
      </div>
    </div>
    </div>
      {data.length > 0 && (
        <div className="lg:h-[319px] lg:w-[965px] scrollbar-hide mt-3  overflow-scroll rounded-[8px] bg-[#F5F5F5]">
              <table >
  <thead  >
    <tr className="tablehead   " >
      <th className='min-w-[70px]'  >
      Sl No.
      </th>
      <th className='min-w-[200px]'> 
      Links
      </th>
      <th className='min-w-[150px]' >
      Prefix
      </th>
      <th className='min-w-[200px]'>
      Add Tags
      </th>
      <th className='min-w-[200px]'>
      Selected Tags
      </th>
    </tr>
  </thead>
</table>
          {data.map((objdata, index) => {
            if (index > 0) {
              return (
                <div>
                  <TagList
                    key={index}
                    slNo={objdata?.slNo}
                    links={objdata?.link}
                    prefix={objdata?.prefix}
                    tags={objdata?.tags}
                  ></TagList>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}

export default Upload;