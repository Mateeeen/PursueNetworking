var id = 0;
var new_id = 0;
var loc = null;
var new_location = "";
var loginId = "";
var focus = 1;
global_id = ''
total = 0;
user_c = 0;
group_c = 0
value_check = 1;
globalURl = "https://linkedin.thefastech.com/"

const State = ['Initial', 'Record', 'Download']
let stateIndex = 0
let mediaRecorder, chunks = [], audioURL = ''





var x = setInterval(() => {
  if (localStorage.getItem("id") != null && !(window.location.href.includes("https://pursuenetworking.com/"))) {
    console.log('repeat')
    loginId = localStorage.getItem("id");
    global_id = localStorage.getItem("id");
    chrome.storage.local.set({
      id: loginId,
    });
    chrome.runtime.sendMessage({ type: "auth", auth: loginId });
    clearInterval(x);
    localStorage.removeItem("id");
    loginId = "";
    window.location.href = "https://www.linkedin.com/in/"+ '?user_id=' +global_id;
    setTimeout(() => {
      localStorage.setItem('user_id',global_id)
    },10000)

  }
}, 500);

var x = setInterval(() => {
  
  var new_location = window.location.href;
  getid = localStorage.getItem("user_id");

  var temp = 0;
  if (
    new_location != loc && (new_location.includes("https://www.linkedin.com/in/") || new_location.includes("https://www.linkedin.com/company/"))
    
  ) {
    temp = 1;
    loc = new_location;
    let message = {
      loader: "loader",
    };
    chrome.runtime.sendMessage({ type: "message", message });
    action();
  }
}, 100);

