const ticketorder = (callback) => {
    setTimeout(() => {
        console.log("ticket placed");
        callback();
    }, 2000);
};

const airport = (callback) => {
    setTimeout(() => {
        console.log("went to airport");
        callback();
    }, 1000);
};

const bpass = (callback) => {
    setTimeout(() => {
        console.log("bording pass taken");
        callback();
    }, 1000);
};

const scheck = (callback) => {
    setTimeout(() => {
        console.log("security check done");
        callback();
    }, 2000);
};

const selfcheck = (callback) => {
    setTimeout(() => {
        console.log("self check done");
        callback();
    }, 3000);
};

const npanel = (callback) => {
    setTimeout(() => {
        console.log("passed the panel");
        callback();
    }, 1000);
};

const bus = (callback) => {
    setTimeout(() => {
        console.log("boarded bus");
        callback();
    }, 2000);
};

const airplane = (callback) => {
    setTimeout(() => {
        console.log("boarderd the plane");
        callback();
    }, 3000);
};

const fly = (callback) => {
    setTimeout(() => {
        console.log("take off");
        callback();
    }, 1000);
};

const destination = (callback) => {
    setTimeout(() => {
        console.log("destination reached");
        callback();
    }, 2000);
};

console.log("airplane.......");
ticketorder(() => {
    console.log("placing");
    airport(() => {
        console.log("reached airport");
        bpass(() => {
            scheck(() => {
                selfcheck(() => {
                    npanel(() => {
                        bus(() => {
                            airplane(() => {
                                fly(() => {
                                    destination(() => {
                                        console.log("day ended");
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
