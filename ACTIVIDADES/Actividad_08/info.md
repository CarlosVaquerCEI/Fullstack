users [icon: user] {
    id int pk auto
    clave string
    email string
    username string
    name string
    profile_photo string
    description string
    location string
    is_verifed boolean
    slug string
    created_at DateTime
    updated_at DateTime
    deletd_at DateTime

}


followers [icon: user-plus] {
  id int pk auto
  id_user_followed int
  id_user_follower int
  created_at DateTime
  updated_at DateTime
  deletd_at DateTime

}

posts [icon: image] {
  id int pk auto
  id_user int
  image string
  likes int
  comments int
  views int
  shares int
  description string
  is_featured boolean
  is_story boolean
  created_at DateTime
  updated_at DateTime
  deletd_at DateTime

}

likes [icon: heart] {
  id int pk auto
  id_post int
  id_user int
  created_at DateTime
  updated_at DateTime
  deletd_at DateTime
}

users.id < followers.id_user_follower
users.id < followers.id_user_followed
posts.id_user > users.id
likes.id_post > posts.id
likes.id_user > users.id
