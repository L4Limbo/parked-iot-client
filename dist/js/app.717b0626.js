(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"266e":function(t,e,a){},3985:function(t,e,a){},"3fb6":function(t,e,a){"use strict";a("3985")},"4ecb":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[""!=t.displayAlert?a("v-alert",{attrs:{type:t.alertType,dismissible:""}},[t._v(t._s(t.displayAlert)+" ")]):t._e(),a("router-view",{on:{alert:t.DisplayAlert}})],1)},r=[],i={components:{},data:function(){return{displayAlert:"",alertType:"success"}},methods:{DisplayAlert:function(t){this.alertType=t[0],this.displayAlert=t[1]}},watch:{displayAlert:function(){var t=this;setTimeout((function(){return t.displayAlert=""}),4e3)}}},s=i,l=a("2877"),c=a("6544"),u=a.n(c),d=a("0798"),p=a("7496"),m=Object(l["a"])(s,o,r,!1,null,null,null),f=m.exports;u()(m,{VAlert:d["a"],VApp:p["a"]});a("caad");var h=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-column",[a("v-row",{staticClass:"justify-center"},[a("v-logo-banner")],1),a("br"),a("v-row",{staticClass:"justify-center"},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-row",{attrs:{justify:"center"}},[a("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-row",{attrs:{justify:"center"}},[a("v-text-field",{attrs:{label:"Password",rules:t.passwordRules,"append-icon":t.pswVisibility?"visibility":"visibility_off",type:t.pswVisibility?"password":"text",required:""},on:{"click:append":function(){return t.pswVisibility=!t.pswVisibility}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("br"),a("v-row",{attrs:{justify:"center"}},[a("v-btn",{staticClass:"mr white--text",attrs:{block:"",outline:"","x-large":"",color:"rgba(0,32,96,255)"},on:{click:t.validateForm}},[t._v(" Login ")])],1)],1)],1),a("br"),a("v-row",{attrs:{justify:"center"}},[a("v-item",{staticClass:"caption"},[a("router-link",{attrs:{to:"/register"}},[t._v("You don't have an account? ")])],1)],1)],1)},g=[],b=(a("ac1f"),a("00b4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-banner",{staticClass:"vbanner",attrs:{sticky:"",dark:"",align:"center"}},[a("div",{staticClass:"banner"},[a("span",{staticClass:"parke"},[t._v("Parke")]),a("span",{staticClass:"d"},[t._v("D")])])])],1)}),w=[],y={components:{},props:{},data:function(){return{}},mounted:function(){},computed:{},methods:{},watch:{}},k=y,C=(a("80bf"),a("e4e5")),x=Object(l["a"])(k,b,w,!1,null,"ac281300",null),V=x.exports;u()(x,{VBanner:C["a"]});var _=a("bee2"),P=a("d4ec"),S=Object(_["a"])((function t(e,a,n){Object(P["a"])(this,t),this.username=e,this.email=a,this.password=n})),j={components:{VLogoBanner:V},props:{},data:function(){return{user:new S("","",""),submitted:!1,successful:!1,valid:!1,message:"",password:"",error:"",pswVisibility:String,pswCVisibility:String,email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"},function(t){return t&&t.length>=6||"At least 6 characters"}]}},created:function(){this.loggedIn&&this.$router.push("/parked")},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},methods:{validateForm:function(){this.$refs.form.validate()?this.handleLogin():(alert("Form is not valid"),this.$emit("alert",["error","Something went wrong. Please, try again"]))},handleLogin:function(){var t=this,e={username:this.email,email:this.email,password:this.password};this.$store.dispatch("auth/login",e).then((function(e){t.message=e,t.message.token?(t.$emit("alert",["success","Welcome!"]),t.$router.push("/parked")):t.$emit("alert",["error","Username or Password does not exist"])})).catch((function(e){t.error=e,t.$emit("alert",["error","Something went wrong. Please, try again"])}))}},watch:{}},$=j,z=(a("da41"),a("8336")),F=a("4bd4"),O=a("d903"),I=a("0fd9"),L=a("8654"),T=Object(l["a"])($,v,g,!1,null,null,null),D=T.exports;u()(T,{VBtn:z["a"],VForm:F["a"],VItem:O["a"],VRow:I["a"],VTextField:L["a"]});var R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-column",[a("v-row",{staticClass:"justify-center"},[a("v-logo-banner")],1),a("br"),a("v-row",{staticClass:"justify-center"},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-row",{attrs:{justify:"center"}},[a("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-row",{attrs:{justify:"center"}},[a("v-text-field",{attrs:{label:"Password",rules:t.passwordRules,"append-icon":t.pswVisibility?"visibility":"visibility_off",type:t.pswVisibility?"password":"text",required:""},on:{"click:append":function(){return t.pswVisibility=!t.pswVisibility}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("v-row",{attrs:{justify:"center"}},[a("v-text-field",{attrs:{label:"Confirm Password",rules:t.passwordConfRules,"append-icon":t.pswCVisibility?"visibility":"visibility_off",type:t.pswCVisibility?"password":"text",required:""},on:{"click:append":function(){return t.pswCVisibility=!t.pswCVisibility}},model:{value:t.passwordConf,callback:function(e){t.passwordConf=e},expression:"passwordConf"}})],1),a("br"),a("v-row",{attrs:{justify:"center"}},[a("v-btn",{staticClass:"mr white--text",attrs:{block:"",outline:"","x-large":"",color:"rgba(0,32,96,255)"},on:{click:t.validateForm}},[t._v(" Register ")])],1)],1)],1),a("br"),a("v-row",{attrs:{justify:"center"}},[a("v-item",{staticClass:"caption"},[a("router-link",{attrs:{to:"/login"}},[t._v("Already have an account? ")])],1)],1)],1)},A=[],B={components:{VLogoBanner:V},props:{},data:function(){var t=this;return{user:new S("","",""),submitted:!1,successful:!1,valid:!1,message:"",password:"",passwordConf:"",error:"",pswVisibility:String,pswCVisibility:String,email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"},function(t){return t&&t.length>=6||"At least 6 characters"}],passwordConfRules:[function(e){return e===t.password||"Password must match"}]}},mounted:function(){this.loggedIn&&this.$router.push("/profile")},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},methods:{validateForm:function(){this.$refs.form.validate()?this.handleRegister():alert("Form is not valid")},handleRegister:function(){var t=this,e=new FormData;e.append("username",this.email),e.append("email",this.email),e.append("password",this.password),this.$store.dispatch("auth/register",e).then((function(e){t.message=e,t.$emit("alert",["success","Your account is ready. You can now Login"]),t.$router.push("/login")})).catch((function(e){t.error=e,t.$emit("alert",["error","Something went wrong. This email is already used"])}))}},watch:{}},M=B,W=(a("ac59"),Object(l["a"])(M,R,A,!1,null,null,null)),U=W.exports;u()(W,{VBtn:z["a"],VForm:F["a"],VItem:O["a"],VRow:I["a"],VTextField:L["a"]});var E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-flex",{attrs:{xs12:""}},[a("v-row",{staticClass:"justify-center"},[a("profile-banner")],1),a("v-row",{staticClass:"justify-center"},[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-row",{attrs:{justify:"center"}},[a("v-text-field",{attrs:{label:"E-mail",required:"",readonly:""},model:{value:t.currentUser.username,callback:function(e){t.$set(t.currentUser,"username",e)},expression:"currentUser.username"}})],1),a("v-row",{attrs:{justify:"center"}},[a("v-text-field",{attrs:{label:"Password","append-icon":t.pswVisibility?"visibility":"visibility_off",readonly:"",type:t.pswVisibility?"password":"text",required:""},on:{"click:append":function(){return t.pswVisibility=!t.pswVisibility}},model:{value:t.currentUser.password,callback:function(e){t.$set(t.currentUser,"password",e)},expression:"currentUser.password"}})],1),a("br")],1)],1),a("v-row",{staticClass:"justify-center"},[a("v-form",{ref:"form",attrs:{"lazy-validation":"",width:"100%"}},[a("v-row",{staticClass:"justify-center"},[a("v-file-input",{attrs:{accept:"image/png, image/jpeg, image/bmp","append-icon":"mdi-camera","prepend-icon":"","show-size":"","truncate-length":"4",placeholder:"Upload Blue Card",dense:"",chips:"",solo:"",filled:""},on:{change:t.selectBlueCard},model:{value:t.blueCard,callback:function(e){t.blueCard=e},expression:"blueCard"}})],1),a("br"),a("v-row",{attrs:{justify:"center"}},[a("v-btn",{staticClass:"mr white--text",attrs:{block:"",outline:"","x-large":"",color:"rgba(0,32,96,255)"},on:{click:t.uploadFile}},[t._v(" Upload ")])],1)],1)],1),a("v-row",{staticClass:"justify-center"},[a("v-bottom-navigation",{attrs:{absolute:"",value:t.value,"background-color":"blue"}},[a("v-btn",[a("span",[t._v("Map")]),a("router-link",{attrs:{to:"/parked"}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-map")])],1)],1),a("v-btn",[a("span",[t._v("Saved")]),a("v-icon",{attrs:{color:"white"}},[t._v("mdi-heart")])],1),a("v-btn",[a("span",[t._v("Places")]),a("v-icon",{attrs:{color:"white"}},[t._v("mdi-shopping")])],1),a("v-btn",{on:{click:t.logOut}},[a("span",[t._v("Logout")]),a("v-icon",{attrs:{color:"white"}},[t._v("mdi-logout-variant")])],1)],1)],1)],1)],1)},q=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profileB"},[a("v-banner",{staticClass:"vbanner",attrs:{sticky:"",dark:"",align:"center"}},[a("div",{staticClass:"banner"},[a("span",{staticClass:"parke"},[t._v("Profi")]),a("span",{staticClass:"d"},[t._v("le")])])])],1)},G=[],Y={},H=Y,J=(a("3fb6"),Object(l["a"])(H,N,G,!1,null,"41fcf570",null)),K=J.exports;u()(J,{VBanner:C["a"]});var Z=a("bc3a"),Q=a.n(Z),X="https://parked-iot-project.herokuapp.com/",tt=function(){function t(){Object(P["a"])(this,t)}return Object(_["a"])(t,[{key:"post",value:function(t,e){return Q.a.post(X+e,t)}},{key:"upload",value:function(t,e){return Q.a.post(X+e,t)}}]),t}(),et=new tt,at={name:"Profile",components:{ProfileBanner:K},data:function(){return{pswVisibility:String,password:"",email:"",blueCard:null,encodedFile:"",fileUp:"",message:""}},computed:{currentUser:function(){return this.$store.state.auth.user}},mounted:function(){this.currentUser||this.$router.push("/login")},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")},selectBlueCard:function(t){this.blueCard=t},uploadFile:function(){var t=this;if(this.blueCard){var e=new FormData;e.append("image",this.encodedFile),e.append("email",this.$store.state.auth.user.username),e.append("password",this.$store.state.auth.user.password),et.upload(e,"usersign/card/").then((function(e){t.message=e,t.message.data.status&&"Image saved"==t.message.data.status?t.$emit("alert",["success","Your blue card has been uploaded!"]):t.$emit("alert",["error","Something went wrong. Please, try again"])})).catch((function(e){t.error=e,t.$emit("alert",["error","Something went wrong. Please, try again"])})),this.blueCard=null}}},watch:{blueCard:function(t){var e=this,a=new FileReader;a.onload=function(t){e.encodedFile=t.target.result},a.readAsDataURL(t)}}},nt=at,ot=(a("7363"),a("b81c")),rt=a("a523"),it=a("23a7"),st=a("0e8f"),lt=a("132d"),ct=Object(l["a"])(nt,E,q,!1,null,"13b573c4",null),ut=ct.exports;u()(ct,{VBottomNavigation:ot["a"],VBtn:z["a"],VContainer:rt["a"],VFileInput:it["a"],VFlex:st["a"],VForm:F["a"],VIcon:lt["a"],VRow:I["a"],VTextField:L["a"]});var dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-row",[a("v-banner",{attrs:{color:"primary",dark:"",elevation:"10","single-line":"",sticky:"",shaped:"",tile:"",width:"100%"}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-flex",{attrs:{xs12:""}},[a("v-icon",[t._v("mdi-magnify")]),t._v("   "),a("GmapAutocomplete",{attrs:{color:"white"},on:{place_changed:t.setPlace}})],1)],1)],1)],1),a("v-row",[a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",{attrs:{color:"blue",height:"100%"}},[a("GmapMap",{ref:"map",staticStyle:{width:"100%",height:"85vh"},attrs:{draggable:!0,options:{zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!0,disableDefaultUi:!1},myLocationEnabled:"true",zoomControl:"true",zoom:t.zoom,center:{lat:38.26030427395903,lng:21.744173387859256}},on:{zoom_changed:t.getCurrentZoom,center_changed:t.getCurrentCenter,"update:zoom":function(e){t.zoom=e}}},[t._l(t.locations,(function(e,n){return a("gmap-marker",{key:n,attrs:{position:e,label:e.label,clickable:!0,icon:e.icon},on:{click:function(e){return t.openInfoWindowTemplate(n)}}})})),a("gmap-marker",{attrs:{position:t.currentDevicePos,icon:{url:"https://img.icons8.com/emoji/24/000000/blue-circle-emoji.png",scaledSize:{width:1*t.zoom,height:1*t.zoom}}}}),a("gmap-info-window",{attrs:{options:{maxWidth:300,pixelOffset:{width:0,height:-35}},position:t.infoWindow.position,opened:t.infoWindow.open},on:{closeclick:t.closeWindowInfo}},[a("div",{domProps:{innerHTML:t._s(t.infoWindow.template)}})])],2)],1)],1)],1)],1)],1),a("v-card",{staticClass:"float-end",style:{position:"absolute",top:"15%",right:"-1%"},attrs:{outlined:"",color:"transparent",absolute:"",right:""}},t._l(1,(function(e){return a("v-col",{key:e},[a("v-row",{attrs:{justify:"space-around","no-gutters":""}},[a("v-btn",{attrs:{color:"primary",elevation:"12",fab:"",small:"",dark:""},on:{click:t.locateGeoLocation}},[a("v-icon",[t._v("mdi-crosshairs")])],1)],1),a("br"),a("v-row",{attrs:{justify:"space-around","no-gutters":""}},[a("v-btn",{attrs:{disabled:0==t.Paction,color:"primary",elevation:"12",fab:"",small:""},on:{click:t.BookSpot}},[a("v-icon",[t._v("mdi-parking")])],1)],1),a("br"),a("v-row",{attrs:{justify:"space-around","no-gutters":""}},[a("v-btn",{attrs:{color:"primary",elevation:"12",fab:"",small:"",dark:""},on:{click:function(e){t.openFilters=!0}}},[a("v-icon",[t._v("mdi-filter")])],1)],1),a("br"),a("v-row")],1)})),1),a("v-row",{staticClass:"justify-center"},[a("v-bottom-navigation",{attrs:{absolute:"",value:t.value,"background-color":"blue"}},[a("v-btn",[a("span",[t._v("Profile")]),a("router-link",{attrs:{to:"/profile"}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-account")])],1)],1),a("v-btn",[a("span",[t._v("Saved")]),a("v-icon",{attrs:{color:"white"}},[t._v("mdi-heart")])],1),a("v-btn",[a("span",[t._v("Places")]),a("v-icon",{attrs:{color:"white"}},[t._v("mdi-shopping")])],1),a("v-btn",{on:{click:t.logOut}},[a("span",[t._v("Logout")]),a("v-icon",{attrs:{color:"white"}},[t._v("mdi-logout-variant")])],1)],1)],1),a("v-bottom-sheet",{attrs:{persistent:"",width:"100%","hide-overlay":""},model:{value:t.openFilters,callback:function(e){t.openFilters=e},expression:"openFilters"}},[a("v-card",[a("v-card-title",{staticClass:"text blue lighten-2"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-flex",{attrs:{xs5:""}},[t._v(" Filters ")]),a("v-flex",{attrs:{xs1:"","offset-5":""}},[a("v-btn",{attrs:{text:""},on:{click:function(e){t.openFilters=!1}}},[a("v-icon",[t._v("mdi-close")])],1)],1)],1)],1),a("br"),a("v-card-text",{staticStyle:{}},[a("v-select",{attrs:{dense:"",items:t.cars,"item-text":"label","item-value":"value",label:"Car Type",outlined:""},model:{value:t.car,callback:function(e){t.car=e},expression:"car"}}),a("v-select",{attrs:{dense:"",items:t.ramps,"item-text":"label","item-value":"value",label:"Ramp",outlined:""},model:{value:t.ramp,callback:function(e){t.ramp=e},expression:"ramp"}}),a("v-slider",{attrs:{dense:"",hint:"Im a hint",step:"5",min:"10",max:"100","thumb-label":"always",width:"50%",label:"Distance"},model:{value:t.distance,callback:function(e){t.distance=e},expression:"distance"}})],1)],1)],1)],1)],1)},pt=[],mt=(a("d81d"),a("a9e3"),a("99af"),a("fb6a"),{name:"Parked",components:{},props:{},data:function(){return{currentDevicePos:{},selectedParkingSpot:{},Paction:!1,infoWindow:{position:{lat:0,lng:0},open:!1,template:""},car:"car",ramp:0,distance:100,ramps:[{label:"Yes",value:1},{label:"No",value:0}],cars:[{label:"Car",value:"car"},{label:"Van",value:"van"},{label:"Single-Side Van",value:"singleSideVan"}],openFilters:!1,getMarkersWait:!1,zoom:15,center:{lat:38.26030427395903,lng:21.744173387859256},locationMarkers:[],locPlaces:[],existingPlace:null,locations:[],test:"",currentCenterLat:38.26030427395903,currentCenterLng:21.744173387859256}},computed:{currentUser:function(){return this.$store.state.auth.user}},created:function(){this.locateGeoLocation()},mounted:function(){this.currentUser||this.$router.push("/login"),this.createMarkers(),this.locateGeoLocation(),this.$nextTick((function(){var t=this;window.setInterval((function(){t.getDevicePos()}),2500)}))},methods:{setPlace:function(t){this.$refs.map.$mapPromise.then((function(e){e.panTo({lat:t.geometry.location.lat(),lng:t.geometry.location.lng()})})),this.zoom=18},getCurrentZoom:function(t){this.zoom=t},getCurrentCenter:function(t){this.currentCenterLat=t.lat(),this.currentCenterLng=t.lng(),this.createMarkers()},getDevicePos:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){t.currentDevicePos={lat:e.coords.latitude,lng:e.coords.longitude}}))},locateGeoLocation:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){t.center={lat:e.coords.latitude,lng:e.coords.longitude},t.$refs.map.$mapPromise.then((function(t){t.panTo({lat:e.coords.latitude,lng:e.coords.longitude})})),t.currentDevicePos=t.center})),this.zoom=18},createMarkers:function(){var t=this;this.getMarkersWait||(this.infoWindow.open=!1,this.Paction=!1,this.selectedParkingSpot={},this.locations=[],setTimeout(this.getMarkers(),1e3),this.getMarkersWait=!0,setTimeout((function(){t.getMarkersWait=!1}),200))},getMarkers:function(){var t=this,e=new FormData;e.append("gpsLong",this.currentCenterLng),e.append("gpsLat",this.currentCenterLat),e.append("ramp",this.ramp),e.append("typeVeh",this.car),e.append("maxDist",this.distance),et.post(e,"spots/available/").then((function(e){t.test=e;var a=e.data;for(var n in a)a[n]["id"]=n,"unknown"==a[n]["status"]?a[n]["icon"]={url:"http://maps.google.com/mapfiles/ms/icons/orange-dot.png",scaledSize:{width:2*t.zoom,height:2*t.zoom}}:a[n]["icon"]={url:"http://maps.google.com/mapfiles/ms/icons/red-dot.png",scaledSize:{width:2*t.zoom,height:2*t.zoom}},a[n]["lat"]=Number(a[n]["lat"]),a[n]["lng"]=Number(a[n]["lng"]),t.locations.push(a[n])})).catch((function(e){t.test=e}))},openInfoWindowTemplate:function(t){for(var e in this.test=t,this.Paction=!0,this.locations[t].icon={url:"http://maps.google.com/mapfiles/ms/icons/green-dot.png",scaledSize:{width:2*this.zoom,height:2*this.zoom}},this.selectedParkingSpot=this.locations[t],this.locations)e!=t&&("unknown"==this.locations[e].status?this.locations[e].icon={url:"http://maps.google.com/mapfiles/ms/icons/orange-dot.png",scaledSize:{width:2*this.zoom,height:2*this.zoom}}:this.locations[e].icon={url:"http://maps.google.com/mapfiles/ms/icons/red-dot.png",scaledSize:{width:2*this.zoom,height:2*this.zoom}});var a=this.locations[t],n=a.lat,o=a.lng,r=a.ramp,i=a.type,s=a.dist,l=a.status;s=parseInt(1e3*Number(s)),this.infoWindow.position={lat:n,lng:o},r=0==r?"Available":"Unavailable",i="car"==i?"Car":"van"==i?"Van":"Single-Side Van",this.test={lat:n,lng:o,ramp:r,type:i,dist:s},this.infoWindow.template="<b> Ramp:</b> ".concat(r,"<br>\n        <b>Distance:</b> ").concat(s," meters<br>\n        <b>Car Type:</b> ").concat(i,"<br>\n        <b>Status:</b> ").concat(l.charAt(0).toUpperCase()+l.slice(1),"<br> "),this.infoWindow.open=!0},closeWindowInfo:function(){for(var t in this.Paction=!1,this.infoWindow.open=!1,this.selectedParkingSpot={},this.locations)"unknown"==this.locations[t].status?this.locations[t].icon={url:"http://maps.google.com/mapfiles/ms/icons/orange-dot.png",scaledSize:{width:2*this.zoom,height:2*this.zoom}}:this.locations[t].icon={url:"http://maps.google.com/mapfiles/ms/icons/red-dot.png",scaledSize:{width:2*this.zoom,height:2*this.zoom}}},logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")},BookSpot:function(){var t=this,e=new FormData;e.append("gps_lat",this.currentDevicePos.lat),e.append("gps_long",this.currentDevicePos.long),e.append("spot_id",Number(this.selectedParkingSpot.id)),et.post(e,"spots/save/").then((function(e){t.test=e,"Wrong Coordinates"==e.data.status&&t.$emit("alert",["warning","You are too far away"]),"OK"==e.data.status&&t.$emit("alert",["success","Spot has been occupied successfully!"])})).catch((function(e){t.test=e,t.$emit("alert",["error","Something went wrong. Please, try again"])}))}},watch:{openFilters:function(){this.createMarkers()}}}),ft=mt,ht=(a("a6de"),a("288c")),vt=a("b0af"),gt=a("99d9"),bt=a("62ad"),wt=a("a722"),yt=a("b974"),kt=a("ba0d"),Ct=Object(l["a"])(ft,dt,pt,!1,null,"71abd93c",null),xt=Ct.exports;u()(Ct,{VBanner:C["a"],VBottomNavigation:ot["a"],VBottomSheet:ht["a"],VBtn:z["a"],VCard:vt["a"],VCardText:gt["a"],VCardTitle:gt["b"],VCol:bt["a"],VContainer:rt["a"],VFlex:st["a"],VIcon:lt["a"],VLayout:wt["a"],VRow:I["a"],VSelect:yt["a"],VSlider:kt["a"]}),n["default"].use(h["a"]);var Vt=[{path:"/",component:D},{path:"/login",component:D,meta:{guest:!0}},{path:"/register",component:U,meta:{guest:!0}},{path:"/profile",component:ut,meta:{requiresAuth:!0}},{path:"/parked",component:xt}],_t=new h["a"]({mode:"history",base:"/",routes:Vt,linkActiveClass:"is-active"});_t.beforeEach((function(t,e,a){var n=["/login","/register","/home"],o=!n.includes(t.path),r=localStorage.getItem("user");o&&!r?a("/login"):a()}));var Pt=_t,St=a("ce5b"),jt=a.n(St),$t=(a("bf40"),a("f309"));n["default"].use($t["a"]);var zt=new $t["a"]({}),Ft=a("2f62"),Ot=(a("d3b7"),a("e9c4"),"https://parked-iot-project.herokuapp.com/"),It=function(){function t(){Object(P["a"])(this,t)}return Object(_["a"])(t,[{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"login",value:function(t){console.log("login"),console.log(t);var e=new FormData;return e.append("username",t.username),e.append("email",t.username),e.append("password",t.password),Q.a.post(Ot+"usersign/login/",e).then((function(t){if(console.log(t),t.data.token){var a={username:e.get("username"),password:e.get("password"),token:t.data.token};return localStorage.setItem("user",JSON.stringify(a)),a}})).catch((function(t){return{status:"fail",error:t}}))}},{key:"register",value:function(t){return Q.a.post(Ot+"usersign/register/",t)}}]),t}(),Lt=new It,Tt=JSON.parse(localStorage.getItem("user")),Dt=Tt?{status:{loggedIn:!0},user:Tt}:{status:{loggedIn:!1},user:null},Rt={namespaced:!0,state:Dt,actions:{login:function(t,e){var a=t.commit;return Lt.login(e).then((function(t){return a("loginSuccess",t),Promise.resolve(t)}),(function(t){return a("loginFailure"),Promise.reject(t)}))},logout:function(t){var e=t.commit;Lt.logout(),e("logout")},register:function(t,e){var a=t.commit;return Lt.register(e).then((function(t){return a("registerSuccess"),Promise.resolve(t.data)}),(function(t){return a("registerFailure"),Promise.reject(t)}))}},mutations:{loginSuccess:function(t,e){t.status.loggedIn=!0,t.user=e},loginFailure:function(t){t.status.loggedIn=!1,t.user=null},logout:function(t){t.status.loggedIn=!1,t.user=null},registerSuccess:function(t){t.status.loggedIn=!1},registerFailure:function(t){t.status.loggedIn=!1}}};n["default"].use(Ft["a"]);var At=new Ft["a"].Store({modules:{auth:Rt}}),Bt=a("755e"),Mt=a("7bb1");n["default"].use(Mt),n["default"].use(Bt,{load:{key:"AIzaSyCyOBuqzRmGjbOEQCeHVDHHsjML57kUnKM",libraries:"places"}}),n["default"].use(jt.a),n["default"].config.productionTip=!1,new n["default"]({el:"#app",vuetify:zt,router:Pt,store:At,render:function(t){return t(f)}}).$mount("#app")},7363:function(t,e,a){"use strict";a("de34")},"80bf":function(t,e,a){"use strict";a("4ecb")},9797:function(t,e,a){},a6de:function(t,e,a){"use strict";a("a83c")},a83c:function(t,e,a){},ac59:function(t,e,a){"use strict";a("9797")},da41:function(t,e,a){"use strict";a("266e")},de34:function(t,e,a){}});
//# sourceMappingURL=app.717b0626.js.map