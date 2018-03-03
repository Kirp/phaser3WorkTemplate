var preloader = {
    
    
   
    
    preload:function(){
        this.load.image('face', '../assets/aj1.png')
    },
    
    create:function(){
        this.scene.start('Loader');
    }
}