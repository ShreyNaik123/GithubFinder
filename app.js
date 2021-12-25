const github = new Github;
const ui = new UI;

const SearchUser = document.getElementById('searchUser');


SearchUser.addEventListener('keyup', (e) => {
  const UserText = e.target.value;

  if(UserText !== ''){
    github.getUser(UserText)   
    
    ///here data is the promise which contains the json file of users which we named 'profile' and returned therefore we have to use data(promise).profile(json).(attributes)

    .then(data => {
      if(data.userdata.message === 'Not Found'){

        ///WHEN USER IS NOT FOUND THE MESSAGE SECTION OF THE OBJECT THAT IS RETURNED SHOWS 'NOT FOUND' AND WE USE THAT PARAMETER TO DETERMINE IF THE USER IS FOUND OR NOT 

        // SHOW ALERT
        ui.showAlert('No Users Found','alert alert-danger');
      }else{
        ui.showProfile(data.userdata);
        ui.showRepos(data.repos);
      }
    })
  }else{
      // CLEAR PROFILE
      ui.clearProfile();
  }
});
