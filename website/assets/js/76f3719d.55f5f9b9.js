"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1606],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3454:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],o={id:"install",title:"Installation"},s=void 0,p={unversionedId:"install",id:"version-v3.7.x/install",isDocsHomePage:!1,title:"Installation",description:"Prerequisites",source:"@site/versioned_docs/version-v3.7.x/install.md",sourceDirName:".",slug:"/install",permalink:"/gatekeeper/website/docs/install",editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.7.x/install.md",tags:[],version:"v3.7.x",frontMatter:{id:"install",title:"Installation"},sidebar:"version-v3.7.x/docs",previous:{title:"Introduction",permalink:"/gatekeeper/website/docs/"},next:{title:"Examples",permalink:"/gatekeeper/website/docs/examples"}},u=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Minimum Kubernetes Version",id:"minimum-kubernetes-version",children:[],level:3},{value:"RBAC Permissions",id:"rbac-permissions",children:[],level:3}],level:2},{value:"Installation",id:"installation",children:[{value:"Deploying a Release using Prebuilt Image",id:"deploying-a-release-using-prebuilt-image",children:[],level:3},{value:"Deploying a Release using development image",id:"deploying-a-release-using-development-image",children:[],level:3},{value:"Deploying HEAD Using make",id:"deploying-head-using-make",children:[],level:3},{value:"Deploying via Helm",id:"deploying-via-helm",children:[],level:3}],level:2},{value:"Uninstallation",id:"uninstallation",children:[{value:"Using Prebuilt Image",id:"using-prebuilt-image",children:[],level:3},{value:"Using make",id:"using-make",children:[],level:3},{value:"Using Helm",id:"using-helm",children:[],level:3}],level:2}],c={toc:u};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"minimum-kubernetes-version"},"Minimum Kubernetes Version"),(0,r.kt)("p",null,"The minimum supported Kubernetes version of Gatekeeper is ",(0,r.kt)("strong",{parentName:"p"},"n-4 of the latest stable Kubernetes release")," per ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/releases/version-skew-policy/"},"Kubernetes Supported Versions policy"),". NOTE: Gatekeeper requires Kubernetes resources introduced in v1.16."),(0,r.kt)("h3",{id:"rbac-permissions"},"RBAC Permissions"),(0,r.kt)("p",null,"For either installation method, make sure you have cluster admin permissions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"  kubectl create clusterrolebinding cluster-admin-binding \\\n    --clusterrole cluster-admin \\\n    --user <YOUR USER NAME>\n")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"deploying-a-release-using-prebuilt-image"},"Deploying a Release using Prebuilt Image"),(0,r.kt)("p",null,"If you want to deploy a released version of Gatekeeper in your cluster with a prebuilt image, then you can run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper/release-3.5/deploy/gatekeeper.yaml\n")),(0,r.kt)("h3",{id:"deploying-a-release-using-development-image"},"Deploying a Release using development image"),(0,r.kt)("p",null,"If you want to deploy latest development version of Gatekeeper, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"openpolicyagent/gatekeeper:dev")," tag or ",(0,r.kt)("inlineCode",{parentName:"p"},"openpolicyagent/gatekeeper:<SHA>"),"."),(0,r.kt)("p",null,"Images are hosted in ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/openpolicyagent/gatekeeper/tags"},"OPA Docker Hub repository"),"."),(0,r.kt)("h3",{id:"deploying-head-using-make"},"Deploying HEAD Using make"),(0,r.kt)("p",null,"Currently the most reliable way of installing Gatekeeper is to build and install from HEAD:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure that:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You have Docker version 19.03 or later installed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/kubebuilder#getting-started"},"Kubebuilder")," and ",(0,r.kt)("a",{parentName:"li",href:"https://kubectl.docs.kubernetes.io/installation/kustomize/"},"Kustomize")," are installed."),(0,r.kt)("li",{parentName:"ul"},"Your kubectl context is set to the desired installation cluster."),(0,r.kt)("li",{parentName:"ul"},"You have a container registry you can write to that is readable by the target cluster."))),(0,r.kt)("li",{parentName:"ul"},"Clone the Gatekeeper repository to your local system:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/open-policy-agent/gatekeeper.git\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cd")," to the repository directory."),(0,r.kt)("li",{parentName:"ul"},"Define your destination Docker image location:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"export DESTINATION_GATEKEEPER_DOCKER_IMAGE=<YOUR DESIRED DESTINATION DOCKER IMAGE>\n"))),(0,r.kt)("li",{parentName:"ul"},"Build and push your Docker image:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'make docker-buildx REPOSITORY="$DESTINATION_GATEKEEPER_DOCKER_IMAGE"\nmake docker-push REPOSITORY="$DESTINATION_GATEKEEPER_DOCKER_IMAGE"\n'))),(0,r.kt)("li",{parentName:"ul"},"Finally, deploy:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'make deploy REPOSITORY="$DESTINATION_GATEKEEPER_DOCKER_IMAGE"\n')))),(0,r.kt)("h3",{id:"deploying-via-helm"},"Deploying via Helm"),(0,r.kt)("p",null,"A basic Helm chart exists in ",(0,r.kt)("inlineCode",{parentName:"p"},"charts/gatekeeper"),". If you have Helm installed, you can deploy via the following instructions for Helm v3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm repo add gatekeeper https://open-policy-agent.github.io/gatekeeper/charts\nhelm install gatekeeper/gatekeeper --generate-name\n")),(0,r.kt)("p",null,"If you are using the older Gatekeeper Helm repo location and Helm v3.3.2+, then use ",(0,r.kt)("inlineCode",{parentName:"p"},"force-update")," to override the default behavior to update the existing repo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm repo add gatekeeper https://open-policy-agent.github.io/gatekeeper/charts --force-update\n")),(0,r.kt)("p",null,"Please note that this chart is compatible with Helm v3 starting with Gatekeeper v3.1.1. When using Helm v3, it is expected to see warnings regarding to ",(0,r.kt)("inlineCode",{parentName:"p"},"crd-install")," hook. This is due to maintaining backwards compatibility with Helm v2 and should not impact the chart deployment."),(0,r.kt)("p",null,"You can alter the variables in ",(0,r.kt)("inlineCode",{parentName:"p"},"charts/gatekeeper/values.yaml")," to customize your deployment. To regenerate the base template, run ",(0,r.kt)("inlineCode",{parentName:"p"},"make manifests"),"."),(0,r.kt)("h2",{id:"uninstallation"},"Uninstallation"),(0,r.kt)("h3",{id:"using-prebuilt-image"},"Using Prebuilt Image"),(0,r.kt)("p",null,"If you used a prebuilt image to deploy Gatekeeper, then you can delete all the Gatekeeper components with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl delete -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper/release-3.5/deploy/gatekeeper.yaml\n")),(0,r.kt)("h3",{id:"using-make"},"Using make"),(0,r.kt)("p",null,"If you used ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," to deploy, then run the following to uninstall Gatekeeper:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cd to the repository directory"),(0,r.kt)("li",{parentName:"ul"},"run ",(0,r.kt)("inlineCode",{parentName:"li"},"make uninstall"))),(0,r.kt)("h3",{id:"using-helm"},"Using Helm"),(0,r.kt)("p",null,"If you used ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," to deploy, then run the following to uninstall Gatekeeper:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm delete <release name>\n")),(0,r.kt)("p",null,"Helm v3 will not cleanup Gatekeeper installed CRDs. Run the following to uninstall Gatekeeper CRDs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl delete crd -l gatekeeper.sh/system=yes\n")),(0,r.kt)("p",null,"This operation will also delete any user installed config changes, and constraint templates and constraints."))}m.isMDXComponent=!0}}]);