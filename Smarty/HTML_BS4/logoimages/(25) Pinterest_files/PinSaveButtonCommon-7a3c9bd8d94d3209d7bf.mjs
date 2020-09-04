(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([["PinSaveButtonCommon"],{"6A0I":function(e,t,a){var n=a("q1tI"),i=a.n(n),o=a("/MKj"),s=a("JW66"),r=a("Sihc"),l=a("Ye/N"),c=a("GBVV"),d=a("n6mq");function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.a=Object(o.connect)()(class extends i.a.Component{constructor(e){super(e),u(this,"onCreateSection",()=>{const{board:e,dispatch:t,completeCreateSectionAction:a,pinImport:n}=this.props;return this.setState({isSaving:!0}),t(Object(r.a)({boardId:e.id,name:this.state.inputName.trim(),pinImport:n})).then(e=>{this.setState({isSaving:!1}),a(e)}).catch(e=>{this.setState({createError:e.message_detail||e.message,isSaving:!1})})}),u(this,"handleKeyDown",({event:e,value:t})=>{const{createError:a,inputName:n}=this.state;[s.a.KeyCode.ENTER,s.a.KeyCode.NUMPAD_ENTER].includes(e.which)&&!a&&n.trim()&&this.onCreateSection()}),u(this,"handleChangeName",({value:e})=>{this.setState({createError:null,inputName:e})}),u(this,"handleInputRef",e=>{this.setState({inputRef:e})}),this.state={createError:null,inputName:e.initialName||"",inputRef:null,isSaving:!1}}componentDidUpdate(e,t){const{createError:a,inputRef:n}=this.state;!n||t.inputRef&&!a||n.focus()}render(){const{onClearModal:e,showTitle:t,positionRelative:a}=this.props,{createError:n,inputName:o,isSaving:s}=this.state,r=!!o.trim()&&!n;return i.a.createElement(d.d,{display:"flex",direction:"column",color:"white",flex:"grow",top:!0,bottom:!0,right:!0,position:a?"relative":"absolute",rounding:2,width:"100%",dangerouslySetInlineStyle:{__style:{borderLeft:"1px solid #f5f5f5"}}},t&&i.a.createElement(d.d,{marginTop:3,paddingX:6,paddingY:3},i.a.createElement(d.q,{size:"sm"},l.a._("Add section","Title in the add section modal","Title in the add section modal"))),i.a.createElement(d.d,{padding:3},i.a.createElement(d.d,{marginBottom:2},i.a.createElement(d.u,{htmlFor:"sectionEditName"},i.a.createElement(d.S,{size:"md",color:n?"red":"gray"},l.a._("Name","Board section name","Board section name")))),i.a.createElement(d.d,null,i.a.createElement(d.d,{ref:this.handleInputRef},i.a.createElement(d.U,{errorMessage:n||"",id:"sectionEditName",name:"sectionName",onChange:this.handleChangeName,onKeyDown:this.handleKeyDown,placeholder:l.a._('Like "Lighting"',"Placeholder for board section name","Placeholder for board section name"),size:"lg",type:"text",value:o})))),i.a.createElement(d.m,null),i.a.createElement(d.d,{display:"flex",flex:"grow"}),i.a.createElement(d.m,null),i.a.createElement(d.d,{padding:6},i.a.createElement(d.d,{display:"flex",justifyContent:"between"},i.a.createElement(d.e,{onClick:e,text:l.a._("Cancel","cancel section add","cancel section add"),inline:!0}),i.a.createElement(c.b,{disabled:!r||s,onClick:this.onCreateSection,submitting:s,text:l.a._("Add","add a new section","add a new section")}))))}})},PNKV:function(e,t,a){},WnNx:function(e,t,a){function n(e){return{type:"SHOW_REPIN_ANIMATION",payload:{pinId:e}}}function i(){return{type:"HIDE_REPIN_ANIMATION"}}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i}))},dMCU:function(e,t,a){a.d(t,"a",(function(){return l}));var n=a("q1tI"),i=a.n(n),o=a("/MKj"),s=a("v/Q4"),r=a("+PUW");function l(e){const t=t=>{const a=Object(o.useDispatch)(),{isAuth:n,isLimitedLogin:l}=Object(s.a)(),c=!n||l?e=>e=>{e&&e.stopPropagation(),a(r.b)}:e=>e;return i.a.createElement(e,Object.assign({authAction:c,dispatch:a,isAuth:n,isLimitedLogin:l},t))};return t.displayName=`WithAuthenticatedAction(${String(e.displayName||e.name)})`,t}},jZhD:function(e,t,a){a.d(t,"a",(function(){return s}));var n=a("q1tI"),i=(a("17x9"),a("pdBG"));function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class s extends n.Component{constructor(...e){super(...e),o(this,"searchCache",Object.create(null)),o(this,"lastSearchedQuery",null),o(this,"search",e=>{this.lastSearchedQuery=e,e in this.searchCache?this.props.onTypeaheadSuggestionsChange(this.searchCache[e],e):this.provider.search(e,({items:t})=>{this.searchCache[e]=t,e===this.lastSearchedQuery&&this.props.onTypeaheadSuggestionsChange(t,e)})})}componentDidMount(){const e=this.props.resourceOptions||{};this.provider=new i.a({resource_name:this.props.resourceName,...e});const{value:t}=this.props;null!=t&&this.props.allowSearchOnMount&&this.search(this.props.value)}componentDidUpdate(e){const{value:t}=this.props;null!=t&&t!==e.value&&this.search(t)}render(){return this.props.children||null}}o(s,"defaultProps",{resourceName:"TypeaheadResource"})},pdBG:function(e,t,a){var n=a("AHhP"),i=a.n(n);const o=function(e,t){this.uid=e,this.item=t,this.next=null,this.prev=null},s=function(e){this._maxNumItems=e||10,this._uidToData={},this._numItems=0,this._firstData=null,this._lastData=null};s.prototype.set=function(e,t){let a=this._uidToData[e];a||(a=new o(e,t),this._uidToData[e]=a,this._numItems+=1),this._moveToFront(a),this._numItems>this._maxNumItems&&this._evict()},s.prototype.get=function(e){const t=this._uidToData[e];return t?(this._moveToFront(t),t.item):null},s.prototype.remove=function(e){const t=this._uidToData[e];t&&(delete this._uidToData[e],this._firstData===t&&(this._firstData=t.next),this._lastData===t&&(this._lastData=t.prev),t.prev&&(t.prev.next=t.next),t.next&&(t.next.prev=t.prev),this._numItems-=1)},s.prototype._moveToFront=function(e){this._firstData!==e&&(this._firstData?(this._lastData===e&&(this._lastData=e.prev),e.prev&&(e.prev.next=e.next),e.next&&(e.next.prev=e.prev),this._firstData.prev=e,e.next=this._firstData,e.prev=null,this._firstData=e):(this._firstData=e,this._lastData=e))},s.prototype._evict=function(){delete this._uidToData[this._lastData.uid],this._firstData===this._lastData?(this._firstData=null,this._lastData=null):(this._lastData=this._lastData.prev,this._lastData.next=null),this._numItems-=1};var r=s,l=a("eOdZ"),c=a("mBfy");const d=function(e){e=e||{},this.tags=e.tags,this.enable_recent_queries=!!e.enable_recent_queries,this.minimum_term_character_length=e.minimum_term_character_length||0,this.bypass_lru_cache=e.bypass_lru_cache;const t={tags:e.tags,pin:e.pin_id},a=e.num_places;a?t.num_places=a:t.count="count"in e?e.count:5,e.exclude_non_followers&&(t.exclude_non_followers=!0),e.field_set_key&&(t.field_set_key=e.field_set_key),e.pin_scope&&(t.pin_scope=e.pin_scope),e.suggestion_type&&(t.suggestion_type=e.suggestion_type);let n="TypeaheadResource";e.resource_name&&(n=e.resource_name),this.searchResource=l.a.create(n,t),this.itemsCache=new r};Object.assign(d.prototype,i.a),Object.assign(d.prototype,{search(e,t){let a;if(!e&&"pinners_and_contacts"===this.tags)return this.abortSearch(),this.publishData(e,[],{},t);if(!e&&c.default.isLimitedLogin())return this.abortSearch(),this.publishData(e,[],{},t);if(!e&&this.enable_recent_queries&&c.default&&c.default.isAuthenticated())a="recent_search";else{const a=this.bypass_lru_cache?{}:this.itemsCache.get(e);if(a){const n=a.items;if(n&&n.length){this.abortSearch();const i=a.hint;return void this.publishData(e,n,i,t)}}}e.length>=this.minimum_term_character_length?this.fetch(e,a,t):this.publishData(e,[],{},t)},getResource(){return this.searchResource},abortSearch(){this.getResource().abort()},publishData(e,t,a,n){const i={term:e,items:t,hint:a};this.trigger("data",i),n&&n(i)},setAutocompleteScope(e){this.getResource().set("autocompleteScope",e)},fetch(e,t,a){const n=this.getResource();if(n.isCalling()){const t=n.get("term");if(e===t)return;this.abortSearch()}""!==this.tags&&(n.set("term",e),n.set("tags",t||this.tags),n.resetBookmark(),n.callGet({showError:!1}).then(t=>{const n=t.resource_response.data,i=n.items,o=n.hint||{},s={hint:o,items:i};this.cacheData(e,s),this.publishData(e,i,o,a)},e=>{this.trigger("fetchError",e)}),this.warm=!0)},removeCacheForTerm(e){this.itemsCache.remove(e)},cacheData(e,t){this.itemsCache.set(e,t)},prefetch(){if(this.warm)return;l.a.create("TypeaheadPrepareResource").callGet({showError:!1}),this.warm=!0}});t.a=d},rO08:function(e,t,a){a.r(t),a.d(t,"PinSaveButton",(function(){return P}));var n=a("q1tI"),i=a.n(n),o=a("/MKj"),s=a("Ye/N"),r=a("TiQD"),l=a("rYoy"),c=a("dMCU"),d=a("2qKt"),u=a("n6mq"),h=a("rm3W"),p=a("XCz/"),m=a("0nTG"),v=a("lm6u"),_=a("y9Ij"),b=a("C0mq"),g=a("B6Tf"),f=a("oTtT"),S=a("ANjH"),C=a("xjIv");function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const E=Object(n.lazy)(()=>a.e("FirstPinCreateCommon").then(a.bind(null,"kj35"))),D=[500639,11022];class P extends n.Component{constructor(e){super(e),y(this,"componentWillUnmount",()=>{this._repinCompletionPromise&&this._repinCompletionPromise.cancel()}),y(this,"setCompletionPromise",e=>{this._repinCompletionPromise=e,this._repinCompletionPromise.promise.then(()=>{this.handleRepinHideAndToggle()})}),y(this,"_repinCompletionPromise",null),y(this,"handleRepinHideAndToggle",()=>{this.setState({isRepinModalOpen:!1});const{onToggleModal:e}=this.props;e&&e(!1)}),y(this,"handleSaveButtonClick",this.props.authAction(e=>{e&&(e.preventDefault(),e.stopPropagation());const{onClickCallback:t,onToggleModal:a,oneTapSave:n,boardPickerStopwatch:i}=this.props;t&&t(),n?n.saved||"function"!=typeof n.save||n.save():(i&&i.start(),a&&a(!0),this.setState({isRepinModalOpen:this.props.isAuth}))})),y(this,"handleUnsaved",()=>{const{unsave:e,pin:t}=this.props;e(t.id)}),y(this,"handleBoardEdited",({boardId:e,title:t,url:a})=>{const{pin:n,save:i}=this.props;i(n.id,e,t,a)}),y(this,"handleSavedButtonClick",()=>{const{history:e,pin:t,pinSavedInfo:a,viewerId:n}=this.props;let i;t.pinner.id===n?i=t.board.url:a&&(i=a.url),i&&e.push(i)}),y(this,"saveButtonRef",Object(n.createRef)()),y(this,"renderPinToBoardRepin",()=>{const{isCloseupPin:e,onToggleModal:t,pin:a}=this.props,{isFPE:n,isRepinModalOpen:o}=this.state;return o&&n?this.renderFPE():n?null:i.a.createElement(v.a,{action:"repin",additionalCreateFields:{is_stl_pin:Object(m.g)(a)},onClose:this.handleRepinHideAndToggle,setCompletionPromise:this.setCompletionPromise,shouldShowToast:!0,onToggleModal:t,pin:a},({dismissModal:n,displaySuccessAnimation:s,handleAbort:r,handleNewBoardAnimationCompletion:l,handleSocialConnectSet:c,handleSaveToBoard:d,newPin:u,updateDescription:h,modalTitle:p,setModalTitle:m})=>i.a.createElement(g.b,{dismissModal:n,displaySuccessAnimation:s,handleSocialConnectSet:c,handleSaveToBoard:d,anchorRef:this.saveButtonRef.current,handleAbort:r,handleNewBoardAnimationCompletion:l,newPin:u,isCloseupPin:e,isInModal:!0,onToggleModal:t,pin:a,pwtAuxData:{pin_create_method:"repin"},modalTitle:p,setModalTitle:m,shouldRenderContent:o,updateDescription:h}))});const{experience:t,showRepinOnInitialRender:a}=e;this.state={isFPE:!!t&&D.includes(t.experience_id),isRepinModalOpen:a||!1}}componentDidMount(){const{onMount:e}=this.props;e&&e()}isFPERemoved(e){const{isFPE:t}=this.state,{experience:a}=e;return t&&(!a||!D.includes(a.experience_id))}renderFPE(){const{completePinSave:e,experience:t,pin:a}=this.props;return i.a.createElement(p.a,{name:"web_fbc_profile_board_to_collection"},({anyEnabled:n})=>i.a.createElement(r.b,{accessibilityModalLabel:n?s.a._("Create collection","createCollection.modal.accessibilityTitle","Accessible create collection education modal label"):s.a._("Create board","Accessible create board education modal label","Accessible create board education modal label"),heading:n?s.a._("Create collection","createCollection.modal.title","Create collection education modal label"):s.a._("Create board","Create board education modal label","Create board education modal label"),onDismiss:this.handleRepinHideAndToggle,size:"lg"},i.a.createElement(u.d,{dangerouslySetInlineStyle:{__style:{marginBottom:64}}},i.a.createElement(l.a,null,i.a.createElement(i.a.StrictMode,null,i.a.createElement(E,{anchorRef:this.saveButtonRef.current,experience:t,inBoardToCollectionsExp:n,isInModal:!0,onClose:this.handleRepinHideAndToggle,onComplete:e,pin:a,pwtAuxData:{pin_create_method:"repin"}}))))))}render(){const{iconOnly:e,isCloseupPin:t,oneTapSave:a,onToggleModal:o,pin:s,renderPinSaveTooltip:r,renderSavedStatus:l,variant:c,viewerId:d,viewParameter:h}=this.props,p=!!(s.pinner.id===d||s.saved||s.savedInfo||"controlled"===(null==a?void 0:a.type)&&a.saved),m="controlled"===(null==a?void 0:a.type)?"controlled":"classic";return i.a.createElement(n.Fragment,null,i.a.createElement(u.d,{ref:this.saveButtonRef},t?i.a.createElement(_.a,{iconOnly:e,isCloseupPin:t,isPulsarDisplayed:!this.state.isRepinModalOpen,onClick:this.handleSaveButtonClick,onSavedClick:this.handleSavedButtonClick,saveButtonType:m,saved:p,variant:c}):i.a.createElement(_.b,{carouselData:s.carousel_data,iconOnly:e,isCloseupPin:t,onBoardUpdated:this.handleBoardEdited,onClick:this.handleSaveButtonClick,onSavedClick:this.handleSavedButtonClick,onToggleModal:o,onUnsaved:this.handleUnsaved,renderSavedStatus:l,saveButtonType:m,saved:p,savedInfo:s.savedInfo,variant:c,viewParameter:h}),this.renderPinToBoardRepin()),!!r&&this.saveButtonRef.current&&r(this.saveButtonRef.current))}}y(P,"defaultProps",{anchorString:""}),t.default=Object(S.compose)(Object(o.connect)((function({pins:e,viewer:t},{pin:a}){return{email:t.isAuth?t.email:void 0,isAuth:t.isAuth,pinSavedInfo:e[a.id]&&e[a.id].savedInfo,viewerId:t.isAuth?t.id:""}}),(function(e){return{completePinSave:()=>e(Object(h.b)()),save:(t,a,n,i)=>e(Object(C.a)(t,a,n,i)),unsave:t=>e(Object(C.b)(t))}})),c.a,Object(d.a)(33),b.a)((function(e){const t=Object(f.b)();return i.a.createElement(P,Object.assign({},e,{boardPickerStopwatch:t}))}))},rm3W:function(e,t,a){function n(e){return{type:"UPDATE_PIN_ACTIONS",payload:e}}function i(){return{type:"COMPLETE_APP_INSTALL"}}function o(){return{type:"COMPLETE_PIN_SAVE"}}a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o}))},uyxo:function(e,t,a){a.d(t,"a",(function(){return r}));var n=a("q1tI"),i=a.n(n),o=a("jHGc"),s=a("n6mq");function r(e){const{children:t,currentCarouselIndex:a,onDeleteSavedState:n,onEditSubmit:r,onToggleModal:l,pinId:c,variant:d,viewParameter:u}=e,h="pin"===d?{bgColor:"white",iconColor:"darkGray",size:"sm"}:{bgColor:"transparent",iconColor:"darkGray",size:"sm"};return i.a.createElement(s.d,{display:"flex",direction:"row",alignItems:"center",width:"closeup"===d?"100%":void 0,paddingX:"closeup"===d?2:void 0,marginStart:"pin"===d?-1:void 0,marginEnd:"pin"===d?-1:void 0},t&&i.a.createElement(s.d,{paddingX:1,"data-test-id":"saved-info",flex:"grow"},t),i.a.createElement(s.d,{paddingX:1,flex:"none",marginStart:"auto"},i.a.createElement(o.default,{component:0,onDelete:n,onSubmit:r,pinId:c,onToggleModal:l,viewParameter:u,carouselSlotCurrentIndex:a,style:h,useLegoStyles:"pin"===d})))}},y9Ij:function(e,t,a){a.d(t,"a",(function(){return p}));var n=a("q1tI"),i=a.n(n),o=(a("PNKV"),a("TSYQ")),s=a.n(o),r=a("Ye/N"),l=a("uyxo"),c=a("n02X"),d=a("0SCs"),u=a("n6mq");const h=Object(n.memo)(({carouselData:e,disabled:t=!1,iconOnly:a,isCloseupPin:n,onBoardUpdated:o,onClick:c,onSavedClick:h,onToggleModal:p,onUnsaved:m,renderSavedStatus:v,saveButtonType:_="classic",saved:b,savedInfo:g,variant:f="classic",viewParameter:S})=>{const{anyEnabled:C}=Object(d.c)("web_better_save_after_fbc"),{anyEnabled:y}=Object(d.c)("web_pin_rep_saved_state",!C);return b&&"controlled"===_?i.a.createElement(u.e,{disabled:!0,text:r.a._("Saved"),size:"sm"}):!n&&g&&v&&m&&o&&"classic"===_&&y?i.a.createElement(l.a,{currentCarouselIndex:e&&e.index,onDeleteSavedState:m,onEditSubmit:o,onToggleModal:p,pinId:g.localPinId,variant:"pin",viewParameter:S},v()):b&&"classic"===_&&n?i.a.createElement(u.e,{accessibilityLabel:r.a._("Saved button","saveButton.saved.label","Saved state label on save button"),text:r.a._("Saved!","saveButton.saved","Saved state text on save button"),size:"md",color:"white",onClick:h}):a?i.a.createElement("div",{"data-test-id":"SaveButton"},i.a.createElement(u.s,{accessibilityLabel:r.a._("Save","Accessibility label for the save button","Accessibility label for the save button"),bgColor:"white",icon:"pin",onClick:({event:e})=>c(e),iconColor:"darkGray"})):i.a.createElement(u.d,{display:n?void 0:"flex",justifyContent:"end"},i.a.createElement("div",{className:s()("SaveButton",t?"SaveButton--disabled":"SaveButton--enabled",{"SaveButton--lego":"lego"===f}),"data-test-id":"SaveButton",onClick:t?void 0:c,onKeyPress:t?void 0:e=>{32!==e.charCode&&13!==e.charCode||(e.preventDefault(),c(e))},role:"button",tabIndex:"0"},i.a.createElement("div",{className:s()("SaveButton__background",t?"SaveButton__background--disabled":"SaveButton__background--enabled",{"SaveButton__background--lego":"lego"===f})},i.a.createElement(u.d,{alignItems:"center",minHeight:40,dangerouslySetInlineStyle:{__style:{padding:"10px 14px"}},display:"flex"},i.a.createElement(u.S,{color:t?"gray":"white",size:"lego"===f?"sm":"md",weight:"bold"},i.a.createElement("span",{className:s()("SaveButton__label",{"SaveButton__label--lego":"lego"===f})},r.a._("Save","Pin save button label","Pin save button label")))))))}),p=Object(c.a)(".PinActionBar .repin.pinActionBarButton")(h);t.b=h}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/js/PinSaveButtonCommon-7a3c9bd8d94d3209d7bf.mjs.map