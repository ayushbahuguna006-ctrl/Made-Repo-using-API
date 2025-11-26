const token = //Enter your Git Token here; 


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



  let data = await response.json();
  alert("Repo Created");
  try{
    console.log(data);
}

catch{(error)
  console.log(error);
}
}