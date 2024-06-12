const array = [
    "Initializing Hacking",
    "Reading your files ",
    "Password files detected ",
    "Sending all password files and personal files to server",
    "Cleaning Up"
];

const additem = async (item) => {
    await randomdelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div);
};

const randomdelay = () => {
    return new Promise((resolve, reject) => {
        let rand = Math.ceil(Math.random() * 7);
        setTimeout(() => {
            resolve();
        }, rand * 1000);
    });
};

const addItemsSequentially = async () => {
    for (const item of array) {
        await additem(item);
    }
};

addItemsSequentially();
