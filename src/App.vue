<template>
  <div id="app" v-touch:swipe="swipeHandler">

       <transition
          enter-active-class="animate__animated animate__fadeInUp"
          leave-active-class="animate__animated animate__fadeOutUp">

      
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

</style>
