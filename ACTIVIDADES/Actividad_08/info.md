users [icon: user] {
    id int pk auto
    id_followers int
    id_following int
    clave string
    email string
    username string
    name string
    profile_photo string
    description string
    url string
    created_at DateTime
    updated_at DateTime
    deletd_at DateTime

}

followers [icon: user-plus] {
  id int pk auto
  created_at DateTime
  updated_at DateTime
  deletd_at DateTime
}

following [icon: user-check] {
  id int pk auto
  created_at DateTime
  updated_at DateTime
  deletd_at DateTime
}

posts [icon: image] {
  id int pk auto
  id_user int
  image string
  description string
  is_destacada boolean
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

posts.id < likes.id_post
users.id_followers > followers.id
users.id_following > following.id
