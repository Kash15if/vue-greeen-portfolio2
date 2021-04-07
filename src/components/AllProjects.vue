<template>
 <div class="row">

      <div class="box" v-for="(repo,index) in repos" :key="index">
      <a v-bind:href=repo.html_url target="_blank" rel="noopener noreferrer">
        <div class="card" >
          <div class="card-body">
            <h3 class="card-title" >{{repo.name}}</h3>
            <p class="card-text">{{repo.description}}</p>
            <h6 class="card-subtitle mb-2 text-muted">Language: {{repo.language}}</h6>
            <p class="card-text">Stars {{repo.stargazers_count}}   <span class="float-right">forks {{" " + repo.forks_count}}</span></p>
            
            <div class="btn">
              <a v-bind:href=repo.homepage  target="_blank"
                rel="noopener noreferrer"
              >
              website
              </a>
            </div>
            
          </div>
        </div>
        </a>
        
      </div>


    </div>

</template>

<script>

export default {
  name: 'Projects',
  data(){
    return {
      repos: {}
    };
  },
  async created(){
      
      const url = "https://api.github.com/users/kash15if/repos"
      const response = await fetch(url)
      
      this.repos = await response.json();
      await console.log(this.repos);

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .row{
      padding: 5%;
      display: flex;
      justify-content:space-between;
      flex-wrap: wrap;
    }

    .box{
      margin: 1%;
      width: 20vw;
      border: 3px solid #E9FAFB;
      border-radius: 6px;
      padding: 10px;
    }

    a{
      text-decoration: none;
      color:#E9FAFB;
    }
    .card{
      margin-top: 25px;
    }
    
    .btn{
        margin: 20px;
        padding: 5px;
        background-color: rgb(59, 17, 128);
        color: white;
        text-align: center;
        
    }

    h6{
      margin: 10px 0 10px 0;
      font-size: 15px;
    }

    h3{
      text-transform: uppercase;
      margin: 10px 0 10px 0;
    }

@media (max-width: 800px)  {

    .row{
      margin-top: 40px;
    }

    .box{
      margin: 4%;
      width: 80vw;
    }


}
</style>
