const SQL = `
select
    id,
    news_img as image,
    title, content,
    to_char(current_date, 'YYYY-MM-DD') as date
from news
order by id desc
`
const SEARCH_SQL = `
select id,
news_img as image,
title, content,
to_char(current_date, 'YYYY-MM-DD') as date
    from news
    where title ilike $1
`

const POST_SQL = `
insert into news (news_img, title, content) values ($1, $2, $3) returning *

`
const DEL_SQL = `
  delete from news where id = $1
`

const GET_ITEM = `
select id,
news_img as image,
title, content, views,
to_char(current_date, 'YYYY-MM-DD') as date
from news
where  id = $1
`
const UPDATE_VIEWS = `
update news set views = $1 where id = $2;
`

const UPDATE_SQL = `
  update news set news_img = $1, title = $2, content = $3 where id = $4 returning *;
`
const GET_USER = `
  select * from users where username = $1 and password = $2
`


module.exports.SQL = SQL
module.exports.SEARCH_SQL = SEARCH_SQL
module.exports.POST_SQL = POST_SQL
module.exports.DEL_SQL = DEL_SQL
module.exports.GET_ITEM = GET_ITEM
module.exports.UPDATE_SQL = UPDATE_SQL
module.exports.GET_USER = GET_USER
module.exports.UPDATE_VIEWS = UPDATE_VIEWS