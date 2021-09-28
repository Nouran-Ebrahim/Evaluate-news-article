const postData = async(url='',data={})=>{
    //console.log('the data from server is ', data)
  const response= await fetch(url,{
    method:'POST',
    credentials: 'same-origin',
   mode:'cors',
   headers:{
       'Content-Type':'application/json'
   },
   body:JSON.stringify(data)
  })
  try{
      return await response.json()
  }
   catch(error){
       console.log(error)
   }
}

function handleSubmit(e){
   e.preventDefault()
  let url=document.getElementById('article-url').value
  if(Client.checkURL(url)){
      console.log('form submitted')
      postData('http://localhost:8081/add-url',{url}).then(data=>{
        document.getElementById('text').innerHTML=`text: ${data.sentence_list[0].text}`
          document.getElementById('agreement').innerHTML=`agreement: ${data.agreement}`
          document.getElementById('subjectivity').innerHTML=`subjectivity: ${data.subjectivity}`
          document.getElementById('confidence').innerHTML=`confidence: ${data.confidence}`
          document.getElementById('irony').innerHTML=`irony: ${data.irony}`
          document.getElementById('score_tag').innerHTML=`score_tag: ${data.score_tag}`
      })
  }else{
      alert('invaild URL')
  }
}
export {handleSubmit}