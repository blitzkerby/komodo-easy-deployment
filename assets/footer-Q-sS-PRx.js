(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function o(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(a){if(a.ep)return;a.ep=!0;const i=o(a);fetch(a.href,i)}})();function s(){const l=t=>document.querySelector(t),e=l("header"),o=l("#store-menu");e.addEventListener("mouseover",()=>{e.classList.add("expand"),o.classList.remove("sub-navi-items-hidden")}),e.addEventListener("mouseout",()=>{e.classList.contains("expand")&&(e.classList.remove("expand"),o.classList.add("sub-navi-items-hidden"))}),l(".mobile-menu").addEventListener("click",()=>{l("header").classList.toggle("active")})}document.querySelector("#navbar").innerHTML=`
<header>
    <div  class="container-wrapper">
        <div  class="container">
            <navi  class="navi">
                <ul  class="navi-list navi-list-mobile">
                    <li  class="navi-item  navi-logo">  <a  href="./index.html"   class="navi-link  navi-link-apple"> </a>  </li>                            
                    <li  class="navi-item">             <a  href="#"   class="navi-link  navi-link-search">         </a>  </li>
                    <li  class="navi-item">             <a  href="#"   class="navi-link  navi-link-bag">            </a>  </li>
                    <li  class="navi-item">
                        <div  class="mobile-menu">
                            <span  class="line  line-top"></span>
                            <span  class="line  line-bottom"></span>
                        </div>
                    </li>
                </ul>
                <ul  class="navi-list  navi-list-larger">
                    <li  class="navi-item  navi-item-hidden"    id="apple-icon"><a  href="index.html"   class="navi-link  navi-link-apple"></a></li> 
                    <li  class="navi-item"  id="nav-store"          ><a  href="#"                 class="navi-link">   Store   </a></li>
                    <li  class="navi-item"  id="nav-mac"            ><a  href="./mac.html"        class="navi-link">   Mac   </a></li>
                    <li  class="navi-item"  id="nav-ipad"           ><a  href="#"                 class="navi-link">   iPad   </a></li>
                    <li  class="navi-item"  id="nav-iphone"         ><a  href="#"                 class="navi-link">   iPhone   </a></li>
                    <li  class="navi-item"  id="nav-watch"          ><a  href="#"                 class="navi-link">   Watch   </a></li>
                    <li  class="navi-item"  id="nav-vision"         ><a  href="#"                 class="navi-link">   Vision   </a></li>
                    <li  class="navi-item"  id="nav-airpods"        ><a  href="./airpods.html"    class="navi-link">   AirPods   </a></li>
                    <li  class="navi-item"  id="nav-tv-home"        ><a  href="#"                 class="navi-link">   TV & Home   </a></li>
                    <li  class="navi-item"  id="nav-entertainment"  ><a  href="#"                 class="navi-link">   Entertainment   </a></li>
                    <li  class="navi-item"  id="nav-accessories"    ><a  href="#"                 class="navi-link">   Accessories   </a></li>
                    <li  class="navi-item"  id="nav-support"        ><a  href="#"                 class="navi-link">   Support   </a></li>

                    <li  class="navi-item  navi-item-hidden"  id="search-icon"><div  class="navi-img">  <a  href="#"  class="navi-link  navi-link-search"></a>   </div>  </li>
                    <li  class="navi-item  navi-item-hidden"  id="bag-icon"   ><div  class="navi-img">  <a  href="#"  class="navi-link  navi-link-bag"   ></a>   </div>  </li>
                </ul>

            </navi>

            
            <div class="sub-navi-items  sub-navi-items-hidden"  id="store-menu">
                <div class="sub-navi-container  stand-out  sub-navi-container-one">
                    <ul>
                        <li  class="navi-header"> Shop </li>
                        
                        <li  class="navi-item"><a  href="#"   class="navi-link">   Shop the Latest   </a></li>
                        <li  class="navi-item"><a  href="./mac.html"   class="navi-link">   Mac   </a></li>
                        <li  class="navi-item"><a  href="#"   class="navi-link">   iPad   </a></li>
                        <li  class="navi-item"><a  href="#"   class="navi-link">   iPhone   </a></li>
                        <li  class="navi-item"><a  href="#"   class="navi-link">   Apple Watch   </a></li>
                        <li  class="navi-item"><a  href="#"   class="navi-link">   Apple Vision Pro   </a></li>
                        <li  class="navi-item"><a  href="#"   class="navi-link">   Accessories   </a></li>
                    </ul>
                </div>
                <div class="sub-navi-container  sub-text  sub-navi-container-two">
                    <ul>
                        <li  class="navi-header"> Quick Links </li>

                        <li  class="navi-item"><a  href="#"   class="navi-link">   Find a Store     </a></li>
                        <li  class="navi-item"><a  href="#"   class="navi-link">   Order Status     </a></li>
                        <li  class="navi-item"><a  href="#"   class="navi-link">   Apple Trade In   </a></li>
                        <li  class="navi-item"><a  href="#"   class="navi-link">   Financing        </a></li>
                    </ul>
                </div>
                <div class="sub-navi-container  sub-text  sub-navi-container-three">
                    <ul>
                        <li  class="navi-header"> Shop Special Stores </li>

                        <li  class="navi-item"><a  href="#"   class="navi-link">   Certified Refurbrished   </a></li>
                        <li  class="navi-item"><a  href="#"   class="navi-link">   Education                </a></li>
                        <li  class="navi-item"><a  href="#"   class="navi-link">   Business                 </a></li>
                        <li  class="navi-item"><a  href="#"   class="navi-link">   Veterans and Military    </a></li>
                        <li  class="navi-item"><a  href="#"   class="navi-link">   Government               </a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</header>
`;s(document.querySelector("header"));function n(){const l=document.querySelectorAll(".footer-container-box"),e=document.querySelectorAll(".footer-container-box .accordion-button"),o=document.querySelectorAll(".footer-links");function t(){window.innerWidth<=850?(l.forEach(a=>a.classList.add("accordion")),l.forEach(a=>a.classList.add("border-bottom")),e.forEach(a=>a.setAttribute("aria-expanded","false")),e.forEach(a=>a.classList.add("collapsed")),o.forEach(a=>a.classList.remove("show")),o.forEach(a=>a.classList.add("collapse"))):(l.forEach(a=>a.classList.remove("accordion")),l.forEach(a=>a.classList.remove("border-bottom")),o.forEach(a=>a.classList.add("show")))}t(),window.addEventListener("resize",t)}document.querySelector("#footer").innerHTML=`
    <footer>
        <!--Informative section-->
        <div class="footer-container  footer-container-border  container">
            <ul class="footer-links">
                <!--v-- Row : 1 --v-->
                <li id="footer-paragraph-format">
                    <p >
        1. Trade-in values will vary based on the condition, year, 
        and configuration of your eligible trade-in device. Not all
        devices are eligible for credit. You must be at least 18 years
        old to be eligible to trade in for credit or for an Apple Gif
        Card. Trade-in value may be applied toward qualifying new
        device purchase, or added to an Apple Gift Card. Actual
        value awarded is based on receipt of a qualifying device
        matching the description provided when estimate was made.
        Sales tax may be assessed on full value of a new device
        purchase. In-store trade-in requires presentation of
        a valid photo ID (local law may require saving this
        information). Offer may not be available in all stores, and may 
        vary between in-store and online trade-in. Some stores may have
        additional requirements. Apple or its trade-in partners reserve
        the right to refuse or limit quantity of any trade-in transaction
        for any reason. More details are available from Apple’s trade-in 
        partner for trade-in and recycling of eligible devices.
        Restrictions and limitations may apply.
                    </p>
                </li>
                <!--^-- Row : 1 --^-->


                    <!-------->


                <!--v-- Row : 2 --v-->
                <li id="footer-paragraph-format">
                    <p>
        Available in the U.S. on <a id="inline-link" href="#">apple.com</a>, in the Apple Store app, and at Apple Stores.
                    </p>
                </li>
                <!--^-- Row : 2 --^-->


                    <!-------->


                <!--v-- Row : 3 --v-->
                <li id="footer-paragraph-format">
                    <p>
        To access and use all Apple Card features and products available only to Apple 
        Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports
        and has the latest version of iOS or iPadOS. Apple Card is subject to credit
        approval, available only for qualifying applicants in the United States, and 
        issued by Goldman Sachs Bank USA, Salt Lake City Branch.
                    </p>
                </li>
                <!--^-- Row : 3 --^-->


                    <!-------->


                <!--v-- Row : 4 --v-->
                <li id="footer-paragraph-format">
                    <p>
        If you reside in the U.S. territories, please call Saul Goodman
        at (505) 503-4455 with questions about Apple Card.
                    </p>
                </li>
                <!--^-- Row : 4 --^-->


                    <!-------->


                <!--v-- Row : 5 --v-->
                <li id="footer-paragraph-format">
                    <p>
        Learn more about how Apple Card applications are evaluated at <a id="inline-link" href="#">support.apple.com/kb/HT209218</a>.
                    </p>
                </li>
                <!--^-- Row : 5 --^-->


                    <!-------->


                <!--v-- Row : 6 --v-->
                <li id="footer-paragraph-format">
                    <p>
        A subscription is required for Apple TV+.
                    </p>
                </li>
                <!--^-- Row : 6 --^-->


                    <!-------->


                <!--v-- Row : 7 --v-->
                <li id="footer-paragraph-format">
                    <p>
        A subscription is required for Apple Arcade, Apple Fitness+, and Apple Music.
                    </p>
                </li>
                <!--^-- Row : 7 --^-->
            </ul>
        </div>



        <!--5 columns section-->
        <div class="footer-container  footer-column-section container">

            <!-- Mobile section -->
        


                <!-------------->


            <!--v-- column : 1 --v-->

            <div class="footer-column">

                <!--Shop and Learn-->
                <div 
                    class   =   "footer-container-box  footer-container-box-separator  border-bottom"
                    id      =   "shop-and-learn"
                    >
                    <button 
                        class           ="accordion-button" 
                        type            ="button" 
                        data-bs-toggle  ="collapse" 
                        data-bs-target  ="#shop-and-learn-collapse" 
                        aria-expanded   ="true" 
                        aria-controls   ="shop-and-learn-collapse"
                        >
                        <h3 class="footer-title">Shop and Learn</h3>
                    </button>

            
                    <ul 
                        class           =   "footer-links"
                        id              =   "shop-and-learn-collapse"
                        data-bs-parent  =   "#shop-and-learn"
                        >
                        <li><a href="#">Store</a></li>
                        <li><a href="#">Mac</a></li>
                        <li><a href="#">iPad</a></li>
                        <li><a href="#">iPhone</a></li>
                        <li><a href="#">Watch</a></li>
                        <li><a href="#">AirPods</a></li>
                        <li><a href="#">TV & Home</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Gift Cards</a></li>
                    </ul>
                </div>


                <!--Apple Wallet-->
                <div 
                    class   =  "footer-container-box   border-bottom"
                    id      =  "apple-wallet"
                    >
                    <button 
                        class           ="accordion-button" 
                        type            ="button" 
                        data-bs-toggle  ="collapse" 
                        data-bs-target  ="#apple-wallet-collapse" 
                        aria-expanded   ="true" 
                        aria-controls   ="apple-wallet-collapse"
                        >
                        <h3 class="footer-title">Apple Wallet</h3>
                    </button>
            
                    <ul 
                        class           ="footer-links"
                        id              ="apple-wallet-collapse"
                        data-bs-parent  ="apple-wallet"
                        >
                        <li><a href="#">Wallet</a></li>
                        <li><a href="#">Apple Card</a></li>
                        <li><a href="#">Apple Pay</a></li>
                        <li><a href="#">Apple Cash</a></li>
                    </ul>
                </div>
            </div>


            <!--^-- column : 1 --^-->       


                <!-------------->


            <!--v-- column : 2 --v-->


            <div class="footer-column">

                <!--Account box-->
                <div    class   ="footer-container-box  footer-container-box-separator  border-bottom"
                        id      ="account-box"> 
                    <button 
                    class           ="accordion-button" 
                    type            ="button" 
                    data-bs-toggle  ="collapse" 
                    data-bs-target  ="#account-box-collapse" 
                    aria-expanded   ="true" 
                    aria-controls   ="account-box-collapse">
                        <h3 class="footer-title">Account</h3>
                    </button>

                    <ul 
                    class           ="footer-links"
                    id              ="account-box-collapse"
                    data-bs-parent  ="#account-box"
                        >
                        <li><a href="#">Manage Your Apple ID</a></li>
                        <li><a href="#">Apple Store Account</a></li>
                        <li><a href="#">iCloud.com</a></li> 
                    </ul>
                </div>


                <!--Entertainment box-->
                <div 
                class   ="footer-container-box border-bottom"
                id      ="entertainment-box">
                    <button 
                    class           ="accordion-button" 
                    type            ="button" 
                    data-bs-toggle  ="collapse" 
                    data-bs-target  ="#entertainment-box-collapse" 
                    aria-expanded   ="true" 
                    aria-controls   ="entertainment-box-collapse">
                        <h3 class="footer-title">Entertainment</h3>
                    </button>

                    <ul
                    class           ="footer-links"
                    id              ="entertainment-box-collapse"
                    data-bs-parent  ="#entertainment-box">
                        <li><a href="#">Apple One</a></li>
                        <li><a href="#">Apple TV+</a></li>
                        <li><a href="#">Apple Music</a></li> 
                        <li><a href="#">Apple Arcade</a></li>
                        <li><a href="#">Apple Fitness+</a></li>
                        <li><a href="#">Apple News+</a></li>
                        <li><a href="#">Apple Podcasts</a></li>
                        <li><a href="#">Apple Books</a></li>
                        <li><a href="#">Apple Store</a></li>
                    </ul>
                </div>
            </div>


            <!--^-- column : 2 --^-->


                <!-------------->


            <!--v-- column : 3 --v-->


            <div class="footer-column">

                <!-- Apple Store -->
                <div 
                class   =   "footer-container-box  border-bottom"
                id      =   "apple-store">
                    <button 
                    class           ="accordion-button" 
                    type            ="button" 
                    data-bs-toggle  ="collapse" 
                    data-bs-target  ="#apple-store-collapse" 
                    aria-expanded   ="true" 
                    aria-controls   ="apple-store-collapse">
                        <h3 class="footer-title">Apple Store</h3>
                    </button>

                    <ul 
                    class           ="footer-links"
                    id              ="apple-store-collapse"
                    data-bs-parent  ="apple-store"
                    >
                        <li><a href="#">Find a Store</a></li>
                        <li><a href="#">Genius Bar</a></li>
                        <li><a href="#">Today at Apple</a></li>
                        <li><a href="#">Apple Camp</a></li>
                        <li><a href="#">Apple Store App</a></li>
                        <li><a href="#">Certified Refurbished</a></li>
                        <li><a href="#">Apple Trade In</a></li>
                        <li><a href="#">Financing</a></li>
                        <li><a href="#">Carrier Deals at Apple</a></li>
                        <li><a href="#">Order Status</a></li>
                        <li><a href="#">Shopping Help</a></li>

                    </ul>
                </div>
            </div>


            <!--^-- column : 3 --^-->


                <!-------------->


            <!--v-- column : 4 --v-->


            <div class="footer-column">
                <div 
                class="footer-container-box  footer-container-box-separator  border-bottom"
                id="for-business">
                <button 
                class           ="accordion-button" 
                type            ="button" 
                data-bs-toggle  ="collapse" 
                data-bs-target  ="#for-business-collapse" 
                aria-expanded   ="true" 
                aria-controls   ="for-business-collapse">
                    <h3 class="footer-title">For Business</h3>
                </button>

                    <ul 
                    class           ="footer-links"
                    id              ="for-business-collapse"
                    data-bs-parent  ="for-business">
                        <li><a href="#">Apple and Business</a></li>
                        <li><a href="#">Shop for Business</a></li>
                    </ul>
                </div>

                <div 
                    class="footer-container-box  footer-container-box-separator  accordion  border-bottom"
                    id="for-education">
                    <button 
                    class           ="accordion-button" 
                    type            ="button" 
                    data-bs-toggle  ="collapse" 
                    data-bs-target  ="#for-education-collapse" 
                    aria-expanded   ="true" 
                    aria-controls   ="for-education-collapse">
                        <h3 class="footer-title">For Education</h3>
                    </button>
                    

                    <ul 
                    class           ="footer-links"
                    id              ="for-education-collapse"
                    data-bs-parent  ="for-education"
                    >
                        <li><a href="#">Apple and Education</a></li>
                        <li><a href="#">Shop for K-12</a></li>
                        <li><a href="#">Shop for College</a></li>
                    </ul>
                </div>

                <div class="footer-container-box  footer-container-box-separator  accordion  border-bottom"
                id="for-healthcare">
                <button 
                class           ="accordion-button" 
                type            ="button" 
                data-bs-toggle  ="collapse" 
                data-bs-target  ="#for-healthcare-collapse" 
                aria-expanded   ="true" 
                aria-controls   ="for-healthcare-collapse">
                    <h3 class="footer-title">For Healthcare</h3>
                </button>

                    <ul 
                    class           ="footer-links"
                    id              ="for-healthcare-collapse"
                    data-bs-parent  ="for-healthcare"
                    >
                        <li><a href="#">Apple in Healthcare</a></li>
                        <li><a href="#">Health on Apple Watch</a></li>
                        <li><a href="#">Health on Records on iPhone</a></li>
                    </ul>
                </div>

                <div class="footer-container-box  footer-container-box-separator  accordion  border-bottom"
                id="for-government">
                <button 
                class           ="accordion-button" 
                type            ="button" 
                data-bs-toggle  ="collapse" 
                data-bs-target  ="#for-government-collapse" 
                aria-expanded   ="true" 
                aria-controls   ="for-government-collapse">
                    <h3 class="footer-title">For Government</h3>
                </button>

                    <ul 
                    class           ="footer-links"
                    id              ="for-government-collapse"
                    data-bs-parent  ="for-government"
                    >
                        <li><a href="#">Shop for Government</a></li>
                        <li><a href="#">Shop for Veterans and Military</a></li>
                    </ul>
                </div>
            </div>


            <!--^-- column : 4 --^-->


                <!-------------->


            <!--v-- column : 5 --v-->


            <div class="footer-column">
                <div    class   ="accordion  footer-container-box  footer-container-box-separator  border-bottom"
                        id      ="apple-values"> 

                    <button 
                        class           ="accordion-button" 
                        type            ="button" 
                        data-bs-toggle  ="collapse" 
                        data-bs-target  ="#apple-values-collapse" 
                        aria-expanded   ="true" 
                        aria-controls   ="apple-values-collapse">
                        
                        <h3 class="footer-title">Apple Values</h3>
                    </button>

                    <ul 
                        class           ="footer-links"
                        id              ="apple-values-collapse"
                        data-bs-parent  ="apple-values"
                    >
                        <li><a href="#">Accessibility</a></li>
                        <li><a href="#">Education</a></li>
                        <li><a href="#">Environment</a></li>
                        <li><a href="#">Inclusion and Diversity</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Racial Equity and Justice</a></li>
                        <li><a href="#">Supplier Responsibility</a></li>
                    </ul>
                </div>

                <div 
                    class="footer-container-box  footer-container-box-separator  accordion  border-bottom"
                    id="about-apple">
                    <button 
                        class           ="accordion-button" 
                        type            ="button" 
                        data-bs-toggle  ="collapse" 
                        data-bs-target  ="#about-apple-collapse" 
                        aria-expanded   ="true" 
                        aria-controls   ="about-apple-collapse">

                        <h3 class="footer-title">About Apple</h3>
                    </button>

                    <ul 
                        class           ="footer-links"
                        id              ="about-apple-collapse"
                        data-bs-parent  ="about-apple">
                        <li><a href="#">Newsroom</a></li>
                        <li><a href="#">Apple Leadership</a></li>
                        <li><a href="#">Career Opportunities</a></li>
                        <li><a href="#">Investors</a></li>
                        <li><a href="#">Ethics & Compliance</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Contact Apple<a></li>
                    </ul>
                </div>
            </div>


            <!--^-- column : 5 --^-->


        </div>



        <!--*-- | Copyright section | --*-->


        <div class="footer-container  footer-copyright container">


            <!--v-- | footer upper copyright | --v-->
            
            <div class="footer-upper-container  footer-container-border" id="footer-paragraph-format">
                <p>
        More ways to shop: <a id="inline-link" href="#">Find an Apple Store</a> or <a id="inline-link" href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
                </p>
            </div>

            <!--^-- | footer upper copyright | --^-->




            <!--v-- | footer lower copyright | --v-->

            <div class="footer-lower-container">

                <!--*--| true copyright |--*-->

                <div class="footer-legal-copyright">
                    <p id="copyright-text-format">Copyright © 2024 Apple Inc. All rights reserved.</p>
                </div>


                <!--*--| legal links |--*-->


                <ul class="footer-legal-links">
                    <li><a class="footer-legal-link" href="#">Privacy</a></li>
                    <li><a class="footer-legal-link" href="#">Terms of Use</a></li>
                    <li><a class="footer-legal-link" href="#">Sales and Refunds</a></li>
                    <li><a class="footer-legal-link" href="#">Legal</a></li>
                    <li><a class="footer-legal-link" href="#" id="rightmost">Site Map</a></li>
                </ul>

                <!--*--| locale |--*-->

                <div class="footer-locale">
                    <p id="locale-text-format">United States</p>
                </div>
            </div>
        </div>
    </footer>
`;n(document.querySelector("footer"));
