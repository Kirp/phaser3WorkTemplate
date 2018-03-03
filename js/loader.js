var loader = {
    
    
    face:undefined,
    loader_text:undefined,
    preload:function(){
        this.face = this.add.image(400,300, 'face');
        this.loader_text = this.add.text(400, 200, 'Loading Assets...', { fontFamily: 'Arial', fontSize: 20, color: '#00ff00' }); 
        this.loader_text.setOrigin(0.5,0.5);
       
        
        //declare files to load here
        this.load.image('maptile1', '../assets/example1.png');
        this.load.image('test', '../assets/maaryder.png');
        
        
        
        
        
        
        
        
        
        
        this.load.on('fileprogress', function(file, value){
            console.log(value);
        });
        var me = this;
        console.log(this.loader_text);
        this.load.on('complete', function(){
            me.loader_text.text='load complete!';
            console.log('load complete');
        })
    },
    
    create:function(){
        console.log('create called');
        this.scene.start('OpeningMenu');
    }
}