async function fetchdata(){
    try{
        const response=await fetch("http://jsonplaceholder.typicode.com/users");
        if(!response.ok){
            throw new Error("ntwork isssue");
        }
        const data=await response.json();
        console.log(data);
    }
    catch(error){
        console.log("eror1",error);
    }
}
fetchdata();