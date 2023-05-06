"use strict";(self.webpackChunkbeer_list=self.webpackChunkbeer_list||[]).push([[335],{3335:(Te,b,s)=>{s.r(b),s.d(b,{HomeModule:()=>ye});var I=s(1135),S=s(1884),y=s(3900),N=s(8505),k=s(4482),C=s(5403),O=s(4671),H=s(5963),J=s(8421),T=s(262),L=s(515),E=s(9646),Y=s(4004),m=s(433),e=s(4650),a=s(776),p=s(6895);function B(t,i){1&t&&e._UZ(0,"ngb-progressbar",17),2&t&&e.Q6J("value",100)}function Q(t,i){1&t&&(e.TgZ(0,"small",19),e._uU(1,"Name is a required field!"),e.qZA())}function q(t,i){if(1&t&&(e.ynx(0),e.YNc(1,Q,2,0,"small",18),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.itemForm.controls.name.errors.required)}}function $(t,i){1&t&&(e.TgZ(0,"small",21),e._uU(1,"Genre is a required field!"),e.qZA())}function D(t,i){if(1&t&&(e.ynx(0),e.YNc(1,$,2,0,"small",20),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.itemForm.controls.tagline.errors.required)}}function j(t,i){1&t&&(e.TgZ(0,"small",23),e._uU(1,"Description is a required field!"),e.qZA())}function z(t,i){if(1&t&&(e.ynx(0),e.YNc(1,j,2,0,"small",22),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.itemForm.controls.description.errors.required)}}let R=(()=>{class t{constructor(n,o){this.activeModal=n,this.config=o,this.isSaving=!1,this.addNewItem=new e.vpe,o.max=100,o.striped=!0,o.animated=!0,o.type="success",o.height="5px"}onAddItem(){this.itemForm.invalid||this.addNewItem.emit(!0)}onClear(){this.itemForm.reset()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(a.Kz),e.Y36(a.YJ))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-add-form"]],inputs:{itemForm:"itemForm",isSaving:"isSaving"},outputs:{addNewItem:"addNewItem"},decls:23,vars:9,consts:[[3,"formGroup","ngSubmit"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[3,"value",4,"ngIf"],[1,"modal-body"],[1,"text-left"],["alt","Beer Image",1,"item-img","rounded","d-block","mb-3","p-2",3,"src"],[1,"form-group","mb-4"],["ngbAutofocus","","type","text","aria-describedby","nameHelp","placeholder","Beer name*","formControlName","name",1,"form-control"],[4,"ngIf"],["type","text","aria-describedby","genreHelp","placeholder","Genre*","formControlName","tagline",1,"form-control"],[1,"form-group","mb-2"],["id","description-text","aria-describedby","descriptionHelp","placeholder","Description*","formControlName","description",1,"form-control"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark",3,"disabled","click"],["type","submit",1,"btn","btn-primary",3,"disabled"],[3,"value"],["id","nameHelp","class","form-text text-danger",4,"ngIf"],["id","nameHelp",1,"form-text","text-danger"],["id","genreHelp","class","form-text text-danger",4,"ngIf"],["id","genreHelp",1,"form-text","text-danger"],["id","descriptionHelp","class","form-text text-danger",4,"ngIf"],["id","descriptionHelp",1,"form-text","text-danger"]],template:function(n,o){1&n&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return o.onAddItem()}),e.TgZ(1,"div",1)(2,"h4",2),e._uU(3,"Add a new Beer"),e.qZA(),e.TgZ(4,"button",3),e.NdJ("click",function(){return o.activeModal.dismiss("Cross click")}),e.qZA()(),e.YNc(5,B,1,1,"ngb-progressbar",4),e.TgZ(6,"div",5)(7,"div",6),e._UZ(8,"img",7),e.qZA(),e.TgZ(9,"div",8),e._UZ(10,"input",9),e.YNc(11,q,2,1,"ng-container",10),e.qZA(),e.TgZ(12,"div",8),e._UZ(13,"input",11),e.YNc(14,D,2,1,"ng-container",10),e.qZA(),e.TgZ(15,"div",12),e._UZ(16,"textarea",13),e.YNc(17,z,2,1,"ng-container",10),e.qZA()(),e.TgZ(18,"div",14)(19,"button",15),e.NdJ("click",function(){return o.onClear()}),e._uU(20," Clear "),e.qZA(),e.TgZ(21,"button",16),e._uU(22),e.qZA()()()),2&n&&(e.Q6J("formGroup",o.itemForm),e.xp6(5),e.Q6J("ngIf",o.isSaving),e.xp6(3),e.Q6J("src",o.itemForm.value.image_url,e.LSH),e.xp6(3),e.Q6J("ngIf",o.itemForm.controls.name.invalid&&o.itemForm.controls.name.touched),e.xp6(3),e.Q6J("ngIf",o.itemForm.controls.tagline.invalid&&o.itemForm.controls.tagline.touched),e.xp6(3),e.Q6J("ngIf",o.itemForm.controls.description.invalid&&o.itemForm.controls.description.touched),e.xp6(2),e.Q6J("disabled",o.itemForm.pristine||o.isSaving),e.xp6(2),e.Q6J("disabled",o.itemForm.invalid||o.isSaving),e.xp6(1),e.hij(" ",o.isSaving?"Adding...":"Add Beer"," "))},dependencies:[p.O5,a.Ly,m._Y,m.Fj,m.JJ,m.JL,m.sg,m.u],styles:[".item-img[_ngcontent-%COMP%]{height:134px;width:100px;object-fit:contain;box-shadow:#0000001a 0 4px 12px}"]}),t})(),G=(()=>{class t{constructor(n){this.activeModal=n,this.confirm=new e.vpe}onConfirm(){this.confirm.emit()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(a.Kz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-alert-item"]],inputs:{heading:"heading",message:"message"},outputs:{confirm:"confirm"},decls:11,vars:2,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark",3,"click"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"h4",1),e._uU(2),e.qZA(),e.TgZ(3,"button",2),e.NdJ("click",function(){return o.activeModal.dismiss("Cross click")}),e.qZA()(),e.TgZ(4,"div",3),e._uU(5),e.qZA(),e.TgZ(6,"div",4)(7,"button",5),e.NdJ("click",function(){return o.activeModal.dismiss("Cross click")}),e._uU(8," Cancel "),e.qZA(),e.TgZ(9,"button",6),e.NdJ("click",function(){return o.onConfirm()}),e._uU(10," Okay "),e.qZA()()),2&n&&(e.xp6(2),e.Oqu(o.heading),e.xp6(3),e.hij(" ",o.message,"\n"))},encapsulation:2}),t})();const A={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let g;const K=new Uint8Array(16);function X(){if(!g&&(g=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!g))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return g(K)}const c=[];for(let t=0;t<256;++t)c.push((t+256).toString(16).slice(1));const W=function V(t,i,n){if(A.randomUUID&&!i&&!t)return A.randomUUID();const o=(t=t||{}).random||(t.rng||X)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,i){n=n||0;for(let r=0;r<16;++r)i[n+r]=o[r];return i}return function w(t,i=0){return(c[t[i+0]]+c[t[i+1]]+c[t[i+2]]+c[t[i+3]]+"-"+c[t[i+4]]+c[t[i+5]]+"-"+c[t[i+6]]+c[t[i+7]]+"-"+c[t[i+8]]+c[t[i+9]]+"-"+c[t[i+10]]+c[t[i+11]]+c[t[i+12]]+c[t[i+13]]+c[t[i+14]]+c[t[i+15]]).toLowerCase()}(o)};var ee=s(529);let te=(()=>{class t{constructor(){this.storage=window.localStorage}get(n){return JSON.parse(this.storage.getItem(n))}set(n,o){const l=[...this.get(n)||[],o];this.storage.setItem(n,JSON.stringify(l))}setBulk(n,o){this.storage.setItem(n,JSON.stringify(o))}remove(n){this.storage.removeItem(n)}clear(){this.storage.clear()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Z=(()=>{class t{log(n){console.log(n)}error(n){console.error(n)}warn(n){console.warn(n)}info(n){console.info(n)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const _="myBeers";let oe=(()=>{class t{constructor(n,o,r){this.http=n,this.localStorage=o,this.logger=r}getItems(n=1,o=10){return this.http.get("https://api.punkapi.com/v2/beers"+(n&&o?"?page=1&per_page="+n*o:"")).pipe((0,T.K)(d=>(this.logger.warn(`Error while fetching items ${d}!`),[])))}getUserItems(){return this.localStorage.get(_)||[]}addUserItem(n){n.id=W(),n.created=new Date,this.localStorage.set(_,n)}removeUserItem(n){let o=this.getUserItems();o=o.filter(r=>r.id!==n),this.localStorage.setBulk(_,o)}cleanMyItems(){this.localStorage.remove(_)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(ee.eN),e.LFG(te),e.LFG(Z))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),ie=(()=>{class t{transform(n,...o){const r="Ingredients:";return n&&Object.keys(n).length?`${r} ${Object.keys(n).join(", ")}`:`${r}  Top Secret!`}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=e.Yjl({name:"ingredientPipe",type:t,pure:!0}),t})();function re(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"span",9),e.NdJ("click",function(){e.CHM(n);const r=e.oxw().$implicit,l=e.oxw();return e.KtG(l.onItemDelete(r.id))}),e._uU(1,"\xd7"),e.qZA()}}function se(t,i){if(1&t&&(e.TgZ(0,"div",1)(1,"div",2),e.YNc(2,re,2,0,"span",3),e._UZ(3,"img",4),e.ALo(4,"ingredientPipe"),e.TgZ(5,"div",5)(6,"h5",6),e._uU(7),e.qZA(),e.TgZ(8,"strong")(9,"span",7),e._uU(10),e.qZA()(),e.TgZ(11,"p",8),e._uU(12),e.qZA()()()()),2&t){const n=i.$implicit,o=i.index,r=e.oxw();e.xp6(1),e.ekj("mt-4",0!=o),e.xp6(1),e.Q6J("ngIf",r.allowDelete),e.xp6(1),e.Q6J("src",n.image_url,e.LSH)("alt",n.name)("ngbTooltip",e.lcZ(4,9,n.ingredients)),e.xp6(4),e.Oqu(n.name),e.xp6(3),e.Oqu(n.tagline),e.xp6(2),e.Oqu(n.description)}}let ae=(()=>{class t{constructor(){this.items=[],this.allowDelete=!1,this.deleteItem=new e.vpe}trackByItems(n,o){return n}onItemDelete(n){this.deleteItem.emit(n)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-item-list"]],inputs:{items:"items",allowDelete:"allowDelete"},outputs:{deleteItem:"deleteItem"},decls:1,vars:2,consts:[["class","card-wrapper",4,"ngFor","ngForOf","ngForTrackBy"],[1,"card-wrapper"],[1,"card","p-2","p-md-4"],["class","position-absolute top-0 end-0 p-3 text-danger","style","z-index: 2",3,"click",4,"ngIf"],["placement","top",1,"card-img",3,"src","alt","ngbTooltip"],[1,"card-body"],[1,"card-title"],[1,"text-gold","my-3"],[1,"card-text"],[1,"position-absolute","top-0","end-0","p-3","text-danger",2,"z-index","2",3,"click"]],template:function(n,o){1&n&&e.YNc(0,se,13,11,"div",0),2&n&&e.Q6J("ngForOf",o.items)("ngForTrackBy",o.trackByItems)},dependencies:[p.sg,p.O5,a._L,ie],styles:[".card[_ngcontent-%COMP%]{flex-direction:row;justify-content:space-between;align-items:center;border:none;-webkit-user-select:none;user-select:none;box-shadow:#0000001a 0 4px 12px;transition:box-shadow .3s ease}.card[_ngcontent-%COMP%]:hover{background-color:#f3f8fd;box-shadow:none;cursor:pointer}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{flex:1}.card[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%]{height:134px;width:100px;object-fit:contain}.card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{margin-bottom:0}.card[_ngcontent-%COMP%]   .text-gold[_ngcontent-%COMP%]{display:inline-block;color:#daa520}.card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}@media screen and (min-width: 768px){.card[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%]{width:150px;height:150px}}@media screen and (min-width: 992px){.card-wrapper[_ngcontent-%COMP%]{display:inline-block;max-width:calc(50% - 8px);margin-right:16px;width:50%}.card-wrapper[_ngcontent-%COMP%]:nth-child(2n){margin-right:0}.card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]{-webkit-line-clamp:2}}"],changeDetection:0}),t})(),ce=(()=>{class t{constructor(){this.addItem=new e.vpe}onAdd(){this.addItem.emit()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-empty-list"]],outputs:{addItem:"addItem"},decls:7,vars:0,consts:[[1,"container"],[1,"add-icon","mb-4","text-secondary",3,"click"],[1,"text-center"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"span",1),e.NdJ("click",function(){return o.onAdd()}),e._uU(2,"+"),e.qZA(),e.TgZ(3,"p",2),e._uU(4," So empty!! "),e._UZ(5,"br"),e._uU(6," Click here to fill it with some beers! "),e.qZA()())},styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;min-height:350px}.add-icon[_ngcontent-%COMP%]{display:flex;border-radius:10px;height:100px;width:100px;align-items:center;justify-content:center;font-size:36px;box-shadow:#0000003d 0 3px 8px;transition:box-shadow .3s cubic-bezier(.075,.82,.165,1);cursor:pointer}.add-icon[_ngcontent-%COMP%]:hover{background-color:#f3f8fd;box-shadow:none;cursor:pointer}"]}),t})();function le(t,i){1&t&&(e.TgZ(0,"strong"),e._uU(1,"Load More"),e.qZA())}function me(t,i){if(1&t){const n=e.EpF();e.ynx(0),e._UZ(1,"app-item-list",13),e.TgZ(2,"div",14)(3,"button",15),e.NdJ("click",function(){e.CHM(n);const r=e.oxw(2);return e.KtG(!r.isloading&&r.loadMoreBeers())}),e.YNc(4,le,2,0,"strong",16),e.qZA()(),e.BQk()}if(2&t){const n=i.ngIf,o=e.oxw(2),r=e.MAs(18);e.xp6(1),e.Q6J("items",n),e.xp6(2),e.ekj("loading",o.isloading),e.xp6(1),e.Q6J("ngIf",!o.isloading)("ngIfElse",r)}}function de(t,i){if(1&t&&(e.YNc(0,me,5,5,"ng-container",12),e.ALo(1,"async")),2&t){const n=e.oxw();e.Q6J("ngIf",e.lcZ(1,1,n.items$))}}function pe(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"div",19)(1,"button",20),e.NdJ("click",function(){e.CHM(n);const r=e.oxw(3);return e.KtG(r.clearAllItems())}),e._uU(2," Remove All "),e.qZA()()}}function ue(t,i){if(1&t){const n=e.EpF();e.ynx(0),e.YNc(1,pe,3,0,"div",17),e.TgZ(2,"app-item-list",18),e.NdJ("deleteItem",function(r){e.CHM(n);const l=e.oxw(2);return e.KtG(l.onRemoveItem(r))}),e.qZA(),e.BQk()}if(2&t){const n=i.ngIf;e.xp6(1),e.Q6J("ngIf",n),e.xp6(1),e.Q6J("items",n)("allowDelete",!0)}}function ge(t,i){if(1&t&&(e.YNc(0,ue,3,3,"ng-container",16),e.ALo(1,"async")),2&t){const n=e.oxw(),o=e.MAs(20);e.Q6J("ngIf",e.lcZ(1,2,n.userItems$))("ngIfElse",o)}}function _e(t,i){1&t&&(e.TgZ(0,"strong"),e._uU(1," Loading... "),e.qZA())}function fe(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"app-empty-list",21),e.NdJ("addItem",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.onAddItem())}),e.qZA()}}function he(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"div",22)(1,"ngb-toast",23),e.NdJ("mouseenter",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.autohideToast=!1)})("mouseleave",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.autohideToast=!0)})("hidden",function(){e.CHM(n);const r=e.oxw();return r.showToast=!1,e.KtG(r.autohideToast=!0)}),e._uU(2),e.qZA()()}if(2&t){const n=e.oxw();e.xp6(1),e.Tol("bg-"+(n.toastType?n.toastType:"primary")),e.Q6J("autohide",n.autohideToast)("delay",5e3),e.xp6(1),e.hij(" ",n.toastMessage," ")}}var f=(()=>{return(t=f||(f={}))[t.ALL_BEERS=1]="ALL_BEERS",t[t.MY_BEERS=2]="MY_BEERS",f;var t})();let xe=(()=>{class t{constructor(n,o,r,l){this.itemService=n,this.modalService=o,this.fb=r,this.logger=l,this.active=f.ALL_BEERS,this.isloading=!1,this.autohideToast=!0,this.showToast=!1,this.toastType="primary",this.currentPage$=new I.X(1),this.refreshUserPage$=new I.X(!0)}ngOnInit(){this.buildForm(),this.items$=this.currentPage$.pipe((0,S.x)(),(0,y.w)(n=>this.itemService.getItems(n).pipe((0,N.b)(()=>this.isloading=!1),function P(t=1/0){let i;i=t&&"object"==typeof t?t:{count:t};const{count:n=1/0,delay:o,resetOnSuccess:r=!1}=i;return n<=0?O.y:(0,k.e)((l,d)=>{let u,v=0;const x=()=>{let F=!1;u=l.subscribe((0,C.x)(d,h=>{r&&(v=0),d.next(h)},void 0,h=>{if(v++<n){const U=()=>{u?(u.unsubscribe(),u=null,x()):F=!0};if(null!=o){const Ce="number"==typeof o?(0,H.H)(o):(0,J.Xf)(o(h,v)),M=(0,C.x)(d,()=>{M.unsubscribe(),U()},()=>{d.complete()});Ce.subscribe(M)}else U()}else d.error(h)})),F&&(u.unsubscribe(),u=null,x())};x()})}(2),(0,T.K)(()=>L.E)))),this.userItems$=this.refreshUserPage$.pipe((0,y.w)(n=>(0,E.of)(this.itemService.getUserItems()).pipe((0,Y.U)(o=>o.length>0?o:null))))}loadMoreBeers(){this.isloading=!0,this.currentPage$.next(this.currentPage$.value+1)}onAddItem(){const n=this.modalService.open(R,{centered:!0});n.componentInstance.itemForm=this.beerForm,n.componentInstance.addNewItem.subscribe(o=>{o&&this.handleNewItemAddtiion(n)})}handleNewItemAddtiion(n){n.componentInstance.isSaving=!0;try{const o=this.beerForm.value.name;this.itemService.addUserItem(this.beerForm.value),this.beerForm.reset(),this.refreshUserPage$.next(!0),n.close(),this.dislayToast(`${o} added successfully!`,"success")}catch(o){this.logger.info(`Error while adding a new Beer! ${o}`),this.dislayToast(`Adding ${this.beerForm.value.name} failed!`,"danger"),n.componentInstance.isSaving=!1}}dislayToast(n,o){this.toastMessage=n,this.showToast=!0,this.toastType=o}onRemoveItem(n){const o=this.showAlert("Delete item?","Are you sure? This action cannot be undone.");o.componentInstance.confirm.subscribe(()=>{this.itemService.removeUserItem(n),this.refreshUserPage$.next(!0),o.close(),this.dislayToast("Beer removed successfully!","success")})}clearAllItems(){const n=this.showAlert("Clear all items?","Are you sure? This action cannot be undone.");n.componentInstance.confirm.subscribe(()=>{this.itemService.cleanMyItems(),this.refreshUserPage$.next(!0),n.close(),this.dislayToast("All beer cleared successfully!","success")})}showAlert(n,o){const r=this.modalService.open(G,{centered:!0});return r.componentInstance.heading=n,r.componentInstance.message=o,r}buildForm(){this.beerForm=this.fb.nonNullable.group({name:["",[m.kI.required]],tagline:["",[m.kI.required]],description:["",[m.kI.required]],image_url:["./assets/beer.jpg",[m.kI.required]]})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(oe),e.Y36(a.FF),e.Y36(m.qu),e.Y36(Z))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:22,vars:6,consts:[[1,"container","mb-5"],[1,"d-flex"],["ngbNav","",1,"nav-tabs",3,"activeId","destroyOnHide","activeIdChange"],["nav","ngbNav"],[3,"ngbNavItem"],["ngbNavLink",""],["ngbNavContent",""],["type","submit",1,"btn","btn-primary","btn-sm",3,"click"],[1,"mt-2",3,"ngbNavOutlet"],["loading",""],["emptyTemplate",""],["class","toast","class","toast-container position-fixed bottom-0 end-0 p-3","style","z-index: 1200",4,"ngIf"],[4,"ngIf"],[3,"items"],[1,"load-more","mt-5"],["type","button",1,"btn","btn-link",3,"click"],[4,"ngIf","ngIfElse"],["class","text-right",4,"ngIf"],[3,"items","allowDelete","deleteItem"],[1,"text-right"],["type","button",1,"btn","btn-sm","btn-outline-danger",3,"click"],[3,"addItem"],[1,"toast-container","position-fixed","bottom-0","end-0","p-3",2,"z-index","1200"],["header","Notification",1,"text-light",2,"z-index","1200",3,"autohide","delay","mouseenter","mouseleave","hidden"]],template:function(n,o){if(1&n&&(e.TgZ(0,"div",0)(1,"h2"),e._uU(2,"Beer Admin"),e.qZA(),e.TgZ(3,"div",1)(4,"ul",2,3),e.NdJ("activeIdChange",function(l){return o.active=l}),e.TgZ(6,"li",4)(7,"button",5),e._uU(8,"All Beers"),e.qZA(),e.YNc(9,de,2,3,"ng-template",6),e.qZA(),e.TgZ(10,"li",4)(11,"button",5),e._uU(12,"My Beers"),e.qZA(),e.YNc(13,ge,2,4,"ng-template",6),e.qZA()(),e.TgZ(14,"button",7),e.NdJ("click",function(){return o.onAddItem()}),e._uU(15," Add a new beer "),e.qZA()(),e._UZ(16,"div",8),e.qZA(),e.YNc(17,_e,2,0,"ng-template",null,9,e.W1O),e.YNc(19,fe,1,0,"ng-template",null,10,e.W1O),e.YNc(21,he,3,5,"div",11)),2&n){const r=e.MAs(5);e.xp6(4),e.Q6J("activeId",o.active)("destroyOnHide",!1),e.xp6(2),e.Q6J("ngbNavItem",1),e.xp6(4),e.Q6J("ngbNavItem",2),e.xp6(6),e.Q6J("ngbNavOutlet",r),e.xp6(5),e.Q6J("ngIf",o.showToast)}},dependencies:[p.O5,a.uN,a.Pz,a.nv,a.Is,a.Fh,a.tO,a.Dy,a.Iv,ae,ce,p.Ov],styles:['@charset "UTF-8";.nav-link[_ngcontent-%COMP%]{color:#afaeae;cursor:pointer}.nav-link.active[_ngcontent-%COMP%]{color:#000}.nav-tabs[_ngcontent-%COMP%]{flex-grow:1}.load-more[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.load-more[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:14px;text-decoration:none}.load-more[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:not(.loading):after{content:"\\2228";padding-left:8px;font-weight:700}.text-right[_ngcontent-%COMP%]{text-align:right}'],changeDetection:0}),t})();var be=s(9371);const Ie=[{path:"",component:xe}];let ye=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,a.bz,a.Oz,a.HK,a.ZQ,a.aE,m.UX,be.Bz.forChild(Ie)]}),t})()}}]);