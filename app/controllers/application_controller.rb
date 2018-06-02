class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?, :require_login

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_token!
  end

  def current_user
    @current_user = User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def logout
    current_user.reset_token!
    session[:session_token] = nil
  end

  def require_login
  end
end
