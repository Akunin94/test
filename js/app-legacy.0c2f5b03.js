(function(){"use strict";var e={6418:function(e,t,r){var o=r(6643)["default"];Object.defineProperty(t,"X",{value:!0});var n=r(942),c=r(7169),a=r(5447);t.Z=(0,n.defineComponent)({name:"TagesApp",computed:o({},(0,c.mapStores)(a.useProductsStore)),mounted:function(){this.productsStore.getCartFromStorage(),this.productsStore.getFavoritesFromStorage()}})},1483:function(e,t,r){Object.defineProperty(t,"X",{value:!0});var o=r(942);t.Z=(0,o.defineComponent)({name:"TagesBreadcrumbs",props:{links:{type:Object,required:!0}}})},3103:function(e,t,r){var o=r(6643)["default"],n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=r(942),a=n(r(5994)),i=r(7169),l=r(5447);t["default"]=(0,c.defineComponent)({name:"TagesCart",components:{TagesBreadcrumbs:a.default},computed:o({breadcrumbs:function(){return[{name:"Главная",href:"/"},{name:"Корзина",href:"/"}]}},(0,i.mapStores)(l.useProductsStore))})},2160:function(e,t,r){var o=r(6643)["default"],n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=r(942),a=n(r(5994)),i=r(7169),l=r(5447);t["default"]=(0,c.defineComponent)({name:"TagesFavorites",components:{TagesBreadcrumbs:a.default},computed:o({breadcrumbs:function(){return[{name:"Главная",href:"/"},{name:"Избранное",href:"/"}]}},(0,i.mapStores)(l.useProductsStore))})},6730:function(e,t,r){var o=r(6643)["default"];r(7327),r(1539),r(4916),r(5306);var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=r(942),a=n(r(5994)),i=n(r(8260)),l=n(r(6354)),u=r(7169),s=r(5447),d=n(r(6486));t["default"]=(0,c.defineComponent)({name:"TestMain",components:{TagesBreadcrumbs:a.default,TagesFilter:i.default,TagesProducts:l.default},data:function(){return{sortSelected:"asc",filterSelected:""}},computed:o({products:function(){var e=this,t=this.productsStore.allProducts;return"asc"===this.sortSelected?t=d.default.orderBy(t,["price.current_price"],["asc","desc"]):"desc"===this.sortSelected&&(t=d.default.orderBy(t,["price.current_price"],["desc","asc"])),this.filterSelected&&(t=t.filter((function(t){return t.material==e.filterSelected}))),t},breadcrumbs:function(){return[{name:"Главная",href:"/"},{name:"Системы хранения",href:"/"},{name:"Комплекты стеллажных систем",href:"/"}]},sort:function(){return{name:"Сортировать по:",options:[{name:"Цена по возрастанию",value:"asc"},{name:"Цена по убыванию",value:"desc"}]}},filter:function(){return{name:"Материал",options:[{name:"Любой",value:""},{name:"Дерево",value:"1"},{name:"Металл",value:"2"}]}}},(0,u.mapStores)(s.useProductsStore)),watch:{sortSelected:function(e){e&&this.$router.replace(o(o({},this.$route),{},{query:o(o({},this.$route.query),{},{sortPrice:e})}))},filterSelected:function(e){this.$router.replace(o(o({},this.$route),{},{query:o(o({},this.$route.query),{},{material:e})}))}},mounted:function(){var e=this.$route.query.sortPrice;this.$route.query.material;this.productsStore.getAllProducts(),"string"===typeof e&&(this.sortSelected=this.$route.query.sortPrice),"string"===typeof e&&(this.filterSelected=this.$route.query.material)},methods:{onSortChange:function(e){this.sortSelected=e},onFilterChange:function(e){this.filterSelected=e}}})},9552:function(e,t,r){r(9826),r(1539),r(8309);var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=r(942),c=o(r(5994)),a=o(r(6686)),i=o(r(4156));t["default"]=(0,n.defineComponent)({name:"TagesCart",components:{TagesBreadcrumbs:c.default,ProductActions:i.default},mixins:[a.default],computed:{product:function(){var e=this;return this.productsStore.allProducts.find((function(t){return t.id===e.$route.params.id}))},breadcrumbs:function(){return[{name:"Главная",href:"/"},{name:this.product.name}]},material:function(){var e=this;return this.productsStore.materials.find((function(t){return t.id==e.product.material})).name}},mounted:function(){this.productsStore.getAllProducts()}})},5164:function(e,t,r){t.s=void 0;var o=r(942),n={class:"tages-app"};function c(e,t,r,c,a,i){var l=(0,o.resolveComponent)("router-link"),u=(0,o.resolveComponent)("router-view");return(0,o.openBlock)(),(0,o.createElementBlock)("div",n,[(0,o.createVNode)(l,{class:"tages-app-fixed-buttons tages-app-fixed-buttons--cart",to:{name:"cart"}}),(0,o.createVNode)(l,{class:"tages-app-fixed-buttons tages-app-fixed-buttons--favorites",to:{name:"favorites"}}),(0,o.createVNode)(u)])}t.s=c},4074:function(e,t,r){r(8309),t.s=void 0;var o=r(942),n={class:"tages-breadcrumbs"},c={key:0,class:"tages-breadcrumbs__text"},a={key:2,class:"tages-breadcrumbs__divider"};function i(e,t,r,i,l,u){var s=(0,o.resolveComponent)("router-link");return(0,o.openBlock)(),(0,o.createElementBlock)("div",n,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.links,(function(t,r){var n=t.name,i=t.href;return(0,o.openBlock)(),(0,o.createElementBlock)("div",{key:n,class:"tages-breadcrumbs__item"},[r===e.links.length-1?((0,o.openBlock)(),(0,o.createElementBlock)("span",c,(0,o.toDisplayString)(n),1)):((0,o.openBlock)(),(0,o.createBlock)(s,{key:1,class:"tages-breadcrumbs__link",to:i},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(n),1)]}),void 0,!0),_:2},1032,["to"])),r!==e.links.length-1?((0,o.openBlock)(),(0,o.createElementBlock)("span",a," / ")):(0,o.createCommentVNode)("",!0)])})),128))])}t.s=i},7587:function(e,t,r){r(8309),t.s=void 0;var o=r(942),n=(0,o.createElementVNode)("h1",null,"Корзина",-1),c={key:0};function a(e,t,r,a,i,l){var u=(0,o.resolveComponent)("tages-breadcrumbs"),s=(0,o.resolveComponent)("router-link");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(u,{links:e.breadcrumbs},null,8,["links"]),n,e.productsStore.cartItems.length?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createElementBlock)("div",c," Корзина пуста ")),((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.productsStore.cartItems,(function(t,r){return(0,o.openBlock)(),(0,o.createElementBlock)("div",{key:t.id},[(0,o.createTextVNode)((0,o.toDisplayString)(r+1)+") ",1),(0,o.createVNode)(s,{to:{name:"product",params:{id:t.id}}},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(t.name),1)]}),void 0,!0),_:2},1032,["to"]),(0,o.createTextVNode)(" "+(0,o.toDisplayString)(t.price.current_price)+(0,o.toDisplayString)(e.productsStore.currency),1)])})),128)),(0,o.createElementVNode)("h2",null,"Итого: "+(0,o.toDisplayString)(e.productsStore.cartSum)+(0,o.toDisplayString)(e.productsStore.currency),1)],64)}t.s=a},8904:function(e,t,r){r(8309),t.s=void 0;var o=r(942),n=(0,o.createElementVNode)("h1",null,"Избранное",-1),c={key:0};function a(e,t,r,a,i,l){var u=(0,o.resolveComponent)("tages-breadcrumbs"),s=(0,o.resolveComponent)("router-link");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(u,{links:e.breadcrumbs},null,8,["links"]),n,e.productsStore.favorites.length?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createElementBlock)("div",c," Избранных товаров нет ")),((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.productsStore.favorites,(function(t,r){return(0,o.openBlock)(),(0,o.createElementBlock)("div",{key:t.id},[(0,o.createTextVNode)((0,o.toDisplayString)(r+1)+") ",1),(0,o.createVNode)(s,{to:{name:"product",params:{id:t.id}}},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(t.name),1)]}),void 0,!0),_:2},1032,["to"]),(0,o.createTextVNode)(" "+(0,o.toDisplayString)(t.price.current_price)+(0,o.toDisplayString)(e.productsStore.currency),1)])})),128))],64)}t.s=a},8098:function(e,t,r){r(2707),r(7327),r(1539),t.s=void 0;var o=r(942),n=(0,o.createElementVNode)("h1",null,"Комплекты стеллажных систем",-1);function c(e,t,r,c,a,i){var l=(0,o.resolveComponent)("tages-breadcrumbs"),u=(0,o.resolveComponent)("tages-filter"),s=(0,o.resolveComponent)("tages-products");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(l,{links:e.breadcrumbs},null,8,["links"]),n,(0,o.createVNode)(u,{sort:e.sort,"sort-selected":e.sortSelected,filter:e.filter,"filter-selected":e.filterSelected,onSortChange:e.onSortChange,onFilterChange:e.onFilterChange},null,8,["sort","sort-selected","filter","filter-selected","onSortChange","onFilterChange"]),(0,o.createVNode)(s,{products:e.products},null,8,["products"])],64)}t.s=c},8810:function(e,t,r){r(8309),t.s=void 0;var o=r(942),n={key:1},c={key:0},a=["src","alt"];function i(e,t,r,i,l,u){var s=(0,o.resolveComponent)("tages-breadcrumbs"),d=(0,o.resolveComponent)("product-actions");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[e.product?((0,o.openBlock)(),(0,o.createBlock)(s,{key:0,links:e.breadcrumbs},null,8,["links"])):(0,o.createCommentVNode)("",!0),e.product?((0,o.openBlock)(),(0,o.createElementBlock)("div",n,[(0,o.createElementVNode)("h1",null,(0,o.toDisplayString)(e.product.name)+" ("+(0,o.toDisplayString)(e.product.code)+")",1),(0,o.createTextVNode)(" Цена: - "),e.product.price.old_price?((0,o.openBlock)(),(0,o.createElementBlock)("s",c,(0,o.toDisplayString)(e.product.price.old_price)+(0,o.toDisplayString)(e.productsStore.currency),1)):(0,o.createCommentVNode)("",!0),(0,o.createTextVNode)(" "+(0,o.toDisplayString)(e.product.price.current_price)+(0,o.toDisplayString)(e.productsStore.currency)+" ",1),e.product.image.url?((0,o.openBlock)(),(0,o.createElementBlock)("img",{key:1,src:e.product.image.url,alt:e.product.name},null,8,a)):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("div",null," Материал - "+(0,o.toDisplayString)(e.material),1),(0,o.createVNode)(d,{product:e.product},null,8,["product"])])):(0,o.createCommentVNode)("",!0)],64)}t.s=i},1884:function(e,t,r){r(8862),Object.defineProperty(t,"__esModule",{value:!0}),t.setItem=t.getItem=void 0;var o=function(e){try{return JSON.parse(localStorage.getItem(e))}catch(t){return console.log("Error getting data from localStorage",t),null}};t.getItem=o;var n=function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(r){console.error("Error saving data in localStorage",r)}};t.setItem=n},5286:function(e,t,r){r(6992),r(8674),r(9601),r(7727);var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=r(942),c=o(r(4024)),a=o(r(3824)),i=r(7169),l=o(r(1535)),u=(0,i.createPinia)();(0,n.createApp)(c.default).use(u).use(a.default).use(l.default).mount("#app")},3824:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=r(4530),c=o(r(5508)),a=o(r(6139)),i=o(r(208)),l=o(r(152)),u=[{path:"/",name:"main",component:i.default},{path:"/cart",name:"cart",component:c.default},{path:"/product/:id",name:"product",component:a.default},{path:"/favorites",name:"favorites",component:l.default}],s=(0,n.createRouter)({routes:u,history:(0,n.createWebHashHistory)()});t["default"]=s},5447:function(e,t,r){var o=r(6114)["default"];r(7327),r(1539),Object.defineProperty(t,"__esModule",{value:!0}),t.useProductsStore=void 0;var n=r(7169),c=r(1884),a=r(7313),i=r(8543);t.useProductsStore=(0,n.defineStore)("products",{state:function(){return{cartItems:[],favorites:[],addedProducts:[],allProducts:[],currency:"₽",materials:i}},getters:{cartSum:function(e){if(e.cartItems.length){var t,r=0,n=o(e.cartItems);try{for(n.s();!(t=n.n()).done;){var c=t.value;r+=c.price.current_price}}catch(a){n.e(a)}finally{n.f()}return Math.ceil(r)}return 0}},actions:{getAllProducts:function(){this.allProducts=a},addToCart:function(e){this.cartItems.push(e),this.updateStorageCartItems(this.cartItems)},removeFromCart:function(e){this.cartItems=this.cartItems.filter((function(t){return t.id!==e.id})),this.updateStorageCartItems(this.cartItems)},addToFavorites:function(e){this.favorites.push(e),this.updateStorageFavorites(this.favorites)},removeFromFavorites:function(e){this.favorites=this.favorites.filter((function(t){return t.id!==e.id})),this.updateStorageFavorites(this.favorites)},getCartFromStorage:function(){this.cartItems=(0,c.getItem)("cartItems")||[]},getFavoritesFromStorage:function(){this.favorites=(0,c.getItem)("favorites")||[]},updateStorageCartItems:function(e){(0,c.setItem)("cartItems",e)},updateStorageFavorites:function(e){(0,c.setItem)("favorites",e)}}})},6686:function(e,t,r){r.r(t);var o=r(8439),n=r(1801),c=r(6448),a=r(5447);t["default"]={computed:(0,n.Z)({},(0,c.Kc)(a.useProductsStore)),methods:{addToCart:function(e){this.productsStore.addToCart(e)},removeFromCart:function(e){this.productsStore.removeFromCart(e)},addToFavorites:function(e){this.productsStore.addToFavorites(e)},removeFromFavorites:function(e){this.productsStore.removeFromFavorites(e)},isAdded:function(e){var t,r=(0,o.Z)(this.productsStore.cartItems);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(n.id===e.id)return!0}}catch(c){r.e(c)}finally{r.f()}return!1},isFavorite:function(e){var t,r=(0,o.Z)(this.productsStore.favorites);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(n.id===e.id)return!0}}catch(c){r.e(c)}finally{r.f()}return!1}}}},4024:function(e,t,r){r.r(t),r.d(t,{__esModule:function(){return n.X},default:function(){return i}});var o=r(5164),n=r(6418),c=r(3744);const a=(0,c.Z)(n.Z,[["render",o.s]]);var i=a},5994:function(e,t,r){r.r(t),r.d(t,{__esModule:function(){return n.X},default:function(){return i}});var o=r(4074),n=r(1483),c=r(3744);const a=(0,c.Z)(n.Z,[["render",o.s],["__scopeId","data-v-924cb800"]]);var i=a},8260:function(e,t,r){r.r(t),r.d(t,{default:function(){return S}});r(8309),r(2707),r(7327),r(1539);var o=r(942),n={class:"tages-filter"},c={class:"tages-filter__layout"},a={class:"tages-filter__item"},i={class:"tages-filter__item-title"},l={class:"tages-filter__item-select-text"},u={class:"tages-filter__item-select-dropdown"},s=["onClick"],d={class:"tages-filter__item"},f={class:"tages-filter__item-title"},p={class:"tages-filter__item-select-text"},m={class:"tages-filter__item-select-dropdown"},v=["onClick"];function g(e,t,r,g,h,_){var k=(0,o.resolveDirective)("click-away");return(0,o.openBlock)(),(0,o.createElementBlock)("div",n,[(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",i,(0,o.toDisplayString)(e.sort.name),1),(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("div",{class:(0,o.normalizeClass)(["tages-filter__item-select",{"select-opened":e.sortDropdownShow}]),onClick:t[0]||(t[0]=function(){return e.onSortSelectClick&&e.onSortSelectClick.apply(e,arguments)})},[(0,o.createElementVNode)("div",l,(0,o.toDisplayString)(e.sortSelectedText),1),(0,o.createElementVNode)("div",u,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.sort.options,(function(t){return(0,o.openBlock)(),(0,o.createElementBlock)("div",{key:t.value,class:(0,o.normalizeClass)(["tages-filter__item-select-item",{checked:t.value===e.sortSelected}]),onClick:(0,o.withModifiers)((function(r){return e.sortCheckItem(t)}),["stop"])},(0,o.toDisplayString)(t.name),11,s)})),128))])],2)),[[k,e.onSortClickAway]])]),(0,o.createElementVNode)("div",d,[(0,o.createElementVNode)("div",f,(0,o.toDisplayString)(e.filter.name),1),(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("div",{class:(0,o.normalizeClass)(["tages-filter__item-select",{"select-opened":e.filterDropdownShow}]),onClick:t[1]||(t[1]=function(){return e.onFilterSelectClick&&e.onFilterSelectClick.apply(e,arguments)})},[(0,o.createElementVNode)("div",p,(0,o.toDisplayString)(e.filterSelectedText),1),(0,o.createElementVNode)("div",m,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.filter.options,(function(t){return(0,o.openBlock)(),(0,o.createElementBlock)("div",{key:t.value,class:(0,o.normalizeClass)(["tages-filter__item-select-item",{checked:t.value===e.filterSelected}]),onClick:(0,o.withModifiers)((function(r){return e.filterCheckItem(t)}),["stop"])},(0,o.toDisplayString)(t.name),11,v)})),128))])],2)),[[k,e.onFilterClickAway]])])])])}r(9826);var h=(0,o.defineComponent)({name:"TagesFilter",props:{sort:{type:Object,default:function(){return{}}},sortSelected:{type:String,default:""},filter:{type:Object,default:function(){return{}}},filterSelected:{type:String,default:""}},emits:["sortChange","filterChange"],data:function(){return{sortDropdownShow:!1,filterDropdownShow:!1}},computed:{sortSelectedText:function(){var e=this;return this.sort.options.find((function(t){return t.value===e.sortSelected})).name},filterSelectedText:function(){var e=this;return this.filter.options.find((function(t){return t.value===e.filterSelected})).name}},methods:{sortCheckItem:function(e){this.sortDropdownShow=!1,this.$emit("sortChange",e.value)},onSortSelectClick:function(){this.sortDropdownShow=!0},onSortClickAway:function(){this.sortDropdownShow=!1},filterCheckItem:function(e){this.filterDropdownShow=!1,this.$emit("filterChange",e.value)},onFilterSelectClick:function(){this.filterDropdownShow=!0},onFilterClickAway:function(){this.filterDropdownShow=!1}}}),_=r(3744);const k=(0,_.Z)(h,[["render",g],["__scopeId","data-v-8f7e90be"]]);var S=k},4156:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var o=r(942),n={class:"tages-actions"};function c(e,t,r,c,a,i){return(0,o.openBlock)(),(0,o.createElementBlock)("div",n,[e.isAdded(e.product)?((0,o.openBlock)(),(0,o.createElementBlock)("button",{key:0,class:"tages-actions__button tages-actions__button--added",onClick:t[0]||(t[0]=function(t){return e.removeFromCart(e.product)})})):(0,o.createCommentVNode)("",!0),e.isAdded(e.product)?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createElementBlock)("button",{key:1,class:"tages-actions__button tages-actions__button--add",onClick:t[1]||(t[1]=function(t){return e.addToCart(e.product)})})),e.isFavorite(e.product)?((0,o.openBlock)(),(0,o.createElementBlock)("button",{key:2,class:"tages-actions__button tages-actions__button--favorited",onClick:t[2]||(t[2]=function(t){return e.removeFromFavorites(e.product)})})):(0,o.createCommentVNode)("",!0),e.isFavorite(e.product)?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createElementBlock)("button",{key:3,class:"tages-actions__button tages-actions__button--favorite",onClick:t[3]||(t[3]=function(t){return e.addToFavorites(e.product)})}))])}var a=r(6686),i=(0,o.defineComponent)({name:"TagesProductActions",mixins:[a["default"]],props:{product:{type:Object,required:!0}}}),l=r(3744);const u=(0,l.Z)(i,[["render",c],["__scopeId","data-v-f3d9bd48"]]);var s=u},6354:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});r(8309);var o=r(942),n={class:"tages-products"},c=["src","alt"],a={key:0,class:"tages-products__label"},i={key:1,class:"tages-products__code"},l={class:"tages-products__bottom"},u={key:0,class:"tages-products__prices"},s={key:0,class:"tages-products__prices-old"},d={key:1,class:"tages-products__prices-current"};function f(e,t,r,f,p,m){var v=(0,o.resolveComponent)("router-link"),g=(0,o.resolveComponent)("product-actions");return(0,o.openBlock)(),(0,o.createElementBlock)("div",n,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.products,(function(t){return(0,o.openBlock)(),(0,o.createElementBlock)("div",{key:t.id,class:"tages-products__item"},[(0,o.createVNode)(v,{to:{name:"product",params:{id:t.id}}},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("img",{src:e.imageSrc(t),alt:t.name,class:"tages-products__image"},null,8,c)]}),void 0,!0),_:2},1032,["to"]),t.price.old_price?((0,o.openBlock)(),(0,o.createElementBlock)("div",a," Скидка ")):(0,o.createCommentVNode)("",!0),t.code?((0,o.openBlock)(),(0,o.createElementBlock)("div",i,(0,o.toDisplayString)(t.code),1)):(0,o.createCommentVNode)("",!0),t.name?((0,o.openBlock)(),(0,o.createBlock)(v,{key:2,to:{name:"product",params:{id:t.id}},class:"tages-products__name"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(t.name),1)]}),void 0,!0),_:2},1032,["to"])):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("div",l,[t.price.old_price||t.price.current_price?((0,o.openBlock)(),(0,o.createElementBlock)("div",u,[t.price.old_price?((0,o.openBlock)(),(0,o.createElementBlock)("div",s,(0,o.toDisplayString)(Math.ceil(t.price.old_price))+" "+(0,o.toDisplayString)(e.productsStore.currency),1)):(0,o.createCommentVNode)("",!0),t.price.current_price?((0,o.openBlock)(),(0,o.createElementBlock)("div",d,(0,o.toDisplayString)(Math.ceil(t.price.current_price))+" "+(0,o.toDisplayString)(e.productsStore.currency),1)):(0,o.createCommentVNode)("",!0)])):(0,o.createCommentVNode)("",!0),(0,o.createVNode)(g,{product:t},null,8,["product"])])])})),128))])}var p=r(6686),m=r(4156),v=(0,o.defineComponent)({name:"TagesProducts",components:{ProductActions:m["default"]},mixins:[p["default"]],props:{products:{type:Object,default:function(){return{}}}},methods:{imageSrc:function(e){return e.image.url?"./".concat(e.image.url):"https://via.placeholder.com/150"}}}),g=r(3744);const h=(0,g.Z)(v,[["render",f],["__scopeId","data-v-5e892720"]]);var _=h},5508:function(e,t,r){r.r(t);var o=r(7646),n=r(3477),c={};for(var a in n)"default"!==a&&(c[a]=function(e){return n[e]}.bind(0,a));r.d(t,c);var i=r(3744);const l=(0,i.Z)(n["default"],[["render",o.s]]);t["default"]=l},152:function(e,t,r){r.r(t);var o=r(6506),n=r(1938),c={};for(var a in n)"default"!==a&&(c[a]=function(e){return n[e]}.bind(0,a));r.d(t,c);var i=r(3744);const l=(0,i.Z)(n["default"],[["render",o.s]]);t["default"]=l},208:function(e,t,r){r.r(t);var o=r(9020),n=r(4256),c={};for(var a in n)"default"!==a&&(c[a]=function(e){return n[e]}.bind(0,a));r.d(t,c);var i=r(3744);const l=(0,i.Z)(n["default"],[["render",o.s]]);t["default"]=l},6139:function(e,t,r){r.r(t);var o=r(5832),n=r(1905),c={};for(var a in n)"default"!==a&&(c[a]=function(e){return n[e]}.bind(0,a));r.d(t,c);var i=r(3744);const l=(0,i.Z)(n["default"],[["render",o.s]]);t["default"]=l},3477:function(e,t,r){r.r(t),r.d(t,{default:function(){return n.a}});var o=r(3103),n=r.n(o),c={};for(var a in o)"default"!==a&&(c[a]=function(e){return o[e]}.bind(0,a));r.d(t,c)},1938:function(e,t,r){r.r(t),r.d(t,{default:function(){return n.a}});var o=r(2160),n=r.n(o),c={};for(var a in o)"default"!==a&&(c[a]=function(e){return o[e]}.bind(0,a));r.d(t,c)},4256:function(e,t,r){r.r(t),r.d(t,{default:function(){return n.a}});var o=r(6730),n=r.n(o),c={};for(var a in o)"default"!==a&&(c[a]=function(e){return o[e]}.bind(0,a));r.d(t,c)},1905:function(e,t,r){r.r(t),r.d(t,{default:function(){return n.a}});var o=r(9552),n=r.n(o),c={};for(var a in o)"default"!==a&&(c[a]=function(e){return o[e]}.bind(0,a));r.d(t,c)},7646:function(e,t,r){r.d(t,{s:function(){return o.s}});var o=r(7587)},6506:function(e,t,r){r.d(t,{s:function(){return o.s}});var o=r(8904)},9020:function(e,t,r){r.d(t,{s:function(){return o.s}});var o=r(8098)},5832:function(e,t,r){r.d(t,{s:function(){return o.s}});var o=r(8810)},7313:function(e){e.exports=JSON.parse('[{"id":"1","name":"Ручка дверная","code":"L422WH","price":{"old_price":400,"current_price":355},"image":{"url":"/pic/pic1.png"},"material":1},{"id":"2","name":"Ручка, нержавеющ сталь","code":"L423WH","price":{"old_price":400.9,"current_price":355.555},"image":{"url":"/pic/pic2.png"},"material":2},{"id":"3","name":"Стандартные петли","code":"P424WN","price":{"old_price":null,"current_price":75},"image":{"url":"/pic/pic3.png"},"material":2},{"id":"4","name":"Петля со стопором","code":"PW5AC","price":{"old_price":270,"current_price":200},"image":{"url":"/pic/pic4.png"},"material":2},{"id":"5","name":"Ручка дверная","code":"LM352","price":{"old_price":null,"current_price":720},"image":{"url":"/pic/pic1.png"},"material":1},{"id":"6","name":"Ручка, нержавеющ сталь","code":null,"price":{"old_price":null,"current_price":355.555},"image":{"url":"/pic/pic2.png"},"material":2},{"id":"7","name":"Стандартные петли","code":"WD14LK","price":{"old_price":null,"current_price":75},"image":{"url":"/pic/pic3.png"},"material":2},{"id":"8","name":"Петля со стопором","code":null,"price":{"old_price":1200,"current_price":900},"image":{"url":"/pic/pic4.png"},"material":2}]')},8543:function(e){e.exports=JSON.parse('[{"id":"1","name":"Дерево"},{"id":"2","name":"Металл"}]')}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var c=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(c.exports,c,c.exports,r),c.loaded=!0,c.exports}r.m=e,function(){var e=[];r.O=function(t,o,n,c){if(!o){var a=1/0;for(s=0;s<e.length;s++){o=e[s][0],n=e[s][1],c=e[s][2];for(var i=!0,l=0;l<o.length;l++)(!1&c||a>=c)&&Object.keys(r.O).every((function(e){return r.O[e](o[l])}))?o.splice(l--,1):(i=!1,c<a&&(a=c));if(i){e.splice(s--,1);var u=n();void 0!==u&&(t=u)}}return t}c=c||0;for(var s=e.length;s>0&&e[s-1][2]>c;s--)e[s]=e[s-1];e[s]=[o,n,c]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,c,a=o[0],i=o[1],l=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(l)var s=l(r)}for(t&&t(o);u<a.length;u++)c=a[u],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(s)},o=self["webpackChunktest_project"]=self["webpackChunktest_project"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(5286)}));o=r.O(o)})();
//# sourceMappingURL=app-legacy.0c2f5b03.js.map