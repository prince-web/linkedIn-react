console.log('content script is funning fine');
// let likeCount1;
let intervalId;
let completedTask = 0;



// this set of code is working fine now
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('from content.js');
  if (request.likeCount && request.commentCount) {
    // Access the likeCount and commentCount values here
    const {likeCount,commentCount} = request;
    console.log("Like Count:", request.likeCount);
    console.log("Comment Count:", request.commentCount);
    // Do something with the values
     setTimeout(checker,10000,likeCount,commentCount);
    //  chrome.runtime.sendMessage({ message: "task is done" });
    
    
    
    // const intId = setInterval(checker,10000,likeCount,commentCount);
    // setTimeout(()=>{
    //   clearInterval(intId);
    // },20000);
  }
});
// ends here


// const commentButtons = document.querySelectorAll(".comment-button");
// console.log('the commentButtons',commentButtons.length)
// commentButtons.forEach((button) => {
//   console.log(button); // Access each button element
//   button.click();
//   const element = document.getElementById("ember369");

//   // checking if the comment box is appearing or not
//   if (element) {
//     console.log("Element found!");
//   } else {
//     console.log("Element not found.");
//   }
// });




function likePost(buttons,likeCount){
  const newButtons = Array.from(buttons).splice(0,likeCount);
  if(newButtons.length>0){
    newButtons.forEach((button)=>{
      console.log(button);
      button.click();
      console.log("Button text:", button.textContent.trim());
    });
  }
}


function findCommentBoxForm(commentCount){
  const form = document.querySelectorAll('.comments-comment-box__form');
  console.log("the value of form is : ",form,form.length);
  // if form length is more than the form count
  if(form.length>=commentCount){
    if(intervalId){
      console.log('intervalId is killed now!')
      clearInterval(intervalId);
    }
    const newForms = Array.from(form).splice(0,commentCount);
    completedTask=newForms.length;
    console.log('the value of completedTask is: ',completedTask);
    newForms.forEach((f)=>{
      if(f){
        const editorElement = f.querySelector('.ql-editor');
        console.log('found commentBoxForm we are inside it',editorElement);
        if (editorElement) {
          const pElement = editorElement.querySelector('p');
          console.log('found editorElement we are inside it');
          if (pElement) {
            pElement.textContent = "CFBR";
            console.log('found pElement we are inside it');
            setTimeout(buttonFinding,3000,f);
          }else{
            console.log("Could not find <p> element within .ql-editor");
          }
        }else{
          console.log("Could not find .ql-editor element within .comments-comment-box__form");
        }
      }else{
        console.log("Could not find .comments-comment-box__form element");

      }
    })
  }else{
    // if count form.length less than commentCount
    console.log('we are inside the main bigger else block of the code!');
     intervalId  = setInterval(findCommentBoxForm,10000,commentCount);

  }

}

// change
 function checker(likeCount,commentCount){

  const buttons = document.querySelectorAll("button[aria-label='React Like']");
  // likePost(buttons,likeCount);


   setTimeout(likePost,6000,buttons,likeCount);
   
  // console.log('the value of the setTimeOut for the like btn: ', like);



  // const newButtons = Array.from(buttons).splice(0,likeCount);
  // if(newButtons.length>0){
  //   newButtons.forEach((button)=>{
  //     console.log(button);
  //     button.click();
  //     console.log("Button text:", button.textContent.trim());
  //   });
  // }

  // like btn code starts here
  // const buttons = document.querySelectorAll("button[aria-label='React Like']");
  // console.log("Before splice Found", buttons.length, "buttons with aria-label='React Like':");
  
  // if (buttons.length > 0) {
  //   console.log("Found", buttons.length, "buttons with aria-label='React Like':");
  //   console.log('the value of likeCount and commentCount: ',likeCount,commentCount);
  //   // Loop through each button and perform actions:
  //   buttons.forEach((button) => {
  //     console.log(button);  // Log the button element itself
  //     button.click();
  //     likeCount--;
  //     if(likeCount<=0){
  //       console.log('return false is executed!');
  //       return;
  //     }
  //     // Access specific properties like text content:
  //     console.log("Button text:", button.textContent.trim());

  //     // You can add further actions here, such as attaching event listeners:
  //     // button.addEventListener("click", function() {
  //     //   console.log("Like button clicked!");
  //     //   // Add your click event logic here
  //     });
  //   // });
  // } else {
  //   console.log("No buttons found with aria-label='React Like'.");
  // }
  // like btn code ends here

  // Comment btn code stats
  // const commentButtons = document.querySelectorAll(".comment-button");
  // console.log('the commentButtons',commentButtons.length)
  // commentButtons.forEach((button) => {
  // console.log(button); // Access each button element
  // button.click();
  // console.log("Comment Button text:", button.textContent.trim());
  // // const element = document.getElementById("ember369");

  // // checking if the comment box is appearing or not
  
  // });

// query is working fine. starts here
  // const commentBoxForm = document.querySelector('.comments-comment-box__form');
  
  // if (commentBoxForm) {
  //   // console.log('the value of the commentBoxForm is: ',commentBoxForm);
  //   const editorElement = commentBoxForm.querySelector('.ql-editor');
  //   console.log('found commentBoxForm we are inside it',editorElement);
    
  //   if (editorElement) {
  //     const pElement = editorElement.querySelector('p');
  //     console.log('found editorElement we are inside it');

  //     if (pElement) {
  //       pElement.textContent = "Amazing";
  //       console.log('found pElement we are inside it');
  //       setTimeout(buttonFinding,3000,commentBoxForm);
  //       // const commentBtn = commentBoxForm.querySelector('button');//
  //       // const commentBtn = commentBoxForm.querySelector('.comments-comment-box__submit-button--cr');
  //       // console.log('the value of the commentBtn',commentBtn);
  //       //  const button = document.getElementById('ember241');
  //       // const button = document.getElementById('ember241') ||
  //       //            document.querySelector('.comments-comment-box__submit-button--cr') ||
  //       //            document.querySelector('[type="submit"]') ||
  //       //            document.querySelector('button:contains("Comment")');
       

  //     } else {
  //       console.log("Could not find <p> element within .ql-editor");
  //     }
  //   } else {
  //     console.log("Could not find .ql-editor element within .comments-comment-box__form");
  //   }
  // } else {
  //   console.log("Could not find .comments-comment-box__form element");
  // }
  // query is working fine. ends here
  // findCommentBoxForm(commentCount);
  // const comment = setTimeout(findCommentBoxForm,6000,commentCount);
    setTimeout(findCommentBoxForm,6000,commentCount);
    // setTimeout(chrome.runtime.sendMessage({ message: "Hello from content.js!" }),20000);
  // console.log('The value of the comment in the setTimeOut() is: ',comment)
}

function buttonFinding(commentBoxForm){
  console.log('button finding is executed!');
  if (commentBoxForm) {
    // const commentBtn = commentBoxForm.querySelector('.comments-comment-box__submit-button--cr');
    const commentBtn = commentBoxForm.querySelector('button.comments-comment-box__submit-button--cr');
    console.log('the value of the commentBtn',commentBtn);
    commentBtn.click();
    completedTask--;
}
  
}



// if(completedTask<= 0){
//   console.log("the message is sent to popup.js");
//   chrome.runtime.sendMessage({ message: "About to finish" });
// }

// chrome.runtime.onMessage.addListener(function(message, sender,sendResponse){
// console.log(message);
// });
 
// chrome.runtime.onMessage.addListener(async function (request,sender,sendResponse) {
//   console.log('message Received in content.js!');
// })

console.log('Content.js file execution is completed!')