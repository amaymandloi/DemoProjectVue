<template>
  <div>
    <div class="SingUp">
      <div class="about">
        <div class="header">
          <div class="title">
            <img
              src="https://www.tcsion.com/dotcom/TCSSMB/Login/images/TATA-logo-left.png"
              alt="Tata Logo"
            />
          </div>
          <div class="title_img">
            <img
              src="https://www.tcsion.com/dotcom/TCSSMB/Login/images/TATA-logo-right.png"
              alt="Tata Logo"
            />
          </div>
        </div>
        <div class="menu-items">
          <img src="@/assets/tcsionimg.png" />
          <div class="items">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <a> 1800 029 6030</a> |
            <i class="fa fa-mobile" aria-hidden="true"></i>
            <a> SMS: 'TCSiON' to 16161</a> |
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <a> Email US</a> |
            <i class="fa fa-laptop" aria-hidden="true"></i>
            <a> Visit Our Portal </a> |
            <i class="fa fa-info" aria-hidden="true"></i>
            <a> Help Central </a> |
            <a> Language : </a>
            <select class="dropdown" name="English">
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="Japanese">Japanese</option>
              <option value="Bahasa">Bahasa</option>
              <option value="Portugese">Portugese</option>
            </select>
            <hr />
          </div>
        </div>
      </div>
      <div class="content">
        <div class="left-content">
          <img src="@/assets/ion-login-banner.jpg" />
          <div id="text-wrapper">
            Experience the <a id="best"> Best </a><br />
            &nbsp; &nbsp; &nbsp;with all new <a id="orange">TCS iON</a>
          </div>
        </div>
        <v-form>
          <div class="right-content">
            <v-form id="form" @submit.prevent="fromValidation">
            <label for="Welcome" class="heading">Welcome</label>
              <div class="form-control">
                <v-text-field type="email" v-model="email" id="email" placeholder="Email" />
                <span v-if="errorEmail" class="error">{{errorEmail}}</span>
              </div>
               <div class="form-control">
                <v-text-field v-model="password" type="password" id="password" placeholder="Password"/>
                <span v-if="errorPassword" class="error">{{errorPassword}}</span>
              </div>

              <!-- <v-btn type="submit">Signup</v-btn> -->
              <v-btn color="secondary" small type="submit">Login</v-btn>
            </v-form>
          </div>
        </v-form>
      </div>
    </div>

    <div class="n-footer">
      <div class="footer-content">
        <i class="fa fa-facebook-square" aria-hidden="true"></i>&nbsp; &nbsp;
        <i class="fa fa-twitter-square" aria-hidden="true"></i>&nbsp; &nbsp;
        <i class="fa fa-linkedin-square" aria-hidden="true"></i>&nbsp; &nbsp;
        <i class="fa fa-youtube-square" aria-hidden="true"></i>&nbsp; &nbsp;
      </div>
      <div class="footer">
        <span> &copy; </span>
        <span id="year1"></span>
        2022 Tata Consultancy Services. All Rights Reserved.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errorEmail: "",
      errorPassword: "",
    };
  },
  methods: {
    fromValidation() {
      const userDetail = JSON.parse(localStorage.getItem(this.email));
      console.log("UserDetail===>", userDetail)
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.errorEmail = "use @ and .com";
        return;
      } else if(!userDetail){
        this.errorEmail = "User doesn't exist!";
        return;
      }else if (this.email!==userDetail.email) {
        this.errorEmail = "Email does not match";
        return;
      } else {
        this.errorEmail = "";
      }
      if (
        !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/.test(
          this.password
        )
      ) {
        this.errorPassword =
          "*** use 8-20 word one is Uppercase and LowerCase also Special Symbol  Password";
        return;
      } else if (this.password !== userDetail.password) {
        this.errorPassword = "Password does not match";
        return;
      } else {
        this.errorPassword = "";
      }
      if (this.email && this.password) {
        this.$router.push("DashBoard");
      }
    },
  },
};
</script>
<style>
.header {
  height: 30px;
  background-color: #2d3540;
  color: #fff;
  width: 100%;
}
.title {
  padding: 4px 3%;
  float: left;
}
.title_img {
  padding: 5px 3%;
  float: right;
}
div {
  display: block;
}
.n-footer {
  background: #043254 none repeat scroll 0 0;
  /* top:90%; */
  bottom: 0;
  position: fixed;
  width: 155%;
  text-align: center;
  padding: 10px 0;
}
#year1 {
  font-size: 1em;
  vertical-align: 0px;
}
.footer-content {
  display: inline-block;
  margin-right: 3%;
  margin-left: 2px;
    content: "\f081";
    content: "\f082";
    content: "\f08c";
    content: "\f166";
    color: blue;
}
.circle {
  background: #00aade none repeat scroll 0 0;
  border-radius: 50%;
  color: #ffffff;
  display: inline-block;
  font-size: 0.9em;
  width: 23px;
  height: 21px;
  padding-top: 2px;
}
.dropdown{
  border-color: grey;
    border-style: groove;
    border-radius: 3px;
}
.footer {
  color: #fff;
  font-size: 0.8em;
  font-weight: 600;
  float: left;
  margin-left: 3%;
  line-height: 23px;
}
.menu-items img {
    height: 80px;
    width: 200px;
    margin: 0px 0px 0px -224px;
}
.items {
  font-size: small;
  float: right;
  margin-right: -125px;
  margin-top: 15px;
  border-bottom: #00aade;
  border-width: 12px;
}
.right-content {
  color: white;
  background-color: #5aa8e8;
  display: inline;
  float: right;
  margin-right: 20%;
  margin-left: 60px;
  margin-bottom: 50px;
  padding: 10px 10px 10px 10px;
  border-radius: 10px;
  height: 300px;
  width: 400px;
}
.left-content {
  display: inline;
  float: left;
}
.left-content img {
  margin-left: 75px;
    height: 250px;
    width: 380px;

}
.right-content form a {
  font-size: small;
  float: right;
  margin-right: 30px;
  color: white;
}
.right-content form input {
  width: 90px;
  height: 42px;
  background-color: white;
    border-radius: 5px;
    max-height: 66px !important;
}
.right-content form h1 {
  font-size: xx-large;
  font-weight: 600;
}
.right-content form .checkbx {
  float: left;
  font-size: small;
}
.right-content form {
  padding-left: 25px;
  padding-right: 25px;
  text-align: left;
}
.right-content form .btn1 {
  position: absolute;
  background-color: rgb(27, 192, 33);
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  box-shadow: #2d3540;
  cursor: pointer;
  border-radius: 0px;
  align-items: center;
}
.right-content form .btn:hover {
  background-color: black;
}
.right-content form .checkbx {
  width: 10px;
}
.right-content .banner {
  background-color: white;
  width: 100%;
  height: 60px;
}
.n-footer .division {
  background-color: white;
  padding-top: 0 0 0 0;
  text-align: center;
  margin-top: 0%;
  color: orange;
  height: 60px;
  width: 100%;
  margin-top: 0px;
}
#radiobtn {
  width: 10px;
  height: 10px;
}
select {
  border-color: blue;
}
#phoneno {
  color: blue;
  font-weight: 800;
}
#redtext {
  color: red;
  font-weight: 800;
}
#best {
  color: blue;
  font-weight: 700;
}
#orange {
  color: orange;
  font-weight: 700;
}
#text-wrapper {
  margin-left: 120px;
  font-size: larger;
  font-weight: 600;
  width: 300px;
  height: 50px;
}
.error {
  color: red;
  font-size: 17px;
}
.heading {
  font-size: 25px;
  font-weight: bold;
}
.tb {
  text-align: center;
  border: 1;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}
.v-input input {
  max-height: 12px;
}

</style>
