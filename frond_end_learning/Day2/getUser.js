
const user = [{id:1,name: 'John', age: 25},
                {id:2,name: 'Emily', age: 30},
                {id:3,name: 'Michael', age: 20}

];
async function fetchData() {
    const ud = await getUser();
    console.log(ud);
    const uid = await getUserById(1);
    console.log(uid);
  }
function getUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if(success){
                resolve(user);
            }
            else{
                reject('User not found');
            }
            
        }, 5000);
    });
}

function getUserById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const u = user.find(user => user.id === id);
            if (u) {
                resolve(u);
            } else {
                reject('User not found');
            }
        }, 7000);
    });
}


fetchData();