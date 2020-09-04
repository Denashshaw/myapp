// ============================= Promise Concept for handling function calls ===========================

// const promise = new Promise((resolve, reject) => {
// 	setTimeout(()=>{
// 		// resolve({'user': 'denash'});
// 		reject(new Error('Error try again later'));
// 	}, 2000);
// });

// promise.then(user => {
// 	console.log(user);
// }).catch(err => console.log(err.message))

// ================================== Promise concept with multiple example ==================================

console.log('Start')

function loginUser(username){
  return new Promise((resolve, reject)=> {
	  setTimeout(()=> {
	    resolve({'username':username});
	  }, 3000);
  })
}

function getuserVids(videos){
  return new Promise((resolve, reject)=> {
	  setTimeout(()=>{
	    resolve ([10,20,30,40,50]);
	  }, 1000);
  })
}

function getVideoDetails(title){
  return new Promise((resolve, reject)=> {
	  setTimeout(()=>{
	    resolve('title one');
	  }, 1000)
  })
}

// const user = loginUser('denash', (res)=> {
//   console.log(res);
//   getuserVids(res.username, (val)=>{
//    console.log(val);
//     getVideoDetails(val, (ans)=> {
//       console.log(ans)
//     });
//   });  
// });

// loginUser('denash')
// 	.then(user => getuserVids(user.username))
// 	.then(videos => getVideoDetails(videos[0]))
// 	.then(detail => console.log(detail));
async function getAlldata(){
	const user = await loginUser('denash');
	const videos = await getuserVids(user.username);
	const details = await getVideoDetails(videos[0]);
	console.log(user,videos,details);	
}

getAlldata();
console.log('End')


// ================================== Multiple promise concept ==================================
// const yt = new Promise(resolve => {
// 	setTimeout(()=>{
// 		console.log('Getting stuffs please wait...');
// 		resolve({videos: [10,20,30,40]});
// 	}, 1000);
// })

// const fb = new Promise((resolve, reject) => {
// 	setTimeout(()=>{
// 		resolve({username : 'denash'});
// 		// reject('Somethings aRE WROMNG');
// 	},3000)	
// })

// Promise.all([yt, fb])
// 	.then(res => console.log(res))
// 	.catch(err => console.log(err));






