# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# db/seeds.rb

require 'faker'

# 管理者ユーザーを1人作成
User.create!(
  email: 'admin@example.com',
  password: 'password',
  role: 'admin'
)

# 一般ユーザーをランダムに10人作成
10.times do
  User.create!(
    email: Faker::Internet.unique.email,
    password: Faker::Internet.password(min_length: 8),
    role: 'user'
  )
end
