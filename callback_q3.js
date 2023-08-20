const order = (callback) => {
    setTimeout(() => {
        console.log("order received!");
        callback();
    }, 3000);
};

const production = (callback) => {
    setTimeout(() => {
        console.log("first starting with tikki");
        callback();
    }, 3000);
};

const potato = (callback) => {
    setTimeout(() => {
        console.log("boiled and mesh mesh");
        callback()
    }, 3000);
};

const tikki = (callback) => {
    setTimeout(() => {
        console.log("tikki is grilled");
        callback();
    }, 3000);
};

const veg = (callback) => {
    setTimeout(() => {
        console.log("vegetables are grilled");
        callback();
    }, 3000);
};

const dough = (callback) => {
    setTimeout(() => {
        console.log("dough is knotted and made into shape");
        callback();
    }, 3000);
};

const baked = (callback) => {
    setTimeout(() => {
        console.log("base is baked and ready");
        callback();
    }, 3000);
};

const assemble = (callback) => {
    setTimeout(() => {
        console.log("assembling in process.....");
        console.log("base => sauce => tikki => vegetables => sauce=> cheese=> base");
        callback();
    }, 3000);
};

console.log("ordering burger......");
console.log(" ");
order(() => {
    console.log("thankyou for ordering, we will soon deliver you your order");
    console.log(" ");
    production(() => {
        potato(() => {
            tikki(() => {
                veg(() => {
                    console.log("tikki done now base will be made");
                    console.log(" ");
                    dough(() => {
                        baked(() => {
                            console.log(" ");
                            assemble(() => {
                                console.log(" ");
                                console.log("done and delivered :), happy eating");
                            })
                        })
                    })
                })
            })
        })
    })
})