function action() {
  
  


  var f = setInterval(function () {
 
    new_location_new = window.location.href;
    if(new_location_new.includes("https://www.linkedin.com/company/")){
      console.log("company")
      document.querySelectorAll('.t-16.t-bold.t-black--light.org-page-navigation__item-anchor.ember-view.pv3.ph4').forEach((chats) => {
        if(chats.innerText.includes("About") && value_check == 1){
          chats.click()
          value_check = 0;
        }
      })
      let about = null  
    document.querySelectorAll(".artdeco-card.p5.mb4").forEach((chats) => {
      console.log(chats.innerText,"chats") ;
      chats.querySelector("h2")
      if(chats.querySelector("h2").innerText.includes("Overview")){
        console.log("yeah")
        about = chats.querySelector("p").innerText
      }
      else{
        if(about == null){
          about = null
        }

      }
        });  
        var img = document.querySelector(".lazy-image.ember-view.org-top-card-primary-content__logo");

    if (img != null && img != null) {
      img = img.src;
    } else {
      img = document.querySelector(".ember-view.profile-photo-edit__preview");
      img = img.src;
    }
    if (img == null) {
      img = "./Assets/img/selecteddms.svg";
    }
    let name = document.querySelector(
      ".ember-view.t-24.t-black.t-bold.full-width"
    );
    if (name != null && name.innerText != null) {
      name = name.innerText;
    }

    let title = document.getElementsByTagName("title")[0];
    if (title != null) {
      title = title.innerText;
    }
    let description = document.querySelector(
      ".org-top-card-summary__tagline.t-16.t-black"
    );
    if (description != null && description.innerText != null) {
      description = description.innerText;
    }
    let count = 0;
    let address = null;
    document.querySelectorAll(
      ".org-top-card-summary-info-list__info-item"
    ).forEach((chats) => {
      if(count == 1){
        address = chats.innerText
      }
      count = count + 1
    });
    if (address != null && address.innerText != null) {
      address = address.innerText;
    }
    console.log(address,'address')
    let company = null

    let profile_link = window.location.href;

  let message = {
    id: id,
    name: name,
    about: about,
    img: img,
    address:address,
    description: description,
    title:title,
    company,
    profile_link: profile_link,
  };

  chrome.runtime.sendMessage({ type: "message", message });

      
    }
    else{
      let about = null  
    document.querySelectorAll(".pvs-header__title.text-heading-large").forEach((chats) => {
      if(chats.innerText.includes("About")){
        about = chats.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(".pv-shared-text-with-see-more.t-14.t-normal.t-black.display-flex.align-items-center")
      }
      else{
        if(about == null){
          about = null
        }

      }
        });    

    

    if (!about) {
      about = null;
    } else {
      var spans = about.getElementsByTagName("span");
      if (!spans[0].innerText) {
        about = spans[1].innerText;
      } else {
        about = spans[0].innerText;
      }
    }

    let title = document.getElementsByTagName("title")[0];
    if (title != null) {
      title = title.innerText.toString().trim();
    }

    let name = document.getElementsByClassName(
      "text-heading-xlarge inline t-24 v-align-middle break-words"
    )[0];
    if (name != null && name.innerText != null) {
      name = name.innerText.toString().trim();
    }

    let description = document.getElementsByClassName(
      "text-body-medium break-words"
    )[0];
    if (description != null && description.innerText != null) {
      description = description.innerText.toString().trim();
    }

    let address = document.getElementsByClassName(
      "text-body-small inline t-black--light break-words"
    )[0];
    if (address != null && address.innerText != null) {
      address = address.innerText.toString().trim();
    }

    let company = document.querySelector(".inline-show-more-text.inline-show-more-text--is-collapsed.inline-show-more-text--is-collapsed-with-line-clamp.inline")      
    if (company != null && company.innerText != null) {
      company = company.innerText.toString().trim();
    } else {
      company = document.querySelector(
        ".pv-entity__secondary-title.t-14.t-black.t-normal"
      );
      if (company != null && company.innerText != null) {
        company = company.innerText;
      } else {
        company = null;
      }
    }

    var img = document.querySelector(".pv-top-card-profile-picture__image");

    if (img != null && img != null) {
      img = img.src;
    } else {
      img = document.querySelector(".ember-view.profile-photo-edit__preview");
      img = img.src;
    }
    if (img == null) {
      img = "./Assets/img/selecteddms.svg";
    }

    let profile_link = window.location.href;

    let message = {
      id: id,
      title: title,
      name: name,
      description: description,
      address: address,
      company: company,
      about: about,
      img: img,
      profile_link: profile_link,
    };

    chrome.runtime.sendMessage({ type: "message", message });
  }
  
    if(document.hasFocus()){
      
    }
    else
    {
        value_check = 1;
        clearInterval(f);
    }
    clickCheck = localStorage.getItem("imageIsClicked")
    if(clickCheck){
      value_check = 1;
      clearInterval(f);
    }
    
    

    
    
  }, 1000);
}
setInterval(() => {
  get_notification_count()
},10000)

function get_notification_count(){
  var user_id = localStorage.getItem("user_id");;
  
  const url = `${globalURl}/recieve_messages_count/${user_id}`;

  let xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send();

  xhr.onreadystatechange = function () {
    //Call a function when the state changes.
    if (xhr.readyState == 4 && xhr.status == 200) {
      let userData = JSON.parse(xhr.responseText);
      if(userData.count > 0){
        let message = {
          count: userData.count,
        };
        chrome.runtime.sendMessage({ type: "count", message });
      }
      else{
        let message = {
          count: 0,
        };
        chrome.runtime.sendMessage({ type: "count", message });
      }
      
      total = userData.count;
      group_c = userData.count_group;
      user_c = userData.count_user;
    }
    else{
      let message = {
        count: 0,
      };
      chrome.runtime.sendMessage({ type: "count", message });
    }
    }
}

