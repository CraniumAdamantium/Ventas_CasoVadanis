"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[620,740],{3620:(e,t,r)=>{r.r(t),r.d(t,{default:()=>A});var a=r(6598),n={class:"pb-10 mx-2 sm:mx-4"},o={class:"flex flex-col md:flex-row gap-2"},l={class:"md:w-8/12 w-full"},i=(0,a.createElementVNode)("p",{class:"text-white text-3xl text-center"},"Categorias",-1),c={class:"flex flex-wrap gap-2"},d=(0,a.createElementVNode)("button",{class:"bg-green-500 p-2 rounded-lg text-white"}," Crear ",-1),u=["disabled"],s=["disabled"],f=(0,a.createTextVNode)(" No hay categorías "),m={class:"w-full md:w-4/12"},p=(0,a.createElementVNode)("p",{class:"text-white text-3xl text-center"},"Marcas",-1),b={class:"flex flex-wrap gap-2 justify-center"},g={class:"w-fit flex flex-row"},y=["onClick"];var v=r(294),h=r(5247),x=r(6076),N=r(6252),w=r(2262),V=r(3740),C=r(922),_=r(6358),E=r(1533),S=r(9680);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||j(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){if(e){if("string"==typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(e,t):void 0}}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}const D={directives:{focus:{mounted:function(e){return e.focus()}}},components:{DataTable:C.Z,TreeTable:v.Z,Column:h.Z,InputText:x.Z},layout:V.default,props:{usuario:{type:Object,required:!0},categorias:{type:Array,required:!0},marcas:{type:Array,required:!0}},setup:function(e){var t=(0,N.Fl)((function(){return r(e.categorias)})),r=function(e){return function(e){console.log("Partimos de",e),e.forEach((function(e){e.key=e.id,e.data={nombre:e.nombre,marcas:e.marcas.map((function(e){return{nombre:e.nombre,id:e.id}}))}}));for(var t=function(t){return e.findIndex((function(e){return e.id==t}))},r=function(e){return e.find((function(e){return null!=e.id_categoria_padre}))},a=function(t){return e.find((function(e){return e.id_categoria_padre==t}))},n=r(e),o=0;n;){for(var l=0;l<e.length;l++)if(null!=e[l].id_categoria_padre&&null==a(e[l].id)){var i=t(e[l].id_categoria_padre);if(-1!=i){var c=e[i];c.children||(c.children=[]),console.log("Pusheando"),c.children.push(e[l])}e.splice(l,1)}if(n=r(e),++o>100)break}return console.log("Terminado en ",o," iteraciones",e),[{key:null,data:{nombre:"Categorias",marcas:"Marcas"},children:e}]}(O(e))},a=function(){for(var e in o.categorias_tratadas)n(o.categorias_tratadas[e]);o.expandedKeys=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){M(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},o.expandedKeys)},n=function e(t){if(o.expandedKeys[t.key]=!0,t.children&&t.children.length){var r,a=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=j(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){i=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(i)throw o}}}}(t.children);try{for(a.s();!(r=a.n()).done;){e(r.value)}}catch(e){a.e(e)}finally{a.f()}}},o=(0,w.qj)({showModal:!1,accion:"Agregar",expandedKeys:[],selectedCategoryKeys:{},categorias_tratadas:[],name:"",description:"",categoria_seleccionada:{},minval:"",filters:{},filtersMarca:{global:{value:null,matchMode:_.a6.CONTAINS}}}),l=(0,w.qj)({nombre:""});(0,N.bv)((function(){a()}));var i=(0,w.qj)({nombre:"",id:"",id_categoria_padre:""});return{eliminarCategoria:function(e){S.Inertia.post(route("categoria_delete"),{id:i.id_categoria_padre},{preserveScroll:!0,preserveState:!0,onSuccess:function(){E.Notify.success("Categoría eliminada")},onError:function(e){for(var t in e)E.Notify.failure(e[t])}})},editarCategoria:function(){S.Inertia.post(route("categoria_update"),{id:i.id_categoria_padre,nombre:i.nombre},{preserveScroll:!0,preserveState:!0,onSuccess:function(){E.Notify.success("Categoría actualizada")},onError:function(e){for(var t in e)E.Notify.failure(e[t])}})},crearCategoria:function(){i.nombre.length<3?E.Notify.failure("El nombre de la categoría debe ser mayor a 3 caracteres"):S.Inertia.post(route("categoria_create"),{nombre:i.nombre,id_categoria_padre:i.id_categoria_padre},{preserveScroll:!0,preserveState:!0,onSuccess:function(){E.Notify.success("Categoría creada")},onError:function(e){for(var t in e)E.Notify.failure(e[t])}})},categoriaData:i,aTexto:function(e){return"string"==typeof e?"":e.map((function(e){return e.nombre})).join(", ")},log:function(e){console.log(e)},eliminarMarca:function(e){S.Inertia.post(route("marca_delete"),{id:e.id},{preserveScroll:!0,preserveState:!0,onSuccess:function(){E.Notify.success("Marca eliminada")},onError:function(e){for(var t in e)E.Notify.failure(e[t])}})},editMarca:function(e){console.log(e),e.newData.nombre<3?E.Notify.failure("El nombre debe tener al menos 3 caracteres"):S.Inertia.post(route("marca_update"),{id:e.newData.id,nombre:e.newData.nombre},{preserveScroll:!0,preserveState:!0,onSuccess:function(){E.Notify.success("Marca actualizada")},onError:function(e){for(var t in e)E.Notify.failure(e[t])}})},crearMarca:function(){l.nombre.length<3?E.Notify.failure("El nombre debe tener al menos 3 caracteres"):S.Inertia.post(route("marca_create"),{nombre:l.nombre},{preserveScroll:!0,preserveState:!0,onSuccess:function(){l.nombre="",E.Notify.success("Marca creada")},onError:function(e){for(var t in e)E.Notify.failure(e[t])}})},nuevaMarca:l,data:o,onNodeUnselect:function(e){o.categoria_seleccionada_keys={},i.id_categoria_padre=""},onNodeSelect:function(e){o.selectedCategory=e,i.id_categoria_padre=e.key,null!=e.key&&(i.nombre=e.data.nombre),o.categoria_seleccionada_keys=e},crearArbol:r,arbol_c:t}}};const A=(0,r(3744).Z)(D,[["render",function(e,t,r,v,h,x){var N=(0,a.resolveComponent)("InputText"),w=(0,a.resolveComponent)("Column"),V=(0,a.resolveComponent)("TreeTable"),C=(0,a.resolveComponent)("DataTable");return(0,a.openBlock)(),(0,a.createElementBlock)("div",n,[(0,a.createElementVNode)("div",o,[(0,a.createElementVNode)("div",l,[i,(0,a.createVNode)(V,{value:v.arbol_c,expandedKeys:v.data.expandedKeys,selectionMode:"single",selectionKeys:v.data.selectedCategoryKeysKeys,"onUpdate:selectionKeys":t[6]||(t[6]=function(e){return v.data.selectedCategoryKeysKeys=e}),onNodeSelect:v.onNodeSelect,onNodeUnselect:v.onNodeUnselect,filters:v.data.filters,filterMatchMode:"custom",class:"p-datatable-sm"},{header:(0,a.withCtx)((function(){return[(0,a.createElementVNode)("div",c,[(0,a.createElementVNode)("form",{onSubmit:t[1]||(t[1]=(0,a.withModifiers)((function(){return v.crearCategoria&&v.crearCategoria.apply(v,arguments)}),["prevent"]))},[(0,a.createVNode)(N,{class:"w-fit",modelValue:v.categoriaData.nombre,"onUpdate:modelValue":t[0]||(t[0]=function(e){return v.categoriaData.nombre=e}),placeholder:"Nombre de categoria"},null,8,["modelValue"]),d],32),(0,a.createElementVNode)("form",{onSubmit:t[3]||(t[3]=(0,a.withModifiers)((function(){return v.editarCategoria&&v.editarCategoria.apply(v,arguments)}),["prevent"]))},[(0,a.createVNode)(N,{class:"w-fit",modelValue:v.categoriaData.nombre,"onUpdate:modelValue":t[2]||(t[2]=function(e){return v.categoriaData.nombre=e}),placeholder:"Selecciona una categoría para editar",disabled:""==v.categoriaData.id_categoria_padre||null==v.categoriaData.id_categoria_padre},null,8,["modelValue","disabled"]),(0,a.createElementVNode)("button",{class:"bg-yellow-500 p-2 rounded-lg text-white disabled:bg-gray-500",disabled:""==v.categoriaData.id_categoria_padre||null==v.categoriaData.id_categoria_padre}," Editar ",8,u)],32),(0,a.createElementVNode)("button",{class:"bg-red-500 p-2 rounded-lg text-white disabled:bg-gray-500",onClick:t[4]||(t[4]=function(){return v.eliminarCategoria&&v.eliminarCategoria.apply(v,arguments)}),disabled:""==v.categoriaData.id_categoria_padre||null==v.categoriaData.id_categoria_padre}," Eliminar ",8,s)])]})),empty:(0,a.withCtx)((function(){return[f]})),default:(0,a.withCtx)((function(){return[(0,a.createVNode)(w,{field:"nombre",expander:!0,filterMatchMode:"contains"},{header:(0,a.withCtx)((function(){return[(0,a.createVNode)(N,{class:"w-40",type:"text",modelValue:v.data.filters.name,"onUpdate:modelValue":t[5]||(t[5]=function(e){return v.data.filters.name=e}),placeholder:"Filtrar por nombre"},null,8,["modelValue"])]})),_:1})]})),_:1},8,["value","expandedKeys","selectionKeys","onNodeSelect","onNodeUnselect","filters"])]),(0,a.createElementVNode)("div",m,[p,(0,a.createVNode)(C,{value:r.marcas,class:"p-datatable-sm",filters:v.data.filtersMarca,"onUpdate:filters":t[10]||(t[10]=function(e){return v.data.filtersMarca=e}),editMode:"cell",scrollable:!0,onCellEditComplete:v.editMarca,rows:10,paginator:!0},{header:(0,a.withCtx)((function(){return[(0,a.createElementVNode)("div",b,[(0,a.createVNode)(N,{type:"text",modelValue:v.data.filtersMarca.global.value,"onUpdate:modelValue":t[7]||(t[7]=function(e){return v.data.filtersMarca.global.value=e}),class:"mr-auto",placeholder:"Filtrar por nombre"},null,8,["modelValue"]),(0,a.createElementVNode)("div",g,[(0,a.createVNode)(N,{style:{width:"150px"},type:"text",modelValue:v.nuevaMarca.nombre,"onUpdate:modelValue":t[8]||(t[8]=function(e){return v.nuevaMarca.nombre=e}),class:"p-column-filter",placeholder:"Crear marca"},null,8,["modelValue"]),(0,a.createElementVNode)("button",{class:"bg-green-500 rounded-tr-lg rounded-br-lg px-1.5 text-white",onClick:t[9]||(t[9]=function(){return v.crearMarca&&v.crearMarca.apply(v,arguments)})}," Crear ")])])]})),default:(0,a.withCtx)((function(){return[(0,a.createVNode)(w,{field:"nombre",header:"Nombre"},{editor:(0,a.withCtx)((function(e){return[(0,a.createVNode)(N,{modelValue:e.data.nombre,"onUpdate:modelValue":function(t){return e.data.nombre=t},placeholder:"Nombre"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),(0,a.createVNode)(w,null,{body:(0,a.withCtx)((function(e){return[(0,a.createElementVNode)("button",{class:"bg-red-500 rounded-lg px-2",onClick:function(t){return v.eliminarMarca(e.data)}}," X ",8,y)]})),_:1})]})),_:1},8,["value","filters","onCellEditComplete"])])])])}]])},3740:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var a=r(6598),n={class:"relative min-h-screen"},o={class:"flex flex-wrap items-center justify-between w-full py-4 lg:py-0 px-4 text-lg text-gray-700 bg-gray-600"},l={class:"flex"},i=[(0,a.createElementVNode)("img",{src:"/img/VanadisOK.png",class:"object-contain h-20",alt:"Logo"},null,-1)],c=[(0,a.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)],d={class:"pt-2 text-base text-gray-700 lg:flex lg:justify-between lg:pt-0"};var u=r(9680);const s={components:{SplitButton:r(7712).Z},setup:function(){return{menuOptions:(0,a.reactive)({show:!0}),irA:function(e){u.Inertia.visit(route(e))},direcciones:[{label:"Usuarios",command:function(){u.Inertia.visit(route("usuarios"))}},{label:"Ventas",command:function(){u.Inertia.visit(route("ventas"))}},{label:"Productos",command:function(){u.Inertia.visit(route("productos"))}},{label:"Categorias",command:function(){u.Inertia.visit(route("categorias"))}},{label:"Proveedores",command:function(){u.Inertia.visit(route("proveedores"))}},{label:"Transacciones",command:function(){u.Inertia.visit(route("transacciones"))}}]}}};const f=(0,r(3744).Z)(s,[["render",function(e,t,r,u,s,f){var m=(0,a.resolveComponent)("SplitButton");return(0,a.openBlock)(),(0,a.createElementBlock)("main",n,[(0,a.createElementVNode)("header",null,[(0,a.createElementVNode)("nav",o,[(0,a.createElementVNode)("div",l,[(0,a.createElementVNode)("a",{onClick:t[0]||(t[0]=function(e){return u.irA("dashboard")}),class:"text-white text-4xl"},i)]),((0,a.openBlock)(),(0,a.createElementBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",id:"menu-button",onClick:t[1]||(t[1]=function(e){return u.menuOptions.show=!u.menuOptions.show}),class:"h-6 w-6 cursor-pointer lg:hidden block",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},c)),(0,a.createElementVNode)("div",{class:(0,a.normalizeClass)("w-full lg:flex lg:items-center lg:w-auto"+(u.menuOptions.show?" hidden":"")),id:"menu"},[(0,a.createElementVNode)("ul",d,[(0,a.createElementVNode)("li",null,[(0,a.createVNode)(m,{label:"Dashboard",model:u.direcciones,class:"p-button-md p-button-text mt-1.5"},null,8,["model"])]),(0,a.createElementVNode)("li",null,[(0,a.createElementVNode)("a",{class:"ml-6 text-white hover:text-red-600 mr-4 lg:p-4 py-2 block",onClick:t[2]||(t[2]=function(e){return u.irA("dashboard")})},"Estadísticas")]),(0,a.createElementVNode)("li",null,[(0,a.createElementVNode)("a",{class:"ml-6 text-white hover:text-red-600 mr-4 lg:p-4 py-2 block",onClick:t[3]||(t[3]=function(e){return u.irA("dashboard")})},"Reportes")]),(0,a.createElementVNode)("li",null,[(0,a.createElementVNode)("a",{class:"ml-6 text-white hover:text-red-600 mr-4 lg:p-4 py-2 block",onClick:t[4]||(t[4]=function(e){return u.irA("logout")})},"Cerrar sesión")])])],2)])]),(0,a.createElementVNode)("article",null,[(0,a.renderSlot)(e.$slots,"default")])])}]])}}]);