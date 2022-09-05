;(function(){
    
    /*Change Background Images*/ 
        let backgroundList=["../images/02.jpg","../images/03.jpg","../images/04.jpg","../images/05.jpg","../images/01.jpg"]
        let landingPage=document.querySelector(".landing-page");
       let backId;
       let check=true;
    function generateRandomBackground()
    {
        if(check=== true)
        {
        backId= setInterval(()=>{
            let randomNumber=Math.floor(Math.random() * backgroundList.length );
    
                landingPage.style.cssText=`background-image:url("${backgroundList[randomNumber]}")`
                    
             
        },1000)
        }else
        {
            clearInterval(backId);
        }
    }
    /* Add Class To seting box */
    let setting=document.querySelector(".setting-box");
    let icon=document.querySelector(".icon i");
    icon.addEventListener("click",function(){
        this.classList.toggle("fa-spin");
        setting.classList.toggle("show-setting-box");
    });

    /*Add Class Active To colors List */
    let colors=document.querySelectorAll(".colors-section ul li");
    colors.forEach(li =>{
        
        li.addEventListener("click",(e)=>{
            colors.forEach(lis=>{
                lis.classList.remove("active")
            })
            e.target.classList.add("active");
            document.documentElement.style.setProperty("--main-color",e.target.dataset.color)
            window.localStorage.setItem("color",e.target.dataset.color);
        });
    });
   
    /*disable background images  */
    let randomBackgroundOption=document.querySelectorAll(".Background-section button");
    randomBackgroundOption.forEach(btn=>{
        btn.addEventListener("click",(e)=>{
            randomBackgroundOption.forEach(btns=>{
                btns.classList.remove("active");
            })
            e.target.classList.add("active");
            window.localStorage.setItem("backgroundOption",e.target.innerText)
            if(e.target.innerText=== "No")
            {
                check=false;
                generateRandomBackground();
            }else{
                check=true;
                generateRandomBackground();
            }
        })
    })
  
    /*Show Bullets */
       let bulletsSection=document.querySelectorAll(".Bullets-section button");
       let bullets=document.querySelector(".bullets ul ")
      let bulletsCheck=true;
    
        bulletsSection.forEach(btn=>{
            btn.addEventListener("click",(e)=>{
             bulletsSection.forEach(btns=>{
                    btns.classList.remove("active");
                })
                e.target.classList.add("active");
                window.localStorage.setItem("bulletsOption",e.target.innerText);
              if(e.target.innerText === "Yes")
              {
                
                bullets.style.cssText="display:flex;"

              }else{
                
            bullets.style.cssText="display:none;";

              }
            })
        })
    
    function checkBullets()
    {
        if(bulletsCheck===true)
        {
            
            bullets.style.cssText="display:flex;"

        }else{
            bullets.style.cssText="display:none;"

        }
    }
       window.onload=function()
       {
           if(window.localStorage.length >0)
           {
           document.documentElement.style.setProperty("--main-color",window.localStorage.getItem("color"));
               colors.forEach(li=>{
                   li.classList.remove("active");
                   if(li.dataset.color===window.localStorage.getItem("color"))
                   {
                       li.classList.add("active");
                   }
               })
               randomBackgroundOption.forEach(btn=>{
                   btn.classList.remove("active");
                   if(btn.innerText===window.localStorage.getItem("backgroundOption"))
                   {
                       btn.classList.add("active");
                   }
               })
               if(window.localStorage.getItem("backgroundOption") === "Yes")
               {
                check=true;
                generateRandomBackground();
               }else{
                check=false;
                generateRandomBackground();
               }
               bulletsSection.forEach(bullet => {
                bullet.classList.remove("active");
                if(bullet.innerText === window.localStorage.getItem("bulletsOption"))
                {
                    bullet.classList.add("active");
                    
                }
                if(window.localStorage.getItem("bulletsOption") === "Yes")
                {
                    bulletsCheck=true;
                    checkBullets();
                }else{

                    bulletsCheck=false;
                    checkBullets();

                }
               });

           }
           
       }

       let Bars =document.querySelector(".landing-page .header .container i");
       let links =document.querySelector(".header .links");
       Bars.addEventListener("click",(e)=>{
        links.classList.toggle("animate-links");
       });
       let skillSection=document.querySelector(".skills");
       let progresss=document.querySelectorAll(".skills .skill-progress span");
       let scrolldiv=document.querySelector(".scroll-to-top ");

       window.onscroll=function()
       {
        //Skills Offset Top
        let skillsOffsetTop=skillSection.offsetTop;
        //skills Outer Height
        let skillsOuterHeight=skillSection.offsetHeight;
        //window Height
        let windowHeight=this.innerHeight;
        //window Scroll Top
        let windowScrollTop=this.pageYOffset;
        if(windowScrollTop > (skillsOffsetTop +skillsOuterHeight - windowHeight))
        {
            progresss.forEach(p=>{
                p.style.cssText=`width:${p.dataset.width}`
            })
        }else{
            progresss.forEach(p=>{
                p.style.cssText=`width:0`
            })
        }
        if(window.scrollY >= 700)
        {
            scrolldiv.style.cssText="display:block";
        }else{
            scrolldiv.style.cssText="display:none";

        }
       }
/*----------------------------------------------------------------------------------------------------- */
       //create popUP in Gallery Images
       let galleryImages=document.querySelectorAll(".gallery img");
       galleryImages.forEach(g=>{
        g.addEventListener("click",(e)=>{
            //create ovelay
            let overlay=document.createElement("div");
            overlay.className="pop-up-overlay";
            document.body.appendChild(overlay);

            //create popup
            let popUp=document.createElement("div");
            popUp.className="pop-Up";

            //create h2
            let popUPTitle=document.createElement("h2");
            popUPTitle.innerText=e.target.alt;
            popUp.appendChild(popUPTitle);
            //create img
            let popUpImag=document.createElement("img");
            popUpImag.src=e.target.src;
            popUp.appendChild(popUpImag);

            //create exit button 
            let exitBtn=document.createElement("a");
            exitBtn.innerText="X";
            popUp.appendChild(exitBtn);
            document.body.appendChild(popUp);
            exitBtn.addEventListener("click",(t)=>{
                overlay.remove();
                popUp.remove();
            })
        });
       });
       function scrollIntoSection(links)
       {
        let bulletsLi=document.querySelectorAll(links);

        bulletsLi.forEach(bullet=>{
 
         bullet.addEventListener("click",(e)=>{
            document.querySelector(`.${e.target.dataset.scroller}`).scrollIntoView({
                 behavior:"smooth"
            })
         });
        }); 
       }
       //bullets 
       let bulletsLi=document.querySelectorAll(".bullets li");

       bulletsLi.forEach(bullet=>{

        bullet.addEventListener("click",(e)=>{
           document.querySelector(`.${e.target.dataset.scroller}`).scrollIntoView({
                behavior:"smooth"
           })
        });
       });

         //header li 
         let headerLi=document.querySelectorAll(".header .links li a");

         headerLi.forEach(bullet=>{
            
          bullet.addEventListener("click",(e)=>{
            e.preventDefault();
            console.log(e.target.dataset.scroller);
             document.querySelector(`.${e.target.dataset.scroller}`).scrollIntoView({
                  behavior:"smooth"
             })
          });
         });
         //rest setting box option 
         let restOption=document.querySelector(".rest");

         restOption.addEventListener("click",function(e){
            localStorage.clear();
            window.location.reload();
         });
         // scroll to top 
       
         let scrollBtn=document.querySelector(".scroll-to-top i ");

         scrollBtn.addEventListener("click",function()
         {
            window.scrollTo({
                top:0,
                lef:0,
                behavior:"smooth"
            })
         });
})();