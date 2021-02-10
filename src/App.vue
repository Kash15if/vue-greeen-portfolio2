<template>
  <div id="app" v-touch:swipe="swipeHandler">

  <div class="cv"><button>CV</button></div>



       <transition
          enter-active-class="animate__animated animate__fadeIn animate__delay-1s"
          leave-active-class="animate__animated animate__fadeOut">

      
          <router-view></router-view>

        </transition>
  
  </div>
</template>

<script>
export default {

  data(){
    return{
      page: 1
    }
  },
    methods: {
        swipeHandler (direction) {
            console.log(direction)  // May be left / right / top / bottom

            if(direction == "top"){
                if(this.page > 4)
                this.page = 1;
                else
                this.page += 1;

                console.log(this.page);
                this.$router.push("/" + this.page);
            }
            else{
              if(this.page <= 1)
            this.page = 5;
            else
            this.page -= 1;

            console.log(this.page);
            this.$router.push("/" + this.page);
            }
            
    
        }
    }
}
</script>
<style>
#app {
  background-color: #245E41;
  color: #E4FEF2;
}


.cv{
  position: absolute;
  top:15px;
  right: 15px;
}

.cv > button{
      background-color: #BCFE4D;
      color: #000;
      border: none;
      border-radius: 2px;
      padding: 9px 40px;
      text-decoration: none;
      display: inline-block;
      font-size: 11px;
      cursor: pointer;
}

@media (max-width: 600px)  {


.cv{
  top:10px;
  right: 10px;
}

.cv > button{
      border-radius: 1px;
      padding: 7px 25px;
      font-size: 10px;
}

}
</style>
