
const globalURl = "https://linkedin.thefastech.com";
global_id = null

if (document.getElementById("loginBtn")) {
    document.getElementById("loginBtn").addEventListener("click", getLoginPage);
  }
  function getLoginPage() {
    if(global_id == null){
      localStorage.setItem("signin",true)
      let params = {
        active: true,
        currentWindow: true,
      };
      chrome.tabs.query(params, gotTab);
    
      function gotTab(tabs) {
        let msg = {
          auth: "https://testlinkedin.thefastech.com/social",
        };
        chrome.tabs.sendMessage(tabs[0].id, msg);
      }
      window.close();
    }
    else{
      let params = {
        active: true,
        currentWindow: true,
      };
      chrome.tabs.query(params, gotTab);
    
      function gotTab(tabs) {
        let msg = {
          txt: 'https://pursuenetworking.com/',
        };
        chrome.tabs.sendMessage(tabs[0].id, msg);
      }
    }
    
  }
  setInterval(() => {
    chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {

      bgpage = msg;
      console.log(msg.word)
      console.log(bgpage.word,"bgpage.word")
      if (bgpage.word?.name) {
        localStorage.setItem("bgData", JSON.stringify(bgpage.word));
      }
    });
  }, 500);


      
  setInterval(() => {
// if(bgpage.loginId) {
        //     if(global_id == null){
        //       document.getElementById("loginBtn").innerHTML = "Signing in.."
        //     }
        chrome.storage.local.get((result) => {
          console.log(result.id,'yeen id')
          if(result.id){
                document.getElementById("loginBtn").innerHTML = "Signing in.."
                const url = `${globalURl}/login`;
        
                var xhr = new XMLHttpRequest();
                xhr.open("POST", url, true);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.send(
                  JSON.stringify({
                    id: result.id,
                  })
                );
        
                xhr.onreadystatechange = function () {
                  if (xhr.readyState == 4 && xhr.status == 200) {
                    let user = JSON.parse(xhr.responseText);
                    console.log('user',user)
        
                    if (user.id) {
                      chrome.storage.local.set({
                        id: null,
                      });
                      let params = {
                        active: true,
                        currentWindow: true,
                      };
                      chrome.tabs.query(params, gotTab);
                    
                      function gotTab(tabs) {
                        let msg = {
                          the_id: user.id,
                        };
                        chrome.tabs.sendMessage(tabs[0].id, msg);
                      }
                      document.getElementById("loginBtn").innerHTML = "Signing in...."
                      localStorage.removeItem("signin")
                      localStorage.removeItem("loginId");
                      localStorage.setItem("access_token", user.access_token);
                      localStorage.setItem("user_id", user.id);
                      localStorage.setItem("username", user.username);
                      localStorage.setItem("second_user_id", user.id);
                      localStorage.setItem("second_user_name", user.name);
                      localStorage.setItem("secondUserPic", user.image);
        
                      localStorage.setItem("profilePic", user.image);
                      window.location.href = "popup.html";
                    }
                    else{
                      global_id = true
                      localStorage.removeItem("signin")
                      document.getElementById("loginBtn").innerHTML = user
                      document.getElementById("loginBtn").style.display = "revert"
                      
                    }
                  }
                };
              // }
              
        
            sendResponse(1);
            
          }
      
        })
        
  }, 500)
        
    

  word = localStorage.getItem("signin")

  if(word){
  }

  setTimeout(() => {
    yeen = localStorage.getItem("signin")
    if(yeen){
      document.getElementById("loginBtn").innerHTML = "Please Try Again"
      localStorage.removeItem("signin")
    }
  },10000)

  
