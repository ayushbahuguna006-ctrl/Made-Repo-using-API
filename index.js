let token ="" ; 

  let tokeninput=document.getElementById("tokenname");
  let savebtn=document.getElementById("tokmain");
  savebtn.addEventListener("click",()=>{
    token=tokeninput.value;
  })

 
  


async function createRepo() {
  let name = document.getElementById("repoName").value;

  let response = await fetch("https://api.github.com/user/repos", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Accept": "application/vnd.github+json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: name })
  });
if (!token) {
    alert("Please submit your GitHub token first!");
    return;
  }
  let value = document.getElementById("repoName").value;
  if (!value) {
    alert("Repository name cannot be empty!");
    return;
  }


  let data = await response.json();
  alert("Repo Created");
  try{
    console.log(data);
}

catch{(error)
  console.log(error);
}
}