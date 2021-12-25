class Github{
  constructor(){
    this.client_id  = '2aab2ccbf827b6ae3f4e';
    this.client_secret = '3995269c717fff050ba206986a1d856b31170d74';
    this.repos_count = 5;
    this.repos_sort = 'created :asc'
  } 

  async getUser(user){///async makes it return a promise
    const ProfileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const RepoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const ProfileData = await ProfileResponse.json();
    //this works as the second .then
    const RepoData = await RepoResponse.json();
      return {
       ///WE ARE RETURNING IT AS AN OBJECT TO ACCESS ITS PARAMETERS

       userdata:ProfileData,
       repos:RepoData
      }
  }

 
}