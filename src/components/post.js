import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

export default class Post extends Component {
  state = {
    post: [
      {
        id: 1,
        title: "Ինչ է պետք արյուն հանձնելու համար",
        image:
          "https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/120295370_200085845074664_7159888454880337766_o.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_ohc=uMznVaYkFfsAX_vhjKZ&_nc_ht=scontent.fevn1-4.fna&oh=f9303772648c0ef893542b465c58a0d5&oe=5FF8B34B",
        enterDate: "Հոկ4",
      },
      {
        id: 2,
        title: "Ինչպես պաշտպանվել կիբերհարձակումից",
        image:
          "https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/120728514_201982391551676_5059153762304122700_o.jpg?_nc_cat=101&ccb=2&_nc_sid=8bfeb9&_nc_ohc=RbP4cbb7J8YAX-vGsZZ&_nc_ht=scontent.fevn1-4.fna&oh=e7f6fe72e0c38108d72db92a851671c3&oe=5FFA1BAC",
        enterDate: "Հոկ4",
      },
      {
        id: 3,
        title: "ՀՀ իրավագիտակից քաղաքացիների անկախության տոն",
        image:
          "https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/119113494_193486629067919_4584589202735717130_o.jpg?_nc_cat=111&ccb=2&_nc_sid=730e14&_nc_ohc=meh5YsvWxXgAX_K4UTB&_nc_ht=scontent.fevn1-4.fna&oh=302cff499458fba9d39f372607e057a4&oe=5FF7E6ED",
        enterDate: "Հոկ4",
      },
      {
        id: 4,
        title: "Ճապնիայի կրթական համակարգը",
        image:
          "https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/119233050_194503085632940_6398533803486443970_o.jpg?_nc_cat=100&ccb=2&_nc_sid=730e14&_nc_ohc=Zz67lBSRqesAX_5K5dG&_nc_ht=scontent.fevn1-4.fna&oh=94ee67c7486eeae9dcc870c9977a23c4&oe=5FF933A6",
        enterDate: "Հոկ4",
      },
      {
        id: 5,
        title: "Ֆրանսիայի կրթական համակարգը",
        image:
          "https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/119113494_193486629067919_4584589202735717130_o.jpg?_nc_cat=111&ccb=2&_nc_sid=730e14&_nc_ohc=meh5YsvWxXgAX_K4UTB&_nc_ht=scontent.fevn1-4.fna&oh=302cff499458fba9d39f372607e057a4&oe=5FF7E6ED",
        enterDate: "Հոկ4",
      },
      {
        id: 6,
        title: "Ինչ է պետք արյուն հանձնելու համար",
        image:
          "https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/120295370_200085845074664_7159888454880337766_o.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_ohc=uMznVaYkFfsAX_vhjKZ&_nc_ht=scontent.fevn1-4.fna&oh=f9303772648c0ef893542b465c58a0d5&oe=5FF8B34B",
        enterDate: "Հոկ4",
      },
    ],
  };
  render() {
    return (
      <div
        className="d-flex align-items-end post col-12 col-md-6 col-xl-3 mb-4 m-1"
        style={{ backgroundImage: `url(${this.state.post[1].image})` }}
      >
        <div className="Row title col-12 d-flex flex-wrap justify-content-center align-items-center">
          <p className="sametitle">
            {this.state.post[1].title}
            <p className="enterDate d-none">{this.state.post[1].enterDate}</p>
          </p>
        </div>
      </div>
    );
  }
}
