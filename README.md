# Eat @ Home :fork_and_knife: :stew: :poultry_leg: :peach:

![image](https://user-images.githubusercontent.com/35972972/105803748-15b19b80-5f6c-11eb-9689-d35bec3948eb.png)

![GitHub language count](https://img.shields.io/github/languages/count/possumdiva/eat-at-home)
![GitHub last commit](https://img.shields.io/github/last-commit/possumdiva/eat-at-home)
![GitHub contributors](https://img.shields.io/github/contributors/possumdiva/eat-at-home?color=purple)
![GitHub top language](https://img.shields.io/github/languages/top/possumdiva/eat-at-home?color=red)
![NPM](https://img.shields.io/npm/l/express)

**Eat @ Home - From produce delivery to dinner meals to online grocery.** :fork_and_knife: :stew:

[Live website](https://eat-at-home-server.herokuapp.com/)

## Project Purpose
Eat @ Home is an app for users who want a comprehensive list of meal and online grocery delivery services.  Many of us are tired of trying to keep meals tasty and exciting and they want options so they don't have to cook every night and they don't have to run back and forth to the grocery store.

## :hammer_and_wrench: Technologies Used

- CSS
- React.js
- Javascript
- Node.js
- Express.js
- Passport.js
- PostgreSQL
- Sequelize
- OAuth Authentication
- Heroku

 ## 🖥 Screenshots:
#### :point_down: Eat @ Home | Home Page

![image](https://user-images.githubusercontent.com/35972972/105889886-a9bb4b80-5fdc-11eb-820c-2b51c5c4d461.png)
<br />
<br />
![image](https://user-images.githubusercontent.com/35972972/105889922-b5a70d80-5fdc-11eb-8c40-1a02cf8088c0.png)
<br />
<br />
![image](https://user-images.githubusercontent.com/35972972/105889982-c35c9300-5fdc-11eb-87e4-982eacc65e19.png)
<br />
<br />
![image](https://user-images.githubusercontent.com/35972972/105889995-c9527400-5fdc-11eb-8fa9-7cc7f3072fbe.png)
<br />
<br />
#### :point_down: Eat @ Home | Profile Page

![image](https://user-images.githubusercontent.com/35972972/105890016-d1aaaf00-5fdc-11eb-95da-6eda85001539.png)
<br />
<br />
![image](https://user-images.githubusercontent.com/35972972/105890035-d8392680-5fdc-11eb-98e1-ceea32db9c6f.png)
<br />
<br />
![image](https://user-images.githubusercontent.com/35972972/105890087-e8510600-5fdc-11eb-81ea-6302d59075a6.png)
<br />
<br />


## ⚙ How to run
### 1. Clone this repository
1. Under the repository name, click on the code button and copy the clone URL for this repository.
2. Open your terminal and type ```git clone https://github.com/possumdiva/eat-at-home.git```.
### 2. Open the folder
After cloning the repository, use your favorite code editor to open the folder. We recommend [Visual Studio Code](https://code.visualstudio.com/).
### 3. Enter in the directory
Type ```cd eat-at-home``` in your terminal.
### 4. Install the required packages
You will need to install [PostgreSQL](https://www.postgresql.org/download/) and [Node.js](https://nodejs.org/en/) to run the back-end piece.
### 5. Install the dependencies
Run ```npm install``` or ```yarn install``` in your terminal.
### 6. Execute the application
Run ```npm start``` or ```yarn start``` in your terminal.
### 7. Open in your browser
The application will be available at http://localhost:3000.
<br>
Eat @ Home is also deployed on Heroku. You can see a demo by clicking [here](https://eat-at-home-server.herokuapp.com/).
<br>

## Code Snippet - Displays users selected favorite companies (Profile Component)
<br />

```
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      saves: [],
      data: Data,
    };
  }

  async componentDidMount() {
    const savesUrl = "/api/this_user/saves";
    const reviewsUrl = "/api/this_user/reviews";

    const savesResponse = await eahServer.get(savesUrl);
    const reviewsResponse = await eahServer.get(reviewsUrl);

    this.setState({ reviews: reviewsResponse.data, saves: savesResponse.data });

  }

  render() {
    return (
      <div className="main">
        <NavBar />
        <div className="profile-items">
          <img src={image} alt="header"></img>
        </div>
        <div className="profile-items">
          <div className="profile-header">
            <h3>My Favorites</h3>
          </div>
        </div>
        <div className="test">
          {this.state.saves.map((save, idx) => {
            const bizID = save.company_id;
            let bizCategory;
            if (bizID <= 12) {
              bizCategory = "Meals";
            } else if (bizID >= 24) {
              bizCategory = "produce";
            } else {
              bizCategory = "Mkits";
            }

            const company = this.state.data[bizCategory].find((biz) => {
              return biz.ID === bizID;
            });
```            


## :busts_in_silhouette: Team Members:
  
  * Stacey Graham <br>
  [GitHub](https://github.com/stashag) <br />
  [Portfolio](https://www.stacey.codes)

  * Heather Luttrell <br>
  [GitHub](https://github.com/possumdiva)<br />
  [Portfolio](http://www.heather-luttrell.surge.sh)
  
  * Elijah Wilcott <br>
  [GitHub](https://github.com/ejw773)<br />
  [Portfolio](https://elijahwilcott.com)