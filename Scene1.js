class Scene1 extends Phaser.Scene{
    constructor(){

        super('Scene1');

    }
    preload(){
        this.load.image('BG','./assets/images/BG.png');
        this.load.image('WImage','./assets/images/WImage.png');
    };
    create(){
        if ( NPlayers > 2 && NPlayers < 5 ){
            Impostor_N = 1;
        }else if (NPlayers > 4 && NPlayers < 7){
            Impostor_N = 2;
        }else if (NPlayers > 6 && NPlayers < 9){
            Impostor_N = 3;
        }else if( NPlayers > 8 && NPlayers < 11){
            Impostor_N = 3;
        }else if (NPlayers > 10 && NPlayers < 17){
            Impostor_N = 4;
        };
                
        for (let i = 0; i < Impostor_N; i++) {
            Impostors = Phaser.Math.Between(0,NPlayers-1);
            if(Person[Impostors] == true){
                Person[Impostors] = false;
                ImpostorReveal[i] = Player[Impostors];
            }else if (Person[Impostors]==false){
                ImpostorChecker = 1;
                while (ImpostorChecker == 1) {
                    Impostors = Phaser.Math.Between(0,NPlayers-1);
                    if(Person[Impostors] == true){
                        Person[Impostors] = false;
                        ImpostorReveal[i] = Player[Impostors];
                        ImpostorChecker = 0;
                    }
                }
            };

            
        };
        this.add.image(0,0,'BG').setScale(2);
        Random_N = Phaser.Math.Between(0,drawings.length);
        if(Impostor_N === 1){
            this.add.text(325, 500, "Hay "+ Impostor_N +" impostor",{font: '25px Arial Black'}).setOrigin(0.5).setTint(0xc21d00);
        }else {
            this.add.text(325, 500, "Hay "+ Impostor_N +" impostores",{font: '25px Arial Black'}).setOrigin(0.5).setTint(0xc21d00);
        };

    };
    update(){
  
        if(DrawChecker === 0 && NameCount < NPlayers){
            this.write();
            DrawChecker = 1;
        }else if (NameCount === NPlayers && DrawChecker === 0){
            DrawChecker = 1;
            if(Impostor_N == 1){
                reset = this.add.text(300,325, "Impostor: "+ ImpostorReveal[0],{font: '40px Arial Black'}).setTint(0xff2212,0xc70d00,0x800a01,0x000000).setOrigin(0.5);
                let Continue = this.add.text(450,450, "Continuar",{font: '25px Arial Black'}).setTint(0x000000,0x09fa05,0x028f00,0x000000).setOrigin(0.5).setInteractive()
                .on('pointerdown', ()=> { reset.destroy(); DrawChecker =2; Continue.destroy();});
            }else if(Impostor_N ==2){
                reset = this.add.text(300,275, "Impostores:\n"+ ImpostorReveal[0]+ "\n"+ ImpostorReveal[1],{font: '40px Arial Black'}).setTint(0xff2212,0xc70d00,0x800a01,0x000000).setOrigin(0.5);
                let Continue = this.add.text(450,450, "Continuar",{font: '25px Arial Black'}).setTint(0x000000,0x09fa05,0x028f00,0x000000).setOrigin(0.5).setInteractive()
                .on('pointerdown', ()=> { reset.destroy(); DrawChecker =2; Continue.destroy();});
            }else if(Impostor_N == 3){
                reset = this.add.text(300,225, "Impostores:\n"+ ImpostorReveal[0]+ "\n"+ ImpostorReveal[1]+"\n"+ ImpostorReveal[2],{font: '40px Arial Black'}).setTint(0xff2212,0xc70d00,0x800a01,0x000000).setOrigin(0.5);
                let Continue = this.add.text(450,450, "Continuar",{font: '25px Arial Black'}).setTint(0x000000,0x09fa05,0x028f00,0x000000).setOrigin(0.5).setInteractive()
                .on('pointerdown', ()=> { reset.destroy(); DrawChecker =2; Continue.destroy();});
            }else if( Impostor_N == 4){
                reset = this.add.text(300,150, "Impostores: \n" + ImpostorReveal[0] + "\n" + ImpostorReveal[1] + "\n" + ImpostorReveal[2],{font: '40px Arial Black'}).setTint(0xff2212,0xc70d00,0x800a01,0x000000).setOrigin(0.5);
                let imp4 = this.add.text(165,265, ImpostorReveal[3],{font: '40px Arial Black'}).setTint(0xff2212,0xc70d00,0x800a01,0x000000).setOrigin(0.5);
                let Continue = this.add.text(450,450, "Continuar",{font: '25px Arial Black'}).setTint(0x000000,0x09fa05,0x028f00,0x000000).setOrigin(0.5).setInteractive()
                .on('pointerdown', ()=> { reset.destroy(); DrawChecker =2; Continue.destroy(); imp4.destroy();});
            };
        }else if (NameCount === NPlayers && DrawChecker === 2){
            DrawChecker = 3;
            reset = this.add.text(325,325, "Reiniciar", {font: '40px Arial Black'}).setTint(0xff2212,0xc70d00,0x800a01,0x000000)
            .setOrigin(0.5).setInteractive().on('pointerdown', ()=>
            {reset.destroy(); Random_N = Phaser.Math.Between(0,drawings.length); NameCount = 0; DrawChecker = 0; this.reset()})
        };
        
    };
    write(){
        if(Person[NameCount] == true){
            let NameText = this.add.text(325,325, "Turno de "+Player[NameCount], {font: '40px Arial Black'}).setTint(0x000000).setOrigin(0.5);
            let Continue = this.add.text(450,400, "Continuar",{font: '25px Arial Black'}).setTint(0x000000,0x09fa05,0x028f00,0x000000).setOrigin(0.5).setInteractive()
            .on('pointerdown', ()=>{NameText.destroy(); Continue.destroy();
            let Word = this.add.text(325,325, drawings[Random_N], {font: '40px Arial Black'}).setTint(0xffffff).setOrigin(0.5);
            Continue = this.add.text(450,400, "Continuar",{font: '25px Arial Black'}).setTint(0x000000,0x09fa05,0x028f00,0x000000 ).setInteractive().setOrigin(0.5)
            .on('pointerdown', ()=>{Word.destroy();Continue.destroy(); DrawChecker = 0; NameCount++;})});
        }else if(Person[NameCount] == false){
            let NameText = this.add.text(325,325, "Turno de "+Player[NameCount], {font: '40px Arial Black'}).setTint(0x000000).setOrigin(0.5);
            let Continue = this.add.text(450,400, "Continuar",{font: '25px Arial Black'}).setTint(0x000000,0x09fa05,0x028f00,0x000000).setOrigin(0.5).setInteractive()
            .on('pointerdown', ()=>{NameText.destroy(); Continue.destroy();
            let Word = this.add.text(325,325, drawings_Imp[Random_N], {font: '40px Arial Black'}).setTint(0xffffff).setOrigin(0.5);
            Continue = this.add.text(450,400, "Continuar",{font: '25px Arial Black'}).setTint(0x000000,0x09fa05,0x028f00,0x000000 ).setInteractive().setOrigin(0.5)
            .on('pointerdown', ()=>{Word.destroy();Continue.destroy(); DrawChecker = 0; NameCount++;})});
        };
        
    }
    reset(){
        
        for (let index = 0; index < NPlayers; index++) {
            const element = NPlayers[index];
            Person[index] = true;
        }
        for (let i = 0; i < Impostor_N; i++) {
            Impostors = Phaser.Math.Between(0,NPlayers-1);
            if(Person[Impostors] == true){
                Person[Impostors] = false;
                ImpostorReveal[i] = Player[Impostors];
            }else if (Person[Impostors]==false){
                ImpostorChecker = 1;
                while (ImpostorChecker == 1) {
                    Impostors = Phaser.Math.Between(0,NPlayers-1);
                    if(Person[Impostors] == true){
                        Person[Impostors] = false;
                        ImpostorReveal[i] = Player[Impostors];
                        ImpostorChecker = 0;
                    };
                };
            };
        };

    }
    
};