sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",

], function(Controller, Fragment) {
    "use strict";

    return Controller.extend("locadora.sap.projetolocadorafiori.controller.NovaPagina2", {
        onInit: function(){
            this.getView().addStyleClass("fullScreenPage");
            this.applyTheme("sap_horizon_dark");

            var mangas10 = [
                { title: "One Piece #109", author: "Eiichiro Oda", genre: "Ação/Aventura", cover: "https://preview.redd.it/volume-109-unfinished-cover-v0-xar9cjicvh7d1.png?auto=webp&s=9383d2d8072ee5930b9a0ca07301e789b7aaf905", sales: "268,387 / 1,079,928" },
                { title: "Jujutsu Kaisen #27", author: "Gege Akutami", genre: "Ação/Sobrenatural", cover: "https://pbs.twimg.com/media/GPaa0-aaEAAmRz7?format=jpg&name=large", sales: "200,743 / 782,812" },
                { title: "Kaijuu 8-gou #13", author: "Naoya Matsumoto", genre: "Ação/Ficção Científica", cover: "https://comicvine.gamespot.com/a/uploads/scale_small/11159/111592944/9320955-8449742686-97840.jpg", sales: "90,449 / 291,532" },
                { title: "Watashi no Shiawase na Kekkon #5", author: "Akumi Agitogi", genre: "Romance", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx8Smn9E3pJcOAonLpU29dQoEqp-SkTKK8xQ&s", sales: "80,710" },
                { title: "One Punch-man #31", author: "ONE", genre: "Ação/Comédia", cover: "https://preview.redd.it/one-punch-man-volume-31-cover-v0-mb1nu1byjv8d1.jpeg?auto=webp&s=46e52070ec344508a052ef2d009a13048f78364e", sales: "56,959 / 189,414" },
                { title: "Yubisaki to Renren #11", author: "Suu Morishita", genre: "Romance", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfIZ8_zrgmJ3zrS71V2tP17To2SBUlBLhzw&s", sales: "51,659" },
                { title: "Watashi no Shiawase na Kekkon #5 Limited Edition", author: "Akumi Agitogi", genre: "Romance", cover: "https://i.ebayimg.com/images/g/7SQAAOSwC-NhboVy/s-l400.jpg", sales: "45,743" },
                { title: "Kaoru Hana wa Rin to Saku #13", author: "Non Tamashima", genre: "Romance/Escolar", cover: "", sales: "37,919" },
                { title: "Nigatsu no Shousha -Zettai Goukaku no Kyoushitsu- #21", author: "Yuki Tabata", genre: "Drama/Escolar", cover: "", sales: "30,733" },
                { title: "Uzaki-chan wa Asobitai! #12", author: "Take", genre: "Comédia/Romance", cover: "", sales: "30,111 / 31,598" }
            ];
            
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData(mangas10);
            this.getView().byId("bookList").setModel(oModel);
            this.getView().byId("bookList").bindItems({
                path: "/",
                template: new sap.m.StandardListItem({
                    title: "{title}",
                    description: "{author} - 2024 - Vendas: {sales}",
                    icon: "{cover}",
                    type: "Navigation",
                    press: "onBookPress"
                })
            });
        },

        onNavBack: function() {
            window.history.go(-1);
        },

        onConfig: function(oEvent){
            var oButton1 = oEvent.getSource(),
            oView = this.getView();

            if (!this._pDialogConfig) {
                 this._pDialogConfig = Fragment.load({
                    id: oView.getId(),
                    name: "locadora.sap.projetolocadorafiori.view3.Config",
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

        },

        onBookPress: function(oEvent) {
            // Implementar lógica para mostrar detalhes do livro aqui
            var oItem = oEvent.getSource();
            sap.m.MessageToast.show("Você clicou no livro: " + oItem.getTitle());
        },

        onCategoryPress1: function() {
            var mangas = [
                { title: "Naruto", author: "Masashi Kishimoto", genre: "Ação/Aventura", cover: "https://i.pinimg.com/474x/a5/ac/65/a5ac65849901c6294fbc3f0c46d1fa94.jpg", year: "1999" },
                { title: "One Piece", author: "Eiichiro Oda", genre: "Ação/Aventura", cover: "https://comicvine.gamespot.com/a/uploads/scale_small/11161/111610434/9002817-6125859241-97840.jpg", year: "1997" },
                { title: "Attack on Titan", author: "Hajime Isayama", genre: "Ação/Fantasia", cover: "https://m.media-amazon.com/images/I/61JOgQ4DbAL._AC_UF894,1000_QL80_.jpg", year: "2009" },
                { title: "Death Note", author: "Tsugumi Ohba", genre: "Suspense/Mistério", cover: "path/to/deathnote.jpg", year: "2003" },
                { title: "Dragon Ball", author: "Akira Toriyama", genre: "Ação/Aventura", cover: "path/to/dragonball.jpg", year: "1984" },
                { title: "My Hero Academia", author: "Kōhei Horikoshi", genre: "Ação/Aventura", cover: "path/to/myheroacademia.jpg", year: "2014" },
                { title: "Fullmetal Alchemist", author: "Hiromu Arakawa", genre: "Ação/Fantasia", cover: "path/to/fullmetalalchemist.jpg", year: "2001" },
                { title: "Tokyo Ghoul", author: "Sui Ishida", genre: "Terror/Fantasia", cover: "path/to/tokyoghoul.jpg", year: "2011" },
                { title: "Berserk", author: "Kentaro Miura", genre: "Ação/Dark Fantasy", cover: "path/to/berserk.jpg", year: "1989" },
                { title: "One Punch Man", author: "ONE", genre: "Ação/Comédia", cover: "path/to/onepunchman.jpg", year: "2012" }
            ];

            // Criação do modelo de dados
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData(mangas);

            // Criação da lista de mangás
            var oList = new sap.m.List({
                items: {
                    path: "/",
                    template: new sap.m.StandardListItem({
                        title: "{title}",
                        description: "{author} - {year}",
                        icon: "{cover}",
                        type: "Active"
                    })
                }
            });
            oList.setModel(oModel);

            // Criação do Dialog
            var oDialogManga = new sap.m.Dialog({
                title: "Lista de Mangás",
                content: oList,
                beginButton: new sap.m.Button({
                    text: "Fechar",
                    press: function () {
                        oDialogManga.close();
                    }
                })
            });

            // Abrir o Dialog
            oDialogManga.open();
        },

        onCategoryPress2: function() {
            var ficcao = [
                { title: "1984", author: "George Orwell", genre: "Ficção", cover: "images/1984.jpg", year: "1949" },
                { title: "Fahrenheit 451", author: "Ray Bradbury", genre: "Ficção", cover: "images/fahrenheit451.jpg", year: "1953" },
                { title: "Duna", author: "Frank Herbert", genre: "Ficção Científica", cover: "images/duna.jpg", year: "1965" },
                { title: "Neuromancer", author: "William Gibson", genre: "Ficção Científica", cover: "images/neuromancer.jpg", year: "1984" },
                { title: "O Conto da Aia", author: "Margaret Atwood", genre: "Ficção Distópica", cover: "images/contodaia.jpg", year: "1985" },
                { title: "O Homem do Castelo Alto", author: "Philip K. Dick", genre: "Ficção Científica", cover: "images/homemdocasteloalto.jpg", year: "1962" },
                { title: "A Guerra dos Mundos", author: "H.G. Wells", genre: "Ficção Científica", cover: "images/guerradosmundos.jpg", year: "1898" },
                { title: "Snow Crash", author: "Neal Stephenson", genre: "Ficção Científica", cover: "images/snowcrash.jpg", year: "1992" },
                { title: "A Máquina do Tempo", author: "H.G. Wells", genre: "Ficção Científica", cover: "images/maquinadotempo.jpg", year: "1895" },
                { title: "O Senhor das Moscas", author: "William Golding", genre: "Ficção", cover: "images/senhordasmoscas.jpg", year: "1954" }
            ];

            // Criação do modelo de dados
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData(ficcao);

            // Criação da lista de mangás
            var oList = new sap.m.List({
                items: {
                    path: "/",
                    template: new sap.m.StandardListItem({
                        title: "{title}",
                        description: "{author} - {year}",
                        icon: "{cover}",
                        type: "Active"
                    })
                }
            });
            oList.setModel(oModel);

            // Criação do Dialog
            var oDialogFiccao = new sap.m.Dialog({
                title: "Livros de Ficção",
                content: oList,
                beginButton: new sap.m.Button({
                    text: "Fechar",
                    press: function () {
                        oDialogFiccao.close();
                    }
                })
            });

            // Abrir o Dialog
            oDialogFiccao.open();
        },

        onCategoryPress3: function() {
            var terror = [
                { title: "O Iluminado", author: "Stephen King", genre: "Terror", cover: "images/iluminado.jpg", year: "1977" },
                { title: "Drácula", author: "Bram Stoker", genre: "Terror", cover: "images/dracula.jpg", year: "1897" },
                { title: "Frankenstein", author: "Mary Shelley", genre: "Terror/Gótico", cover: "images/frankenstein.jpg", year: "1818" },
                { title: "IT: A Coisa", author: "Stephen King", genre: "Terror", cover: "images/itacoisa.jpg", year: "1986" },
                { title: "O Exorcista", author: "William Peter Blatty", genre: "Terror", cover: "images/exorcista.jpg", year: "1971" },
                { title: "O Chamado de Cthulhu", author: "H.P. Lovecraft", genre: "Terror/Cosmicismo", cover: "images/cthulhu.jpg", year: "1928" },
                { title: "A Assombração da Casa da Colina", author: "Shirley Jackson", genre: "Terror", cover: "images/assombracaodacasa.jpg", year: "1959" },
                { title: "O Horla", author: "Guy de Maupassant", genre: "Terror", cover: "images/horla.jpg", year: "1887" },
                { title: "O Cemitério", author: "Stephen King", genre: "Terror", cover: "images/cemiterio.jpg", year: "1983" },
                { title: "Hell House", author: "Richard Matheson", genre: "Terror", cover: "images/hellhouse.jpg", year: "1971" }
            ];

            // Criação do modelo de dados
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData(terror);

            // Criação da lista de mangás
            var oList = new sap.m.List({
                items: {
                    path: "/",
                    template: new sap.m.StandardListItem({
                        title: "{title}",
                        description: "{author} - {year}",
                        icon: "{cover}",
                        type: "Active"
                    })
                }
            });
            oList.setModel(oModel);

            // Criação do Dialog
            var oDialogTerror = new sap.m.Dialog({
                title: "Livros de Terror",
                content: oList,
                beginButton: new sap.m.Button({
                    text: "Fechar",
                    press: function () {
                        oDialogTerror.close();
                    }
                })
            });

            // Abrir o Dialog
            oDialogTerror.open();
        },

        onCategoryPress4: function() {
            var Romance = [
                { title: "Orgulho e Preconceito", author: "Jane Austen", genre: "Romance", cover: "images/orgulhoepreconceito.jpg", year: "1813" },
                { title: "O Morro dos Ventos Uivantes", author: "Emily Brontë", genre: "Romance/Gótico", cover: "images/morroventosuivantes.jpg", year: "1847" },
                { title: "Jane Eyre", author: "Charlotte Brontë", genre: "Romance", cover: "images/janeeyre.jpg", year: "1847" },
                { title: "Anna Kariênina", author: "Liev Tolstói", genre: "Romance", cover: "images/annakarienina.jpg", year: "1877" },
                { title: "O Grande Gatsby", author: "F. Scott Fitzgerald", genre: "Romance", cover: "images/grandegatsby.jpg", year: "1925" },
                { title: "Razão e Sensibilidade", author: "Jane Austen", genre: "Romance", cover: "images/razaoesensibilidade.jpg", year: "1811" },
                { title: "E o Vento Levou", author: "Margaret Mitchell", genre: "Romance", cover: "images/ventolevou.jpg", year: "1936" },
                { title: "A Menina que Roubava Livros", author: "Markus Zusak", genre: "Romance/Histórico", cover: "images/meninaqueroubavalivros.jpg", year: "2005" },
                { title: "Romeu e Julieta", author: "William Shakespeare", genre: "Romance/Tragédia", cover: "images/romeuejulieta.jpg", year: "1597" },
                { title: "Um Amor para Recordar", author: "Nicholas Sparks", genre: "Romance", cover: "images/amorpararecordar.jpg", year: "1999" }
            ];

            // Criação do modelo de dados
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData(Romance);

            // Criação da lista de mangás
            var oList = new sap.m.List({
                items: {
                    path: "/",
                    template: new sap.m.StandardListItem({
                        title: "{title}",
                        description: "{author} - {year}",
                        icon: "{cover}",
                        type: "Active"
                    })
                }
            });
            oList.setModel(oModel);

            // Criação do Dialog
            var oDialogRomance = new sap.m.Dialog({
                title: "Livros de Romance",
                content: oList,
                beginButton: new sap.m.Button({
                    text: "Fechar",
                    press: function () {
                        oDialogRomance.close();
                    }
                })
            });

            // Abrir o Dialog
            oDialogRomance.open();
        },

        onCategoryPress5: function() {
            var literatura = [
                { title: "Dom Quixote", author: "Miguel de Cervantes", genre: "Literatura Clássica", cover: "images/domquixote.jpg", year: "1605" },
                { title: "Moby Dick", author: "Herman Melville", genre: "Literatura Clássica", cover: "images/mobydick.jpg", year: "1851" },
                { title: "A Odisséia", author: "Homero", genre: "Literatura Clássica", cover: "images/odisseia.jpg", year: "Século VIII a.C." },
                { title: "Crime e Castigo", author: "Fiódor Dostoiévski", genre: "Literatura Clássica", cover: "images/crimeecastigo.jpg", year: "1866" },
                { title: "Os Miseráveis", author: "Victor Hugo", genre: "Literatura Clássica", cover: "images/miseraveis.jpg", year: "1862" },
                { title: "Orgulho e Preconceito", author: "Jane Austen", genre: "Literatura Clássica", cover: "images/orgulhoepreconceito.jpg", year: "1813" },
                { title: "O Apanhador no Campo de Centeio", author: "J.D. Salinger", genre: "Literatura Clássica", cover: "images/apanhadornocampodecenteio.jpg", year: "1951" },
                { title: "Guerra e Paz", author: "Liev Tolstói", genre: "Literatura Clássica", cover: "images/guerrapaz.jpg", year: "1869" },
                { title: "O Sol é Para Todos", author: "Harper Lee", genre: "Literatura Clássica", cover: "images/soleparatodos.jpg", year: "1960" },
                { title: "O Grande Gatsby", author: "F. Scott Fitzgerald", genre: "Literatura Clássica", cover: "images/grandegatsby.jpg", year: "1925" }
            ];

            // Criação do modelo de dados
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData(literatura);

            // Criação da lista de mangás
            var oList = new sap.m.List({
                items: {
                    path: "/",
                    template: new sap.m.StandardListItem({
                        title: "{title}",
                        description: "{author} - {year}",
                        icon: "{cover}",
                        type: "Active"
                    })
                }
            });
            oList.setModel(oModel);

            // Criação do Dialog
            var oDialogLiteratura = new sap.m.Dialog({
                title: "Livros de Literatura",
                content: oList,
                beginButton: new sap.m.Button({
                    text: "Fechar",
                    press: function () {
                        oDialogLiteratura.close();
                    }
                })
            });

            // Abrir o Dialog
            oDialogLiteratura.open();
        },

        onCategoryPress6: function() {
            var hqs = [
                { title: "Watchmen", author: "Alan Moore", genre: "Super-Heróis", cover: "https://m.media-amazon.com/images/I/71ztkXHWZaL._AC_UF1000,1000_QL80_.jpg", year: "1986", publisher: "DC Comics" },
                { title: "The Dark Knight Returns", author: "Frank Miller", genre: "Super-Heróis", cover: "https://m.media-amazon.com/images/I/4101zqrFe9L.jpg", year: "1986", publisher: "DC Comics" },
                { title: "The Infinity Gauntlet", author: "Jim Starlin", genre: "Super-Heróis", cover: "images/infinitygauntlet.jpg", year: "1991", publisher: "Marvel" },
                { title: "Batman: Year One", author: "Frank Miller", genre: "Super-Heróis", cover: "images/batmanyearone.jpg", year: "1987", publisher: "DC Comics" },
                { title: "Spider-Man: Blue", author: "Jeph Loeb", genre: "Super-Heróis", cover: "images/spidermanblue.jpg", year: "2002", publisher: "Marvel" },
                { title: "Kingdom Come", author: "Mark Waid", genre: "Super-Heróis", cover: "images/kingdomcome.jpg", year: "1996", publisher: "DC Comics" },
                { title: "Civil War", author: "Mark Millar", genre: "Super-Heróis", cover: "images/civilwar.jpg", year: "2006", publisher: "Marvel" },
                { title: "All-Star Superman", author: "Grant Morrison", genre: "Super-Heróis", cover: "images/allstarsuperman.jpg", year: "2005", publisher: "DC Comics" },
                { title: "The Killing Joke", author: "Alan Moore", genre: "Super-Heróis", cover: "images/killingjoke.jpg", year: "1988", publisher: "DC Comics" },
                { title: "X-Men: Days of Future Past", author: "Chris Claremont", genre: "Super-Heróis", cover: "images/daysoffuturepast.jpg", year: "1981", publisher: "Marvel" }
            ];

            // Criação do modelo de dados
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData(hqs);

            // Criação da lista de mangás
            var oList = new sap.m.List({
                items: {
                    path: "/",
                    template: new sap.m.StandardListItem({
                        title: "{title}",
                        description: "{author} - {year}",
                        icon: "{cover}",
                        type: "Active"
                    })
                }
            });
            oList.setModel(oModel);

            // Criação do Dialog
            var oDialogHQ = new sap.m.Dialog({
                title: "Lista de HQs",
                content: oList,
                beginButton: new sap.m.Button({
                    text: "Fechar",
                    press: function () {
                        oDialogHQ.close();
                    }
                })
            });

            // Abrir o Dialog
            oDialogHQ.open();
        },

        onCategoryPress7: function() {
            var biografia = [
                { title: "Scar Tissue", author: "Anthony Kiedis", genre: "Biografia", cover: "https://m.media-amazon.com/images/I/71ElBpqB2PL._AC_UF1000,1000_QL80_.jpg", year: "2004" },
                { title: "Life", author: "Keith Richards", genre: "Biografia", cover: "images/life.jpg", year: "2010" },
                { title: "Just Kids", author: "Patti Smith", genre: "Biografia", cover: "images/justkids.jpg", year: "2010" },
                { title: "Born to Run", author: "Bruce Springsteen", genre: "Biografia", cover: "images/borntorun.jpg", year: "2016" },
                { title: "Chronicles: Volume One", author: "Bob Dylan", genre: "Biografia", cover: "images/chronicles.jpg", year: "2004" },
                { title: "The Dirt: Confessions of the World's Most Notorious Rock Band", author: "Mötley Crüe", genre: "Biografia", cover: "images/thedirt.jpg", year: "2001" },
                { title: "I Am Ozzy", author: "Ozzy Osbourne", genre: "Biografia", cover: "images/iamozzy.jpg", year: "2009" },
                { title: "Heavier Than Heaven", author: "Charles R. Cross", genre: "Biografia", cover: "https://m.media-amazon.com/images/I/811aRPxj9PL._AC_UF1000,1000_QL80_.jpg", year: "2001" },
                { title: "Wonderful Tonight: George Harrison, Eric Clapton, and Me", author: "Pattie Boyd", genre: "Biografia", cover: "images/wonderfultonight.jpg", year: "2007" },
                { title: "The Long Hard Road Out of Hell", author: "Marilyn Manson", genre: "Biografia", cover: "images/longhardroad.jpg", year: "1998" }
            ];

            // Criação do modelo de dados
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData(biografia);

            // Criação da lista de mangás
            var oList = new sap.m.List({
                items: {
                    path: "/",
                    template: new sap.m.StandardListItem({
                        title: "{title}",
                        description: "{author} - {year}",
                        icon: "{cover}",
                        type: "Active"
                    })
                }
            });
            oList.setModel(oModel);

            // Criação do Dialog
            var oDialogBio = new sap.m.Dialog({
                title: "Lista de Biografias Musicais",
                content: oList,
                beginButton: new sap.m.Button({
                    text: "Fechar",
                    press: function () {
                        oDialogBio.close();
                    }
                })
            });

            // Abrir o Dialog
            oDialogBio.open();
        }
        
    });
});