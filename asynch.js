//  function greeting(userName,callback){
//     console.log(`Hello ${userName}, welcome to Akirachix`);
//     callback();
//  };

// function message(){
//     console.log(`Where your journey begins`)
// }
//  greeting(`Malika`,message);

//  setTimeout(greeting,3200);


async function acceptMessage(greet,delayedTime){
    setTimeout(()=>{
        console.log(greet);

    }, delayedTime);
}
acceptMessage(`Hello, welcome to AkiraChix`,3000,);

// You have an array of user IDs and a function getUserData(id) that 
// returns a Promise with user data when given a user ID. Write an asynchronous
// function that fetches and logs the data for each user ID one by one, in sequence.

function getUserData(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userData = { id, name: `Ella ${id}`, email: `ella${id}gmail.com` };
        resolve(userData);
      }, 1000);
    });
  }
  const userIds = [1, 2, 3];
  async function fetchAndLogUserData(userIds) {
    for (const id of userIds) {
      try {
        const userData = await getUserData(id);
        console.log(`User Data for ID ${id}:`, userData);
      } catch (error) {
        console.error(`Failed to fetch data for ID ${id}:`, error);
      }
    }
  }
  fetchAndLogUserData(userIds);

//You have an asynchronous function performTask() that returns a Promise. 
// The Promise resolves if the task is successful and rejects if there's an error. 
// Write a function that calls performTask() and logs a custom success message 
// if the task is successful, and a custom error message if there's an error.

function performTask(task){
  return new Promise((resolve,reject)=>{
      const message = true;
      if(message){
        resolve("Task is successful");
      }
  
  else {
  reject("Error")
}
  }
)};
async function performedTask() {
 performTask()
 .then(message =>{
    console.log(message);
 })
 .catch(error =>{
    console.log(error);
 })
}
performedTask();

// Retry Logic:
// Scenario:
// Write a function unstableTask that:

// 1.Accepts a taskName and failureProbability (a number between 0 and 1).
// 2. Returns a Promise that:
// Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
// Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
// Write another function executeWithRetry that:

// Accepts a taskName, retries, and failureProbability.
// Uses a retry mechanism to attempt the unstableTask up to retries times.
// Logs whether the task succeeded or failed after all attempts.
function unstableTask(taskName, failureProbability) {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber > failureProbability) {
      resolve(`${taskName} succeeded`);
    } else {
      reject(`${taskName} failed`);
    }
  });
}
async function executeWithRetry(taskName, retries, failureProbability) {
  for (let i = 1; i <= retries; i++) {
    try {
      await unstableTask(taskName, failureProbability);
      console.log(`${taskName} succeeded after ${i} attempt(s)`);
      return;
    } catch (error) {
      console.log(`${taskName} failed on attempt ${i}`);
      if (i === retries) {
        console.log(`${taskName} failed after ${i} attempts`);
      }
    }
  }
}
executeWithRetry("Task 1", 3, 0.3);







