class User < ApplicationRecord
  validates :username, :session_token, :password_digest, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}

  before_validation :ensure_session_token

  attr_reader :password

  def User.get_token
    SecureRandom.urlsafe_base64
  end

  def User.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user && user.valid_password?(password) ? user :nil
  end

  def reset_token!
    self.session_token = User.get_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.get_token
  end

  def password=(input)
    @password = input
    self.password_digest = BCrypt::Password.create(input)
  end

  def valid_password?(input)
    BCrypt::Password.new(self.password_digest).is_password?(input)
  end
end
