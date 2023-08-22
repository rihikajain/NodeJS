function delay(time){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve();
        },time);
    });
}

async function placeorder(){
    await delay(2000);
    console.log("order taken");
}

async function startproduction(){
    await delay(2000);
    console.log("production done");
}

async function printid(){
    await delay(2000);
    console.log("id taken");
}

async function productname(){
    await delay(2000);
    console.log("name done");
}

async function productdesc(){
    await delay(2000);
    console.log("descrip taken");
}

async function main(){
    console.log("oerdering... ");
    await placeorder();

    console.log("processing... ");
    await startproduction();

    console.log(" printing...");
    await printid();

    console.log("naming... ");
    await productname();

    console.log("describing... ");
    await productdesc();


}

main()