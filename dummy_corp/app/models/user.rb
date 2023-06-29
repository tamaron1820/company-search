class User < ApplicationRecord
  rolify
  devise :database_authenticatable, :registerable, :recoverable, :rememberable
  validates :email, presence: true, format: { with: Devise.email_regexp }
  validates :password, presence: true, length: { within: Devise.password_length }
  def admin?
    role == "admin"
  end
      
  def user?
    role == "user"
  end
end
