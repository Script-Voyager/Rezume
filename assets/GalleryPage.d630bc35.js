import{P as d}from"./ProjectsList.78642502.js";import{u}from"./projects.2ab7f58b.js";import{_ as f,d as j,r as o,c as i,k as m,l as _,m as P,n as s,f as n}from"./index.1f5e3356.js";const L=j({name:"GalleryPage",components:{ProjectsList:d},setup(){const e=u(),c=o("Vue \u043F\u0440\u043E\u0435\u043A\u0442\u044B"),r=o("Web-\u0432\u0435\u0440\u0441\u0442\u043A\u0430"),l=o("\u0414\u0438\u0437\u0430\u0439\u043D \u043F\u0440\u043E\u0435\u043A\u0442\u044B"),a=i(()=>e.vueProjects),p=i(()=>e.webProjects),t=i(()=>e.designProjects);return{vueTitle:c,webTitle:r,designTitle:l,vueList:a,webList:p,designList:t}}}),v={class:"container"},g={class:"main-content"},b={class:"Vue-projects section-offset"},h={class:"Web-Layouts section-offset"},T={class:"Design-Projects section-offset"};function w(e,c,r,l,a,p){const t=m("ProjectsList");return _(),P("div",v,[s("div",g,[s("section",b,[n(t,{"project-list":e.vueList,"section-title":e.vueTitle},null,8,["project-list","section-title"])]),s("section",h,[n(t,{"project-list":e.webList,"section-title":e.webTitle},null,8,["project-list","section-title"])]),s("section",T,[n(t,{"project-list":e.designList,"section-title":e.designTitle},null,8,["project-list","section-title"])])])])}var y=f(L,[["render",w]]);export{y as default};
