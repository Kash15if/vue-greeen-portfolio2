<template>
  <div>
    <h2>Contacts</h2>
    <div class="row">
      <div class="left"></div>

      <div class="content">
        <div class="txt">
          <h1>Address:</h1>
          <br />
          <h5>
            <img src="../assets/logos/home.svg" alt="" /> Carmichael hostel,
            kolkata-09, West Bengal, India.
          </h5>
          <h5>
            <img src="../assets/logos/envelope.svg" alt="" />
            kash151if@gmail.com, kash15if@yahoo.com.
          </h5>
          <h5>
            <img src="../assets/logos/telephone.svg" alt="" />
            9709813874
          </h5>
        </div>

        <div class="btns">
          <button>
            <a
              href="https://auth.geeksforgeeks.org/user/kash15if/practice/"
              target="_blank"
              rel="noopener noreferrer"
              >GFG</a
            >
          </button>
          <button>
            <a
              href="https://leetcode.com/Kash15if/"
              target="_blank"
              rel="noopener noreferrer"
              >Leetcode</a
            >
          </button>
          <button>
            <a
              href="https://www.linkedin.com/in/kashif-ahmad-373286164/"
              target="_blank"
              rel="noopener noreferrer"
              >LinkedIn</a
            >
          </button>
          <button>
            <a
              href="https://github.com/Kash15if"
              target="_blank"
              rel="noopener noreferrer"
              >Github</a
            >
          </button>
        </div>
      </div>

      <div class="right">
        <router-link to="/1" exact><div class="pNo"></div></router-link>
        <router-link to="/2" exact><div class="pNo"></div></router-link>
        <router-link to="/3" exact><div class="pNo"></div></router-link>
        <router-link to="/4" exact><div class="pNo"></div></router-link>
        <div class="pNo" style="background-color: #92FFBE;"></div>
      </div>
    </div>

    <div class="downArr">
      <img
        class="animate__animated animate__bounce animate__repeat-2"
        src="../assets/downArrow.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 70vh;
  width: 100vw;
  text-align: center;
}

.left {
  flex: 1;
  max-width: 1;
}

.right {
  flex: 1;
  max-width: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

.content {
  flex: 8;
  max-width: 8;
  text-align: left;
  padding: 30px;
}

.btns {
  flex: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

button {
  flex: 20%;
  margin-top: 80px;
  margin-left: 2px;
  background-color: #e4fef2;
  color: #000;
  border: none;
  padding: 15px 32px;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  cursor: pointer;
}

.pNo {
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  margin: 15px 30px 15px 0;
}

.downArr {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0%);
}
.downArr > img {
  width: 10rem;
}

h2 {
  text-align: center;
  margin-top: 2rem;
}

h5 {
  font-size: 1.2rem;
}

h5 > img {
  width: 30px;
  height: auto;
  margin: 10px 20px 0 10px;
}

@media (max-width: 720px) {
  .content {
    flex: 100%;
  }

  .btns {
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }

  button {
    flex: 40%;
    width: 80%;
    margin-top: 5px;
    padding: 10px 20px;
    font-size: 12px;
    border-radius: 3px;
  }

  .left {
    display: none;
  }

  .right {
    display: none;
  }
  h1 {
    font-size: 1.2rem;
  }

  h5 {
    font-size: 0.8rem;
  }

  h5 > img {
    width: 20px;
    height: auto;
    margin: 6px 12px 0 6px;
  }

  .downArr > img {
    width: 7rem;
  }
}

a {
  text-decoration: none;
}
</style>
