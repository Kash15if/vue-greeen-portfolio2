<template>
<div>

  
    <h2>Projects</h2>
<div class="row">

    <div class="left"></div>


    <div class="content ">
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
    </div>
    

    <div class="right">
        <router-link to="/1" exact><div class="pNo"></div></router-link>
        <router-link to="/2" exact><div class="pNo"></div></router-link>
        <router-link to="/3" exact><div class="pNo"></div></router-link>
        <div class="pNo" style="background-color: #92FFBE;"></div>
        <router-link to="/5" exact><div class="pNo"></div></router-link>
    </div>
</div>

<div class="AllP">
  <button><router-link to="/allprojects" exact style="text-decoration: none;">All Projects &#8594;</router-link></button>
</div>


<div class="downArr">
  <img class="animate__animated animate__bounce animate__repeat-2" src="../assets/downArrow.png" alt="">
</div>
  

</div>
</template>

<script>
export default {
  name: ''
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.row{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 60vh;
  width: 100vw;
  text-align: center
}

.row > .left{
    flex:2.5;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .row > .right{
    flex:2.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  .row > .content{
    flex:5;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

.content > .top{
       flex: 100%;
       margin: 10px;
       height: 45%; 
       background-image: url("../assets/proj-gif/covid19.gif");
       background-color: white;background-repeat: no-repeat;
  background-size: 100%;
  }
.content > .left{
      flex: 40%;
      height: 45%;
      margin: 10px;
      background-image: url("../assets/proj-gif/quiz.gif");
      background-color: white;
      background-repeat: no-repeat;
      background-size: 100%;
    }
.content > .right{
      flex: 40%;
      height: 45%;
      margin: 10px;
      background-image: url("../assets/proj-gif/portfolio.gif");
      background-color: white;
      background-repeat: no-repeat;
      background-size: 100%;
    }


  .pNo{
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  margin: 15px 30px 15px 0;
}

.downArr{
  position: absolute;
  bottom:10px;
  left: 50%;
  transform: translate(-50%, 0%);
}

.downArr > img{
  width: 10rem;
}

h2{
  text-align: center;
  font-size: 2rem;
  margin: 2rem;
}

.AllP{
  text-align: center;
  font-size: 3rem;
}

.AllP > button{
  width: auto;
  background-color: #E4FEF2;
  color: #000;
  margin-left: auto;
  border: none;
  padding: 15px 32px;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  cursor: pointer;
  border-radius: 2px;
}




@media (max-width: 700px) {

  .row > .left{
    display: none;
  }

  .row > .right{
    display: none;
  }

  .row > .content{
    flex:100%;
    padding: 0 5% 0 5%;
  }

  .content > .top{
       margin: 3px;
  }
.content > .left{
      margin: 3px;
    }
.content > .right{
      margin: 3px;
    }

  .downArr > img{
      width: 7rem;
    }

  .AllP > button{
  border: none;
  padding: 10px 20px;
  font-size: 12px;
  cursor: pointer;
  border-radius: 2px;
}

h2{
  font-size: 1.2rem;
  margin: .5rem;
}

}


</style>