function Permission(){
  recordings = localStorage.getItem('recording')

  if(recordings != 'stop'){
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
      console.log('mediaDevices supported..')
  
      navigator.mediaDevices.getUserMedia({
          audio: true
      }).then(stream => {
          mediaRecorder = new MediaRecorder(stream)
  
          mediaRecorder.ondataavailable = (e) => {
              chunks.push(e.data)
          }
  
          mediaRecorder.onstop = () => {
              const blob = new Blob(chunks, {'type': 'audio/mp3; codecs=opus'})
              chunks = []
              audioURL = window.URL.createObjectURL(blob)
              var reader = new window.FileReader();
              reader.readAsDataURL(blob); 
              reader.onloadend = function() {
                base64 = reader.result;
                
                console.log(base64 );
              }
              setTimeout(() => {
                let audio_part = {
                  audioURL: base64,
                };
                chrome.runtime.sendMessage({ type: "audio", audio_part });
              },1000)
                
          }
      }).catch(error => {
          
          console.log('Following error has occured : ',error)
      })
  }
  }
  

const clearDisplay = () => {
  display.textContent = ''
}

const clearControls = () => {
  controllerWrapper.textContent = ''
}

const record = () => {
  mediaRecorder.start()
}

const stopRecording = () => {
  mediaRecorder.stop()
}

const downloadAudio = () => {
  const downloadLink = document.createElement('a')
  downloadLink.href = audioURL
  downloadLink.setAttribute('download', 'audio')
  downloadLink.click()
}

const addButton = (id, funString, text) => {
  
}

const addMessage = (text) => {
  
}

const addAudio = () => {
  
}


if(recordings == 'recording'){
  setTimeout(() => {
    record()
  },1000)
}
  

