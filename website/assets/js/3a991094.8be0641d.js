"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9771],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2940:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"customize-startup",title:"Customizing Startup Behavior"},s=void 0,p={unversionedId:"customize-startup",id:"version-v3.7.x/customize-startup",title:"Customizing Startup Behavior",description:"Allow retries when adding objects to OPA",source:"@site/versioned_docs/version-v3.7.x/customize-startup.md",sourceDirName:".",slug:"/customize-startup",permalink:"/gatekeeper/website/docs/customize-startup",editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.7.x/customize-startup.md",tags:[],version:"v3.7.x",frontMatter:{id:"customize-startup",title:"Customizing Startup Behavior"},sidebar:"version-v3.7.x/docs",previous:{title:"Policy Library",permalink:"/gatekeeper/website/docs/library"},next:{title:"Customizing Admission Behavior",permalink:"/gatekeeper/website/docs/customize-admission"}},d=[{value:"Allow retries when adding objects to OPA",id:"allow-retries-when-adding-objects-to-opa",children:[],level:2},{value:"Enable profiling using <code>pprof</code>",id:"enable-profiling-using-pprof",children:[],level:2},{value:"Disable certificate generation and rotation for Gatekeeper&#39;s webhook",id:"disable-certificate-generation-and-rotation-for-gatekeepers-webhook",children:[],level:2},{value:"Alpha Emit admission and audit events",id:"alpha-emit-admission-and-audit-events",children:[],level:2}],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"allow-retries-when-adding-objects-to-opa"},"Allow retries when adding objects to OPA"),(0,i.kt)("p",null,"Gatekeeper's webhook servers undergo a bootstrapping period during which they are unavailable until the initial set of resources (constraints, templates, synced objects, etc...) have been ingested. This prevents Gatekeeper's webhook from validating based on an incomplete set of policies. This wait-for-bootstrapping behavior can be configured."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--readiness-retries")," flag defines the number of retry attempts allowed for an object (a Constraint, for example) to be successfully added to OPA.  The default is ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),".  A value of ",(0,i.kt)("inlineCode",{parentName:"p"},"-1")," allows for infinite retries, blocking the webhook until all objects have been added to OPA.  This guarantees complete enforcement, but has the potential to indefinitely block the webhook from serving requests."),(0,i.kt)("h2",{id:"enable-profiling-using-pprof"},"Enable profiling using ",(0,i.kt)("inlineCode",{parentName:"h2"},"pprof")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--enable-pprof")," flag enables an HTTP server for profiling using the ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/net/http/pprof"},"pprof")," library. By default, it serves to ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:6060")," but the port can be customized with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--pprof-port")," flag."),(0,i.kt)("h2",{id:"disable-certificate-generation-and-rotation-for-gatekeepers-webhook"},"Disable certificate generation and rotation for Gatekeeper's webhook"),(0,i.kt)("p",null,"By default, Gatekeeper uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/cert-controller"},(0,i.kt)("inlineCode",{parentName:"a"},"open-policy-agent/cert-controller"))," to handle the webhook's certificate rotation and generation. If you want to use a third-party solution, you may disable the cert-controller feature using ",(0,i.kt)("inlineCode",{parentName:"p"},"--disable-cert-rotation"),"."),(0,i.kt)("h2",{id:"alpha-emit-admission-and-audit-events"},"[Alpha]"," Emit admission and audit events"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--emit-admission-events")," flag enables the emission of all admission violations as Kubernetes events in the Gatekeeper namespace. This flag is in alpha stage and it is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," by default."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--emit-audit-events")," flag enables the emission of all audit violation as Kubernetes events in the Gatekeeper namespace. This flag is in alpha stage and it is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," by default."),(0,i.kt)("p",null,"There are three types of events that are emitted by Gatekeeper when the above flags are enabled:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Event"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"FailedAdmission")),(0,i.kt)("td",{parentName:"tr",align:null},"The Gatekeeper webhook denied the admission request (default behavior).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"WarningAdmission")),(0,i.kt)("td",{parentName:"tr",align:null},"When ",(0,i.kt)("inlineCode",{parentName:"td"},"enforcementAction: warn")," is specified in the constraint.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DryrunViolation")),(0,i.kt)("td",{parentName:"tr",align:null},"When ",(0,i.kt)("inlineCode",{parentName:"td"},"enforcementAction: dryrun")," is specified in the constraint.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"AuditViolation")),(0,i.kt)("td",{parentName:"tr",align:null},"A violation is detected during an audit.")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u2757 Warning: if the same constraint and violating resource tuple was emitted for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/v1.23.3/staging/src/k8s.io/client-go/tools/record/events_cache.go#L429-L438"},"more than 10 times in a 10-minute rolling interval"),", the Kubernetes event recorder will aggregate the events, e.g."),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre"},'39s         Warning   FailedAdmission   namespace/test      (combined from similar events):  Admission webhook "validation.gatekeeper.sh" denied request, Resource Namespace: , Constraint: ns-must-have-gk, Message: you must provide labels: {"gatekeeper"}\n')),(0,i.kt)("p",{parentName:"blockquote"},"Gatekeeper might burst 25 events about an object, but limit the refill rate to 1 new event every 5 minutes. This will help control the long-tail of events for resources that are always violating the constraint.")))}c.isMDXComponent=!0}}]);