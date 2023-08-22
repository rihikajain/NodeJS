/* const person = (callback) => {
    setTimeout(() => {
        console.log("here is the login");
        callback();
    }, 2000)
};

const login = (callback) => {
    setTimeout(() => {
        console.log("enter id");
        callback();
    }, 2000)
};

const password = (callback) => {
    setTimeout(() => {
        console.log("enter password");
        callback();
    }, 2000)
};

const select = (callback) => {
    setTimeout(() => {

        const what = true
            if (what == true){
                console.log("user");
            }
            else{
                console.log("admin");
            }
        console.log("");
        callback(what);
    }, 2000);
};




console.log("lets login...");
person(() => {
    console.log("");
    login(() => {
        console.log("");
        password(() => {
            console.log("");
            select(()=>
            console.log("ended"));
        });
    });
}); */

const person = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login");
            resolve();
        }, 2000);
    });
};

const login = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("id done");
            resolve();
        }, 2000);
    });
};

const password = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("password done");
            resolve();
        }, 2000);
    });
};

const select = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const what = true
            if (what == true){
                console.log("user");
            }
            else{
                console.log("admin");
            }
            resolve(what);
        }, 2000);
    });
};





console.log("login.......");
person()
    .then(() => {
        console.log("write id....");
        return login();
    })

    .then(() => {
        console.log("write password....");
        return password();
    })

    .then(() => {
        console.log("selecting....");
        return select();
        console.log("ended");
    })
    .then(() => {
        console.log("ended");
    })

    .catch((error) => {
        console.log("error!!!" + error);
    });
