sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "sap/m/Dialog",
	"sap/m/Button",
    "sap/m/MessageBox",
    "sap/m/Text",
    "sap/m/Select",
    "sap/m/SelectList",
    "sap/m/StandardListItem",
    "sap/m/Label",
    "sap/m/Input",
    "sap/ui/layout/VerticalLayout",
    "sap/ui/layout/HorizontalLayout",
    "sap/ui/layout/GridData",
    "sap/m/RadioButton",
    "sap/m/RadioButtonGroup",
    "sap/m/MessageToast",
    "sap/ui/core/Item",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Fragment, Dialog, Button, MessageBox, Text, Select, SelectList, StandardListItem, Label, Input, VerticalLayout, HorizontalLayout, GridData, RadioButton, RadioButtonGroup, Item, MessageToast) {
        "use strict";

        return Controller.extend("locadora.sap.projetolocadorafiori.controller.LocadoraView", {
            onInit: function () {
             this.getView().addStyleClass("fullScreenPage");
             this.applyTheme("sap_horizon_dark");
             this.selectedSeats = [];
            //  MessageBox.information("Locadora online e consulta dos filmes em exibição no cinema, aqui temos as opções de alugar os filmes registrados no catálago ou consultar os horários e informações dos lançamentos. Divirta-se! (Caro Usuário, essa aplicação é para uso da gerência e controle da locadora)", {
            //     title: "BEM-VINDO AO PROGRAMA MAGIC FILMES!",                                  
            //  });
             var sData = localStorage.getItem("DadosTabela");
             var aData = sData ? JSON.parse(sData) : [
             { column1: "", column2: "", column3: "", column4: "", streamingUrl: "", column5: "Disponível", "enabledAlugar": true}];

             var oModel = new JSONModel({
                data: aData,
                isManagerView: false,
                movies: [
                    { image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",                 title: "Interestelar"},
                    { image: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",           title: "Pulp Fiction"},
                    { image: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",                        title: "Matrix"},
                    { image: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",                  title: "Vingadores: Ultimato"},
                    { image: "https://upload.wikimedia.org/wikipedia/en/c/c3/Inglourious_Basterds_poster.jpg",              title: "Bastardos Inglórios"},
                    { image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",   title: "Inception"},
                    { image: "https://upload.wikimedia.org/wikipedia/en/a/af/Batman_Begins_Poster.jpg",                     title: "Batman: Begins"},
                    { image: "https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_The_First_Avenger_poster.jpg", title: "Capitão America: O 1º Vingador"},
                  ],
                  days: [
                    {
                        day: "Segunda-feira",
                        sessions: [
                            { time: "14:00", type: "Legendado" },
                            { time: "16:00", type: "Dublado" },
                            { time: "18:00", type: "3D IMAX - Dublado"},
                            { time: "20:00", type: "3D IMAX - Legendado"}
                        ]
                    },
                    {
                        day: "Terça-feira",
                        sessions: [
                            { time: "14:00", type: "Dublado" },
                            { time: "19:00", type: "Legendado" },
                            { time: "20:00", type: "3D IMAX - Dublado"},
                            { time: "22:00", type: "3D IMAX - Legendado"}
                        ]
                    },{
                        day: "Quarta-feira",
                        sessions: [
                            { time: "14:00", type: "Dublado" },
                            { time: "16:00", type: "Legendado" },
                            { time: "20:00", type: "3D IMAX - Dublado"},
                            { time: "22:00", type: "3D IMAX - Legendado"}
                        ]
                    },{
                        day: "Quinta-feira",
                        sessions: [
                            { time: "14:00", type: "Dublado" },
                            { time: "19:00", type: "Legendado" },
                            { time: "20:00", type: "3D IMAX - Dublado"},
                            { time: "22:00", type: "3D IMAX - Legendado"}
                        ]
                    },{
                        day: "Sexta-feira",
                        sessions: [
                            { time: "16:00", type: "Dublado" },
                            { time: "20:00", type: "Legendado" },
                            { time: "22:00", type: "3D IMAX - Dublado"}
                        ]
                    },{
                        day: "Sábado",
                        sessions: [
                            { time: "14:00", type: "Dublado" },
                            { time: "16:00", type: "Dublado" },
                            { time: "18:00", type: "Legendado" },
                            { time: "20:00", type: "Legendado" },
                            { time: "22:00", type: "3D IMAX - Dublado"},
                            { time: "23:30", type: "3D IMAX - Legendado"}
                        ]
                    },{
                        day: "Domingo",
                        sessions: [
                            { time: "14:00", type: "Dublado" },
                            { time: "16:00", type: "Dublado" },
                            { time: "18:00", type: "Legendado" },
                            { time: "20:00", type: "Legendado" },
                            { time: "22:00", type: "3D IMAX - Dublado"},
                            { time: "23:30", type: "3D IMAX - Legendado"}
                        ]
                    }
                    // ... Outros dias e sessões
                ]
              });
             this.getView().setModel(oModel);
            },

            onConfig: function(oEvent){
                var oButton1 = oEvent.getSource(),
                oView = this.getView();
    
                if (!this._pDialogConfig) {
                     this._pDialogConfig = Fragment.load({
                        id: oView.getId(),
                        name: "locadora.sap.projetolocadorafiori.view.Config",
                        controller: this
                    }).then(function(oDialog){
                        oView.addDependent(oDialog);
                        return oDialog;
                    });
                }
    
                this._pDialogConfig.then(function(oDialog){
                    oDialog.open();
                }.bind(this));
            },

            onVoltar2: function(){
                this._pDialogConfig.then(function(oDialog){
                    oDialog.close();
                }.bind(this));
            },
            
            SwitchMode: function() {
                var sCurrentTheme = sap.ui.getCore().getConfiguration().getTheme();
                var sNewTheme = (sCurrentTheme === "sap_horizon_dark") ? "sap_horizon" : "sap_horizon_dark";
                this.applyTheme(sNewTheme);
                },
            
              applyTheme: function(sTheme) {
                var oCore = sap.ui.getCore();
                oCore.applyTheme(sTheme);
            
                // Salve o tema escolhido para persistência, se necessário
                // localStorage.setItem("theme", sTheme);
            },

            onManagerViewChange: function(oEvent) {
                var bSwitchState = oEvent.getParameter("state");
                var oToolbar = this.byId("footerBar");

                // Define a visibilidade do toolbar com base no estado do switch
                oToolbar.setVisible(!bSwitchState);
            },

            addMovie: function(oEvent){
                var oButton1 = oEvent.getSource(),
                oView = this.getView();
    
                if (!this._pDialogAdd) {
                    this._pDialogAdd = Fragment.load({
                        id: oView.getId(),
                        name: "locadora.sap.projetolocadorafiori.view.DialogAdd",
                        controller: this
                    }).then(function(oDialog){
                        oView.addDependent(oDialog);
                        return oDialog;
                    });
                }
    
                this._pDialogAdd.then(function(oDialog){
                    oDialog.open();
                }.bind(this));
            },

            onVoltar: function(){
                this._pDialogAdd.then(function(oDialog){
                    oDialog.close();
                }.bind(this));
            },

            onAddItem: function () {
                // Obtenha os valores dos campos de entrada
                var oView = this.getView();
                var Nome      = oView.byId("inputNome").getValue();
                var Categoria = oView.byId("inputCategoria").getValue();
                var Duracao   = oView.byId("inputDuracao").getValue();
                var Idade     = oView.byId("inputIdade").getValue();
                var Stream    = oView.byId("inputStream").getValue();
          
                // Crie o novo item
                var oNewItem = {
                  column1: Nome,
                  column2: Categoria,
                  column3: Duracao,
                  column4: Idade,
                  streamingUrl: Stream,
                  column5: 'Disponível'
                };
          
                // Obtenha o modelo atual e os dados
                var oModel = oView.getModel();
                var aData = oModel.getProperty("/data");
          
                // Adicione o novo item aos dados
                aData.push(oNewItem);
          
                // Atualize o modelo com os novos dados
                oModel.setProperty("/data", aData);

                localStorage.setItem("DadosTabela", JSON.stringify(aData));

                // Limpe os campos de entrada
                oView.byId("inputNome").setValue("");
                oView.byId("inputCategoria").setValue("");
                oView.byId("inputDuracao").setValue("");
                oView.byId("inputIdade").setValue("");
                oView.byId("inputStream").setValue("");
          
                this._pDialogAdd.then(function(oDialog){
                    MessageBox.success("Filme inserído no Catálago com sucesso!");
                    oDialog.close();
                }.bind(this));
            },

            onDeleteItem: function (oEvent) {
                var oTable = this.byId("TabelaControle");
                var aSelectedItems = oTable.getSelectedItems();
                var oModel = this.getView().getModel();
                var aData = oModel.getProperty("/data");

                if (aSelectedItems.length === 0) {
                    MessageBox.warning("Por favor, selecione o filme que desejar excluir da tabela.");
                    return;
                }
                
                aSelectedItems.forEach(function(oItem) {
                    var oContext = oItem.getBindingContext();
                    if (oContext) {
                        var sPath = oContext.getPath();
                        var iIndex = parseInt(sPath.split("/")[2]); // Obtém o índice correto
                        
                        // Remove o item da posição iIndex
                        aData.splice(iIndex, 1);
                    }
                });

                // Atualiza o modelo com os dados modificados
                oModel.setProperty("/data", aData);

                // Salvar os dados no localStorage
                localStorage.setItem("DadosTabela", JSON.stringify(aData));

                // Limpa a seleção na tabela
                oTable.removeSelections();
              },

              onAlugar: function(oEvent) {
                var oSelectedItem = oEvent.getSource().getParent().getParent(); // Obtém o item selecionado na tabela
                var oButton = oEvent.getSource(); // Obtém o botão "Alugar" que foi clicado
                var oItem = oButton.getParent().getParent(); // Obtém o item da tabela onde o botão foi clicado
                var oContext = oItem.getBindingContext(); // Obtém o contexto do item
                var oModel = this.getView().getModel(); // Obtém o modelo da view

                //Variaveis para salvar os dados na memória interna
                var oTable = this.getView().byId("TabelaControle");
                var oModelo = oTable.getModel();
                var aData = oModelo.getProperty("/data");
                
                var oDialog = new Dialog({
                    title: 'Alugar Filme',
                    type: 'Message',
                    content: [
                        new sap.m.Text({ text: 'Selecione o período de aluguel:' }),
                        new sap.m.DatePicker("aluguelDatePicker", { value: "{/aluguelData}" }),
                        new sap.m.Label({ text: 'Seu nome/usuário: ' }),
                        new sap.m.Input("inputUser", { value: "{/Username}", placeholder: 'Insira o seu nome' }),
                    ],
                    beginButton: new Button({
                        text: 'Confirmar',
                        type: 'Success',
                        press: function (oEvent) {
                            var oDatePicker = sap.ui.getCore().byId("aluguelDatePicker");
                            var oName = sap.ui.getCore().byId("inputUser");
                            var oNameValue = oName.getValue();
                            var oDateValue = oDatePicker.getValue();
                            var sStatus = "Alugado até " + oDateValue + " por " + oNameValue;
                            oModel.setProperty(oContext.getPath() + "/column5", sStatus);
                            oButton.setEnabled(false);
                            MessageBox.success("Filme Alugado com sucesso por " + oNameValue);

                            oModel.setProperty("/data", aData);
                            localStorage.setItem("DadosTabela", JSON.stringify(aData));

                            // Limpar os campos de entrada após fechar o dialog
                            sap.ui.getCore().byId("aluguelDatePicker").setValue("");
                            sap.ui.getCore().byId("inputUser").setValue("");

                            oDialog.close();
                        }.bind(this)
                    }),
                    endButton: new Button({
                        text: 'Cancelar',
                        type: 'Negative',
                        press: function () {
                            oDialog.close();
                        }
                    }),
                    afterClose: function() {
                        oDialog.destroy();
                    }
                });
                
                // bindar modelo para o diálogo
                oDialog.setModel(this.getView().getModel());
                oDialog.open();
            },

            onDevolver: function(oEvent){
                var oTable = this.getView().byId("TabelaControle");
                var aSelectedItems = oTable.getSelectedItems();
                var oModel = oTable.getModel();
                var aData = oModel.getProperty("/data");
                var bAlreadyAvailable = false;

                if (aSelectedItems.length === 0) {
                    MessageBox.warning("Por favor, selecione 1 filme para devolver.");
                    return;
                }
                
                aSelectedItems.forEach(function(oItem) {
                    var oContext = oItem.getBindingContext();
                    if (oContext) {
                        var sPath = oContext.getPath();
                        var oData = oModel.getProperty(sPath);

                        if (oData.column5 === "Disponível") {
                            bAlreadyAvailable = true;
                        } else {
                            oModel.setProperty(sPath + "/column5", "Disponível");
                            oModel.setProperty(sPath + "/enabledAlugar", true);
                            oModel.setProperty("/data", aData);
          
                            // Salvar os dados no localStorage
                            localStorage.setItem("DadosTabela", JSON.stringify(aData));
                        }
                    }
                });

                if (bAlreadyAvailable) {
                    MessageBox.warning("Filme selecionado já está disponível para alocação!");
                } else {
                    MessageBox.success("Filme devolvido com sucesso, disponível para alocação!");
                }
    
                oModel.refresh(true);

            },

            sections: function(){
                var oView1 = this.getView();

                var oDialog1 = new sap.m.Dialog({
                    title: "Sessões Disponíveis",
                    type: "Message",
                    content: [
                        new sap.m.List({
                            items: {
                                path: "/days",
                                template: new sap.m.CustomListItem({
                                    content: new sap.m.VBox({
                                        items: [
                                            new sap.m.Text({
                                                text: "{day}",
                                            }).addStyleClass("boldText"),
                                            new sap.m.List({
                                                items: {
                                                    path: "sessions",
                                                    template: new sap.m.CustomListItem({
                                                        content: new sap.m.HBox({
                                                            items: [
                                                                new sap.m.Text({
                                                                    text: "{time}"
                                                                }).addStyleClass("horarioText"),
                                                                new sap.m.Text({
                                                                    text: " - "
                                                                }).addStyleClass("sapUiTinyMarginEnd"),
                                                                new sap.m.Text({
                                                                    text: "{type}"
                                                                }).addStyleClass("boldText")
                                                            ]
                                                        })
                                                    }).addCustomData(new sap.ui.core.CustomData({
                                                        key: "templateShareable",
                                                        value: true
                                                    }))
                                                }
                                            })
                                        ]
                                    })
                                }).addCustomData(new sap.ui.core.CustomData({
                                    key: "templateShareable",
                                    value: true
                                }))
                            }
                        })
                    ],
                    endButton: new sap.m.Button({
                        text: "Fechar",
                        press: function () {
                            oDialog1.close();
                        }
                    }),
                    afterClose: function () {
                        oDialog1.destroy();
                    }
                });
            
                oView1.addDependent(oDialog1);
                oDialog1.open();
            },

            more0: function(){
                MessageBox.information("'Interestelar' é um épico de ficção científica dirigido por Christopher Nolan. O filme narra a jornada de um grupo de exploradores que usam um buraco de minhoca recém-descoberto para ultrapassar os limites da viagem espacial humana e explorar planetas distantes em busca de um novo lar para a humanidade. Com uma mistura de ciência e emoção, 'Interestelar' explora temas complexos como o tempo, a gravidade e os laços familiares em um cenário de aventura interplanetária.",{
                    title: "Sinopse de Interestelar"
                });
            },

            more1: function(){
                MessageBox.information("'Pulp Fiction' é um filme dirigido por Quentin Tarantino que entrelaça várias histórias de criminosos em Los Angeles. Com diálogos marcantes, reviravoltas inesperadas e uma trilha sonora icônica, o filme se tornou um clássico do cinema independente dos anos 90.",{
                    title: "Sinopse de Pulp Fiction"
                });
            },

            more2: function(){
                MessageBox.information("Em 'Matrix', dirigido pelos irmãos Wachowski, um programador de computador descobre que a realidade que conhece é uma simulação controlada por máquinas inteligentes. Ele é despertado para a verdadeira realidade e se junta a uma resistência para lutar contra as máquinas que dominam a humanidade.",{
                    title: "Sinopse de Matrix"
                });
            },

            more3: function(){
                MessageBox.information("Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.", {
                    title: "Sinopse de Vingadores: Ultimato"
                });
            },

            more4: function(){
                MessageBox.information("'Bastardos Inglórios' é um filme de guerra e drama dirigido por Quentin Tarantino. A história se passa durante a Segunda Guerra Mundial e segue dois enredos principais que eventualmente se convergem. O primeiro enredo segue um grupo de soldados judeus americanos liderados pelo Tenente Aldo Raine (Brad Pitt), conhecidos como 'Os Bastardos'. Eles são enviados à França ocupada pelos nazistas para espalhar o medo entre os soldados alemães, matando-os brutalmente e escalpelando-os. Paralelamente, a história de Shosanna Dreyfus (Mélanie Laurent), uma jovem judia francesa que sobrevive ao massacre de sua família pelas mãos do Coronel Hans Landa (Christoph Waltz), se desenrola. Shosanna planeja vingança contra os nazistas e acaba dirigindo um cinema em Paris, onde vê uma oportunidade de realizar sua vingança quando um evento de propaganda nazista é marcado para ocorrer em seu cinema. O filme culmina com a convergência dessas duas histórias em uma trama cheia de reviravoltas, ação e a assinatura estilística de Tarantino.", {
                    title: "Sinopse de Bastardos Inglórios"
                });
            },

            more5: function(){
                MessageBox.information("Dom Cobb (Leonardo DiCaprio) é um habilidoso ladrão, especializado em extrair segredos do subconsciente durante o estado de sono das pessoas, quando a mente está mais vulnerável. Quando é oferecida a ele a chance de ter seu histórico criminoso apagado como pagamento por uma tarefa aparentemente impossível - implantar uma ideia na mente de alguém (inception) - Cobb e sua equipe enfrentam desafios que testam os limites de sua própria realidade e sua lealdade uns aos outros.'Inception' é um filme de ficção científica e suspense dirigido por Christopher Nolan, lançado em 2010.", {
                    title: "Sinopse de Inception (A Origem)"
                });
            },

            more6: function(){
                MessageBox.information("'Batman Begins' é um filme de super-herói dirigido por Christopher Nolan, lançado em 2005. Ele conta a história de Bruce Wayne, interpretado por Christian Bale, desde sua infância marcada pelo assassinato de seus pais até sua jornada para se tornar o icônico vigilante de Gotham City, Batman. O filme explora como Wayne enfrenta seus medos e utiliza seu treinamento com a Liga das Sombras, liderada por Ra's al Ghul (Liam Neeson), para se transformar no símbolo de justiça que Gotham precisa. Com uma abordagem sombria e realista, 'Batman Begins' reinventou a franquia do Batman no cinema, estabelecendo um tom mais maduro e psicológico para as adaptações de quadrinhos.", {
                    title: "Sinopse de Batman: Begins"
                });
            },

            more7: function(){
                MessageBox.information("'Capitão América: O Primeiro Vingador' é um filme de super-herói lançado em 2011, dirigido por Joe Johnston. A história se passa durante a Segunda Guerra Mundial e segue Steve Rogers, um jovem franzino que deseja servir ao seu país na luta contra os nazistas. Ele se voluntaria para um experimento militar que o transforma no supersoldado conhecido como Capitão América. Rogers, então, se junta à resistência contra a organização maligna Hydra, liderada pelo traiçoeiro Red Skull. O filme explora temas de patriotismo, heroísmo e sacrifício, destacando o nascimento de um dos heróis mais emblemáticos da Marvel Comics.",{
                    title: "Sinopse de Capitão América: O Primeiro Vingador"
                });
            },

            more8: function(){
                MessageBox.information("Com um salto temporal, Riley se encontra mais velha, passando pela tão temida adolescência. Junto com o amadurecimento, a sala de controle também está passando por uma adaptação para dar lugar a algo totalmente inesperado: novas emoções. As já conhecidas, Alegria, Raiva, Medo, Nojinho e Tristeza não têm certeza de como se sentir quando novos inquilinos chegam ao local.",{
                    title: "Sinopse de Divertida Mente (Inside Out)"
                });
            },

            onFilterDialog: function (oEvent) {
                var oButton1 = oEvent.getSource(),
                oView = this.getView();
    
                if (!this._pDialogFilter) {
                    this._pDialogFilter = Fragment.load({
                        id: oView.getId(),
                        name: "locadora.sap.projetolocadorafiori.view.Sort",
                        controller: this
                    }).then(function(oDialog){
                        oView.addDependent(oDialog);
                        return oDialog;
                    });
                }
    
                this._pDialogFilter.then(function(oDialog){
                    oDialog.open();
                }.bind(this));
            },

            onFilterConfirm: function () {
                var oView = this.getView();
                var oSelect = oView.byId("selectCategory"); // Corrigido para referenciar corretamente o seletor de categoria
                var sSelectedCategory = oSelect.getSelectedKey();
                var oTable = this.byId("TabelaControle");
                var oBinding = oTable.getBinding("items");
                var oFilter;
            
                if (sSelectedCategory) {
                    oFilter = new sap.ui.model.Filter("column2", sap.ui.model.FilterOperator.EQ, sSelectedCategory);
                } else {
                    oFilter = null;
                }
            
                oBinding.filter(oFilter);

                // Atualiza o texto do filtro aplicado
                this.updateCurrentFilterText(sSelectedCategory);

                // Limpa a seleção do filtro ao fechar o diálogo
                 oSelect.setSelectedKey(null);

                this._pDialogFilter.then(function(oDialog){
                    oDialog.close();
                }.bind(this));
            },
            
            onVoltar3: function(){
                this._pDialogFilter.then(function(oDialog){
                    oDialog.close();
                }.bind(this));
            },

            onRemoveFilter: function () {
                var oView = this.getView();
                var oSelect = oView.byId("selectCategory"); // Corrigido para referenciar corretamente o seletor de categoria
                var sSelectedCategory = oSelect.getSelectedKey();
                var oTable = this.byId("TabelaControle");
                var oBinding = oTable.getBinding("items");
                oBinding.filter(null);
                this.updateCurrentFilterText(sSelectedCategory);
                this._pDialogFilter.then(function(oDialog){
                    oDialog.close();
                }.bind(this));
            },

            updateCurrentFilterText: function (sSelectedCategory) {
                var oView = this.getView();
                var oText = oView.byId("currentFilter");
                var sText = "Filtro: " + (sSelectedCategory ? sSelectedCategory : "");
                oText.setText(sText);
            },


            onTicketsPress: function (oEvent) {
                var oSessionSelect = new sap.m.Select("sessionSelect", {
                    items: [
                        // Segunda-feira
                        new sap.ui.core.Item({ key: "segunda-14h-legendado", text: "Segunda-feira - 14:00 - Legendado" }),
                        new sap.ui.core.Item({ key: "segunda-16h-dublado", text: "Segunda-feira - 16:00 - Dublado" }),
                        new sap.ui.core.Item({ key: "segunda-18h-3D-IMAX-dublado", text: "Segunda-feira - 18:00 - 3D IMAX - Dublado" }),
                        
                        // Terça-feira
                        new sap.ui.core.Item({ key: "terca-14h-dublado", text: "Terça-feira - 14:00 - Dublado" }),
                        new sap.ui.core.Item({ key: "terca-19h-legendado", text: "Terça-feira - 19:00 - Legendado" }),
                        new sap.ui.core.Item({ key: "terca-22h-3D-IMAX-dublado", text: "Terça-feira - 22:00 - 3D IMAX - Dublado" }),
                        
                        // Quarta-feira
                        new sap.ui.core.Item({ key: "quarta-14h-dublado", text: "Quarta-feira - 14:00 - Dublado" }),
                        new sap.ui.core.Item({ key: "quarta-16h-legendado", text: "Quarta-feira - 16:00 - Legendado" }),
                        new sap.ui.core.Item({ key: "quarta-20h-3D-IMAX-dublado", text: "Quarta-feira - 20:00 - 3D IMAX - Dublado" }),
                        
                        // Quinta-feira
                        new sap.ui.core.Item({ key: "quinta-14h-dublado", text: "Quinta-feira - 14:00 - Dublado" }),
                        new sap.ui.core.Item({ key: "quinta-19h-legendado", text: "Quinta-feira - 19:00 - Legendado" }),
                        new sap.ui.core.Item({ key: "quinta-22h-3D-IMAX-dublado", text: "Quinta-feira - 22:00 - 3D IMAX - Dublado" }),
                        
                        // Sexta-feira
                        new sap.ui.core.Item({ key: "sexta-16h-dublado", text: "Sexta-feira - 16:00 - Dublado" }),
                        new sap.ui.core.Item({ key: "sexta-20h-legendado", text: "Sexta-feira - 20:00 - Legendado" }),
                        new sap.ui.core.Item({ key: "sexta-22h-3D-IMAX-dublado", text: "Sexta-feira - 22:00 - 3D IMAX - Dublado" }),
                        
                        // Sábado
                        new sap.ui.core.Item({ key: "sabado-14h-dublado", text: "Sábado - 14:00 - Dublado" }),
                        new sap.ui.core.Item({ key: "sabado-16h-dublado", text: "Sábado - 16:00 - Dublado" }),
                        new sap.ui.core.Item({ key: "sabado-18h-legendado", text: "Sábado - 18:00 - Legendado" }),
                        new sap.ui.core.Item({ key: "sabado-20h-legendado", text: "Sábado - 20:00 - Legendado" }),
                        new sap.ui.core.Item({ key: "sabado-22h-3D-IMAX-dublado", text: "Sábado - 22:00 - 3D IMAX - Dublado" }),
                        new sap.ui.core.Item({ key: "sabado-23h30-3D-IMAX-legendado", text: "Sábado - 23:30 - 3D IMAX - Legendado" }),
                        
                        // Domingo
                        new sap.ui.core.Item({ key: "domingo-14h-dublado", text: "Domingo - 14:00 - Dublado" }),
                        new sap.ui.core.Item({ key: "domingo-16h-dublado", text: "Domingo - 16:00 - Dublado" }),
                        new sap.ui.core.Item({ key: "domingo-18h-legendado", text: "Domingo - 18:00 - Legendado" }),
                        new sap.ui.core.Item({ key: "domingo-20h-legendado", text: "Domingo - 20:00 - Legendado" }),
                        new sap.ui.core.Item({ key: "domingo-22h-3D-IMAX-dublado", text: "Domingo - 22:00 - 3D IMAX - Dublado" }),
                        new sap.ui.core.Item({ key: "domingo-23h30-3D-IMAX-legendado", text: "Domingo - 23:30 - 3D IMAX - Legendado" })
                    ]
                });
            
                var oDialog = new sap.m.Dialog("ticketDialog", {
                    title: "Comprar Ingressos",
                    content: new VerticalLayout({
                        width: "100%",
                        content: [
                            new sap.m.Label({ text: "Selecione a Sessão:" }),
                            oSessionSelect,
                            new sap.m.Label({ text: "Quantidade:" }),
                            new sap.m.Input("ticketQuantity", { type: "Number", value: 1, width: "50px", textAlign: sap.ui.core.TextAlign.Center }),
                            new sap.m.Label({ text: "Tipo de Ingresso:" }),
                            new sap.m.Select("ticketType", {
                                items: [
                                    new sap.ui.core.Item({ key: "meia", text: "Meia" }),
                                    new sap.ui.core.Item({ key: "inteira", text: "Inteira" })
                                ]
                            })
                        ]
                    }).addStyleClass("sapUiContentPadding"),
                    beginButton: new sap.m.Button({
                        text: "Próximo",
                        press: this.onSelectSeats.bind(this)
                    }),
                    endButton: new sap.m.Button({
                        text: "Cancelar",
                        press: function () {
                            oDialog.close();
                        }
                    }),
                    afterClose: function () {
                        oDialog.destroy();
                    }
                });
            
                this.getView().addDependent(oDialog);
                oDialog.open();
            },
            
            onSelectSeats: function () {
                var oDialog = sap.ui.getCore().byId("ticketDialog");
                if (!oDialog) {
                    return;
                }
            
                var oContent = oDialog.getContent()[0].getContent();
                var oSessionSelect = sap.ui.getCore().byId("sessionSelect");
                var oQuantityInput = sap.ui.getCore().byId("ticketQuantity");
                var oTypeSelect = sap.ui.getCore().byId("ticketType");
            
                var oSession = oSessionSelect.getSelectedItem();
                var oQuantity = parseInt(oQuantityInput.getValue(), 10);
                var oType = oTypeSelect.getSelectedKey();
            
                // Close the current dialog
                oDialog.close();
            
                this.selectedSeats = [];
                this.seatCount = oQuantity;
            
                // Create seat map
                var oSeatMap = new VerticalLayout({
                    layoutData: new sap.ui.layout.GridData({ span: "L12 M12 S12" }),
                    width: "100%"
                });
            
                for (var i = 0; i < 5; i++) {
                    var oRow = new HorizontalLayout({
                        layoutData: new sap.ui.layout.GridData({ span: "L12 M12 S12" }),
                        width: "100%",
                        justifyContent: "Center"
                    });
                    for (var j = 0; j < 10; j++) {
                        var oButton = new sap.m.Button({
                            text: (i * 10 + j + 1).toString(),
                            press: this.onSeatSelect.bind(this),
                            width: "auto",
                            layoutData: new sap.ui.layout.GridData({ span: "L1 M1 S1" })
                        });
                        oRow.addContent(oButton);
                    }
                    oSeatMap.addContent(oRow);
                }
            
                // Open the seat selection dialog
                var oSeatDialog = new sap.m.Dialog({
                    title: "Selecionar Assentos",
                    content: new VerticalLayout({
                        content: [
                            new sap.m.Text({ text: "Sessão selecionada: " + oSession.getText() }),
                            new sap.m.Text({ text: "Selecione seus assentos:" }),
                            oSeatMap,
                            new sap.m.Text({ text: "Tela do Cinema", textAlign: "Center", width: "100%" })
                        ]
                    }),
                    beginButton: new sap.m.Button({
                        text: "Comprar",
                        press: function () {
                            if (this.selectedSeats.length === this.seatCount) {
                                // Logic to purchase tickets
                               sap.m.MessageToast.show("Ingressos comprados!");
                                oSeatDialog.close();
                            } else {
                                sap.m.MessageToast.show("Selecione todos os assentos.");
                            }
                        }.bind(this)
                    }),
                    endButton: new sap.m.Button({
                        text: "Cancelar",
                        press: function () {
                            oSeatDialog.close();
                        }
                    }),
                    afterClose: function () {
                        oSeatDialog.destroy();
                    }
                });
            
                this.getView().addDependent(oSeatDialog);
                oSeatDialog.open();
            },
            
            onSeatSelect: function (oEvent) {
                var oButton = oEvent.getSource();
                var bSelected = oButton.getType() === "Accept";
            
                if (bSelected) {
                    oButton.setType("Default");
                    var index = this.selectedSeats.indexOf(oButton);
                    if (index > -1) {
                        this.selectedSeats.splice(index, 1);
                    }
                } else {
                    if (this.selectedSeats.length < this.seatCount) {
                        oButton.setType("Accept");
                        this.selectedSeats.push(oButton);
                    } else {
                        sap.m.MessageToast.show("Você já selecionou todos os assentos.");
                    }
                }
            },

            onStream: function(oEvent) {
                var sUrl = oEvent.getSource().data("streamingUrl");
                if (sUrl) {
                    window.open(sUrl, "_blank");
                } else {
                    sap.m.MessageToast.show("Link de streaming não disponível.");
                }
                    window.open("sUrl", "_blank");
            },

            onNavButtonPress1: function() {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("novaPagina");  // 'novaPagina' deve ser o nome da rota definida no manifest.json
            },

            onNavButtonPress2: function() {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("novaPagina2");  // 'novaPagina' deve ser o nome da rota definida no manifest.json
            },

            onNavButtonPress3: function() {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("novaPagina3");  // 'novaPagina' deve ser o nome da rota definida no manifest.json
            },

            onButtonPress: function(oEvent) {
                var oButton = oEvent.getSource();
                this.byId("actionSheet").openBy(oButton);
            },

            onItemPress: function (oEvent) {
                var oSelectedItem = oEvent.getParameter("listItem");  // Obtém o item da linha clicada
                var oContext = oSelectedItem.getBindingContext();      // Obtém o contexto de binding da linha
    
                // Cria um modelo temporário com os dados da linha selecionada
                var oModel = new JSONModel(oContext.getObject());
                this.getView().setModel(oModel, "selectedRow");
    
                // Abre o Dialog
                if (!this.byId("dialogDetails")) {
                    this._pDialogDetail = Fragment.load({
                        id: oView.getId(),
                        name: "locadora.sap.projetolocadorafiori.view.DialogDetails",
                        controller: this
                    }).then(function(oDialog){
                        oView.addDependent(oDialog);
                        return oDialog;
                    });
                } else {
                    this.byId("dialogDetails").open();
                }
            },
    
            onCloseDialog: function () {
                this.byId("dialogDetails").close();
            }

        });
    });
