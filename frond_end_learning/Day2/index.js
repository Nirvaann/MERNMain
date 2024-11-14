function fetchD(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if(success){
                resolve('Data fetched');
            }
            else{
                reject('Data not fetched');
            }
            
        }, 2000);
    });
}

fetchD().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});