if(recordings == 'stop'){
  setTimeout(() => {
    stopRecording()
  },1000)
}

  

}
setInterval(() => {
document.querySelectorAll(".msg-form__footer").forEach((ele) => {
  // console.log(ele.innerText,'ele')

  if(ele.querySelector('.scrape_messages')){
          console.log("has listener")
  }
  else{

      ele.children[0].innerHTML += `<span class="scrape_messages" style="cursor:pointer;
      margin-top: 4px;
      top: 92%;
      /* position: absolute; */
      left: 61%;
      margin-left: 6px;
      padding-right: 4px;
      padding-left: 4px;
      padding-top: 3px;
      border-radius: 50%;
  ">
  <img src="https://linkedin.thefastech.com/public/files/index-logo.png" id="main__logo" height="20px;" width="20px;" style="
      float: right;
  ">
  </span>`
      document.querySelectorAll(".scrape_messages").forEach((element) => {
        element.addEventListener("click", (e) => scrape_messages(e));
      });
      
      setTimeout(() => {
        ele.setAttribute('listenerr',true);
      },4000)

  }

  
});
},500)

 async function scrape_messages(e){
  console.log(e.currentTarget,'current')

  document.querySelector("style").innerHTML += `.loader {
    border: 12px solid #f3f3f3;
    border-radius: 50%;
    border-top: 12px solid #3498db;
    width: 1px;
    height: 1px !important;
    -webkit-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
    margin: auto;
    float: right;
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
  .rec_red{
    animation-name: pulse_red;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  
  @keyframes pulse_red{
    0%{
      box-shadow: 0px 0px 2px 0px rgba(173,0,0,.3);
    }
    65%{
      box-shadow: 0px 0px 2px 10px rgba(173,0,0,.3);
    }
    90%{
      box-shadow: 0px 0px 2px 10px rgba(173,0,0,0);
    }
  }
  .rec_green{
    animation-name: pulse_green;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  
  @keyframes pulse_green{
    0%{
      box-shadow: 0px 0px 2px 0px #00ff00	;
    }
    65%{
      box-shadow: 0px 0px 2px 10px #00ff00	;
    }
    90%{
      box-shadow: 0px 0px 2px 10px #00ff00	;
    }
  }
  .unclickable {
    pointer-events: none;
    /* Optional: add styles to visually indicate that the element is disabled */
    opacity: 0.5;
    cursor: not-allowed;
  }`
  document.querySelectorAll(".scrape_messages").forEach((element) => {
    element.classList.add("unclickable"); 
  });
  e.currentTarget.innerHTML = `<div class="loader"></div>`
  current_element = e.currentTarget
  e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement
    
  let html_collection = ' '
  setTimeout(() => {
    time = null;
    date = null
    text = null
    messages = current_element.parentElement.parentElement.parentElement.parentElement.parentElement.querySelectorAll(".msg-s-message-list__event")

    messages.forEach(message => {
      if(message.querySelector("img")){
        atag = message.querySelector("img").src
        console.log(atag,'atag')
      }
      if(message.querySelector(".msg-s-message-group__profile-link")){
        username = message.querySelector(".msg-s-message-group__profile-link").innerText
        console.log(username,'name')
      }
      if(message.querySelector("time")){
        tag_time = message.querySelectorAll("time")
        if(tag_time[1]){
          date = tag_time[0].innerText
          time = tag_time[1].innerText
          console.log(time,'time')
        }
        else{
          time = tag_time[0].innerText
          date = null
        }
        console.log(date,'date')
      }
      if(message.querySelector(".msg-s-event-listitem__message-bubble")){
        text = message.querySelector(".msg-s-event-listitem__message-bubble").innerText
        console.log(text,'text')
      }

      html_collection += `${date != null? `<div style="text-align: center;color: #074dd1;font-weight: bold;margin-top: 22px;">
      <span style="border: 1px solid;padding: 4px;border-radius: 7px;font-size: 12px;">${date}</span>
      </div>`:  ``}
      <div class="card my-2 rounded comment-text" style="position: relative;margin-bottom: 10px;background-color:  white; ">
      <div class="card-body p-2 px-2 d-flex justify-content-between align-items-center">
        <div class="row " style="width:365px;margin-left:0px ;">
          <div class="img-p" style="width: 44px;">
            <img src="${atag ? `${atag}`: ``}" alt="" class="img-fluid rounded-circle">
          </div>
          <div class="card-left-content-box" style="width: 315px;  border-radius: 8px;">
            <div class="font-weight-bold name-top" style="font-size: 12px">
            ${username ? `${username}`: ``}
              <span class="time" style="
              padding-left: 15px;
              font-size: 8px;
              padding-top: 5px;
              line-height: 10px;
              color: black;
              font-weight: 400;
              color: black;
              ">${time? `${time}`:``}</span>
            </div>
            <div class="msg-box-chat">${text? `${text}`:``}</div>
          </div>
        </div>
      </div>
    </div>`
    });
    console.log(html_collection,'html')
    chrome.storage.local.get((result) => {
      console.log('Value currently is ' + result.second_user_id);
      var profile_link = window.location.href;
      const url = `${globalURl}/event-save-messages`;

      var xhr1 = new XMLHttpRequest();
      xhr1.open("POST", url, true);
      xhr1.setRequestHeader("Content-Type", "application/json");
      xhr1.send(
        JSON.stringify({
          user_id: localStorage.getItem("user_id"),
          second_userid: result.second_user_id,
          messages: html_collection,
          profile_link
        })
      );
      xhr1.onreadystatechange = function () {
        //Call a function when the state changes.
        if (xhr1.readyState == 4 && xhr1.status == 200) {
          let userData = JSON.parse(xhr1.responseText);
          if(userData.status == '200'){
            console.log('success')
            current_element.innerHTML = `<img src="https://linkedin.thefastech.com/public/files/index-logo.png" id="main__logo" height="20px;" width="20px;" style="
            float: right;
        ">`

        current_element.classList.add("rec_green");
        
        setTimeout(() => {
          current_element.classList.remove("rec_green");
          document.querySelectorAll(".scrape_messages").forEach((element) => {
            element.classList.remove("unclickable"); 
          });
        },4500)

          }else{
            console.log('error')
            current_element.innerHTML = `<img src="https://linkedin.thefastech.com/public/files/index-logo.png" id="main__logo" height="20px;" width="20px;" style="
            float: right;
        ">`
          current_element.classList.add("rec_red");
          setTimeout(() => {
            current_element.classList.remove("rec_red");
            document.querySelectorAll(".scrape_messages").forEach((element) => {
              element.classList.remove("unclickable"); 
            });
          },4500)


          }
        }
        
      }
    });
    
  },500)
  
}

