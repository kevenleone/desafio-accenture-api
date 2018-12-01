(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,a,t){},32:function(e,a,t){e.exports=t(70)},63:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(28),s=t.n(r),o=t(5),c=t(6),i=t(11),m=t(8),u=t(10),d=t(20),h=t(75),v=t(73),E=t(72),f=t(74),p=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"getCols",value:function(){var e=String(this.props.cols).split(" "),a="";return e.length>0?(a+=e[0]?"col-lg-".concat(e[0]," "):"",a+=e[1]?"col-md-".concat(e[1]," "):"",a+=e[2]?"col-sm-".concat(e[2]," "):""):a="col-lg-12",a}},{key:"render",value:function(){return l.a.createElement("div",{className:"".concat(this.props.classes," ")+this.getCols()},this.props.children)}}]),a}(n.Component),b=(t(22),function(){return l.a.createElement(p,{cols:"12"},l.a.createElement("br",null),l.a.createElement("ul",{className:"nav nav-tabs"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active show","data-toggle":"tab",href:"#desafio"},"Desafio")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link","data-toggle":"tab",href:"#consideracoes"},"Considera\xe7\xf5es"))),l.a.createElement("div",{id:"myTabContent",className:"tab-content"},l.a.createElement("div",{className:"tab-pane fade active show",id:"desafio"},l.a.createElement(p,{cols:"6 12 12"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("br",null),l.a.createElement("h2",null,"Desafio Front-End da Accenture Recife"),l.a.createElement("p",null,"O desafio proposta consiste em desenvolver uma aplica\xe7\xe3o que possibilita o cadastro de potenciais clientes de um novo produto."),l.a.createElement("h3",null,l.a.createElement("strong",null,"Requisitos funcionais")),l.a.createElement("ul",null,l.a.createElement("li",{className:"green"},"Eu, como usu\xe1rio, desejo cadastrar um cliente (nome completo, idade, cpf, telefone e e-mail). Todos os campos s\xe3o obrigat\xf3rios;"),l.a.createElement("li",{className:"green"},"Eu, como usu\xe1rio, desejo ver a listagem dos clientes (primeiro nome, telefone, e-mail);"),l.a.createElement("li",{className:"green"},"Eu, como usu\xe1rio, desejo ver uma mensagem amig\xe1vel quando n\xe3o houver nenhum cliente cadastrado;"),l.a.createElement("li",{className:"green"},"Eu, como usu\xe1rio, desejo buscar por um cliente pelo Nome ou CPF;"),l.a.createElement("li",{className:"green"},"Eu, como usu\xe1rio, desejo ver os detalhes desse usu\xe1rio que foi buscado (nome completo, idade, cpf, telefone e e-mail);"),l.a.createElement("li",{className:"green"},"Eu, como usu\xe1rio, desejo poder alterar os dados do cliente;"),l.a.createElement("li",{className:"green"},"Eu, como usu\xe1rio, desejo poder apagar um cliente (confirmando o cpf do mesmo);")),l.a.createElement("h3",null,l.a.createElement("strong",null,"Requisitios t\xe9cnicos")),l.a.createElement("ul",null,l.a.createElement("li",{className:"green"},"Responsividade (resoluc\xe3o m\xednima de 460x)"),l.a.createElement("li",{className:"green"},"Consumir e Persistir os dados localmente"),l.a.createElement("li",{className:"red"},"Desenvolver testes unit\xe1rios"),l.a.createElement("li",{className:"green"},"Uso de rotas"),l.a.createElement("li",{className:"green"},"Validac\xe3o de formul\xe1rio com tratamento de erro"),l.a.createElement("li",{className:"orange"},"Suporte IE11+, Chrome, Safari, Firefox.")),l.a.createElement("h3",null,l.a.createElement("strong",null,"Stack")),l.a.createElement("ul",null,l.a.createElement("li",{className:"green"},"Utilizar um framework SPA de sua escolha, mas recomendamos - ",l.a.createElement("u",{className:"green"},"React.js"),", Angular, Vue.js."),l.a.createElement("li",{className:"green"},"Utilizar um framework CSS de sua escolha, como ",l.a.createElement("u",{className:"green"},"bootstrap")," ou Materialize."),l.a.createElement("li",{className:"orange"},"Utilizar automatizador de tarefas de sua escolha, como Gulp , Grunt ou ",l.a.createElement("u",{className:"orange"}," Webpack "),".")),l.a.createElement("hr",null),l.a.createElement("b",null,"Legenda:"),l.a.createElement("ul",null,l.a.createElement("li",{className:"green"},"Implementado"),l.a.createElement("li",{className:"red"},"N\xe3o implementado"),l.a.createElement("li",{className:"orange"},"Talvez / Em partes"))))),l.a.createElement("div",{className:"tab-pane fade",id:"consideracoes"},l.a.createElement(p,{cols:"6"}," ",l.a.createElement("br",null),l.a.createElement("h2",null,"Observa\xe7\xf5es e Considera\xe7\xf5es"),l.a.createElement("p",null,"Para realiza\xe7\xe3o do projeto foram utilizadas algumas ferramentas extras para dar apoio ao Front-end servindo as informa\xe7\xf5es, um back-end foi criado para isso utilizando: "),l.a.createElement("ul",null,l.a.createElement("li",null,"Express"),l.a.createElement("li",null,"Sequelize"),l.a.createElement("li",null,"Body-Parser"),l.a.createElement("li",null,"UUID"),l.a.createElement("li",null,"DOTENV"),l.a.createElement("li",null,l.a.createElement("s",null,"TokenJWT"))),l.a.createElement("b",null,"OBS\xb9: Caso n\xe3o seja poss\xedvel a inicializa\xe7\xe3o do back-end local pode se utilizar a API rodando no Heroku pelo arquivo API.JS")," ",l.a.createElement("br",null),l.a.createElement("b",null,"OBS\xb2: N\xe3o foi poss\xedvel realizar todos os cen\xe1rios de testes, principalmente nos input")," ",l.a.createElement("br",null),l.a.createElement("b",null,"OBS\xb3: IE n\xe3o foi testado"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"A API e o projeto est\xe1 sendo executado no Heroku, ",l.a.createElement("a",{href:"https://desafio-accenture-k.herokuapp.com/"}," link "),": "),l.a.createElement("p",null,"Uma simples defini\xe7\xe3o das rotas presentes em: https://desafio-accenture-k.herokuapp.com/"),l.a.createElement("h4",null,"API"),l.a.createElement("ul",null,l.a.createElement("li",null,"post('cliente/')"),l.a.createElement("li",null,"get('cliente/')"),l.a.createElement("li",null,"get('cliente/:id')"),l.a.createElement("li",null,"get('cliente/search/:criteria')"),l.a.createElement("li",null,"put('cliente/:id')"),l.a.createElement("li",null,"delete('cliente/:id')")),l.a.createElement("h4",null,"React Web"),l.a.createElement("ul",null,l.a.createElement("li",null,"/ [LoginPage]"),l.a.createElement("li",null,"/inicio [P\xe1gina Inicial]"),l.a.createElement("li",null,"/clientes[Lista de Clientes]"),l.a.createElement("li",null,"/clientes/:id [Perfil do Cliente]"))))))}),g=t(18),N=t.n(g),C=t(29),k=t(16),y=t(2),S=t(19),j=t(12),O=t.n(j),w=new(function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,[{key:"formatDate",value:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"DD/MM/YYYY";return O()(e).format(a)}},{key:"getAnoCliente",value:function(e){var a=new Date-new Date(e);return O.a.duration(a,"milliseconds").years()}},{key:"validateForm",value:function(e){return console.log(e),!!(e.nome.valid&&e.email.valid&&e.cpf.valid&&e.nascimento.valid&&e.email.valid)}},{key:"isValid",value:function(e){return!(""===e||void 0===e||e.length<=2)}},{key:"getClassValidation",value:function(e){return""===e?"":e?"valid":"invalid"}},{key:"resolveNameLogin",value:function(e){return e?"Login":"Cadastrar"}},{key:"getUser",value:function(){return localStorage.getItem("user")}},{key:"getToken",value:function(){return localStorage.getItem("token")}},{key:"isAuthenticated",value:function(){return localStorage.getItem("authenticated")}},{key:"Redirect",value:function(e){window.location.href=e}},{key:"Logout",value:function(e){e.preventDefault(),localStorage.removeItem("user"),localStorage.removeItem("authenticated"),this.Redirect("/")}},{key:"setUserSession",value:function(e){localStorage.setItem("authenticated",!0),localStorage.setItem("user",e.usuario),localStorage.setItem("name",e.nome),localStorage.setItem("token",e.token)}},{key:"getFirstName",value:function(e){return String(e).split(" ")[0]}},{key:"ClientData",value:function(e){return{nome:e.nome.value,nascimento:e.nascimento.value,email:e.email.value,telefone:e.telefone.value,cpf:e.cpf.value}}}]),e}()),I=function(e){return l.a.createElement("div",{className:"modal fade",id:"".concat(e.id),tabIndex:"-1",role:"dialog","aria-labelledby":"myModalLabel"},l.a.createElement("div",{className:"modal-dialog modal-lg",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("form",{className:"need-validation",noValidate:!0,onSubmit:e.handleSubmit,encType:"multipart/form-data"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h4",{className:"modal-title",id:"myModalLabel"},e.title)),l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"row"},l.a.createElement(p,{classes:"form-group",cols:"6 6 12"},l.a.createElement("label",null,"Nome"),l.a.createElement("input",{name:"nome",value:e.data.nome.value,onChange:e.handleChange,type:"text",className:"form-control ".concat(w.getClassValidation(e.data.nome.valid))}),e.data.nome.valid?"":l.a.createElement("div",{className:"alert-error"},e.data.nome.error)),l.a.createElement(p,{classes:"form-group",cols:"6 6 12"},l.a.createElement("label",null,"Endere\xe7o Email"),l.a.createElement("input",{name:"email",value:e.data.email.value,onChange:e.handleChange,type:"email",className:"form-control ".concat(w.getClassValidation(e.data.email.valid))}),e.data.email.valid?"":l.a.createElement("div",{className:"alert-error"},e.data.email.error)),l.a.createElement(p,{classes:"form-group",cols:"4 6 12"},l.a.createElement("label",null,"CPF"),l.a.createElement(S.a,{mask:"111.111.111-11",value:e.data.cpf.value,className:"form-control ".concat(w.getClassValidation(e.data.cpf.valid)),name:"cpf",onChange:e.handleChange}),e.data.cpf.valid?"":l.a.createElement("div",{className:"alert-error"},e.data.cpf.error)),l.a.createElement(p,{classes:"form-group",cols:"4 6 12"},l.a.createElement("label",null,"Telefone"),l.a.createElement(S.a,{mask:"(11) 11111-1111",value:e.data.telefone.value,className:"form-control ".concat(w.getClassValidation(e.data.telefone.valid)),name:"telefone",onChange:e.handleChange}),e.data.telefone.valid?"":l.a.createElement("div",{className:"alert-error"},e.data.telefone.error)),l.a.createElement(p,{classes:"form-group",cols:"4 6 12"},l.a.createElement("label",null,"Nascimento"),l.a.createElement("input",{name:"nascimento",value:e.data.nascimento.value,onChange:e.handleChange,type:"date",className:"form-control ".concat(w.getClassValidation(e.data.nascimento.valid))}),e.data.nascimento.valid?"":l.a.createElement("div",{className:"alert-error"},e.data.nascimento.error))),e.data.formErrors.form?l.a.createElement("div",{className:"alert-error"},"Preencha todos os dados corretamente."):"")),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"Close"),l.a.createElement("button",{type:"submit",disabled:e.data.submitIsDisabled,className:"btn btn-primary"},"Save changes"))))))},D=function(e){return l.a.createElement("button",{className:"btn btn-".concat(e.color),"data-toggle":"modal","data-target":"#".concat(e.id)},l.a.createElement("i",{className:"fa fa-".concat(e.icon)})," ",e.text," ")},x=t(31),P=t.n(x).a.create({baseURL:"https://desafio-accenture-k.herokuapp.com"}),M=function(e){return l.a.createElement("div",{className:"alert ".concat(e.dismiss?"alert-dismissible":""," alert-").concat(e.color)},l.a.createElement("strong",null,l.a.createElement("i",{className:"fa fa-".concat(e.icon)})," ",e.title),e.dismiss?l.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert"},"\xd7"):"",e.children)},A=function(){return l.a.createElement("div",{className:"loading-bro"},l.a.createElement("h1",null,"Aguarde..."),l.a.createElement("svg",{id:"load",x:"0px",y:"0px",viewBox:"0 0 150 150"},l.a.createElement("circle",{id:"loading-inner",cx:"75",cy:"75",r:"60"})))},F=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).state={nome:{value:"",valid:""},nascimento:{value:"",valid:""},cpf:{value:"",valid:""},telefone:{value:"",valid:""},email:{value:"",valid:"",error:""},clientSearch:{value:""},searchMessageError:"N\xe3o possuem clientes cadastrados na base de dados.",formErrors:{nome:"",nascimento:"",telefone:"",email:"",cpf:"",form:""},clientes:[],submitIsDisabled:!1,loaded:!1,alert:{show:!1,message:"",color:""}},e.handleChange=e.handleChange.bind(Object(y.a)(Object(y.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(y.a)(Object(y.a)(e))),e}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.handleSearch()}},{key:"validateField",value:function(e,a){var t,n,l,r=this.state.formErrors;switch(e){case"email":l=(t=a.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))?"":"O Email ".concat(a," est\xe1 inv\xe1lido");break;case"nome":l=(t=a.length>=10)?"":"Insira o nome completo, m\xednimo 10 caract\xe9res";break;case"telefone":l=(t="_"!==String(a).split("")[14])?"":"Insira o telefone corretamente";break;case"nascimento":l=(t=O()(a).isBetween("01/01/1920",O()()))?"":"Insira uma data v\xe1lida";break;case"cpf":l=(t=a.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/))?"":"CPF Inv\xe1lido"}n=!!t,r[e]=l;var s=this.state;s[e].valid=n,s[e].error=l,this.setState(Object(k.a)({formErrors:r},s),this.validateForm)}},{key:"validateForm",value:function(){this.setState({formValid:this.state.emailValid&&this.state.passwordValid})}},{key:"handleChange",value:function(e){var a=this,t=e.target.name,n=e.target.value,l=this.state;l[t].value=n,this.setState(l,function(){a.validateField(t,n)})}},{key:"handleSearch",value:function(){var e=Object(C.a)(N.a.mark(function e(){var a,t,n,l,r=arguments;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>0&&void 0!==r[0]?r[0]:null,t=r.length>1&&void 0!==r[1]?r[1]:"",n="",a&&a.preventDefault(),""!==t&&(n="search/".concat(t)),e.prev=5,e.next=8,P.get("/cliente/".concat(n));case 8:l=e.sent,this.setState({clientes:l.data,loaded:!0,searchMessageError:"N\xe3o foi poss\xedvel encontrar ".concat(t," na base de dados")}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.log("Nao foi poss\xedvel se conectar a API");case 15:case"end":return e.stop()}},e,this,[[5,12]])}));return function(){return e.apply(this,arguments)}}()},{key:"handleRemove",value:function(e){var a=window.prompt("Para confirmar a remo\xe7\xe3o insira o CPF de ".concat(e.nome));console.log(a),a===e.cpf?P.delete("/cliente/".concat(e.id)).then(function(e){window.location.reload()}).catch(function(e){window.location.reload()}):null==a||alert("O CPF informado n\xe3o \xe9 igual ao de ".concat(e.nome))}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),w.validateForm(this.state)?(this.setState({submitIsDisabled:!0}),P.post("/cliente",w.ClientData(this.state)).then(function(e){alert("Cliente Cadastrado!"),window.location.reload()}).catch(function(e){alert("Erro ao cadastrar Cliente... Tente novamente"),a.setState({submitIsDisabled:!1})})):this.setState({submitIsDisabled:!1,formErrors:{form:"Preencha o formul\xe1rio corretamente"}})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null," ",l.a.createElement("br",null),l.a.createElement(p,{cols:"12"},l.a.createElement("div",{className:"jumbotron"},l.a.createElement("h3",{className:"display-5"},"Bem vindo, ",w.getUser()),l.a.createElement("p",{className:"lead"},"A partir dessa p\xe1gina voc\xea poder\xe1 gerenciar o perfil dos clientes, cadastrar, remover e altera-los."))),l.a.createElement(p,{cols:"12 12 12"},l.a.createElement("div",{className:"row"},l.a.createElement(p,{cols:"10"},l.a.createElement(D,{color:"primary",icon:"user",text:"Novo Cliente",id:"client"})," ",l.a.createElement("br",null)," ",l.a.createElement("br",null)),l.a.createElement("form",{className:"form-inline"},l.a.createElement("div",{className:"form-group mx-sm-3 mb-2"},l.a.createElement("input",{type:"text",value:this.state.clientSearch.value,name:"clientSearch",onChange:this.handleChange,className:"form-control col-md-12",placeholder:"ex: Cirilo"})),l.a.createElement("button",{onClick:function(a){return e.handleSearch(a,e.state.clientSearch.value)},className:"btn btn-primary mb-2"},l.a.createElement("i",{className:"fa fa-search"})," Buscar"))),this.state.loaded?l.a.createElement("div",null,this.state.clientes.length>0?l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Primeiro Nome"),l.a.createElement("th",null,"CPF"),l.a.createElement("th",null,"Telefone"),l.a.createElement("th",null,"E-mail"),l.a.createElement("th",null,"A\xe7\xf5es"))),l.a.createElement("tbody",null,this.state.clientes.map(function(a){return l.a.createElement("tr",{key:a.id},l.a.createElement("td",null,w.getFirstName(a.nome)),l.a.createElement("td",null,a.cpf),l.a.createElement("td",null,a.telefone),l.a.createElement("td",null,a.email),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return w.Redirect("clientes/".concat(a.id))},className:"btn btn-info",title:"Visualizar Cliente"},l.a.createElement("i",{className:"fa fa-user"}))," \u2002",l.a.createElement("button",{"data-toggle":"tooltip","data-placement":"top",onClick:function(){return e.handleRemove(a)},className:"btn btn-danger",title:"Remover"},l.a.createElement("i",{className:"fa fa-trash"}))))}))):l.a.createElement(M,{color:"info",title:"Oops...",icon:"exclamation-triangle",text:"N\xe3o possuem usu\xe1rios cadastrados..."},l.a.createElement("p",null,this.state.searchMessageError))):l.a.createElement(A,null)),l.a.createElement(I,{data:this.state,handleChange:this.handleChange,handleSubmit:this.handleSubmit,id:"client",title:"Novo Cliente"}))}}]),a}(n.Component),L=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).state={cliente:{},nome:{value:"",valid:!0},nascimento:{value:"",valid:!0},cpf:{value:"",valid:!0},telefone:{value:"",valid:!0},email:{value:"",valid:!0},clientSearch:{value:""},searchMessageError:"N\xe3o possuem clientes cadastrados na base de dados.",formErrors:{nome:"",nascimento:"",telefone:"",email:"",cpf:"",form:""},clientes:[],submitIsDisabled:!1,loaded:!1},e.handleChange=e.handleChange.bind(Object(y.a)(Object(y.a)(e))),e.handleUpdate=e.handleUpdate.bind(Object(y.a)(Object(y.a)(e))),e}return Object(u.a)(a,e),Object(c.a)(a,[{key:"handleChange",value:function(e){var a=this,t=e.target.name,n=e.target.value,l=this.state;l[t].value=n,this.setState(l,function(){a.validateField(t,n)})}},{key:"validateField",value:function(e,a){var t,n,l,r=this.state.formErrors;switch(e){case"email":l=(t=a.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))?"":"O Email ".concat(a," est\xe1 inv\xe1lido");break;case"nome":l=(t=a.length>=10)?"":"Insira o nome completo, m\xednimo 10 caract\xe9res";break;case"telefone":l=(t="_"!==String(a).split("")[14])?"":"Insira o telefone corretamente";break;case"nascimento":l=(t=O()(a).isBetween("01/01/1920",O()()))?"":"Insira uma data v\xe1lida";break;case"cpf":l=(t=a.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/))?"":"CPF Inv\xe1lido"}n=!!t,r[e]=l;var s=this.state;s[e].valid=n,s[e].error=l,this.setState(Object(k.a)({formErrors:r},s),this.validateForm)}},{key:"handleUpdate",value:function(e){var a=this.props.match.params.id;e.preventDefault(),w.validateForm(this.state)?P.put("/cliente/".concat(a),w.ClientData(this.state)).then(function(e){alert("Cliente Atualizado!"),window.location.reload()}).catch(function(e){alert("Erro ao cadastrar Cliente..."),window.location.reload()}):console.log("Error validate...")}},{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;P.get("/cliente/".concat(a)).then(function(a){var t=a.data;e.setState({cliente:t,loaded:!0,nome:{value:t.nome,valid:!0},nascimento:{value:t.nascimento,valid:!0},cpf:{value:t.cpf,valid:!0},email:{value:t.email,valid:!0},telefone:{value:t.telefone,valid:!0}})}).catch(function(e){alert(e)})}},{key:"render",value:function(){return l.a.createElement("div",{style:{padding:10}},this.state.loaded?l.a.createElement(p,{cols:"12 12 12"},l.a.createElement("div",{className:"card border-primary mb-3"},l.a.createElement("div",{className:"card-header"},this.state.cliente.nome),l.a.createElement("div",{className:"card-body"},l.a.createElement("p",{className:"card-title"},"Dados do Cliente"),l.a.createElement("p",{className:"card-text"},l.a.createElement("b",null,"E-mail"),": ",this.state.cliente.email," ",l.a.createElement("br",null),l.a.createElement("b",null,"Idade:")," ",w.getAnoCliente(this.state.cliente.nascimento)," anos",l.a.createElement("br",null),l.a.createElement("b",null,"Telefone"),": ",this.state.cliente.telefone," ",l.a.createElement("br",null),l.a.createElement("b",null,"CPF"),": ",this.state.cliente.cpf," ",l.a.createElement("br",null),l.a.createElement("b",null,"Cadastrado em"),": ",w.formatDate(this.state.cliente.createdAt,"DD/MM/YYYY - HH:mm")," ",l.a.createElement("br",null)),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("p",{className:"lead"},l.a.createElement("a",{className:"btn btn-primary btn-lg",href:"../clientes",role:"button"},l.a.createElement("i",{className:"fa fa-arrow-left"})," Voltar")," \u2002\u2002",l.a.createElement(D,{icon:"pencil",color:"info btn-lg",id:"edtClient",text:"Editar"}))))):l.a.createElement(A,null),l.a.createElement(I,{data:this.state,handleChange:this.handleChange,handleSubmit:this.handleUpdate,id:"edtClient",title:"Atualiza\xe7\xe3o de dados de ".concat(this.state.cliente.nome)}))}}]),a}(n.Component),U=(t(63),function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).state={nome:{value:"",valid:null,alert:""},usuario:{value:"",valid:null,alert:""},senha:{value:"",valid:null,alert:""},senha2:{value:""},isLogin:!0,alertMsg:"",alertMsgColor:"danger",doubleCheckPass:!0,submitIsDisabled:!1},e.handleChange=e.handleChange.bind(Object(y.a)(Object(y.a)(e))),e.changePageType=e.changePageType.bind(Object(y.a)(Object(y.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(y.a)(Object(y.a)(e))),e}return Object(u.a)(a,e),Object(c.a)(a,[{key:"handleChange",value:function(e){var a=e.target.name,t=this.state;t[a].value=e.target.value,this.setState(t)}},{key:"changePageType",value:function(e){e.preventDefault(),this.setState({isLogin:!this.state.isLogin})}},{key:"handleSubmit",value:function(){var e=this,a={usuario:this.state.usuario.value,senha:this.state.senha.value,nome:this.state.nome.value},t=w.isValid(a.usuario)&&w.isValid(a.senha);this.state.isLogin?t?(this.setState({submitIsDisabled:!0}),P.post("/auth/login",a).then(function(a){1===a.data.count?(w.setUserSession(a.data.rows[0]),w.Redirect("/inicio")):e.setState({alertMsg:"Usu\xe1rio ou senha inv\xe1lida",alertMsgColor:"danger",submitIsDisabled:!1})}).catch(function(a){console.log(a),e.setState({submitIsDisabled:!0})})):this.setState({alertMsg:"Preencha Usu\xe1rio e Senha!",alertMsgColor:"danger"}):t?w.isValid(a.senha)&&w.isValid(this.state.nome.value)&&a.senha===this.state.senha2.value?(this.setState({submitIsDisabled:!0}),P.post("/auth/register",a).then(function(a){e.setState({alertMsg:"Cadastro realizado com sucesso!",alertMsgColor:"success",isLogin:!0,submitIsDisabled:!1})}).catch(function(a){e.setState({alertMsg:"Usu\xe1rio j\xe1 existe, escolha outro!",alertMsgColor:"danger",submitIsDisabled:!1})})):this.setState({doubleCheckPass:!1,submitIsDisabled:!1}):this.setState({alertMsg:"Preencha os campos abaixo!",alertMsgColor:"danger",doubleCheckPass:!0})}},{key:"render",value:function(){var e=this;return l.a.createElement(p,{cols:"12",classes:"loginPanel"},l.a.createElement("div",{className:"text-center"},l.a.createElement("img",{alt:"Accenture Logo",src:"imgs/accenture.png"})),""!==this.state.alertMsg?l.a.createElement(M,{color:this.state.alertMsgColor}," ",this.state.alertMsg," "):"",this.state.isLogin?"":l.a.createElement("div",{className:"form-group valid"},l.a.createElement("input",{name:"nome",value:this.state.nome.value,type:"text",className:"form-control",onChange:function(a){return e.handleChange(a)},placeholder:"Nome Completo"})," "),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{name:"usuario",value:this.state.usuario.value,type:"text",className:"form-control",onChange:function(a){return e.handleChange(a)},placeholder:"Usu\xe1rio"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{name:"senha",value:this.state.senha.value,type:"password",className:"form-control",onChange:function(a){return e.handleChange(a)},placeholder:"Senha"})),this.state.isLogin?"":l.a.createElement("div",{className:"form-group valid"},l.a.createElement("input",{name:"senha2",value:this.state.senha2.value,type:"password",className:"form-control",onChange:function(a){return e.handleChange(a)},placeholder:"Repita a Senha"}),this.state.doubleCheckPass?"":l.a.createElement("div",{className:"alert-error"},"As senhas informadas n\xe3o s\xe3o iguais")),l.a.createElement("button",{onClick:this.handleSubmit,disabled:this.state.submitIsDisabled,className:"btn btn-primary btn-block btn-lg"}," ",w.resolveNameLogin(this.state.isLogin)," ")," ",l.a.createElement("br",null),this.state.isLogin?l.a.createElement("div",{className:"text-center"},"Ainda n\xe3o \xe9 cadastrado? ",l.a.createElement("a",{href:"/register",onClick:this.changePageType},"Cadastre-se")):l.a.createElement("div",{className:"text-center"},"J\xe1 \xe9 cadastrado? ",l.a.createElement("a",{href:"/",onClick:this.changePageType},"Login")))}}]),a}(n.Component)),V=function(){return localStorage.getItem("authenticated")||!1},T=function(e){var a=e.component,t=Object(d.a)(e,["component"]);return l.a.createElement(h.a,Object.assign({},t,{render:function(e){return V()?l.a.createElement(a,e):l.a.createElement(v.a,{to:{pathname:"/",state:{from:e.location}}})}}))},z=function(e){var a=e.component,t=Object(d.a)(e,["component"]);return l.a.createElement(h.a,Object.assign({},t,{render:function(e){return V()?l.a.createElement(v.a,{to:{pathname:"/inicio",state:{from:e.location}}}):l.a.createElement(a,e)}}))},R=function(){return l.a.createElement(E.a,null,l.a.createElement(f.a,null,l.a.createElement(z,{exact:!0,path:"/",component:U}),l.a.createElement(T,{exact:!0,path:"/inicio",component:b}),l.a.createElement(T,{exact:!0,path:"/clientes",component:F}),l.a.createElement(T,{exact:!0,path:"/clientes/:id",component:L})))},B=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"bs-component"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/inicio"},"Accenture"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor02","aria-controls":"navbarColor02","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor02"},w.isAuthenticated()?l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/inicio"},"In\xedcio",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/clientes"},"Clientes"))):"",w.isAuthenticated()?l.a.createElement("div",{className:" form-inline my-2 my-lg-0"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("span",{className:"nav-link"},"Bem vindo ",w.getUser(),"!")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"/logout",onClick:function(e){return w.Logout(e)},className:"nav-link"},"Sair")))):"")))}}]),a}(n.Component),Y=(t(66),function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(B,null),l.a.createElement(R,null))}}]),a}(n.Component));s.a.render(l.a.createElement(Y,null),document.getElementById("root"))}},[[32,2,1]]]);
//# sourceMappingURL=main.e350aaa3.chunk.js.map