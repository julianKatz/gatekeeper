(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{100:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return t?a.a.createElement(m,s(s({ref:n},l),{},{components:t})):a.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},95:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(100)),i={id:"violations",title:"Handling Constraint Violations"},s={unversionedId:"violations",id:"violations",isDocsHomePage:!1,title:"Handling Constraint Violations",description:"Log denies",source:"@site/docs/violations.md",slug:"/violations",permalink:"/gatekeeper/website/docs/violations",editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/docs/violations.md",version:"current",sidebar:"docs",previous:{title:"Audit",permalink:"/gatekeeper/website/docs/audit"},next:{title:"Replicating Data",permalink:"/gatekeeper/website/docs/sync"}},c=[{value:"Log denies",id:"log-denies",children:[]},{value:"Dry Run",id:"dry-run",children:[]}],l={toc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"log-denies"},"Log denies"),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"--log-denies")," flag to log all denies and dryrun failures.\nThis is useful when trying to see what is being denied/fails dry-run and keeping a log to debug cluster problems without having to enable syncing or looking through the status of all constraints."),Object(o.b)("h2",{id:"dry-run"},"Dry Run"),Object(o.b)("p",null,"When rolling out new constraints to running clusters, the dry run functionality can be helpful as it enables constraints to be deployed in the cluster without making actual changes. This allows constraints to be tested in a running cluster without enforcing them. Cluster resources that are impacted by the dry run constraint are surfaced as violations in the ",Object(o.b)("inlineCode",{parentName:"p"},"status")," field of the constraint."),Object(o.b)("p",null,"To use the dry run feature, add ",Object(o.b)("inlineCode",{parentName:"p"},"enforcementAction: dryrun")," to the constraint spec to ensure no actual changes are made as a result of the constraint. By default, ",Object(o.b)("inlineCode",{parentName:"p"},"enforcementAction")," is set to ",Object(o.b)("inlineCode",{parentName:"p"},"deny")," as the default behavior is to deny admission requests with any violation."),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sRequiredLabels\nmetadata:\n  name: ns-must-have-gk\nspec:\n  enforcementAction: dryrun\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Namespace"]\n  parameters:\n    labels: ["gatekeeper"]\nstatus:\n  auditTimestamp: "2019-08-15T01:46:13Z"\n  enforced: true\n  violations:\n  - enforcementAction: dryrun\n    kind: Namespace\n    message: \'you must provide labels: {"gatekeeper"}\'\n    name: default\n  - enforcementAction: dryrun\n    kind: Namespace\n    message: \'you must provide labels: {"gatekeeper"}\'\n    name: gatekeeper-system\n\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"NOTE: The supported enforcementActions are ","[",Object(o.b)("inlineCode",{parentName:"p"},"deny"),", ",Object(o.b)("inlineCode",{parentName:"p"},"dryrun"),"]"," for constraints. Update the ",Object(o.b)("inlineCode",{parentName:"p"},"--disable-enforcementaction-validation=true")," flag if the desire is to disable enforcementAction validation against the list of supported enforcementActions.")))}u.isMDXComponent=!0}}]);