function file_data(file){
  if(document.querySelector('#my-floating-button')){
    document.querySelector('#my-floating-button').remove();
    clearInterval(i);
  }
  
  const input = document.createElement('input');
    input.type = 'file'; 
    input.id = 'mateen-input'; 
    input.placeholder = 'Enter your name'; 
    document.body.appendChild(input);
    setTimeout(() => {
      document.getElementById("mateen-input").click()
      document.getElementById("mateen-input").addEventListener("change", () => {
        console.log("file_end",document.getElementById('mateen-input').files[0])
        div = document.createElement('div')
        div.id = 'my-floating-button';
        div.innerHTML = `<div style="position: fixed;
        display: flex;
        top: 50%;
        left: 50%;
        width: 21%;
        height: 26%;
        background: #E6EDFA;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        padding: 10px;
        box-shadow: 0 -2px 9px rgb(0 0 0 / 25%);
        transform: translate(-50% , -50%);font-family: Helvetica, Arial, sans-serif !important;">
        <span class="close_popup_upload" style="
            position: fixed;
            top: 0%;
            left: 90%;
            background: white;
            border-radius: 54px;
            padding-right: 8px;
            padding-left: 8px;
            font-weight: 600;
            padding-top: 1px;
            padding-bottom: 1px;
            color: rgb(8, 77, 209);
            font-style: arial !important;
            font-family: Lucida Console;
            box-shadow: 0 -2px 9px rgb(0 0 0 / 25%);
            cursor: pointer;
        ">X
        </span>
                          <div style="text-align: center" class="counter_infuse">
                            <span style="font-size: 40px;font-weight: 100;color: rgb(8, 77, 209) ;margin-top: 5px !important;
                            margin-bottom: 10px !important;">loading</span>
                            <span class="style_h1" style="color: white;font-size: 60px;margin-top: -10px;line-height: 0px !important;margin-bottom:0px !important;margin-left:5px">0%
                              
                            </span>
                            <hr style="background: white;border: none;height: 2px"/>
                          </div> 
                        </div>`;
        
    
    
    document.body.appendChild(div);
    document.querySelector(".close_popup_upload").addEventListener("click", (e) => {
      bt = document.querySelector('#my-floating-button')
      bt.style.display = "none";
    })
    chrome.storage.local.set({
      loading: 'yes',
    });
    
    
    
    let imageFile = document.getElementById('mateen-input').files[0];
    fileSize = imageFile.size;
     maxFileSize = 500000000
     if (fileSize < maxFileSize) {
      var counter = 0;
      var c = 0;
      var i = setInterval(function(){
        counter_infuse = document.querySelector(".counter_infuse")
        counter_infuse.querySelector(".style_h1").innerHTML = c + "%"
        counter_infuse.querySelector("hr").style.width = c + "%";
    
        counter++;
        c++;
          
        if(counter == 100) {
            clearInterval(i);
        }
      }, 300);
      console.log(imageFile.type,'image')
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
      counter = 99;
      c = 99
      inner_div = document.querySelector('.counter_infuse')
      inner_div.children[0].innerHTML = `Sending failed due to timeout`
      inner_div.children[0].style.color = 'red'
      inner_div.querySelector(".style_h1").remove() 
      inner_div.querySelector("hr").remove()
          document.getElementById("mateen-input").remove()
          chrome.storage.local.set({
              loading: 'no',
          });
      console.log('API request canceled due to timeout');
    }, 2000000);
    const data = new FormData()
    data.append("file", imageFile)
    fetch("https://linkedin.thefastech.com/upload_files", {
      method: "post",
      body: data,
      signal: controller.signal
    })
      .then(res => res.json())
      .then(data => {
        clearTimeout(timeoutId);
        console.log(data);
        savedImage = data;
        if(savedImage){
          if(savedImage.includes("pdf")){
            message_html = `<a class="file_container" style="justify-content: center;" href="https://linkedin.thefastech.com/public/files/${savedImage}" target="blank"> <div style="width: ${file.group_id ? `${file.prospect_id ? `max-content`: `auto`}` : `max-content`};background: #f2594b;padding: 6px;border-radius: 7px;color: white;margin-bottom:4px;font-weight: 700;" > ${savedImage}</div></a><iframe ${file.group_id ? `${file.prospect_id ? ``: `style="width: -webkit-fill-available"`}`: ``} src="https://linkedin.thefastech.com/public/files/${savedImage}"></iframe>`
          }
          else if(imageFile.type.includes('image')){
            message_html  = `<a  class="file_container" href="https://linkedin.thefastech.com/public/files/${savedImage}" target="blank"><img  style="min-height: 70px;width: auto;cursor: pointer;max-height: 85px;" src="https://linkedin.thefastech.com/public/files/${savedImage}"> </a>`
          } 
          else{
            if(savedImage.includes("doc")){
              color= "#00a1f1"
            }
            else if(savedImage.includes("xls")){
              color= "#7cbb00"
            } else{
              color="#b1b1b1"
            }
            message_html = `<div><a class="hover_tag file_container" style="background: #ffffff;${file.group_id ? `${file.prospect_id ? `` : `margin-left:33px !important;`}` : ``}border: solid 1px #e6e6e6;border-radius: 2px;display: inline-block;height: 100px;line-height: 100px;margin: 5px;position: relative;text-align: center;vertical-align: middle;width: 100px;" href="https://linkedin.thefastech.com/public/files/${savedImage}" target="blank"><div class='span_center_parent' style="z-index: 99 !important;"><span style="background: ${color};${file.group_id ? `${file.prospect_id ? `` : `max-width: 150px;`}`: ``}" class="hover_class">${savedImage}</span></div></a></div>`;
          }
          
          if(message_html){
            try {
              console.log('message_html',message_html)
                if(file.group_id){
                  if(file.subgroup_id){
                    const url = `https://linkedin.thefastech.com/send_subgroup_message`;
                    let xhr = new XMLHttpRequest();
                    xhr.open("POST", url, true);
                    xhr.setRequestHeader("Content-Type", "application/json");
                    xhr.send(
                      JSON.stringify({
                        user_id: file.user_id,
                        group_id: file.group_id,
                        sub_group_id: file.subgroup_id,
                        prospect_id: file.prospect_id,
                        text: message_html,
                        replied_id: null,
                      })
                    );
                    xhr.onreadystatechange = function () {
                      if (xhr.readyState == 4 && xhr.status == 200) {
                        counter = 99;
                        c = 99
                        inner_div = document.querySelector('.counter_infuse')
                        inner_div.children[0].innerHTML = `Success`
                        inner_div.children[0].style.color = 'green'
                        inner_div.querySelector(".style_h1").remove() 
                        inner_div.querySelector("hr").remove()
                        setTimeout(() => {
                          bt = document.querySelector('#my-floating-button')
                        bt.remove();
                        document.getElementById("mateen-input").remove()
                        chrome.storage.local.set({
                          loading: 'no',
                        });
                        },2000) 
                      }
                      else{
                        counter = 99;
                        c = 99
                        inner_div = document.querySelector('.counter_infuse')
                        inner_div.children[0].innerHTML = `Error`
                        inner_div.children[0].style.color = 'red'
                        inner_div.querySelector(".style_h1").remove() 
                        inner_div.querySelector("hr").remove()
                        setTimeout(() => {
                          bt = document.querySelector('#my-floating-button')
                        bt.remove();
                        document.getElementById("mateen-input").remove()
                        chrome.storage.local.set({
                          loading: 'no',
                        });
                        },2000) 
                    }
                    }
                    
                  }else{
                    const url = `https://linkedin.thefastech.com/send_group_message`;
                    let xhr = new XMLHttpRequest();
                    xhr.open("POST", url, true);
                    xhr.setRequestHeader("Content-Type", "application/json");
                    xhr.send(
                      JSON.stringify({
                        user_id: file.user_id,
                        group_id: file.group_id,
                        prospect_id: file.prospect_id,
                        text: message_html,
                        replied_id: null,
                      })
                    );
                    xhr.onreadystatechange = function () {
                      if (xhr.readyState == 4 && xhr.status == 200) {
                        counter = 99;
                        c = 99
                        inner_div = document.querySelector('.counter_infuse')
                        inner_div.children[0].innerHTML = `Success`
                        inner_div.children[0].style.color = 'green'
                        inner_div.querySelector(".style_h1").remove() 
                        inner_div.querySelector("hr").remove()
                        setTimeout(() => {
                          bt = document.querySelector('#my-floating-button')
                        bt.remove();
                        document.getElementById("mateen-input").remove()
                        chrome.storage.local.set({
                          loading: 'no',
                        });
                        },2000) 
                      }
                      else{
                        counter = 99;
                        c = 99
                        inner_div = document.querySelector('.counter_infuse')
                        inner_div.children[0].innerHTML = `Error`
                        inner_div.children[0].style.color = 'red'
                        inner_div.querySelector(".style_h1").remove() 
                        inner_div.querySelector("hr").remove()
                        setTimeout(() => {
                          bt = document.querySelector('#my-floating-button')
                        bt.remove();
                        document.getElementById("mateen-input").remove()
                        chrome.storage.local.set({
                          loading: 'no',
                        });
                        },2000) 
                    }
                    }
  
                     
                  }
                  
                }
                else
                {
                  
                  const url = `https://linkedin.thefastech.com/send_message`;
                  let xhr = new XMLHttpRequest();
                  xhr.open("POST", url, true);
                  xhr.setRequestHeader("Content-Type", "application/json");
                  xhr.send(
                    JSON.stringify({
                      user_id: file.user_id,
                      receiver_id: file.receiver_id,
                      text: message_html,
                      attachmessage: null,
                      replied_id: null,
                      prospect_id: file.prospect_id,
                    })
                  );
                  const timeoutId = setTimeout(() => {
                    xhr.abort();
                    console.log('API request canceled due to timeout');
                  }, 20000);
                  xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                      clearTimeout(timeoutId);
                        counter = 99;
                        c = 99
                        inner_div = document.querySelector('.counter_infuse')
                        inner_div.children[0].innerHTML = `Success`
                        inner_div.children[0].style.color = 'green'
                        inner_div.querySelector(".style_h1").remove() 
                        inner_div.querySelector("hr").remove()
                        setTimeout(() => {
                          bt = document.querySelector('#my-floating-button')
                        bt.remove();
                        document.getElementById("mateen-input").remove()
                        chrome.storage.local.set({
                          loading: 'no',
                        });
                        },2000) 
                    }
                    else{
                        counter = 99;
                        c = 99
                        inner_div = document.querySelector('.counter_infuse')
                        inner_div.children[0].innerHTML = `Error`
                        inner_div.children[0].style.color = 'red'
                        inner_div.querySelector(".style_h1").remove() 
                        inner_div.querySelector("hr").remove()
                        setTimeout(() => {
                          bt = document.querySelector('#my-floating-button')
                        bt.remove();
                        document.getElementById("mateen-input").remove()
                        chrome.storage.local.set({
                          loading: 'no',
                        });
                        },2000) 
                    }
                  }
                  
                }  
            } catch (error) {
              console.error(error,'error');
              
            }
                
          }  
        }
      })
      .catch(err => {
        console.log(err)
      })
    }
    else{
      console.error('File size exceeds the maximum limit');
      inner_div = document.querySelector('.counter_infuse')
      inner_div.children[0].innerHTML = `Oops! Right now we only allow a max file size upload of 500mb.  Please reduce your file size and try again`
      inner_div.children[0].style.color = 'red'
      inner_div.children[0].style.fontSize = "20px"
      inner_div.querySelector(".style_h1").remove() 
      inner_div.querySelector("hr").remove()
      setTimeout(() => {
      bt = document.querySelector('#my-floating-button')
        bt.remove();
        document.getElementById("mateen-input").remove()
        chrome.storage.local.set({
        loading: 'no',
      });
    },6000)
    }
    

      })
      },1000)
    

    

}
async function download_file(file){
  const myArray = file.split("files");
  filename = myArray[1].split("/");
  console.log(filename[1],"file")
  url = `https://linkedin.thefastech.com/download_files/${filename[1]}`;

  const link = document.createElement("a");
    link.href = url;
    link.setAttribute("target", "_self");
    document.body.appendChild(link);
    link.click();
  // let xhr = new XMLHttpRequest();

  // xhr.open("GET", url, true);
  // xhr.setRequestHeader("Content-Type", "application/json");
  // xhr.send();
  // xhr.onreadystatechange = function () {
  //   if (xhr.readyState == 4 && xhr.status == 200) {

  //   }}

  
}
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  
  if(message.download){
    console.log(message,'message')
    download_file(message.download)
  }
  if(message.file_data){
    console.log(message,'message')
    file_data(message)
  }
  if(message.permis){
    localStorage.setItem('recording',message.permis)
    Permission()
  }
  if(message.permission){
    localStorage.setItem('recording',message.permission)
    Permission()
  }
  if(message.the_id){
    localStorage.setItem('user_id',message.the_id)
  }
  if (message.temp) {
    user_id = localStorage.getItem("user_id")
    if(!user_id){
      localStorage.setItem("user_id", message.temp);
    }
    profilepic = localStorage.getItem("profilepic")
    if(!profilepic){
      localStorage.setItem("profilepic", message.profilepic);
    }
    name = localStorage.getItem("name")
    if(!name){
      localStorage.setItem("name", message.fname);
    }
    username = localStorage.getItem("username")
    if(!username){
      localStorage.setItem("username", message.username);
    }
  }

  if (!message.auth) {
    var current_location = window.location.href;
    if (
      current_location.includes("https://www.linkedin.com/in/") &&
      message.txt.includes("https://extension-dashboard.vercel.app")
    ) {
      window.open(message.txt + '?user_id=' +message.temp  + '&profilepic=' +message.profilepic  + '&fname=' +message.fname + '&username=' +message.username, "_blank");
      window.focus();
    } else if (
      current_location.includes("https://extension-dashboard.vercel.app") ||  current_location.includes("https://extension-dashboard.vercel.app/Single-details-page.html")
    ) {
      if (!message.txt.includes("https://extension-dashboard.vercel.app")) {
        if (!message.donot) {

          
          var myWindow = window.open(message.txt, "", "width=680, height=750");
          myWindow.blur();
          
        }
      }
    } else {
      if (message.txt.includes("https://extension-dashboard.vercel.app")) {
        window.location.href = message.txt + '?user_id=' +message.temp  + '&profilepic=' +message.profilepic  + '&fname=' +message.fname + '&username=' +message.username;
      }
      else{
        window.location.href = message.txt;
      }
    }
  } else {
    if (message.auth) {
      window.location.href = "";
      window.location.href = message.auth;
      clearInterval(a);
    }
  }
}

function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}


