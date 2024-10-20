document.getElementById('likeCount').addEventListener('input', enableButton);
document.getElementById('commentCount').addEventListener('input', enableButton);
const btn = document.getElementById('reactButton');
function enableButton() {
  const likeCount = document.getElementById('likeCount').value;
  const commentCount = document.getElementById('commentCount').value;
  // document.getElementById('reactButton').disabled = !(likeCount && commentCount);
  btn.disabled = !(likeCount && commentCount);
}



btn.addEventListener('click', async () => {

  // old code starts here
  const likeCount = document.getElementById('likeCount').value;
  const commentCount = document.getElementById('commentCount').value;

  chrome.tabs.update({ url: "https://www.linkedin.com/feed/" ,active:false});

  // code to send the data to the content.js file
   chrome.tabs.query({ active: true, currentWindow: true }, async function(tabs) {
    console.log('tab value is: ',tabs[0]);
    try {
      await chrome.tabs.sendMessage(tabs[0].id, { likeCount: likeCount, commentCount: commentCount });
    } catch (error) {
      console.log("the error is : ",error);
    }
    
  });
  // old code ends here

  // new code starts here
  // const likeCount = document.getElementById('likeCount').value;
  // const commentCount = document.getElementById('commentCount').value;

  // // Create a new tab with the desired URL
  // const newTab = await chrome.tabs.create({ url: "https://www.linkedin.com/feed/",active:false });

  // // Inject content script into the newly created tab



  // await chrome.scripting.executeScript({
  //   target: { tabId: newTab.id },
  //   files: ['content.js'], // Replace 'content.js' with the actual file path
  // });

  // // Send the data to the `content.js` script in the new tab
  // try {
  //   await chrome.tabs.sendMessage(newTab.id, { likeCount, commentCount });
  //   console.log('Data sent successfully to content.js!');
  // } catch (error) {
  //   console.error("Error sending data:", error);
  // }

  // end of new code
 
});

// chrome.runtime.onMessage.addListener((a)=>{
//   console.log('received from the content.js file:',a);
// });




