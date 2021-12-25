class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  ///SHOW USER REPOS
  showRepos(repos){
    let output ='';
    
    repos.forEach(function(repo){
      output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
          <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
          <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
          <span class="badge badge-success">Forks: ${repo.forks_count}</span>
          </div>
        </div>
      </div>
    `;
    });

      // Output repos
      document.getElementById('repos').innerHTML = output;
  }



  clearProfile() {
    this.profile.innerHTML = ''; 
  }

  showAlert(message,classname){
    this.clearAlert();
    // Create a div
    const div =  document.createElement('div');
    // Giv class
    div.className = classname;
    // Append the text
    div.appendChild(document.createTextNode(message));
    // Select the parent of the div
    const container = document.querySelector('.searchContainer');
    // Get the element before which we have to append the div inside the container
    const search = document.querySelector('.search');
    // Appending the div before the container
    container.insertBefore(div,search)
    // IT SHOWS ALERT FOR EVERY USER NOT FOUND THEREFORE WE NEED TO CLEAR THE PREVIOUS ALERTS BEFORE A NEW ONE ARRIVES AND SET A TIMEOUT FOR THAT

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }


  clearAlert(){
   const alert = document.querySelector('.alert');
   if(alert){
     alert.remove();
   }
  }

}