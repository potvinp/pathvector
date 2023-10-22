"use strict";(self.webpackChunkpathvector_io=self.webpackChunkpathvector_io||[]).push([[217],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9803:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:2},i="Installation",l={unversionedId:"installation",id:"installation",title:"Installation",description:"\x3c!--",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",draft:!1,editUrl:"https://github.com/natesales/pathvector/edit/main/docs/docs/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"About",permalink:"/docs/about"},next:{title:"Configuration",permalink:"/docs/configuration"}},s={},p=[{value:"Package Repository",id:"package-repository",level:2},{value:"Debian (Ubuntu, etc.)",id:"debian-ubuntu-etc",level:2},{value:"CentOS",id:"centos",level:2},{value:"VyOS",id:"vyos",level:2},{value:"TNSR",id:"tnsr",level:2},{value:"FreeBSD",id:"freebsd",level:2},{value:"Ubiquiti EdgeOS",id:"ubiquiti-edgeos",level:2},{value:"Arista EOS",id:"arista-eos",level:2},{value:"Juniper JunOS",id:"juniper-junos",level:2},{value:"Cisco IOx",id:"cisco-iox",level:2},{value:"Nokia Service Router (SR) Linux",id:"nokia-service-router-sr-linux",level:2},{value:"Mikrotik RouterOS",id:"mikrotik-routeros",level:2},{value:"Building from source",id:"building-from-source",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"installation"},"Installation"),(0,n.kt)("p",null,"All versions of Pathvector for all supported platforms are available to download from the\nlatest ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/natesales/pathvector/releases"},"release page"),"."),(0,n.kt)("p",null,"It is recommended to run Pathvector every 12 hours to update IRR prefix lists and PeeringDB prefix limits.\nAdding ",(0,n.kt)("inlineCode",{parentName:"p"},"0 */12 * * * pathvector generate")," to your crontab will update the filters at 12 AM and PM every day."),(0,n.kt)("p",null,"The only required dependency is ",(0,n.kt)("inlineCode",{parentName:"p"},"bird >= 2.0.7"),", but some features require additional dependencies:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RPKI filtering: RTR server such as ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cloudflare/gortr"},"gortr")," or Cloudflare's public RTR server at ",(0,n.kt)("inlineCode",{parentName:"li"},"rtr.rpki.cloudflare.com:8282")),(0,n.kt)("li",{parentName:"ul"},"IRR prefix list generation: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/bgp/bgpq4"},"bgpq4")),(0,n.kt)("li",{parentName:"ul"},"VRRP daemon: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/acassen/keepalived"},"keepalived"))),(0,n.kt)("h2",{id:"package-repository"},"Package Repository"),(0,n.kt)("p",null,"Pathvector releases >= 5.1.2 are available in the ",(0,n.kt)("a",{parentName:"p",href:"https://repo.pathvector.io"},"https://repo.pathvector.io")," package repository. Packages will still\ncontinue to be uploaded to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/natesales/repo"},"natesales repo")," for compatibility with existing\ninstalls, but for security it is recommended to use the repo.pathvector.io for all new installations due to increased\nsecurity by GPG signatures. Packages in repo.pathvector.io are signed\nwith ",(0,n.kt)("a",{parentName:"p",href:"https://repo.pathvector.io/pgp.asc"},(0,n.kt)("inlineCode",{parentName:"a"},"0983 AC66 7B4F 0B54 F69D")),". Note that packages downloaded from GitHub\nreleases are not signed."),(0,n.kt)("p",null,"Pathvector on Linux is available for amd64, aarch64, and mips64 as binaries and deb and rpm packages\nfrom ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/natesales/pathvector/releases"},"releases"),"."),(0,n.kt)("h2",{id:"debian-ubuntu-etc"},"Debian (Ubuntu, etc.)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl https://repo.pathvector.io/pgp.asc > /usr/share/keyrings/pathvector.asc\necho "deb [signed-by=/usr/share/keyrings/pathvector.asc] https://repo.pathvector.io/apt/ stable main" > /etc/apt/sources.list.d/pathvector.list\napt update && apt install -y pathvector\n')),(0,n.kt)("h2",{id:"centos"},"CentOS"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"yum install -y yum-utils\nyum-config-manager --add-repo https://repo.pathvector.io/yum/pathvector.repo\nyum install pathvector\n")),(0,n.kt)("h2",{id:"vyos"},"VyOS"),(0,n.kt)("p",null,"VyOS is based on Debian, see ",(0,n.kt)("a",{parentName:"p",href:"#debian"},"Debian")," for more information."),(0,n.kt)("h2",{id:"tnsr"},"TNSR"),(0,n.kt)("p",null,"TNSR is based on Ubuntu, see ",(0,n.kt)("a",{parentName:"p",href:"#debian"},"Debian")," for more information. Past TNSR versions were based on CentOS, see ",(0,n.kt)("a",{parentName:"p",href:"https://www.netgate.com/tnsr-centos-to-ubuntu-faq"},"Netgate's FAQ")," for more information."),(0,n.kt)("h2",{id:"freebsd"},"FreeBSD"),(0,n.kt)("p",null,"Pathvector is available as an amd64/aarch64 binary for FreeBSD from\nthe ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/natesales/pathvector/releases"},"releases")," page."),(0,n.kt)("h2",{id:"ubiquiti-edgeos"},"Ubiquiti EdgeOS"),(0,n.kt)("p",null,"Ubiquiti EdgeRouters are based on Debian. Pathvector supports the ER-8-XG, ER-12P, ER-12, ERPro-8, ER-8, ER-6P, ERPoe-5,\nER-4, and ERLite-3 routers based on the MIPS64 architecture. See ",(0,n.kt)("a",{parentName:"p",href:"#debian"},"Debian")," for more information."),(0,n.kt)("p",null,"Not Supported (MIPS1004Kc): ER-X, ER-X-SFP, ER-10X"),(0,n.kt)("h2",{id:"arista-eos"},"Arista EOS"),(0,n.kt)("p",null,"Pathvector can run on Arista switches by installing a SWIX (Switch Extension) file\nfrom ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/natesales/pathvector/releases"},"releases"),". First, copy the ",(0,n.kt)("inlineCode",{parentName:"p"},"pathvector-arista.swix")," file\nto ",(0,n.kt)("inlineCode",{parentName:"p"},"/mnt/flash/")," on your switch."),(0,n.kt)("p",null,"From the EOS CLI:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Copy the extension to extensions: ",(0,n.kt)("inlineCode",{parentName:"li"},"copy flash:pathvector-arista.swix extensions:")),(0,n.kt)("li",{parentName:"ol"},"Install the extension: ",(0,n.kt)("inlineCode",{parentName:"li"},"extension pathvector-arista.swix")),(0,n.kt)("li",{parentName:"ol"},"Mark the extension to be installed on boot: ",(0,n.kt)("inlineCode",{parentName:"li"},"copy installed-extensions boot-extensions")),(0,n.kt)("li",{parentName:"ol"},"Add the pathvector alias: ",(0,n.kt)("inlineCode",{parentName:"li"},'alias pathvector "bash pathvector"')),(0,n.kt)("li",{parentName:"ol"},"Add Pathvector to scheduler (\noptional): ",(0,n.kt)("inlineCode",{parentName:"li"},"schedule pathvector interval 720 max-log-files 1 command pathvector -c /mnt/flash/pathvector.yml -o /mnt/flash/bird/ -s /run/bird.ctl")),(0,n.kt)("li",{parentName:"ol"},"Save changes: ",(0,n.kt)("inlineCode",{parentName:"li"},"wr mem"))),(0,n.kt)("h2",{id:"juniper-junos"},"Juniper JunOS"),(0,n.kt)("p",null,"Pathvector can run on Juniper devices by installing a signed JunOS extension package. First, download the Pathvector\nJuniper release, either to your local machine and SCP it over to the Juniper router/switch, or pull it directly in\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"request system software")," command by replacing the filename with the URL to the file."),(0,n.kt)("p",null,"Add the Pathvector extension provider:\n",(0,n.kt)("inlineCode",{parentName:"p"},"set system extensions providers pathvector license-type customer deployment-scope commercial")),(0,n.kt)("p",null,"Install the Pathvector package:\n",(0,n.kt)("inlineCode",{parentName:"p"},"request system software add pathvector-juniper.tgz")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"request vmhost software add pathvector-juniper.tgz")),(0,n.kt)("h2",{id:"cisco-iox"},"Cisco IOx"),(0,n.kt)("p",null,"Pathvector can run on IOx compatible Cisco devices by installing a IOx package release, or directly to the device with\nioxclient. See ",(0,n.kt)("a",{parentName:"p",href:"https://developer.cisco.com/docs/iox/#!app-management/application-management"},"https://developer.cisco.com/docs/iox/#!app-management/application-management")," for more information."),(0,n.kt)("h2",{id:"nokia-service-router-sr-linux"},"Nokia Service Router (SR) Linux"),(0,n.kt)("p",null,"Nokia SR Linux is based on CentOS, see ",(0,n.kt)("a",{parentName:"p",href:"#centos"},"CentOS")," for more information."),(0,n.kt)("h2",{id:"mikrotik-routeros"},"Mikrotik RouterOS"),(0,n.kt)("p",null,"Pathvector has experimental RouterOS support. Mikrotik has discontinued this feature. See the ",(0,n.kt)("a",{parentName:"p",href:"https://help.mikrotik.com/docs/display/ROS/Container"},"RouterOS Container")," reference for installation instructions\nfor the container package."),(0,n.kt)("p",null,"To build a Docker image for an alternate architecture:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker build --output type=tar,dest=pathvector-mikrotik-arm64v8.tar -t pathvector-cron:arm64v8 --build-arg ARCH=arm64v8 -f ../vendorbuild/mikrotik/Dockerfile ..\n")),(0,n.kt)("h2",{id:"building-from-source"},"Building from source"),(0,n.kt)("p",null,"Pathvector can be easily built from source for some, but not all, of\nthe ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/golang/go/blob/master/src/go/build/syslist.go"},"many supported Go platforms"),"."),(0,n.kt)("p",null,"For example, to build Pathvector for M1 Macs:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/natesales/pathvector && cd pathvector\nGOOS=darwin GOARCH=arm64 go build\n")))}d.isMDXComponent=!0}}]);