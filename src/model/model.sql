create table news (
  id serial not null primary key,
  news_img varchar(64),
  title varchar(256) not null,
  content varchar not null,
  views smallint,
  created_at timestamp default current_timestamp
);

insert into news (news_img, title, content) values ('/images/a513b210-6ef9-4c30-8a4d-7be244bf1a51.png', 'Sport Yangiliklari', 'Uzbekistan terma jamoasi jahon chempianatiga yana chiqaolmadi.');

insert into news (news_img, title, content) values ('https://picsum.photos/id/77/275/300', 'Dunyo Yangiliklari', 'Uzbekistan lorem ipsum dolor set emit terma jamoasi jahon chempianatiga yana chiqaolmadi.');

insert into news (news_img, title, content) values ('https://picsum.photos/id/717/375/200', 'Media Yangiliklari', 'Lorem porem sorem korem  lorem ipsum dolor set emit terma jamoasi jahon chempianatiga yana chiqaolmadi.');

insert into news (news_img, title, content) values ('https://picsum.photos/id/27/275/300', 'Siyosat Yangiliklari', 'fjkhds shfhsdf sdjhviuf sdufhsiufh sdfhsfhf sdiuisopa sufufsi lorem ipsum dolor set emit terma jamoasi jahon chempianatiga yana chiqaolmadi.');


create table users (
  user_id int generated by default as identity primary key,
  username character varying (32) not null,
  password varchar(32)
);

insert into users (username, password) values ('ali', 'ali1');