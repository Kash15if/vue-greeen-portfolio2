<template>
 <div class="row">

      <div class="box" v-for="(repo,index) in repos" :key="index">
      <a v-bind:href=repo.html_url target="_blank" rel="noopener noreferrer">
        <div class="card" >
          <div class="card-body">
            <h5 class="card-title" >{{repo.name}}</h5>
            <p class="card-text">{{repo.description}}</p>
            <h6 class="card-subtitle mb-2 text-muted">Language: {{repo.language}}</h6>
            <p class="card-text">Stars {{repo.stargazers_count}}   <span class="float-right">forks {{" " + repo.forks_count}}</span></p>
            
            <div class="text-center">
              <a v-bind:href=repo.homepage class="btn btn-primary" target="_blank"
                rel="noopener noreferrer" style="width: 60%; margin-top: 20px;"
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
    }

    .box{
      width: 30%;
      margin: 1%;
    }

    a{
      text-decoration: none;
      color:#263238;
    }
    .card{
      margin-top: 25px;
    }
    
    .btn{
        background-color: rgb(59, 17, 128);
        color: white;
        width: auto;
    }
</style>
