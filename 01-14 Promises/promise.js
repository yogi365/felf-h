// function getUserData()
// {
//     var a = 8;
//     const user = new Promise((resolve, reject) =>
//     {
//         setTimeout(() =>
//         {
//             if (a > 10)
//             {
//                 resolve("value of a is greater than 10");
//             }
//             else
//             {
//                 reject("Value of a is less than 10");
//             }
//         }, 2000);
//     })

//     user.then(resolveHandler).catch(rejectHandler);
//     console.log("after promise");

//     function resolveHandler(value)
//     {
//         console.log(value)
//     }

//     function rejectHandler(value)
//     {
//         console.log(value)
//     }

// }

// getUserData();


function fetchData(url)
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            if (url > 10)
            {
                resolve("A is greater than 10")
            }
            else
            {
                reject("a is smaller than 10");
            }
        })
    })
}

fetchData(5)
    .then((value) => console.log(value))
    .catch((err) => console.log(err))
    .finally(() => console.log("finally block"));

// function fetchDataSync(url) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url, false); // false makes the request synchronous
//     xhr.send();

//     if (xhr.status === 200) {
//         return xhr.responseText;
//     } else {
//         throw new Error(`Error fetching data: ${xhr.status}`);
//     }
// }

// try {
//     const data = fetchDataSync('https://jsonplaceholder.typicode.com/posts');
//     console.log(data);
// } catch (error) {
//     console.error(error);
// }


// function getUser(userId, callback)
// {
//     if (err) return err;
//     callback({ userId: userId })
// }

// function getPost(userid, callback)
// {
//     if (err) return err;
//     callback(postId);
// }

// function getComments(postId, callback)
// {
//     if (err) return err;
//     callback(["Comment1", "Comment 2"]);
// }

// function getUser(userId)
// {
//     return new Promise((resolve, reject) =>
//     {
//         resolve(userId);
//     })
// }

// function getPost(userid)
// {
//     return new Promise((resolve, reject) =>
//     {
//         resolve(userid);
//     })
// }

// function getComments(postId)
// {
//     return new Promise((resolve, reject) =>
//     {
//         resolve(["Comment1", "Comment 2"]);
//     })
// }



// getUser(1, (userId) =>
// {
//     getPost(userId, (postId) =>
//     {
//         getComments("PostId", (comments) =>
//         {
//             console.log(comments);
//         })
//     })
// })

// getUser(1).then((userId) => getPost(userId))
//     .then((postId) => getComments(postId))
//     .then((comments) => console.log(comments))
//     .catch(err => console.error(err));