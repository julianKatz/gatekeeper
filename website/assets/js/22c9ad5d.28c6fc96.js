"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[868],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7937:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(2122),i=n(9756),a=(n(7294),n(3905)),r=["components"],s={id:"failing-closed",title:"Failing Closed"},l=void 0,c={unversionedId:"failing-closed",id:"failing-closed",isDocsHomePage:!1,title:"Failing Closed",description:"Here we discuss how to configure Gatekeeper to fail closed and some factors you may want to consider before doing so.",source:"@site/docs/failing-closed.md",sourceDirName:".",slug:"/failing-closed",permalink:"/gatekeeper/website/docs/failing-closed",editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/docs/failing-closed.md",version:"current",frontMatter:{id:"failing-closed",title:"Failing Closed"},sidebar:"docs",previous:{title:"Cloud and Vendor Specific Fixes",permalink:"/gatekeeper/website/docs/vendor-specific"},next:{title:"Mutation",permalink:"/gatekeeper/website/docs/mutation"}},u=[{value:"How to Fail Closed",id:"how-to-fail-closed",children:[]},{value:"Considerations",id:"considerations",children:[{value:"Admission Deadlock",id:"admission-deadlock",children:[]},{value:"Cluster Control Plane Availability",id:"cluster-control-plane-availability",children:[]}]},{value:"Why Is This Hard?",id:"why-is-this-hard",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here we discuss how to configure Gatekeeper to fail closed and some factors you may want to consider before doing so."),(0,a.kt)("h2",{id:"how-to-fail-closed"},"How to Fail Closed"),(0,a.kt)("p",null,"If you installed Gatekeeper via the manifest, the only needed change is to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"failurePolicy")," field of Gatekeeper's ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidatingWebhookConfiguration")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"Fail"),". For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: admissionregistration.k8s.io/v1\nkind: ValidatingWebhookConfiguration\nmetadata:\n  labels:\n    gatekeeper.sh/system: \"yes\"\n  name: gatekeeper-validating-webhook-configuration\nwebhooks:\n- admissionReviewVersions:\n  - v1beta1\n  clientConfig:\n    caBundle: SOME_CERT\n    service:\n      name: gatekeeper-webhook-service\n      namespace: gatekeeper-system\n      path: /v1/admit\n      port: 443\n  failurePolicy: Fail\n  matchPolicy: Exact\n  name: validation.gatekeeper.sh\n  namespaceSelector:\n    matchExpressions:\n    - key: admission.gatekeeper.sh/ignore\n      operator: DoesNotExist\n  rules:\n  - apiGroups:\n    - '*'\n    apiVersions:\n    - '*'\n    operations:\n    - CREATE\n    - UPDATE\n    resources:\n    - '*'\n    scope: '*'\n  sideEffects: None\n  timeoutSeconds: 3\n- admissionReviewVersions:\n  - v1beta1\n  clientConfig:\n    caBundle: SOME_CERT\n    service:\n      name: gatekeeper-webhook-service\n      namespace: gatekeeper-system\n      path: /v1/admitlabel\n      port: 443\n  failurePolicy: Fail\n  matchPolicy: Exact\n  name: check-ignore-label.gatekeeper.sh\n  namespaceSelector: {}\n  objectSelector: {}\n  rules:\n  - apiGroups:\n    - \"\"\n    apiVersions:\n    - '*'\n    operations:\n    - CREATE\n    - UPDATE\n    resources:\n    - namespaces\n    scope: '*'\n  sideEffects: None\n  timeoutSeconds: 3\n")),(0,a.kt)("p",null,"If you installed Gatekeeper via any other method (Helm chart, operator), please consult the documentation for that method."),(0,a.kt)("h2",{id:"considerations"},"Considerations"),(0,a.kt)("p",null,"Here are some factors you may want to consider before configuring Gatekeeper to fail closed."),(0,a.kt)("h3",{id:"admission-deadlock"},"Admission Deadlock"),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("p",null,"It is possible to put the cluster in a state where automatic self-healing is impossible. Imagine you delete every ",(0,a.kt)("inlineCode",{parentName:"p"},"Node")," in your cluster. This will kill all running Gatekeeper servers, which means the webhook will fail. Because a request to add a ",(0,a.kt)("inlineCode",{parentName:"p"},"Node")," is subject to admission validation, it cannot succeed until the webhook can serve. The webhook cannot serve until a ",(0,a.kt)("inlineCode",{parentName:"p"},"Node")," is added. This circular dependency will need to be broken before the cluster's control plane can recover."),(0,a.kt)("h4",{id:"mitigation"},"Mitigation"),(0,a.kt)("p",null,"This can normally be mitigated by deleting the ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidatingWebhookConfiguration"),", per the ",(0,a.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/emergency"},"emergency procedure"),"."),(0,a.kt)("p",null,"Note that it should always be possible to modify or delete the ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidatingWebhookConfiguration")," because Kubernetes does not make requests to edit webhook configurations subject to admission webhooks."),(0,a.kt)("h4",{id:"potential-gotchas"},"Potential Gotchas"),(0,a.kt)("p",null,"If the existence of the webhook resource is enforced by some external process (such as an operator), that may interfere with the emergency recovery process. If this applies, it would be good to have a plan in place to deal with that scenario."),(0,a.kt)("h3",{id:"cluster-control-plane-availability"},"Cluster Control Plane Availability"),(0,a.kt)("p",null,"Because the webhook is being called for all K8s API server requests (under the default configuration), the availability of K8s's control plane becomes subject to the availability of the webhook. It is important to have an idea of your expected API server availability ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Service-level_objective"},"SLO")," and make sure Gatekeeper is configured to support that."),(0,a.kt)("p",null,"Below are some potential ways to do that and their gotchas."),(0,a.kt)("h4",{id:"limit-the-gatekeeper-webhooks-scope"},"Limit the Gatekeeper Webhook's Scope"),(0,a.kt)("p",null,"It is possible to exempt certain namespaces from being subject to the webhook, or to only call the webhook for certain kinds. This could be one way to prevent the webhook from interfering with sensitive processes."),(0,a.kt)("h5",{id:"potential-gotchas-1"},"Potential Gotchas"),(0,a.kt)("p",null,"It can be hard to say for certain that all critical resources have been exempted because dependencies can be non-obvious. Some examples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Exempting ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-system")," namespace is a good starting place, but what about cluster-scoped resources, like nodes? What about other potentially critical namespaces like ",(0,a.kt)("inlineCode",{parentName:"li"},"istio-system"),"?"),(0,a.kt)("li",{parentName:"ul"},"Some seemingly innocuous kinds can actually play a critical role in cluster operations. Did you know that a ",(0,a.kt)("inlineCode",{parentName:"li"},"ConfigMap")," is used as the locking resource for some Kubernetes leader elections?")),(0,a.kt)("p",null,"If you are relying on exempting resources to keep your cluster available, be sure you know all the critical dependencies of your cluster. Unfortunately this is very cluster-specific, so there is no general guidance to be offered here."),(0,a.kt)("h4",{id:"harden-your-deployment"},"Harden Your Deployment"),(0,a.kt)("p",null,"Gatekeeper attempts to be resilient out-of-the-box by running its webhook in multiple pods. You can take that work and adapt it to your cluster by adding the appropriate node selectors and scaling the number of nodes up or down as desired."),(0,a.kt)("h5",{id:"impact-of-scaling-nodes"},"Impact of Scaling Nodes"),(0,a.kt)("p",null,"Putting hard numbers on the impact scaling resources has on Gatekeeper's availability depends on the specifics of the underlying hardware of your cluster and how Gatekeeper is distributed across it, but there are some general themes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Increasing the number of webhook pods should increase QPS serving capacity"),(0,a.kt)("li",{parentName:"ul"},"Increasing the number of webhook pods tends to increase uptime of the service"),(0,a.kt)("li",{parentName:"ul"},"Increasing the number of webhook pods may increase the time it takes for a constraint to be enforced by all pods in the system")),(0,a.kt)("h5",{id:"potential-gotcha-failure-domains"},"Potential Gotcha: Failure Domains"),(0,a.kt)("p",null,"Increasing the number of pods increases the theoretical uptime of a system under the theory that if one pod goes down the other pods continue to serve and pick up the slack. This assumption fails if multiple pods fail at the same time due to the same root cause. This happens when multiple pods are in the same ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Failure_domain#:~:text=In%20computing%2C%20a%20failure%20domain,of%20infrastructure%20that%20could%20fail."},"failure domain"),"."),(0,a.kt)("p",null,"Here are some common ways for two pods to be in the same failure domain:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Running on the same node"),(0,a.kt)("li",{parentName:"ul"},"Running on the same physical host (e.g. multiple nodes are VMs backed by the same physical machine)"),(0,a.kt)("li",{parentName:"ul"},"Running on different physical hosts with the same network switch"),(0,a.kt)("li",{parentName:"ul"},"Running on different physical hosts with the same power supply"),(0,a.kt)("li",{parentName:"ul"},"Running on different physical hosts in the same rack")),(0,a.kt)("p",null,"Different clusters may have different backing physical infrastructures and different risk tolerances. Because of this, there is no definitive list of failure domains or guidance on how that should affect your setup."),(0,a.kt)("h2",{id:"why-is-this-hard"},"Why Is This Hard?"),(0,a.kt)("p",null,"In a nutshell it's because it's a webhook, and because it's self-hosted. All REST servers require enough high-availabily infrastructure to satisfy their SLOs (see cloud availability zones / regions). Self-hosted webhooks create a circular dependency that has the potential to interfere with the self-healing Kubenetes usually provides. Any self-hosted admission webhook would be subject to these same concerns."))}d.isMDXComponent=!0}}]);