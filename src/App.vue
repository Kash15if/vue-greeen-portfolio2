<template>
  <div id="app" v-touch:swipe="swipeHandler">

       <transition
          enter-active-class="animate__animated animate__fadeInDown"
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

            if(direction == "bottom"){
                if(this.page > 1)
                this.page = 1;
                else
                this.page += 1;

                console.log(this.page);
                this.$router.push("/" + this.page);
            }
            else{
              if(this.page <= 1)
            this.page = 2;
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
  height: 100vh;
  width: 100vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
